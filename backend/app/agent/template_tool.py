import os
import json
import logging
from typing import Any, Dict, List
from pathlib import Path

# Import template constants
from .templates.swe_resume import SWE_RESUME_TEMPLATE
from .templates.two_row_resume import TWO_ROW_RESUME_TEMPLATE
from .templates.textbook import TEXTBOOK_TEMPLATE
from .templates.research import RESEARCH_TEMPLATE
from .templates.presentation import PRESENTATION_TEMPLATE
from .templates.letter import LETTER_TEMPLATE

# Set up logging
logger = logging.getLogger(__name__)


class TemplateTool:
    """
    Tool for retrieving LaTeX templates from a local database.
    
    This tool provides access to pre-written LaTeX templates/examples
    that can be used as context to help generate better LaTeX code.
    """

    name = "get_latex_template"
    description = "Retrieve a LaTeX template example from the local database. Use this to get context for generating similar LaTeX documents."
    input_schema = {
        "type": "object",
        "properties": {
            "type": {
                "type": "string", 
                "description": "Document type (swe_resume, two_row_resume, textbook, research, presentation, letter)"
            }
        },
        "required": ["type"]
    }

    def __init__(self):
        # Set up template directory
        self.template_dir = Path("backend/app/templates")
        self.template_dir.mkdir(parents=True, exist_ok=True)
        
        # Initialize with some default templates if they don't exist
        self._initialize_default_templates()

    def _initialize_default_templates(self):
        """Initialize default templates if they don't exist."""
        default_templates = {
            "swe_resume": SWE_RESUME_TEMPLATE,
            "two_row_resume": TWO_ROW_RESUME_TEMPLATE,
            "textbook": TEXTBOOK_TEMPLATE,
            "research": RESEARCH_TEMPLATE,
            "presentation": PRESENTATION_TEMPLATE,
            "letter": LETTER_TEMPLATE
        }
        
        for name, content in default_templates.items():
            template_path = self.template_dir / f"{name}.tex"
            if not template_path.exists():
                template_path.write_text(content, encoding='utf-8')
                logger.info(f"TEMPLATE: Created default template: {name}")

    async def run(self, args: Dict[str, Any]) -> Dict[str, Any]:
        """Retrieve a LaTeX template by type."""
        try:
            template_type = args.get("type")
            if not template_type:
                return {
                    "success": False,
                    "error": "Template type is required"
                }
            
            # Get list of available templates
            if template_type.lower() == "list":
                available_templates = self._get_available_templates()
                return {
                    "success": True,
                    "templates": available_templates,
                    "message": f"Available templates: {', '.join(available_templates)}"
                }
            
            # Load the requested template
            template_path = self.template_dir / f"{template_type.lower()}.tex"
            
            if not template_path.exists():
                available_templates = self._get_available_templates()
                return {
                    "success": False,
                    "error": f"Template '{template_type}' not found. Available templates: {', '.join(available_templates)}"
                }
            
            template_content = template_path.read_text(encoding='utf-8')
            
            logger.info(f"TEMPLATE: Retrieved template '{template_type}' ({len(template_content)} characters)")
            
            return {
                "success": True,
                "template_type": template_type,
                "template_content": template_content,
                "message": f"Retrieved template: {template_type}"
            }
            
        except Exception as e:
            logger.error(f"TEMPLATE: Error retrieving template: {e}")
            return {
                "success": False,
                "error": f"Error retrieving template: {str(e)}"
            }

    def _get_available_templates(self) -> List[str]:
        """Get list of available template names."""
        if not self.template_dir.exists():
            return []
        
        templates = []
        for file_path in self.template_dir.glob("*.tex"):
            templates.append(file_path.stem)
        return sorted(templates)

