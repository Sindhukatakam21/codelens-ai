import re

import httpx
from fastapi import HTTPException, status

from app.config import get_settings


GITHUB_REPOSITORY_PATTERN = re.compile(
    r"^https?://(?:www\.)?github\.com/([^/]+)/([^/#?]+?)/?$",
    re.IGNORECASE,
)


def parse_github_repository_url(repository_url: str) -> tuple[str, str]:
    match = GITHUB_REPOSITORY_PATTERN.match(repository_url.strip())

    if not match:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=(
                "Enter a valid GitHub repository URL, "
                "for example: https://github.com/owner/repository"
            ),
        )

    owner, repository = match.groups()
    return owner, repository


async def get_repository_metadata(repository_url: str) -> dict:
    owner, repository = parse_github_repository_url(repository_url)
    settings = get_settings()

    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }

    if settings.github_token:
        headers["Authorization"] = f"Bearer {settings.github_token}"

    github_api_url = f"https://api.github.com/repos/{owner}/{repository}"

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.get(github_api_url, headers=headers)
    except httpx.RequestError as error:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Could not connect to the GitHub API. Please try again.",
        ) from error

    if response.status_code == status.HTTP_404_NOT_FOUND:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=(
                "Repository not found. Check the URL and make sure it is a public GitHub repository."
            ),
        )

    if response.status_code in {
        status.HTTP_401_UNAUTHORIZED,
        status.HTTP_403_FORBIDDEN,
    }:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="GitHub API access is temporarily unavailable. Please try again later.",
        )

    if not response.is_success:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="GitHub returned an unexpected response. Please try again.",
        )

    data = response.json()

    if data.get("private", False):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Private repositories are not supported yet.",
        )

    return {
        "owner": data["owner"]["login"],
        "name": data["name"],
        "full_name": data["full_name"],
        "description": data.get("description"),
        "default_branch": data["default_branch"],
        "language": data.get("language"),
        "stars": data["stargazers_count"],
        "forks": data["forks_count"],
        "is_private": data["private"],
        "html_url": data["html_url"],
    }