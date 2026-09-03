# 🎯 GATE Aspire

> **Everything You Need to Crack GATE — 100% Free, Open & Community-Driven.**

[GATE Aspire](https://gateaspire.in) is a free online preparation platform designed specifically for **GATE Computer Science & Information Technology (CS & IT)** aspirants. It features structured subject courses, topic-wise notes, solved previous year questions (PYQs), formula cheat-sheets, and practice test series.

---

## 🌟 Key Features

- 📚 **Comprehensive Subject Courses**: Complete concept notes for Core GATE CS subjects:
  - **Engineering Mathematics** (`/em`)
  - **Discrete Mathematics** (`/dm`)
  - **Operating Systems** (`/os`)
  - **Digital Logic Design** (`/dld`)
  - **C Programming** (`/c`)
- 📝 **Solved Previous Year Questions (PYQs)**: Detailed step-by-step solutions with shortcuts and exam techniques.
- 🎯 **Topic-wise Test Series & Practice**: Curated question sets to strengthen concept accuracy.
- 🚸 **KaTeX Math Rendering**: Clean, beautiful inline and block LaTeX mathematical notation.
- ⚡ **SEO & Schema.org Rich Snippets**: Built with automated sitemaps, Open Graph social cards, and JSON-LD structured data (`WebSite`, `Course`, `FAQPage`).
- 📱 **Fluid Responsive Design**: Seamless reading experience across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: [Docusaurus v3](https://docusaurus.io/)
- **Core Logic & UI**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Math Engine**: [KaTeX](https://katex.org/) (`remark-math`, `rehype-katex`)
- **Styling**: Modern Vanilla CSS Modules (`custom.css`, `main.module.css`)
- **Analytics & SEO**: `@docusaurus/plugin-google-gtag`, `@docusaurus/plugin-sitemap`, Schema.org JSON-LD

---

## 📂 Project Structure

```text
gate-aspire/
├── docs/                      # Subject documentation & MDX courses
│   ├── c/                     # C Programming notes
│   ├── dld/                   # Digital Logic Design
│   ├── dm/                    # Discrete Mathematics
│   ├── em/                    # Engineering Mathematics
│   ├── os/                    # Operating Systems
│   └── foreword.mdx           # Index / Syllabus page
├── src/                       # Source code
│   ├── clientModules/         # Client-side bundle modules (gtagInit.ts)
│   ├── components/            # Reusable React components (SEO, JSON-LD)
│   ├── css/custom.css         # Global theme tokens & typography
│   └── pages/                 # Homepage (index.tsx) and custom routes
├── static/                    # Static assets, images, robots.txt
├── CONTRIBUTING.md            # Detailed contribution guidelines
├── docusaurus.config.ts       # Main site configuration & metadata
└── sidebars.ts                # Documentation navigation sidebars
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js >= 20.0** installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/anand2468/gate-aspire.git
cd gate-aspire
npm install
```

### 3. Start Local Development
Run the local dev server:

```bash
npm run start
```
This starts the development server at `http://localhost:3000` with hot reloading.

### 4. Typecheck & Build
Validate TypeScript types and build production static files:

```bash
# Typecheck
npm run typecheck

# Build static production bundle
npm run build
```

The compiled output will be generated inside the `build/` directory.

---

## 🤝 Contributing

Contributions make GATE Aspire better for thousands of GATE aspirants! Whether you want to fix a typo, write new subject notes, add PYQ solutions, or improve UI design, we welcome your help.

Please read our **[Contribution Guide (CONTRIBUTING.md)](./CONTRIBUTING.md)** for detailed instructions on setting up your environment, frontmatter conventions, and pull request workflows.

---

## 📄 License & Attribution

- Built with ❤️ using [Docusaurus](https://docusaurus.io/).
- Content & Code Copyright © 2026 **GATE Aspire**. Open for educational use.
