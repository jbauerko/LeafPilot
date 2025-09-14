from fastapi import UploadFile
from groq import Groq
from app.core.config import settings

class AudioService:

    @staticmethod
    async def process_audio(audio_file: UploadFile) -> str:
         
        client = Groq(api_key=settings.groq_api_key)

        file_bytes = await audio_file.read()

        transcription = client.audio.transcriptions.create(
            file=("audio.mp3", file_bytes), 
            model="whisper-large-v3",
            response_format="text",
            language="en"
        )
        
        return transcription
