# Weber

Weber is a premium technology brand. Its first product is professional website design and development — but the underlying mission is broader: **Building Trust Through Technology**.

## Project Overview

Weber does not sell websites. Weber builds digital trust. A customer purchasing a website from Weber is really purchasing credibility, professionalism, confidence, and business growth — the website is simply the medium that delivers those outcomes.

Long-term, Weber is intended to grow from a web development company into a broader technology ecosystem (education, a client portal, SaaS tools, developer resources) while keeping its core identity stable across every future product.

## Purpose

This repository is the home of the Weber project: its governing constitution, its documentation system, and — once approved — its application source code.

**Current status:** Version 1 implementation is underway. The Constitution has been adopted, the documentation system has been established, and the core technology stack has been approved (`docs/DECISIONS.md` WD-014–WD-026 — Next.js, TypeScript, Tailwind CSS, shadcn/ui, PostgreSQL/Prisma, and more; full list in `docs/ARCHITECTURE.md` §0). Application code and UI now exist under `src/`; several categories (hosting, authentication, CMS, and others) remain undecided.

## Folder Structure

```
Weber/
├── docs/                     Documentation hub (see below)
├── public/                   Static assets served as-is
├── src/                      Application source (Next.js App Router)
├── weber logo.png             Official brand asset — single source of truth for the logo
└── README.md                  This file
```

## How to Start the Project

```
pnpm install
pnpm dev
```

Hosting/deployment is still undecided; the above runs the project locally only.

## Documentation

All project documentation lives in [`docs/`](./docs):

| Document | Purpose |
|---|---|
| [`PROJECT_CONSTITUTION.md`](./docs/PROJECT_CONSTITUTION.md) | The full, unmodified governing document — highest authority for every decision. |
| [`PROJECT_ROADMAP.md`](./docs/PROJECT_ROADMAP.md) | Vision, current stage, version goals, and long-term direction. |
| [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | Technical architecture — decided items and open placeholders. |
| [`PROJECT_STRUCTURE.md`](./docs/PROJECT_STRUCTURE.md) | Logical project organization — companion to `ARCHITECTURE.md`. |
| [`ROUTES.md`](./docs/ROUTES.md) | Product-level routing specification — destinations, navigation, user journeys, CTAs. |
| [`INFORMATION_ARCHITECTURE.md`](./docs/INFORMATION_ARCHITECTURE.md) | Official, consolidated site structure, content organization, and page relationships for Version 1. |
| [`UX_SPECIFICATION.md`](./docs/UX_SPECIFICATION.md) | Official interaction and experience specification — states, navigation, forms, loading, feedback, accessibility. |
| [`DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) | Official Design System — component philosophy, classification, variants, and cross-surface consistency model. |
| [`components/`](./docs/components/01_FOUNDATIONS.md) | Component Library — one document per component category, governed by `components/01_FOUNDATIONS.md` (documentation standard, lifecycle, naming, dependency rules). Layout is complete (9 components, `02_LAYOUT.md`); Utilities has 2 components documented but remains open (`09_UTILITIES.md`); other categories not yet started. |
| [`DECISIONS.md`](./docs/DECISIONS.md) | Architectural & product decision log — the primary source of truth for approved decisions. |
| [`DEVELOPMENT_GUIDE.md`](./docs/DEVELOPMENT_GUIDE.md) | Branching, implementation, approval, review, testing, deployment, and documentation workflows. |
| [`CODING_STANDARDS.md`](./docs/CODING_STANDARDS.md) | Naming, folder, component, accessibility, and performance standards. |
| [`UI_FOUNDATION.md`](./docs/UI_FOUNDATION.md) | Visual philosophy underlying the Design System — precedes Design Tokens. |
| [`DESIGN_TOKENS.md`](./docs/DESIGN_TOKENS.md) | Official numeric design tokens — typography, spacing, radius, elevation, motion, breakpoints, containers. |
| [`UI_UX_GUIDELINES.md`](./docs/UI_UX_GUIDELINES.md) | Design principles, interaction, spacing, typography, animation, accessibility, responsiveness. |
| [`BRAND_GUIDELINES.md`](./docs/BRAND_GUIDELINES.md) | Mission, personality, tone, logo usage, color, typography, brand values. |
| [`CHANGELOG.md`](./docs/CHANGELOG.md) | Version history, once releases begin. |

## Development Philosophy

- **Trust before beauty.** If a beautiful design reduces clarity, choose clarity.
- **Think before building.** Every task follows: understand → analyze → plan → (approval if needed) → implement → verify → report.
- **No assumptions.** Missing information is never guessed or invented — it is asked about and confirmed.
- **No silent changes.** Files are never renamed, deleted, or restructured, and architecture is never changed, without explanation and (where required) approval.
- **Systems, not pages.** Every feature should strengthen an existing system (design, navigation, component, content) rather than becoming an isolated one-off.

See `docs/PROJECT_CONSTITUTION.md` for the complete governing philosophy.

## Important Rules

- The Project Owner is the sole authority on business, brand, UX, product, and roadmap decisions. The AI/engineering role may recommend but never decide unilaterally on these.
- Nothing in `docs/PROJECT_CONSTITUTION.md` may be modified without explicit Project Owner approval — it is copied verbatim into the documentation set and must stay that way.
- Any new architectural or product decision must be logged in `docs/DECISIONS.md` at the time it is approved.
- Placeholders marked `[PLACEHOLDER — Pending Project Owner Decision]` throughout `docs/` are intentional — they mark points where a real decision is required before further work proceeds, per the Constitution's Assumption Policy.
