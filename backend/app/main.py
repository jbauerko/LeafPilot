from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.api.routes import router as api_router
from app.core.config import settings
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="Backend API", version="1.0.0")

# Need to figure this out later
origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files for videos - handle subdirectories
videos_dir = os.path.join(os.path.dirname(__file__), "media", "manim", "videos")
if os.path.exists(videos_dir):
    # Mount 1080p30 videos
    p30_dir = os.path.join(videos_dir, "1080p30")
    if os.path.exists(p30_dir):
        app.mount("/videos", StaticFiles(directory=p30_dir), name="videos")
    
    # Mount 1080p60 videos as /videos60
    p60_dir = os.path.join(videos_dir, "1080p60")
    if os.path.exists(p60_dir):
        app.mount("/videos60", StaticFiles(directory=p60_dir), name="videos60")

# Include API routes
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Welcome to vibetex API"}