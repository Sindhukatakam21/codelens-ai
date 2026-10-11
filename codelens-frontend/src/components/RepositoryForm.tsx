"use client";

import { FormEvent, useState } from "react";

type RepositoryMetadata = {
  owner: string;
  name: string;
  full_name: string;
  description: string | null;
  default_branch: string;
  language: string | null;
  stars: number;
  forks: number;
  is_private: boolean;
  html_url: string;
};

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
  const [repository, setRepository] = useState<RepositoryMetadata | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setRepository(null);

    const trimmedUrl = repositoryUrl.trim();

    if (!trimmedUrl) {
      setError("Please enter a GitHub repository URL.");
      return;
    }

    if (!isValidGitHubUrl(trimmedUrl)) {
      setError(
        "Enter a valid GitHub repository URL, such as https://github.com/owner/repository."
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

      const response = await fetch(
        `${apiUrl}/api/repositories/validate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            repository_url: trimmedUrl,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Could not validate the repository. Please try again."
        );
      }

      setRepository(data as RepositoryMetadata);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Could not connect to the backend. Please try again.";

      setError(message);
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
              setRepository(null);
            }}
            placeholder="https://github.com/owner/repository"
            className="min-h-12 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-12 rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Validating..." : "Analyze repository"}
          </button>
        </div>

        {error && (
          <p className="px-2 pt-3 text-left text-sm text-red-300" role="alert">
            {error}
          </p>
        )}
      </form>

      {repository && (
        <section
          className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-left"
          aria-live="polite"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-300">
                Repository validated successfully
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">
                {repository.full_name}
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                {repository.description || "No repository description provided."}
              </p>
            </div>

            <a
              href={repository.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-emerald-300/50 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-300/10"
            >
              Open on GitHub
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-slate-950/60 p-3">
              <p className="text-xs text-slate-500">Language</p>
              <p className="mt-1 text-sm font-semibold text-white">
                {repository.language || "Not specified"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/60 p-3">
              <p className="text-xs text-slate-500">Default branch</p>
              <p className="mt-1 break-words text-sm font-semibold text-white">
                {repository.default_branch}
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/60 p-3">
              <p className="text-xs text-slate-500">Stars</p>
              <p className="mt-1 text-sm font-semibold text-white">
                {repository.stars.toLocaleString()}
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/60 p-3">
              <p className="text-xs text-slate-500">Forks</p>
              <p className="mt-1 text-sm font-semibold text-white">
                {repository.forks.toLocaleString()}
              </p>
            </div>
          </div>
        </section>
      )}

      <p className="mt-3 text-center text-xs text-slate-500">
        Enter a public GitHub repository URL to validate and inspect its basic
        details.
      </p>
    </div>
  );
}