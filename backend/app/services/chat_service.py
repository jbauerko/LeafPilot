from app.models.schemas import ChatRequest, LatexResponse, ChatResponse

from groq import Groq

class ChatService:

    @staticmethod
    async def process_chat(request: ChatRequest) -> ChatResponse:
        input_text = request.input
        options = request.options

        try:
            latex_response = await ChatService.generate_latex_from_prompt(input_text)
            chat_response = f"Successfully processed your LaTeX request."
            return ChatResponse(response=chat_response, latex=latex_response)

        except Exception as e:
            return ChatResponse(
                response=f"Error: {str(e)}",
                latex=LatexResponse(latex="", error=str(e))
            )

    @staticmethod
    async def generate_latex_from_prompt(prompt: str) -> LatexResponse:
        """
        Generate LaTeX code from a natural language prompt using Groq
        """
        client = Groq()

        latex_output = client.chat.completions.create(
            messages=[
                # Set an optional system message. This sets the behavior of the
                # assistant and can be used to provide specific instructions for
                # how it should behave throughout the conversation.
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                # Set a user message for the assistant to respond to.
                {
                    "role": "user",
                    "content": prompt,
                }
            ],

            # The language model which will generate the completion.
            model="llama-3.3-70b-versatile"
        )

        # Return a structured LatexResponse object
        return LatexResponse(latex=latex_output, preamble=None, packages=None)