# CodeLens AI Requirements Document

## 1. Project Title

CodeLens AI: Web-Based GitHub Repository Assistant

## 2. Project Type

CodeLens AI is a full-stack, browser-based website that uses Retrieval-Augmented Generation to help developers understand public GitHub repositories.

This project is a website only. It does not include an Android, iOS, Flutter, or React Native application.

## 3. Problem Statement

Software repositories can be difficult to understand because they contain many files, folders, programming languages, dependencies, and configuration files. Important functionality may be distributed across different modules, while documentation may be incomplete or outdated.

Traditional keyword search can locate exact text, but it does not always explain how a project works, how data flows between modules, where authentication is implemented, or where a new feature should be added.

Developers need a tool that can understand repository-specific source code and provide accurate answers based on the actual contents of a GitHub repository.

## 4. Proposed Solution

CodeLens AI is proposed as a web-based GitHub Repository Assistant. It allows users to submit a public GitHub repository URL and ask questions about its source code using natural language.

The system retrieves repository files, parses supported source code, divides the code into meaningful functions and classes, creates embeddings, stores them in a vector database, and retrieves relevant code for each user question.

A language model then generates a grounded answer from the retrieved repository context. The answer includes source file paths, line numbers, and links to the corresponding GitHub files.

If sufficient evidence cannot be found, the system will clearly inform the user instead of inventing an answer.

## 5. Target Users

- Students learning software development.
- New developers joining an existing project.
- Open-source contributors.
- Software engineers reviewing unfamiliar repositories.
- Project evaluators and technical interviewers.

## 6. User Roles

### Guest User

A guest can view the landing page, read project information, and try a sample demonstration.

### Registered User

A registered user can add public repositories, start indexing, ask questions, view source citations, save conversations, re-index repositories, and delete repository indexes.

### Administrator

An administrator role may be added in the future for monitoring indexing jobs, API usage, errors, and users.

## 7. Project Objectives

### Primary Objectives

- Build a web-based GitHub repository analysis website.
- Allow users to ask natural-language questions about source code.
- Retrieve relevant code using semantic and keyword search.
- Generate answers using repository-specific context.
- Display source citations with file paths and line numbers.
- Deploy the frontend and backend using free services.

### Technical Objectives

- Integrate the GitHub REST API.
- Implement repository file discovery.
- Parse source code using Tree-sitter.
- Generate embeddings using a free local model.
- Store embeddings using PostgreSQL with pgvector.
- Implement Retrieval-Augmented Generation.
- Support incremental indexing.
- Add user authentication.
- Evaluate retrieval and answer quality.

## 8. Functional Requirements

- The system shall allow a user to enter a public GitHub repository URL.
- The system shall validate the repository URL.
- The system shall retrieve repository metadata.
- The system shall identify files in the repository.
- The system shall classify files by programming language.
- The system shall parse supported source files.
- The system shall create searchable code chunks.
- The system shall generate embeddings for code chunks.
- The system shall store embeddings and metadata.
- The system shall allow users to ask questions.
- The system shall retrieve relevant code chunks.
- The system shall generate answers using retrieved context.
- The system shall display file paths and line numbers.
- The system shall provide direct GitHub source links.
- The system shall display repository indexing progress.
- The system shall allow users to re-index repositories.
- The system shall allow users to delete repository indexes.
- The system shall protect user-specific repository data.

## 9. Non-Functional Requirements

- The website shall be responsive on desktop, tablet, and mobile browsers.
- The website shall use HTTPS in production.
- API keys shall not be exposed to the frontend.
- The system shall handle invalid repository URLs.
- The system shall handle GitHub API failures.
- The system shall handle language-model quota errors.
- The system shall display useful error messages.
- The system shall avoid unsupported claims when evidence is unavailable.
- The system shall process files incrementally.
- The system shall cache unchanged files during re-indexing.

## 10. Scope

### Included

- Browser-based website.
- Public GitHub repository analysis.
- Repository indexing.
- Code search.
- RAG-based question answering.
- Source citations.
- User authentication.
- Cloud deployment.

### Not Included in the Initial Version

- Mobile applications.
- Private repository OAuth integration.
- Automatic code execution.
- Automatic pull-request creation.
- IDE plugins.
- Voice interaction.
- Real-time collaborative editing.
## 11. Technology Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query or SWR
- Vercel

### Backend

- Python
- FastAPI
- Pydantic
- Uvicorn
- Render

### GitHub Integration

- GitHub REST API
- PyGithub or Python HTTP client

### Code Processing

- Tree-sitter
- Python language parser
- JavaScript and TypeScript language parsers
- Java language parser

### Embeddings

- Sentence Transformers
- A free local embedding model such as BGE-small or MiniLM

### Vector Search

- Supabase PostgreSQL
- pgvector

### Language Model

- Gemini free tier for the deployed demonstration
- Ollama for local development and offline testing

### Authentication

- Supabase Auth

### Testing

- Pytest
- Playwright
- ESLint
- TypeScript checks

### Deployment

- Vercel for the Next.js website
- Render for the FastAPI backend
- Supabase for database and authentication

## 12. Technology Selection Reason

The selected technologies are free or have free tiers suitable for a student project. Next.js provides the website interface, FastAPI provides the backend API, GitHub APIs provide repository data, Tree-sitter enables code-aware parsing, Sentence Transformers avoids paid embedding APIs, and Supabase provides PostgreSQL, authentication, and vector search in one platform.

Vercel will host the browser-facing website, while Render will host the backend processing service.