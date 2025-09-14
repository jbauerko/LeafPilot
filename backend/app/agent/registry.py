from .latex_tool import LatexTool
from .manim_tool import ManimTool
from .screenshot_tool import ScreenshotTool
from .template_tool import TemplateTool
from .web_scraper_tool import WebScraperTool


class ToolRegistry:
    """Registry holding available agent tools."""

    def __init__(self):
        tools = [LatexTool(), ManimTool(), ScreenshotTool(), TemplateTool(), WebScraperTool()]
        self._tools = {t.name: t for t in tools}

    def list(self):
        return list(self._tools.values())

    def specs(self):
        return [
            {
                "name": t.name,
                "description": t.description,
                "input_schema": t.input_schema,
            }
            for t in self._tools.values()
        ]

    def get(self, name: str):
        return self._tools.get(name)
