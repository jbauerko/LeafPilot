from app.services.chat_service import ChatService

class LatexTool:
    name = "generate_latex"
    description = "Generate or modify LaTeX given a natural language instruction."
    input_schema = {
        "type": "object",
        "properties": {
            "prompt": {"type": "string", "description": "User intent or modification request"},
            "context": {"type": "string", "description": "Optional supporting info", "nullable": True}
        },
        "required": ["prompt"]
    }

    async def run(self, args):
        prompt = args["prompt"]
        if ctx := args.get("context"):
            prompt += f"\n\n% CONTEXT\n{ctx}"
        msg, latex = await ChatService.generate_message_and_latex(prompt)
        return {"message": msg, "latex": latex}