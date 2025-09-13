from fastapi import APIRouter, Depends, File, UploadFile
from app.services.chat_service import ChatService
from app.services.pdf_service import PDFService
from app.models.schemas import ChatRequest, ChatResponse, CompileRequest
from fastapi.responses import FileResponse, JSONResponse

router = APIRouter()

@router.post("/compile")
async def compile_endpoint(file: UploadFile = File(...)):
    response = await PDFService.compile_pdf(file)
    return response

@router.post("/chat", response_model=ChatResponse)
async def transform_endpoint(request: ChatRequest):
    try:
        response = await ChatService.process_chat(request)
        return response
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@router.post("/test")
async def test_endpoint(request: CompileRequest):
    response = await PDFService.compile_pdf(request)
    return response