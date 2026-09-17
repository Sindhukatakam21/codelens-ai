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
