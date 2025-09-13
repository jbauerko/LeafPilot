from pydantic import BaseModel
from typing import Optional

# Requests

class CompileRequest(BaseModel):
    """Model for compiling Latex into a pdf"""
    file_txt: str # .tex or .txt

class ChatRequest(BaseModel):
    """Model for a natural language prompt request"""
    input: str
    options: Optional[dict]

# (Responses removed: chat now returns FileResponse directly)