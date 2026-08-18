"use client";

import { FormEvent, useState } from "react";

function isValidGitHubUrl(value: string) {
  try {
    const url = new URL(value.trim());

    return (
      url.hostname === "github.com" &&
      url.pathname.split("/").filter(Boolean).length >= 2
    );
  } catch {
    return false;
  }
}

export default function RepositoryForm() {
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!repositoryUrl.trim()) {
      setError("Please enter a GitHub repository URL.");
      return;
    }

    if (!isValidGitHubUrl(repositoryUrl)) {
      setError(
        "Enter a valid public GitHub URL, such as https://github.com/owner/repository."
      );
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      setError("Backend API URL is not configured.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${apiUrl}/api/health`);

      if (!response.ok) {
        throw new Error("Backend health check failed.");
      }

      const data: { status?: string } = await response.json();

      if (data.status !== "ok") {
        throw new Error("Backend returned an unexpected response.");
      }

      setMessage(
        "Frontend successfully connected to the CodeLens AI backend. Repository indexing will be added in the next phase."
      );
    } catch {
      setError(
        "Could not connect to the backend. Make sure FastAPI is running and CORS is configured."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="repository-form" className="w-full max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-950/20"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="repository-url" className="sr-only">
            GitHub repository URL
          </label>

          <input
            id="repository-url"
            type="url"
            value={repositoryUrl}
            onChange={(event) => {
              setRepositoryUrl(event.target.value);
              setError("");
              setMessage("");
            }}
            placeholder="https://github.com/owner/repository"
            className="min-h-12 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-12 rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Connecting..." : "Analyze repository"}
          </button>
        </div>

        {error && (
          <p className="px-2 pt-3 text-left text-sm text-red-300" role="alert">
            {error}
          </p>
        )}

        {message && (
          <p
            className="px-2 pt-3 text-left text-sm text-emerald-300"
            role="status"
          >
            {message}
          </p>
        )}
      </form>

      <p className="mt-3 text-center text-xs text-slate-500">
        Enter a public GitHub repository URL to begin.
      </p>
    </div>
  );
}