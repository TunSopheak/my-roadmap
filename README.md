# My Roadmap

A living career-and-life operating system for **Tun Sopheak**, a Year-4 Computer Science student at RUPP (evening class E8), covering **August 2026 to August 2031**.

[![Roadmap quality checks](https://github.com/TunSopheak/my-roadmap/actions/workflows/quality-checks.yml/badge.svg)](https://github.com/TunSopheak/my-roadmap/actions/workflows/quality-checks.yml)

## North Star

Become a dependable **Software Engineer** who can own a feature from requirement and design through implementation, testing, deployment, documentation, and support.

## Current priorities

1. **Career and skills** - refresh Full-Stack Web Development, learn Flutter deeply, strengthen English, and build **Love my ស្ទីល**.
2. **Competition** - prepare seriously for the **Kibo Robot Programming Challenge** using reproducible simulations and evidence.
3. **Life and finance** - secure full-time technology income and build a responsible wedding fund for 2027.
4. **Long-term optionality** - study 30-45 minutes daily for the civil-service clerk examination.

## Repository map

```text
my-roadmap/
├── src/                         # Interactive React roadmap
├── roadmap/
│   ├── roadmap.tex              # Printable XeLaTeX master document
│   ├── five-year-strategy.md
│   └── action-plan-2026-2027.md
├── evidence/                    # Public-safe proof of completed work
├── reviews/                     # Weekly, monthly, and yearly review indexes
├── templates/                   # Reusable review and case-study templates
└── .github/workflows/           # Automated React + XeLaTeX validation
```

## Interactive roadmap

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

The project is configured for GitHub Pages at:

`https://TunSopheak.github.io/my-roadmap`

## Printable roadmap

```bash
cd roadmap
xelatex -interaction=nonstopmode -halt-on-error roadmap.tex
xelatex -interaction=nonstopmode -halt-on-error roadmap.tex
```

The LaTeX document prefers **Khmer OS Siemreap** and falls back to **Noto Sans Khmer** or **Hanuman**.

GitHub Actions also compiles the PDF and stores it as the `tun-sopheak-roadmap-pdf` workflow artifact.

## Review rhythm

- **Daily:** choose one must-win task.
- **Weekly:** review evidence and select three must-wins.
- **Monthly:** update outcomes, KPI progress, and the next month's plan.
- **Yearly:** revise the strategy using real evidence, not optimistic titles or arbitrary financial projections.

## Safety and privacy

Never commit passwords, API keys, private employer code, restricted Kibo material, identity documents, bank details, or sensitive family information.
