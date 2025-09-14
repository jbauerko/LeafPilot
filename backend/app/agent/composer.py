import json
import uuid
from typing import List, Dict
from groq import Groq

from app.core.config import settings
from app.models.schemas import ChatResponse
from .registry import ToolRegistry


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
        animations = await self._extract_animation_specs(prompt)
        manim_tool = self.registry.get("generate_manim_animation")
        latex_tool = self.registry.get("generate_latex")

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
                if video_path:
                    # Use run: reference; actual embedding left to LaTeX engine/user packages
                    context_lines.append(f"% Local file: {video_path}")
                    context_lines.append(
                        f"\\noindent Animation {i}: \\href{{run:{video_path}}}{{Open Video}}\\par"  # requires hyperref
                    )
            context_lines.append("% ==== END GENERATED ANIMATIONS ====")

        augmented_prompt = prompt
        if context_lines:
            augmented_prompt += ("\n\n" + "\n".join(context_lines) +
                                 "\n\nPlease integrate the animations into an 'Animations' section. "
                                 "If a full document is not present, create one. Include a section heading 'Animations'.")

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
