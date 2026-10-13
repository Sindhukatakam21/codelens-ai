## Project Structure

```text
Codelens-Ai/
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── README.md
├── codelens-frontend/
│   ├── public/
│   ├── src/
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Applications

### Frontend

The Next.js frontend is deployed on Vercel.

### Backend

The FastAPI backend is deployed on Render.

## Local development

Run the frontend:

```bash
cd codelens-frontend
npm install
npm run dev
```

Run the backend in another terminal:

```bash
cd backend
uvicorn app.main:app --reload
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

## Live Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Vercel | [Open CodeLens AI](https://codelens-ai-theta.vercel.app) |
| Backend API | Render | [Open API](https://codelens-ai-backend-akym.onrender.com) |
| API Documentation | FastAPI / Render | [Open Swagger Docs](https://codelens-ai-backend-akym.onrender.com/docs) |
| Health Check | Render | [Check API Status](https://codelens-ai-backend-akym.onrender.com/api/health) |

## Current Progress

### Phase 2 — Frontend Website Setup

- Created a responsive landing page using Next.js, TypeScript, and Tailwind CSS.
- Added a GitHub repository URL input interface with client-side validation.
- Deployed the frontend on Vercel.

### Phase 3 — Backend Setup and Deployment

- Built a FastAPI backend with modular project structure.
- Added health-check and API documentation endpoints.
- Configured environment variables and CORS.
- Connected the backend to Supabase.
- Deployed the backend on Render.
- Connected the Vercel frontend to the Render backend successfully.
## Phase 4 — GitHub Repository Validation

CodeLens AI can validate a public GitHub repository URL and retrieve live repository metadata through the GitHub REST API.

### Current workflow

1. Enter a public GitHub repository URL.
2. The Next.js frontend sends the URL to the FastAPI backend.
3. The backend validates the URL and securely calls the GitHub REST API.
4. The application displays repository information, including:
   - Owner and repository name
   - Description
   - Primary language
   - Default branch
   - Stars and forks
   - Direct GitHub repository link

### API Endpoint

```text
POST /api/repositories/validate
```

### Example Request

```json
{
  "repository_url": "[https://github.com/vercel/next.js](https://github.com/vercel/next.js)"
}
```

### Example Response

```json
{
  "owner": "vercel",
  "name": "next.js",
  "full_name": "vercel/next.js",
  "description": "The React Framework",
  "default_branch": "canary",
  "language": "JavaScript",
  "stars": 143132,
  "forks": 34582,
  "is_private": false,
  "html_url": "[https://github.com/vercel/next.js](https://github.com/vercel/next.js)"
}
```

> Repository statistics are live values and can change over time.