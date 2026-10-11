from pydantic import BaseModel, Field, HttpUrl


class RepositoryValidationRequest(BaseModel):
    repository_url: HttpUrl = Field(
        ...,
        description="Public GitHub repository URL.",
        examples=["https://github.com/vercel/next.js"],
    )


class RepositoryValidationResponse(BaseModel):
    owner: str
    name: str
    full_name: str
    description: str | None
    default_branch: str
    language: str | None
    stars: int
    forks: int
    is_private: bool
    html_url: str