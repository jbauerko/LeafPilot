from pydantic import BaseModel
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
    """Simple chat result containing a response message and the produced LaTeX."""
    message: str
    latex: str
    error: Optional[str] = None