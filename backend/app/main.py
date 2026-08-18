from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.config import get_settings

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    description="Backend API for the CodeLens AI GitHub Repository Assistant.",
    version="0.1.0",
)

allowed_origins = [
    settings.frontend_url,
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(set(allowed_origins)),
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(health_router)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "message": "CodeLens AI API is running",
        "docs": "/docs",
        "health": "/api/health",
    }