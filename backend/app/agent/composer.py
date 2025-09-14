import json
import uuid
import logging
from typing import List, Dict
from groq import Groq

from app.core.config import settings
from app.models.schemas import ChatResponse
from .registry import ToolRegistry

# Set up logging
logger = logging.getLogger(__name__)


class AgentComposer:
    """High-level orchestrator that combines LaTeX + Manim outputs into a final LaTeX document.

    Flow:
      1. Extract animation intents from the user prompt via LLM JSON plan.
      2. Generate each animation using the Manim tool.
      3. Build context describing produced animations (with links/paths).
      4. Call LaTeX tool with augmented prompt to produce final document referencing animations.
    """

    def __init__(self):
        self.registry = ToolRegistry()
        self.client = Groq(api_key=settings.groq_api_key)

    async def compose_document(self, prompt: str) -> ChatResponse:
        logger.info(f"Starting document composition for prompt: {prompt[:100]}...")
        
        animations = await self._extract_animation_specs(prompt)
        logger.info(f"Extracted {len(animations)} animation(s) from prompt")
        
        manim_tool = self.registry.get("generate_manim_animation")
        screenshot_tool = self.registry.get("generate_video_screenshot")
        latex_tool = self.registry.get("generate_latex")
        template_tool = self.registry.get("get_latex_template")
        
        logger.info(f"Tools available - Manim: {manim_tool is not None}, Screenshot: {screenshot_tool is not None}, LaTeX: {latex_tool is not None}, Template: {template_tool is not None}")

        generated_anim_results: List[Dict] = []
        if animations:
            for idx, anim in enumerate(animations, start=1):
                # Build args with defaults; unique output file name
                args = {
                    "description": anim["description"],
                    "output_file": f"anim_{idx}_{uuid.uuid4().hex[:6]}",
                    # rely on Pydantic defaults for remaining fields
                }
                if manim_tool:
                    result = await manim_tool.run(args)  # type: ignore[attr-defined]
                    generated_anim_results.append(result)

        # Build animation context for LaTeX generation
        context_lines: List[str] = []
        success_anims = [r for r in generated_anim_results if r.get("success")]
        if success_anims:
            context_lines.append("% ==== GENERATED ANIMATIONS (Agent) ====")
            for i, r in enumerate(success_anims, start=1):
                video_path = r.get("video_path")
                desc = r.get("description")
                context_lines.append(f"% Animation {i}: {desc}")
                if video_path and screenshot_tool:
                    # Generate screenshot from video
                    logger.info(f"Generating screenshot for video {i}: {video_path}")
                    screenshot_result = await screenshot_tool.run({"video_path": video_path})
                    
                    if screenshot_result.get("success"):
                        screenshot_path = screenshot_result.get("screenshot_path")
                        video_url = screenshot_result.get("video_url")
                        logger.info(f"Screenshot generated successfully for animation {i}: {screenshot_path}")
                        logger.info(f"Video URL: {video_url}")
                        logger.info(f"COMPOSER: Using screenshot path in LaTeX: {screenshot_path}")
                        
                        context_lines.append(f"% Screenshot: {screenshot_path}")
                        context_lines.append(f"% Video URL: {video_url}")
                        # Embed screenshot with link to video
                        context_lines.append(f"\\begin{{figure}}[h]")
                        context_lines.append(f"\\centering")
                        context_lines.append(f"\\href{{{video_url}}}{{\\includegraphics[width=0.8\\textwidth]{{{screenshot_path}}}}}")
                        context_lines.append(f"\\caption{{Animation {i}: {desc}}}")
                        context_lines.append(f"\\end{{figure}}")
                        context_lines.append("")  # Empty line for spacing
                    else:
                        # Fallback to simple video link if screenshot fails
                        error_msg = screenshot_result.get('error', 'Unknown error')
                        logger.warning(f"Screenshot generation failed for animation {i}: {error_msg}")
                        context_lines.append(f"% Screenshot generation failed: {error_msg}")
                        # Generate localhost URL for fallback
                        import os
                        video_filename = os.path.basename(video_path)
                        if "1080p60" in video_path:
                            fallback_url = f"http://localhost:8000/videos60/{video_filename}"
                        else:
                            fallback_url = f"http://localhost:8000/videos/{video_filename}"
                        context_lines.append(f"\\noindent Animation {i}: \\href{{{fallback_url}}}{{Open Video}}\\par")
                elif video_path:
                    # Fallback if screenshot tool not available
                    context_lines.append(f"% Local file: {video_path}")
                    # Generate localhost URL for fallback
                    import os
                    video_filename = os.path.basename(video_path)
                    if "1080p60" in video_path:
                        fallback_url = f"http://localhost:8000/videos60/{video_filename}"
                    else:
                        fallback_url = f"http://localhost:8000/videos/{video_filename}"
                    context_lines.append(f"\\noindent Animation {i}: \\href{{{fallback_url}}}{{Open Video}}\\par")
            context_lines.append("% ==== END GENERATED ANIMATIONS ====")

        augmented_prompt = prompt
        if context_lines:
            augmented_prompt += ("\n\n" + "\n".join(context_lines) +
                                 "\n\nPlease integrate the animations into an 'Animations' section. "
                                 "If a full document is not present, create one. Include a section heading 'Animations'.")

        # Try to get a relevant template if available
        if template_tool:
            template_type = self._detect_template_type(prompt)
            if template_type:
                logger.info(f"Detected template type: {template_type}, retrieving template...")
                template_result = await template_tool.run({"type": template_type})
                if template_result.get("success"):
                    template_content = template_result.get("template_content", "")
                    augmented_prompt += f"\n\n% ==== TEMPLATE EXAMPLE: {template_type.upper()} ====\n% Use this as reference for structure and formatting:\n{template_content}"
                    logger.info(f"Retrieved template '{template_type}' ({len(template_content)} characters)")
                else:
                    logger.warning(f"Failed to retrieve template '{template_type}': {template_result.get('error')}")

        # Generate final LaTeX
        if latex_tool:
            latex_result = await latex_tool.run({"prompt": augmented_prompt})  # type: ignore[attr-defined]
            message = latex_result.get("message", "Document composed.")
            latex_code = latex_result.get("latex", "")
        else:
            return ChatResponse(message="Latex tool unavailable.", latex="", error="Missing tool")

        # Append summary of animations to message
        if success_anims:
            message += f" Generated {len(success_anims)} animation(s)."
        elif animations and not success_anims:
            message += " All requested animations failed to generate."  # keep latex_code anyway

        return ChatResponse(message=message, latex=latex_code)

    async def _extract_animation_specs(self, prompt: str) -> List[Dict[str, str]]:
        """Use LLM to extract animation descriptions as JSON.

        Expected JSON format: {"animations": [{"description": "..."}, ...]}
        If no animations needed: {"animations": []}
        On parse failure: return empty list.
        """
        system = (
            "You extract manim animation intents from a user request aimed at creating a LaTeX document with optional animations. "
            "IMPORTANT: Generate at most 1 animation per request to avoid duplication. "
            "If multiple animation concepts are mentioned, choose the most important or comprehensive one. "
            "Return ONLY JSON with key 'animations' mapping to a list of objects each having a 'description' string. "
            "If no animations are implied, return {\"animations\": []}. No extra text."
        )
        completion = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": system},
                {"role": "user", "content": prompt}
            ]
        )
        try:
            raw = completion.choices[0].message.content.strip()  # type: ignore[attr-defined]
        except Exception:
            return []

        # Attempt strict parse; extract first JSON object if needed
        candidate = raw
        if not (candidate.startswith('{') and candidate.endswith('}')):
            start = candidate.find('{')
            end = candidate.rfind('}')
            if start != -1 and end != -1 and end > start:
                candidate = candidate[start:end+1]
        try:
            data = json.loads(candidate)
        except Exception:
            return []
        animations = data.get("animations", [])
        cleaned = []
        for a in animations:
            desc = a.get("description") if isinstance(a, dict) else None
            if desc and isinstance(desc, str) and 5 <= len(desc) <= 500:
                cleaned.append({"description": desc.strip()})
        return cleaned

    def _detect_template_type(self, prompt: str) -> str | None:
        """Detect if the prompt suggests a specific document type that has a template."""
        prompt_lower = prompt.lower()
        
        # Skip template detection if "generic" keyword is present
        if "generic" in prompt_lower:
            return None
        
        # Template detection keywords
        template_keywords = {
            "swe_resume": ["resume", "cv", "curriculum vitae", "job application", "employment", "software", "swe"],
            "two_row_resume": ["two row resume", "two-column resume", "side by side resume"],
            "textbook": ["textbook", "book", "course", "lesson", "educational", "learning"],
            "research": ["research", "paper", "study", "analysis", "academic", "journal"],
            "presentation": ["presentation", "slides", "beamer", "talk", "conference"],
            "letter": ["letter", "correspondence", "mail", "formal letter"]
        }
        
        # Check for template keywords
        for template_name, keywords in template_keywords.items():
            if any(keyword in prompt_lower for keyword in keywords):
                return template_name
        
        return None
