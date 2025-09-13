from fastapi import APIRouter, Depends, File, UploadFile
from app.services.chat_service import ChatService
from app.services.pdf_service import PDFService
from app.models.schemas import ChatRequest, ChatResponse, CompileRequest
from fastapi.responses import FileResponse

router = APIRouter()

@router.post("/compile")
async def compile_endpoint(file: UploadFile = File(...)):
    response = await PDFService.compile_pdf(file)
    return response

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    response = await ChatService.process_chat(request)
    return ChatResponse(response=response)

@router.post("/test")
async def test_endpoint(request: CompileRequest):
    response = await PDFService.compile_pdf(request)
    return response