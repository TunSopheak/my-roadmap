# My Roadmap

A visual, interactive, and printable career-and-life planning system for **Tun Sopheak**, a Year-4 Computer Science student at RUPP (evening class E8), covering **August 2026 to August 2031**.

[![Roadmap quality checks](https://github.com/TunSopheak/my-roadmap/actions/workflows/quality-checks.yml/badge.svg)](https://github.com/TunSopheak/my-roadmap/actions/workflows/quality-checks.yml)

## North Star

Become a dependable **Software Engineer** who can own a feature from requirement and design through implementation, testing, deployment, documentation, and support.

## Version 2 planner system

The roadmap now has two synchronized formats:

- **Interactive React planner** - icon-based 2026-2027 timeline, editable yearly plans, editable monthly plans, checklists, search, filtering, browser-local saving, and print support.
- **Printable XeLaTeX planner** - 33 A4 pages with an icon legend, visual 2026-2027 roadmap, yearly sheets for 2026-2031, monthly sheets from August 2026 to December 2027, quarterly reviews, and year-end reflections.

The website stores personal planner entries only in the current browser using `localStorage`; they are not uploaded to GitHub.

## Current priorities

1. **Career and skills** - refresh Full-Stack Web Development, learn Flutter deeply, strengthen English, and build **Love my ស្ទីល**.
2. **Competition** - prepare seriously for the **Kibo Robot Programming Challenge** using reproducible simulations and evidence.
3. **Life and finance** - secure full-time technology income and build a responsible wedding fund for 2027.
4. **Long-term optionality** - study 30-45 minutes daily for the civil-service clerk examination.

## Repository map

```text
my-roadmap/
├── src/
│   ├── Infographic.jsx          # Interactive planner UI
│   ├── roadmapData.js           # Shared roadmap, year, month, and icon data
│   └── index.css                # Responsive and print styles
├── roadmap/
│   ├── roadmap.tex              # 33-page printable planner source
│   ├── roadmap.pdf              # Printable planner
│   ├── planner-guide.md         # How the two formats work
│   ├── five-year-strategy.md
│   └── action-plan-2026-2027.md
├── evidence/                    # Public-safe proof of completed work
├── reviews/                     # Weekly, monthly, and yearly review indexes
├── templates/                   # Reusable review and case-study templates
└── .github/workflows/           # Automated React + XeLaTeX validation
```

## Interactive roadmap

```bash
npm ci
npm start
```

Production build and deployment:

```bash
npm run build
npm run deploy
```

Live website: `https://tunsopheak.github.io/my-roadmap/`

## Printable roadmap

Compile with XeLaTeX:

```bash
cd roadmap
xelatex -interaction=nonstopmode -halt-on-error roadmap.tex
xelatex -interaction=nonstopmode -halt-on-error roadmap.tex
```

The document uses **Noto Sans** for Latin text, **Noto Sans Khmer** for Khmer text, and **Font Awesome 5** for category icons.

GitHub Actions also compiles the PDF and stores it as the `tun-sopheak-roadmap-pdf` workflow artifact.

## Review rhythm

- **Daily:** choose one must-win task.
- **Weekly:** review evidence and select three must-wins.
- **Monthly:** update outcomes, category actions, evidence, money, lessons, and the next month.
- **Quarterly:** review what worked, what failed, and the next three outcomes.
- **Yearly:** revise the strategy using real evidence, not optimistic titles.

## Safety and privacy

Never commit passwords, API keys, private employer code, restricted Kibo material, identity documents, bank details, or sensitive family information.
