from pydantic import BaseModel
from typing import List, Optional

# Requests

class CompileRequest(BaseModel):
    """Model for compiling Latex into a pdf"""
    file_txt: str # .tex or .txt

class ChatRequest(BaseModel):
    """Model for a natural language prompt request"""
    input: str
    options: Optional[dict]

# Responses

class LatexResponse(BaseModel):
    """Model for Latex to be returned to the user"""
    latex: str  
    preamble: Optional[str] = None  
    packages: Optional[List[str]] = None
    error: Optional[str] = None  

class ChatResponse(BaseModel):
    """Model for response to a prompt. Includes updated Latex in a Latex response"""
    response: str
    latex: LatexResponse