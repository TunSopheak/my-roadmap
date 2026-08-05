# Roadmap documents

| File | Purpose |
|---|---|
| [`roadmap.tex`](./roadmap.tex) | Complete printable XeLaTeX roadmap |
| [`five-year-strategy.md`](./five-year-strategy.md) | High-level strategy from Aug 2026 to Aug 2031 |
| [`action-plan-2026-2027.md`](./action-plan-2026-2027.md) | Monthly execution plan from Aug 2026 to Dec 2027 |

## Compile locally

```bash
cd roadmap
xelatex -interaction=nonstopmode -halt-on-error roadmap.tex
xelatex -interaction=nonstopmode -halt-on-error roadmap.tex
```

The document prefers `Khmer OS Siemreap` and falls back to `Noto Sans Khmer` or `Hanuman`.
