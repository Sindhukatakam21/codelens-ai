"use client";

import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="CodeLens AI home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
            C
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            CodeLens AI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#repository-form"
          className="hidden rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-block"
        >
          Try it now
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-white md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-800 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-slate-300 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#repository-form"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950"
            >
              Try it now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}