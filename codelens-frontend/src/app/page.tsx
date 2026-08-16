import Header from "@/components/Header";
import RepositoryForm from "@/components/RepositoryForm";
import { features } from "@/lib/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              AI-powered codebase understanding
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Understand any codebase with{" "}
              <span className="text-cyan-300">CodeLens AI</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Connect a GitHub repository, ask questions in natural language,
              and discover how the code works with evidence-backed answers.
            </p>

            <div className="mt-10 w-full">
              <RepositoryForm />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>Source-cited answers</span>
              <span>•</span>
              <span>Function-level understanding</span>
              <span>•</span>
              <span>Developer-focused</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Built for developers
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Move from searching files to understanding systems.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              CodeLens AI helps developers explore unfamiliar repositories,
              locate important logic, and understand relationships between
              modules.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <p className="text-sm font-bold text-cyan-300">
                  {feature.number}
                </p>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Simple workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                From repository URL to useful answer.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                The application will retrieve repository files, understand
                their structure, and use relevant code as context when
                answering your questions.
              </p>
            </div>

            <div className="space-y-4">
              {[
                [
                  "1",
                  "Connect a repository",
                  "Enter the URL of a public GitHub repository.",
                ],
                [
                  "2",
                  "Index the code",
                  "CodeLens AI processes files, functions, classes, and documentation.",
                ],
                [
                  "3",
                  "Ask questions",
                  "Ask about the codebase and view answers with source references.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
                    {number}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Built as a practical full-stack AI project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            CodeLens AI combines modern frontend development, API integration,
            code parsing, vector search, and retrieval-augmented generation.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 CodeLens AI</p>
          <p>Built for developers who want to understand code faster.</p>
        </div>
      </footer>
    </main>
  );
}