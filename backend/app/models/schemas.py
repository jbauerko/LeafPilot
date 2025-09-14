from pydantic import BaseModel, Field
from typing import Optional

# REQUEST MODELS

class CompileRequest(BaseModel):
    """Model for compiling Latex into a pdf"""
    file_txt: str # .tex or .txt

class ChatRequest(BaseModel):
    """Model for a natural language prompt request"""
    prompt: str

# RESPONSE MODELS

class ChatResponse(BaseModel):
    message: str
    latex: str
    error: Optional[str] = None

class ManimAnimationInput(BaseModel):
    height: int = Field(
        default=1080,
        ge=480,
        le=4320,
        description="Video height in pixels (480p to 4K)"
    )    
    width: int = Field(
        default=1920,
        ge=640,
        le=7680,
        description="Video width in pixels (640p to 8K)"
    )    
    output_file: str = Field(
        default="output_video",
        description="Output file name without extension (will be saved as .mp4)"
    )    
    description: str = Field(
        ...,
        min_length=10,
        max_length=1000,
        description="Detailed description of the animation to be generated"
    )
    frame_rate: int = Field(
        default=30,
        ge=15,
        le=60,
        description="Frame rate for the animation (15-60 fps)"
    )
    background_color: str = Field(
        default="WHITE",
        description="Background color for the animation (Manim color constants)"
    )
    quality: str = Field(
        default="medium_quality",
        description="Rendering quality: low_quality, medium_quality, high_quality, or production_quality"
    )
    class Config:
        json_schema_extra = {
            "example": {
                "height": 1080,
                "width": 1920,
                "output_file": "my_animation",
                "description": "Create a blue square that appears, rotates 90 degrees, moves to the right, and fades out",
                "frame_rate": 30,
                "background_color": "WHITE",
                "quality": "medium_quality"
            }
        }

class ManimAnimationOutput(BaseModel):
    success: bool = Field(description="Whether the animation was generated successfully")
    video_path: Optional[str] = Field(None, description="Path to the generated video file")
    video_url: Optional[str] = Field(None, description="URL to access the generated video")