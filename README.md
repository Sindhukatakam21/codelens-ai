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