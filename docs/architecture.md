# CodeLens AI System Architecture

## 1. Architecture Overview

CodeLens AI follows a three-tier web architecture:

1. Presentation layer: Next.js website.
2. Application layer: FastAPI backend.
3. Data and AI layer: GitHub API, Supabase, vector search, embeddings, and LLM.

The user interacts with the website through a browser. The website sends API requests to the FastAPI backend. The backend retrieves repository data, processes code, searches vectors, and generates answers.

## 2. Architecture Diagram

```mermaid
flowchart TD
    U[User Browser] --> V[Next.js Website]
    V --> F[Vercel]
    F --> API[FastAPI REST API]
    API --> R[Render]
    API --> GH[GitHub REST API]
    API --> TS[Tree-sitter Parser]
    API --> EMB[Local Embedding Model]
    API --> DB[Supabase PostgreSQL]
    DB --> PV[pgvector Similarity Search]
    API --> LLM[Gemini Free Tier or Ollama]
    API --> AUTH[Supabase Auth]
```

## 3. Repository Indexing Flow

```mermaid
flowchart LR
    A[Repository URL] --> B[Validate URL]
    B --> C[Fetch Repository Tree]
    C --> D[Classify Files]
    D --> E[Download Source Files]
    E --> F[Parse Functions and Classes]
    F --> G[Create Code Chunks]
    G --> H[Generate Embeddings]
    H --> I[Store Vectors]
    I --> J[Index Ready]
```

## 4. Question Answering Flow

```mermaid
flowchart LR
    A[User Question] --> B[Create Question Embedding]
    B --> C[Vector Search]
    A --> D[Keyword Search]
    C --> E[Combine Results]
    D --> E
    E --> F[Rerank Chunks]
    F --> G[Build Grounded Prompt]
    G --> H[Language Model]
    H --> I[Answer with Citations]
```

## 5. Deployment Architecture

```mermaid
flowchart TD
    G[GitHub Repository] --> V[Vercel Deployment]
    G --> R[Render Deployment]
    V --> U[Browser User]
    U --> V
    V --> R
    R --> S[Supabase]
    R --> H[GitHub API]
    R --> L[Free LLM Provider]
```

## 6. Major Components

### Next.js Website

Responsible for:

- Pages.
- Forms.
- Dashboard.
- Chat interface.
- Progress display.
- Error messages.
- Source citation display.

### FastAPI Backend

Responsible for:

- API routes.
- Authentication verification.
- GitHub integration.
- Indexing jobs.
- Code parsing.
- Retrieval.
- Prompt creation.
- LLM communication.

### GitHub API

Responsible for:

- Repository metadata.
- Repository tree.
- File contents.
- Branch information.
- Commit information.

### Tree-sitter

Responsible for:

- Parsing source files.
- Detecting functions.
- Detecting classes.
- Detecting methods.
- Providing line ranges.

### Embedding Model

Responsible for converting code chunks and user questions into numerical vectors.

### Supabase PostgreSQL

Responsible for:

- Users.
- Repositories.
- Files.
- Code chunks.
- Indexing jobs.
- Chat conversations.
- Vector embeddings.

### Language Model

Responsible for generating a natural-language response from retrieved repository context.

## 7. Security Boundaries

- Frontend never receives private API keys.
- GitHub tokens remain in the backend environment.
- Database access is controlled by authentication.
- Repository ownership is verified before querying.
- LLM receives only selected repository context.
- Generated code is never executed automatically.