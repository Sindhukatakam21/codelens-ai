from fastapi import APIRouter

from app.config import get_settings
from app.database import get_supabase_client

router = APIRouter(prefix="/api", tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str | bool]:
    settings = get_settings()
    supabase_connected = get_supabase_client() is not None

    return {
        "status": "ok",
        "service": settings.app_name,
        "environment": settings.environment,
        "supabase_connected": supabase_connected,
    }