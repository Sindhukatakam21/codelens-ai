# CodeLens AI Wireframes

These wireframes describe the planned website layout before implementation.

## 1. Landing Page

```text
+----------------------------------------------------------+
| CodeLens AI                 Features   How It Works Login |
+----------------------------------------------------------+
|                                                          |
|        Understand Any GitHub Repository                  |
|        Ask questions about code using natural language   |
|                                                          |
|  [ Enter public GitHub repository URL                  ] |
|  [ Analyze Repository ]                                  |
|                                                          |
|  Source-cited answers | Code search | Repository overview |
|                                                          |
+----------------------------------------------------------+
```

## 2. Login Page

```text
+--------------------------------------+
|              CodeLens AI             |
|                                      |
|        Sign in to your account       |
|                                      |
| Email                                |
| [                                  ] |
| Password                             |
| [                                  ] |
|                                      |
| [ Sign In ]                          |
|                                      |
| Do not have an account? Sign up      |
+--------------------------------------+
```

## 3. Dashboard

```text
+----------------------------------------------------------+
| CodeLens AI       Dashboard    Settings    Logout         |
+----------------------------------------------------------+
| My Repositories                          [Add Repository] |
|                                                          |
| +----------------------+  +----------------------+        |
| | owner/repository-1  |  | owner/repository-2  |        |
| | Python               |  | TypeScript          |        |
| | Indexed             |  | Processing          |        |
| | [Open] [Re-index]   |  | [View Progress]     |        |
| +----------------------+  +----------------------+        |
+----------------------------------------------------------+
```

## 4. Add Repository Page

```text
+----------------------------------------------------------+
| Add GitHub Repository                                    |
+----------------------------------------------------------+
|                                                          |
| Public GitHub Repository URL                             |
| [ https://github.com/owner/repository                  ] |
|                                                          |
| [ Start Analysis ]                                       |
|                                                          |
| Example: https://github.com/facebook/react               |
+----------------------------------------------------------+
```

## 5. Indexing Progress Page

```text
+----------------------------------------------------------+
| Analyzing owner/repository                               |
+----------------------------------------------------------+
| Status: Processing                                       |
|                                                          |
| [============================              ] 65%         |
|                                                          |
| Files discovered: 1,250                                  |
| Files processed: 813                                     |
| Code chunks created: 8,420                               |
| Errors: 3                                                |
|                                                          |
| [Cancel Indexing]                                        |
+----------------------------------------------------------+
```

## 6. Repository Overview Page

```text
+----------------------------------------------------------+
| owner/repository                 [Ask Assistant]          |
+----------------------------------------------------------+
| Python  TypeScript  JavaScript                           |
|                                                          |
| Project Summary                                          |
| This repository is a web application that...            |
|                                                          |
| Folder Structure              Important Files            |
| > src/                         package.json               |
| > backend/                     README.md                  |
| > tests/                       Dockerfile                 |
|                                                          |
| [Open Code Explorer]                                     |
+----------------------------------------------------------+
```

## 7. Chat Assistant Page

```text
+----------------------------------------------------------+
| Repository: owner/repository                             |
+----------------------+-----------------------------------+
| Files                | Assistant                         |
|                      |                                   |
| > src                | You: Where is authentication?     |
| > backend            |                                   |
| > tests              | AI: Authentication is handled...  |
|                      |                                   |
|                      | Sources:                          |
|                      | backend/auth/routes.py            |
|                      | Lines 12-64 [Open on GitHub]     |
|                      |                                   |
|                      | [Ask a question...             ]  |
|                      | [Send]                            |
+----------------------+-----------------------------------+
```

## 8. Code Explorer Page

```text
+----------------------------------------------------------+
| Code Explorer                                            |
+----------------------+-----------------------------------+
| Repository Files     | Source Code                       |
|                      |                                   |
| > backend            | backend/auth/routes.py            |
|   > auth             |                                   |
|     routes.py        | 1  from fastapi import APIRouter  |
| > frontend           | 2                                  |
| > tests              | 3  @router.post("/login")         |
|                      | 4  def login_user(...):            |
|                      |                                   |
|                      | [Explain This Function]           |
+----------------------+-----------------------------------+
```