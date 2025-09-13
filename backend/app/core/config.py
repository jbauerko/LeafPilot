from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "FastAPI Backend"
    groq_api_key: str
    debug: bool = False
    
    class Config:
        env_file = ".env"

settings = Settings()
