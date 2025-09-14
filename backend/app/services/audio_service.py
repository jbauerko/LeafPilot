from groq import Groq
from app.core.config import settings

class AudioService:

    @staticmethod
    async def process_audio(audio_file) -> str:
         
        client = Groq(api_key=settings.groq_api_key)

        transcription = client.audio.transcriptions.create(
            file=audio_file, 
            model="whisper-large-v3",
            response_format="text",
            language="en"
        )
        
        return transcription
