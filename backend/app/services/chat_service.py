from app.models.schemas import ChatRequest, ChatResponse
from app.core.config import settings

from groq import Groq

class ChatService:

    @staticmethod
    async def process_chat(request: ChatRequest) -> ChatResponse:
        prompt_text = request.prompt
        try:
            generated_latex = await ChatService.generate_latex_from_prompt(prompt_text)
            return ChatResponse(message="LaTeX generation successful.", latex=generated_latex)
        except Exception as e:
            return ChatResponse(message="Generation failed.", latex="", error=str(e))

    @staticmethod
    async def generate_latex_from_prompt(prompt: str) -> str:
        """Generate (or modify) LaTeX code from natural language using Groq."""
        client = Groq(api_key=settings.groq_api_key)
        completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant that outputs ONLY LaTeX unless explicitly asked for explanation."},
                {"role": "user", "content": prompt}
            ],
            model="llama-3.3-70b-versatile"
        )
        try:
            content = completion.choices[0].message.content
        except Exception:
            content = str(completion)
        if content.startswith("```"):
            lines = content.splitlines()
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            content = "\n".join(lines)
        return content.strip()