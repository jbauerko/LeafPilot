from pydantic import BaseModel
from typing import List, Optional

class InputRequest(BaseModel):
    input: str
    input_type: str # speech, chat, notes, etc
    options: Optional[dict]
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: Optional[str] = None

class LatexResponse(BaseModel):
    latex: str  
    preamble: Optional[str] = None  
    packages: Optional[List[str]] = None
    error: Optional[str] = None  

class CompileRequest(BaseModel):
    file_txt: str # .tex or .txt