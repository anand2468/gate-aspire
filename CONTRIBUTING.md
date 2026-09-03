# Contributing to GATE Aspire 🚀

Thank you for your interest in contributing to **GATE Aspire**! We are an open community platform dedicated to providing 100% free, high-quality study materials, subject courses, solved previous year questions (PYQs), and topic-wise practice sets for GATE Computer Science & Engineering aspirants.

Whether you want to add new subject notes, write PYQ solutions, fix typos, format KaTeX formulas, or improve the web interface, your contributions are warmly welcomed!

---

## 📚 Table of Contents

- [How You Can Contribute](#-how-you-can-contribute)
- [Getting Started](#-getting-started)
- [Directory Structure](#-directory-structure)
- [Adding or Editing Subject Notes (MDX)](#-adding-or-editing-subject-notes-mdx)
- [Frontmatter & SEO Guidelines](#-frontmatter--seo-guidelines)
- [KaTeX Math Formatting Guidelines](#-katex-math-formatting-guidelines)
- [Submitting a Pull Request](#-submitting-a-pull-request)
- [Code of Conduct](#-code-of-conduct)

---

## 💡 How You Can Contribute

1. **Subject Notes & Content**: Write or refine concept notes for GATE CS subjects (Engineering Maths, Discrete Maths, Operating Systems, Digital Logic, C Programming, Algorithms, etc.).
2. **GATE Solved PYQs**: Add step-by-step solutions, alternative methods, or shortcut tips for past GATE questions.
3. **Formula Sheets & Revision Guides**: Summarize key formulas and rapid revision cheat-sheets.
4. **Fixing Errors**: Correct typos, formatting glitches, or mathematical inaccuracies in existing docs.
5. **Code & Web UI**: Enhance site design, accessibility, SEO, or new feature implementations.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20.0 or higher)
- `npm` or `yarn` / `pnpm`
- Git

### Local Setup Workflow

1. **Fork the Repository**:
   Click the **Fork** button at the top right of the [GATE Aspire GitHub Repository](https://github.com/anand2468/gate-aspire).

2. **Clone your Fork**:
   ```bash
   git clone https://github.com/<your-username>/gate-aspire.git
   cd gate-aspire
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start Local Development Server**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser to preview your changes live.

5. **Typecheck & Build Verification**:
   ```bash
   npm run typecheck
   npm run build
   ```

---

## 📁 Directory Structure

```text
gate-aspire/
├── docs/                      # Subject documentation files (MDX)
│   ├── c/                     # C Programming notes
│   ├── dld/                   # Digital Logic Design
│   ├── dm/                    # Discrete Mathematics
│   ├── em/                    # Engineering Mathematics
│   ├── os/                    # Operating Systems
│   └── foreword.mdx           # Index / Syllabus page
├── src/                       # React components, pages, and styles
│   ├── components/            # Reusable React components (SEO, JSON-LD, etc.)
│   ├── css/custom.css         # Global styling & theme tokens
│   └── pages/                 # Homepage (index.tsx) and custom routes
├── static/                    # Images, favicons, robots.txt
├── docusaurus.config.ts       # Main Docusaurus configuration & metadata
└── sidebars.ts                # Sidebar navigation structure
```

---

## 📝 Adding or Editing Subject Notes (MDX)

All subject notes live inside the `docs/` folder in `.md` or `.mdx` format.

When creating a new file or updating an existing one:
1. Place your file in the appropriate subject directory (e.g. `docs/os/process-management.mdx`).
2. Add proper YAML **frontmatter** at the top of the file.

---

## 🏷️ Frontmatter & SEO Guidelines

Every markdown/mdx page must include a structured frontmatter header:

```markdown
---
id: process-management
title: Process Management & CPU Scheduling in Operating System
sidebar_label: Process Management
sidebar_position: 2
description: Master process states, PCB, process state transitions, and CPU scheduling algorithms for GATE Operating System.
keywords: [Operating System GATE, process management, CPU scheduling, GATE OS notes, GATE preparation]
---
```

### Tips for Quality Content:
- Use clear markdown headers (`##`, `###`).
- Highlight important formulas, concepts, or takeaways with blockquotes (`>`) or callouts.
- Include step-by-step examples for solved GATE PYQs.

---

## 𝚺 KaTeX Math Formatting Guidelines

GATE Aspire supports inline and display math using **KaTeX**:

- **Inline Math**: Wrap mathematical symbols in single dollar signs `$ ... $` or `\( ... \)`.
  *Example*: `The matrix order is $m \times n$.`

- **Block / Display Math**: Wrap equations in double dollar signs `$$ ... $$` on their own lines.
  *Example*:
  ```markdown
  $$
  A = \begin{bmatrix}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
  \end{bmatrix}
  $$
  ```

---

## 🔀 Submitting a Pull Request

1. Create a feature branch:
   ```bash
   git checkout -b feature/add-os-memory-management-notes
   ```
2. Commit your changes with a clear message:
   ```bash
   git commit -m "docs(os): add memory management concept notes and GATE PYQs"
   ```
3. Push to your fork:
   ```bash
   git push origin feature/add-os-memory-management-notes
   ```
4. Open a **Pull Request** on the main `gate-aspire` repository explaining your additions or fixes.

---

## 📜 Code of Conduct

Help us keep GATE Aspire an encouraging, respectful, and inclusive space for all learners and contributors. Be collaborative, constructive, and supportive!

Happy Contributing & All the Best for GATE! 🎓
