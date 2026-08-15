# CodeLens AI

A web-based GitHub Repository Assistant that helps developers understand public GitHub repositories using natural-language questions.

## Project Overview

CodeLens AI analyzes source code and documentation from public GitHub repositories. It uses code-aware parsing, embeddings, vector search, and Retrieval-Augmented Generation to provide repository-specific answers with source citations.

Users can ask questions such as:

- Where is authentication implemented?
- Explain the login flow.
- Which files connect to the database?
- Where is the API route for user registration?
- What are the main technologies used in this project?
- Where should I add a new feature?

## Problem

Large software repositories can be difficult to understand because important logic is distributed across many files and documentation may be incomplete. Traditional keyword search does not always explain how the code works or how different modules are connected.

CodeLens AI provides a website where users can ask natural-language questions and receive answers grounded in the repository's actual source code.

## Planned Features

- Public GitHub repository analysis.
- Repository metadata display.
- Code-aware indexing.
- Function and class extraction.
- Semantic search.
- Keyword search.
- RAG-based question answering.
- Source citations with file paths and line numbers.
- Repository overview.
- Code explorer.
- Indexing progress.
- User authentication.
- Incremental re-indexing.
- Function explanation.
- Unit-test suggestions.

## Technology Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

### Backend

- Python
- FastAPI
- Render

### AI and Search

- Tree-sitter
- Sentence Transformers
- Supabase pgvector
- Gemini free tier or Ollama

### Database and Authentication

- Supabase PostgreSQL
- Supabase Auth

### Integration

- GitHub REST API

## Architecture

```text
User Browser
     |
     v
Next.js Website on Vercel
     |
     v
FastAPI Backend on Render
     |
     +-- GitHub REST API
     +-- Tree-sitter
     +-- Local Embeddings
     +-- Supabase PostgreSQL + pgvector
     +-- Gemini or Ollama
```

## Repository Structure

```text
codelens-ai/
├── backend/
├── docs/
├── frontend/
├── .env.example
├── .gitignore
└── README.md
```

## Project Status

Current phase: Phase 1 - Requirements and Planning

Completed:

- Project name selected.
- User roles defined.
- Website pages defined.
- Problem statement written.
- Project objectives defined.
- Technology stack selected.
- System architecture designed.
- Wireframes created.

## Future Development Phases

1. Requirements and planning.
2. Website frontend setup.
3. FastAPI backend setup.
4. GitHub API integration.
5. Repository indexing.
6. Code parsing and embeddings.
7. Vector search and RAG.
8. Chat interface.
9. Authentication.
10. Testing and deployment.

## Important Scope Note

CodeLens AI is a browser-based website. It is not a mobile application, desktop application, or IDE plugin in the initial version.

## Author

Sindhu Katakam