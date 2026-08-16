import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeLens AI | Understand Any Codebase",
  description:
    "An AI-powered GitHub repository assistant for understanding source code, project structure, and developer workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}