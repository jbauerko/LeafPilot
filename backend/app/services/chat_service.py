from app.models.schemas import ChatRequest
from app.core.config import settings
from fastapi.responses import FileResponse
from groq import Groq
import tempfile
from pathlib import Path
import json


class ChatService:
    @staticmethod
    async def process_chat(request: ChatRequest) -> FileResponse:
        """Generate LaTeX from prompt and return it as a .tex file download."""
        prompt = request.input
        try:
            latex_text = await ChatService.generate_latex_from_prompt(prompt)

            # Create a temporary .tex file and return it
            temp_dir = tempfile.mkdtemp()
            tex_path = Path(temp_dir) / "generated.tex"
            tex_path.write_text(latex_text, encoding="utf-8")

            return FileResponse(
                path=str(tex_path),
                media_type="application/x-tex",
                filename="generated.tex"
            )
        except Exception as e:
            # Create an error .tex file with the error message for transparency
            temp_dir = tempfile.mkdtemp()
            tex_path = Path(temp_dir) / "error.tex"
            tex_path.write_text(f"% Error generating LaTeX\n% {str(e)}\n", encoding="utf-8")
            return FileResponse(
                path=str(tex_path),
                media_type="application/x-tex",
                filename="error.tex"
            )

    @staticmethod
    async def generate_latex_from_prompt(prompt: str) -> str:
        """Use Groq to generate LaTeX content from a natural language prompt."""
        client = Groq(api_key=settings.groq_api_key)
        completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are an AI that outputs ONLY LaTeX code. No explanations."},
                {"role": "user", "content": prompt},
            ],
            model="llama-3.3-70b-versatile"
        )

        # Attempt to extract text safely
        try:
            content = completion.choices[0].message.content  # type: ignore[attr-defined]
        except Exception:
            # Fallback stringify
            content = str(completion)

        # Optional: strip surrounding code fences if model returns ```latex ... ```
        if content.startswith("```"):
            lines = content.splitlines()
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            content = "\n".join(lines)

        return content.strip()