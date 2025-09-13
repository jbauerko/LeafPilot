from app.models.schemas import ChatRequest, ChatResponse
from app.core.config import settings

from groq import Groq

class ChatService:

    @staticmethod
    async def process_chat(request: ChatRequest) -> ChatResponse:
        prompt_text = request.prompt
        try:
            message, generated_latex = await ChatService.generate_message_and_latex(prompt_text)
            return ChatResponse(message=message, latex=generated_latex)
        except Exception as e:
            return ChatResponse(message="Generation failed.", latex="", error=str(e))

    @staticmethod
    async def generate_message_and_latex(prompt: str) -> tuple[str, str]:
        """Ask Groq for both a user-facing message and LaTeX using delimiter markers.

        The model is instructed to output EXACTLY the following two blocks in order:

        <<<MESSAGE>>>
        <a short helpful natural language explanation of the changes made, particularly new LaTeX>
        <<<LATEX>>>
        <ONLY raw LaTeX code>

        Anything outside those markers is ignored. Fallback: if markers missing, treat full output as LaTeX.
        """
        client = Groq(api_key=settings.groq_api_key)
        system_instructions = (
            "You are an assistant that produces a concise explanation plus LaTeX code. "
            "Return EXACTLY two sections using these markers on their own lines:\n"
            "<<<MESSAGE>>>\n"
            "<a response to the user's request, including a short helpful natural language explanation of the changes made>\n"
            "<<<LATEX>>>\n"
            "<ONLY the LaTeX code, no commentary, no markdown fences>\n"
            "No extra text before the first marker or after the LaTeX block."
        )
        completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_instructions},
                {"role": "user", "content": prompt}
            ],
            model="llama-3.3-70b-versatile"
        )
        try:
            raw = completion.choices[0].message.content  # type: ignore[attr-defined]
        except Exception:
            raw = str(completion)

        raw = raw.strip()
        msg_marker = "<<<MESSAGE>>>"
        latex_marker = "<<<LATEX>>>"

        # Locate markers
        msg_index = raw.find(msg_marker)
        latex_index = raw.find(latex_marker)

        if msg_index == -1 or latex_index == -1 or latex_index < msg_index:
            # Fallback: treat entire output as LaTeX
            return ("Generated LaTeX (fallback mode).", ChatService._clean_fenced_code(raw))

        # Extract between markers
        after_msg = raw[msg_index + len(msg_marker):latex_index]
        after_latex = raw[latex_index + len(latex_marker):]

        message = after_msg.strip()
        latex = ChatService._clean_fenced_code(after_latex.strip())

        if not latex:
            return ("Empty LaTeX block returned.", "")
        if not message:
            message = "LaTeX generated."
        return (message, latex)

    @staticmethod
    def _clean_fenced_code(content: str) -> str:
        if content.startswith("```"):
            lines = content.splitlines()
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            content = "\n".join(lines)
        return content