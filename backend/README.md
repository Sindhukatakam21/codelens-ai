# CodeLens AI Backend

FastAPI backend for the CodeLens AI GitHub Repository Assistant.

## Run locally

From the `backend` directory:

```bash
python -m venv .venv
```

Activate the virtual environment and install dependencies:

```bash
pip install -r requirements.txt
```

Start the server:

```bash
uvicorn app.main:app --reload
```

## Endpoints

- `GET /`
- `GET /api/health`
- `GET /docs`

## Environment variables

Copy `.env.example` to `.env` and configure:

```env
FRONTEND_URL=http://localhost:3000
SUPABASE_URL=
SUPABASE_KEY=
GITHUB_TOKEN=
```