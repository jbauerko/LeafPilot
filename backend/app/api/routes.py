from fastapi import APIRouter, File, UploadFile, HTTPException, Form
from fastapi.responses import JSONResponse
from app.services.chat_service import ChatService
from app.services.audio_service import AudioService
from app.agent.composer import AgentComposer
from app.services.pdf_service import PDFService
from app.services.html_service import HTMLService
from app.services.manim_service.manim_service import ManimService
from app.models.schemas import ChatRequest, CompileRequest, ManimAnimationOutput, ManimAnimationInput

router = APIRouter()

@router.post("/compile")
async def compile_endpoint(file: UploadFile = File(...)):
    response = await PDFService.compile_pdf(file)
    return response

@router.post("/chat")
async def chat_endpoint(prompt: str = Form(...), source: UploadFile | None = None, attached: UploadFile | None = None):
    if not source and not attached:
        return await ChatService.process_chat(ChatRequest(prompt=prompt))

    tex_segments: str = ""
    context_segments: list[str] = []

    for f in filter(lambda x: x is not None, [source, attached]):
        if not f.filename.endswith((".mp3", ".wav", ".m4a", ".txt", ".tex", ".md")):
            raise HTTPException(status_code=400, detail=f"Unsupported file type: {f.filename}")
    
        if f.filename.lower().endswith((".mp3", ".wav", ".m4a")): 
            try:
                text: str = await AudioService.process_audio(f)
                context_segments.append(f"% ---- CONTEXT {f.filename} ----\n{text}")
            except Exception:
                raise HTTPException(status_code=500, detail=f"Could not process audio file: {f.filename}") 
        else:
            raw = await f.read()
            try:
                text = raw.decode("utf-8")
            except Exception:
                text = raw.decode("latin-1", errors="ignore")
                
            if f.filename.lower().endswith(".tex"):
                tex_segments += f"% ---- BEGIN ORIGINAL {f.filename} ----\n{text}\n% ---- END ORIGINAL {f.filename} ----"
            else:
                context_segments.append(f"% ---- CONTEXT {f.filename} ----\n{text}")

    # Build augmented prompt
    if tex_segments:
        prompt += tex_segments
    
    if context_segments:
        prompt += "\n\n% ==== BEGIN CONTEXT FILES ====\n" + "\n\n".join(context_segments) + "\n% ==== END CONTEXT FILES ===="

    return await ChatService.process_chat(ChatRequest(prompt=prompt))


@router.post("/test")
async def test_endpoint(request: CompileRequest):
    response = await PDFService.compile_pdf(request)
    return response

@router.post("/compile-html")
async def compile_html_endpoint(file: UploadFile = File(...)):
    response = await HTMLService.compile_html(file)
    return response

@router.get("/test-html")
async def test_html_endpoint():
    """Test endpoint using a simple LaTeX file"""
    import os
    from fastapi import UploadFile
    
    # Create a mock UploadFile with the simple test content
    simple_tex_path = os.path.join(os.path.dirname(__file__), "..", "..", "tests", "simple_test.tex")
    
    if not os.path.exists(simple_tex_path):
        return JSONResponse(
            status_code=404, 
            content={"error": "Simple test file not found"}
        )
    
    with open(simple_tex_path, 'rb') as f:
        content = f.read()
    
    class MockUploadFile:
        def __init__(self, filename, content):
            self.filename = filename
            self.content = content
        
        async def read(self):
            return self.content
    
    mock_file = MockUploadFile('simple_test.tex', content)
    
    try:
        response = await HTMLService.compile_html(mock_file)
        return response
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )

@router.post("/manim")
async def manim_endpoint(input: ManimAnimationInput):
    response = await ManimService.compile_manim(input)
    return response
