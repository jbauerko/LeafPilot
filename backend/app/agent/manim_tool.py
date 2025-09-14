from app.models.schemas import ManimAnimationInput, ManimAnimationOutput
from app.services.manim_service.manim_service import ManimService
from typing import Any


class ManimTool:
    """Tool wrapper for generating Manim animations.

    Input schema mirrors `ManimAnimationInput`. Non-required fields will use defaults
    from the Pydantic model if omitted. Returns a dict for agent consumption.
    """

    name = "generate_manim_animation"
    description = "Create a Manim animation video from a structured description (returns video path)."
    input_schema = ManimAnimationInput.model_json_schema()

    async def run(self, args: dict[str, Any]) -> dict[str, Any]:  # type: ignore[override]
        try:
            data = ManimAnimationInput(**args)
        except Exception as e:
            return {"success": False, "error": f"Invalid arguments: {e}"}
        try:
            result: ManimAnimationOutput = await ManimService.compile_manim(data)
            return {
                "success": result.success,
                "video_path": result.video_path,
                "video_url": result.video_url,
                "description": data.description,
                "output_file": data.output_file,
            }
        except Exception as e:
            return {"success": False, "error": f"Manim generation failed: {e}"}
