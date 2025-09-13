from fastapi import APIRouter, File, UploadFile, HTTPException, Form
from app.services.chat_service import ChatService
from app.services.pdf_service import PDFService
from app.models.schemas import ChatRequest, CompileRequest

router = APIRouter()

@router.post("/compile")
async def compile_endpoint(file: UploadFile = File(...)):
    response = await PDFService.compile_pdf(file)
    return response

@router.post("/chat")
async def chat_endpoint(prompt: str = Form(...), files: list[UploadFile] | None = File(None)):
    if not files:
        return await ChatService.process_chat(ChatRequest(prompt=prompt))

    tex_segments: list[str] = []
    context_segments: list[str] = []

    for f in files:
        if not f.filename.endswith((".txt", ".tex", ".md")):
            raise HTTPException(status_code=400, detail=f"Unsupported file type: {f.filename}")
        raw = await f.read()
        try:
            text = raw.decode("utf-8")
        except Exception:
            text = raw.decode("latin-1", errors="ignore")

        if f.filename.lower().endswith(".tex"):
            tex_segments.append(f"% ---- BEGIN ORIGINAL {f.filename} ----\n{text}\n% ---- END ORIGINAL {f.filename} ----")
        else:
            context_segments.append(f"% ---- CONTEXT {f.filename} ----\n{text}")

    # Build augmented prompt: user prompt + context (exclude original .tex to avoid duplication)
    if context_segments:
        prompt += "\n\n% ==== BEGIN CONTEXT FILES ====\n" + "\n\n".join(context_segments) + "\n% ==== END CONTEXT FILES ===="

    return await ChatService.process_chat(ChatRequest(prompt=prompt))


@router.post("/test")
async def test_endpoint(request: CompileRequest):
    response = await PDFService.compile_pdf(request)
    return response