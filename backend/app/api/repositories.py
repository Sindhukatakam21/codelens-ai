from fastapi import APIRouter, status

from app.schemas.repository import (
    RepositoryValidationRequest,
    RepositoryValidationResponse,
)
from app.services.github_service import get_repository_metadata

router = APIRouter(prefix="/api/repositories", tags=["repositories"])


@router.post(
    "/validate",
    response_model=RepositoryValidationResponse,
    status_code=status.HTTP_200_OK,
)
async def validate_repository(
    payload: RepositoryValidationRequest,
) -> RepositoryValidationResponse:
    repository = await get_repository_metadata(str(payload.repository_url))
    return RepositoryValidationResponse(**repository)