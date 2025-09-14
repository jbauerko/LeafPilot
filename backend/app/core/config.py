from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    app_name: str = "FastAPI Backend"
    debug: bool = False
    groq_api_key: Optional[str] = None
    
    class Config:
        env_file = ".env"

settings = Settings()
