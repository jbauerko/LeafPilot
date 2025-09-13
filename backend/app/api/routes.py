from fastapi import APIRouter, File, UploadFile
from app.services.chat_service import ChatService
from app.services.pdf_service import PDFService
from app.models.schemas import ChatRequest, CompileRequest
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/compile")
async def compile_endpoint(file: UploadFile = File(...)):
    response = await PDFService.compile_pdf(file)
    return response

@router.post("/chat")
async def transform_endpoint(request: ChatRequest):
    # Returns a FileResponse (.tex) produced by ChatService
    return await ChatService.process_chat(request)

@router.post("/test")
async def test_endpoint(request: CompileRequest):
    response = await PDFService.compile_pdf(request)
    return response