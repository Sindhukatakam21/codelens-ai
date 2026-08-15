# CodeLens AI Feature List

## 1. Core Features

### Repository URL Submission

Users can enter a public GitHub repository URL.

### Repository Validation

The system checks whether the URL is valid and whether the repository can be accessed.

### Repository Metadata

The website displays:

- Repository name.
- Owner.
- Description.
- Default branch.
- Programming languages.
- Stars.
- Forks.
- Last update date.

### Repository Indexing

The backend retrieves repository files and creates searchable code chunks.

### Code-Aware Parsing

Supported source code is parsed into:

- Functions.
- Classes.
- Methods.
- Interfaces.
- Imports.
- API routes.

### Semantic Search

The system searches for conceptually related code even when the exact words in the question are not present.

### Keyword Search

The system searches exact file names, function names, class names, and technical terms.

### RAG Question Answering

Users can ask natural-language questions about the repository.

### Source Citations

Answers display:

- File path.
- Symbol name.
- Line range.
- GitHub link.

### Repository Overview

The website generates an overview of the repository structure and technologies.

### Indexing Progress

The website displays:

- Files discovered.
- Files processed.
- Chunks created.
- Current status.
- Error count.

## 2. User Features

- Signup.
- Login.
- Logout.
- Dashboard.
- Saved repositories.
- Chat history.
- Repository deletion.
- Re-indexing.
- User-specific access control.

## 3. Developer Features

- Explain a function.
- Explain a class.
- Find related code.
- Find API endpoints.
- Identify database files.
- Generate unit-test suggestions.
- Explain project data flow.
- Suggest where to implement a new feature.

## 4. Search Features

- Vector similarity search.
- Exact keyword search.
- Hybrid search.
- Language filtering.
- Directory filtering.
- File-path filtering.
- Symbol-name search.

## 5. Reliability Features

- Insufficient-context response.
- GitHub API error handling.
- LLM quota error handling.
- Indexing retry support.
- Incremental indexing.
- Content-hash caching.
- Duplicate job prevention.
- Progress persistence.

## 6. Future Features

- Private repository support.
- GitHub OAuth.
- Pull-request explanation.
- Commit comparison.
- Code-quality suggestions.
- IDE extension.
- Team workspaces.
- Administrator dashboard.