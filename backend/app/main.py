from fastapi import FastAPI
from app.api.routes import router as api_router
from app.core.config import settings
from fastapi.middleware.cors import CORSMiddleware

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

# Include API routes
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Welcome to vibetex API"}