# Weber — Technical Architecture Specification

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and must remain consistent with `DECISIONS.md` (the record of what has actually been approved). Every statement below either (a) restates an approved Constitution principle, (b) restates a logged decision from `DECISIONS.md`, or (c) is explicitly marked `[PENDING PROJECT OWNER DECISION]`. Nothing here is invented.

**Status:** Architectural philosophy and principles are finalized. The core technology stack was approved in Technology Stack Finalization — Phase 2. Concrete implementation choices (folder structure, routing scheme, formal API design, hosting) remain open and are marked accordingly throughout.

---

## 0. Approved Technology Stack

Approved in full via `DECISIONS.md` WD-014–WD-026, WD-114–WD-128, WD-135. This table is a reference index — `DECISIONS.md` remains the source of truth for rationale and alternatives considered.

| Layer | Decision | Reference |
|---|---|---|
| Frontend framework | React | WD-011 |
| Frontend meta-framework | Next.js (App Router) | WD-014 |
| Programming language | TypeScript | WD-015 |
| Styling | Tailwind CSS | WD-016 |
| UI component system | shadcn/ui on Radix UI | WD-017 |
| Animation | Motion (Framer Motion) | WD-018 |
| Icons | Lucide React | WD-019 |
| Forms | React Hook Form | WD-020 |
| Validation | Zod | WD-021 |
| State management (client) | Zustand | WD-022 |
| Internationalization | next-intl | WD-023 |
| Database | PostgreSQL | WD-024 |
| ORM | Prisma ORM | WD-025 |
| Backend architecture (V1) | Next.js Route Handlers + Server Actions | WD-026 |
| Package manager | pnpm | WD-114 |
| Node.js version policy | Active LTS, event-driven updates | WD-115 |
| Source directory | `src/` adopted | WD-116 |
| Import alias | `@/*` | WD-116 |
| Bootstrap tooling | ESLint installed (tool only); Turbopack for `next dev` only | WD-116 |
| Physical project structure (top level) | Hybrid model — `app/`, `components/`, `features/`, `content/`, `lib/`, `providers/`; full detail in `PROJECT_STRUCTURE.md` §11 | WD-117–WD-120 |
| ESLint rule policy | Correctness-first, maintainability-first, moderate rule set; accessibility, React, React Hooks, `@typescript-eslint` (base), `no-explicit-any`, `no-debugger`, `prefer-const`, `no-var` approved; import-boundary enforcement approved in direction for WD-068 | WD-121 |
| Formatting (Prettier) | "Defer to Prettier defaults unless an approved Weber principle requires otherwise"; trailing commas, JSX formatting, LF line endings, end-of-file newline approved; `docs/` excluded from automatic formatting | WD-122 |
| Editor consistency (EditorConfig) | `root=true`, `charset=utf-8`, Markdown whitespace protection approved; `end_of_line`/`insert_final_newline` reflect WD-122, not independent decisions | WD-123 |
| Git hook orchestration (Husky) | Adopted; `pre-commit` is the only approved hook, orchestrating already-approved ESLint/Prettier only; `commit-msg`, `pre-push`, `post-merge`, `post-checkout` deferred; not a Bootstrap requirement | WD-124 |
| pre-commit payload (lint-staged) | Adopted; ESLint and Prettier on staged files only, `docs/` excluded per WD-122; type checking, testing, build execution, generated files, Prisma-specific behavior, `package.json`-specific behavior, and image optimization all deferred; completes the pre-commit pipeline, not a Bootstrap blocker | WD-125 |
| Next.js version policy | Active Major, deliberately pinned, never floating; upgrades event-driven, never calendar-driven; concrete version still pending | WD-126 |
| Next.js concrete version | **Next.js 16** — resolves the version number WD-126 left open; mechanically enables the Node.js version lookup, `engines`, and `.nvmrc`; makes React Compiler and Production Turbopack evaluable (neither approved) | WD-127 |
| Node.js concrete version | **Node.js 24** (Active LTS) — resolves the version number WD-115 left open; mechanically resolves `package.json` `engines`, `.nvmrc`, local development runtime, and CI runtime baseline; introduces no new architectural policy | WD-128 |
| Class name composition | **clsx + tailwind-merge** (a single `cn()` helper) — official for class composition and Tailwind conflict resolution; CVA evaluated and explicitly deferred, not rejected, until a component needs genuine variant management; documentation Finalization only, neither package installed yet | WD-135 |

**Explicitly not decided by this approval** (per `DECISIONS.md` Pending Decisions): Authentication, Email Provider, Analytics, Monitoring, Logging, Error Tracking, Hosting/deployment platform, File Upload Strategy, Content Management/CMS, Blog implementation, formal API design/versioning, a server-state library, and design token values beyond color/theme. **The specific import-boundary plugin/configuration, ESLint numeric thresholds (`complexity`, `max-lines`, `max-params`) and mechanical naming-convention enforcement, print width, quote style, semicolons, `indent_size`/`tab_width`, `indent_style`, JSON/YAML formatting, commit message convention, testing framework, branch strategy, React Compiler, production Turbopack (both evaluable following the concrete Next.js and Node.js versions, but not approved — WD-127, WD-128), scripts, and CI platform configuration remain separate, still-open Bootstrap-level decisions**, not resolved by the package manager, Node.js policy, Node.js concrete version, `create-next-app` configuration, ESLint rule policy, Prettier, EditorConfig, Husky, lint-staged, Next.js version policy, or Next.js concrete version decisions above. **Variant management** (class-variance-authority or an alternative) **remains explicitly deferred, not decided** (WD-135) — to be revisited when a component with genuine variant management is next approved; `shadcn init`, the `components/ui/` placement question (`PROJECT_STRUCTURE.md` §11.6), and `cn()`'s exact file location also remain open, unresolved by the class-composition strategy decision above. **Physical folder structure beneath the approved top level** (route grouping within `app/`, each feature's internal file layout, component-file conventions, file naming) also remains open — see `PROJECT_STRUCTURE.md` §11.6.

---

## 1. Architectural Philosophy

Weber's architecture exists to serve the Constitution's Engineering Values (`PROJECT_CONSTITUTION.md`, Part 5): reliability, maintainability, scalability, performance, security, readability, reusability, consistency, and developer experience. Five principles govern every architectural choice made on this project:

- **Long-term maintainability.** The codebase must remain understandable by a professional engineering team years after it was written, without requiring major rewrites (Part 5 — Engineering Mission). Architecture is modular, layered, composable, and avoids tight coupling (Part 5 — Architecture Principles).
- **Scalability.** Every architectural decision is evaluated against Weber's future expansion into an educational platform, a client portal, a SaaS product, and a multi-language experience. If an architecture would not support that future, it must be reconsidered before approval (Part 5 — Scalability; Part 8 — Future Scalability Review; Part 9 — Long-Term Thinking).
- **Simplicity.** The simplest solution that fully solves the problem is preferred. Complexity is expensive, creates bugs, and reduces trust (Part 10 — Simplicity Wins). No feature or abstraction is introduced speculatively, ahead of an actual need (Part 5 — Reusability).
- **Performance-first.** Performance is treated as part of user experience, not an afterthought (Part 4 — Performance Equals UX; Part 5 — Performance). Per Amendment 1 (`DECISIONS.md` WD-010), no feature may be added if it noticeably degrades performance without delivering equivalent user value — this is a gate applied during planning, not a cleanup applied afterward.
- **Security-first.** Security is a requirement, not a feature (Part 5 — Security). Per Amendment 1 (`DECISIONS.md` WD-010), the AI may generate security-related code but may never unilaterally decide the underlying security approach — see §9 below.

---

## 2. System Architecture Overview

At a conceptual level, the system is organized into four responsibility layers. The physical directory each maps to is now approved (`DECISIONS.md` WD-117; full detail in `PROJECT_STRUCTURE.md` §11):

| Layer | Responsibility | Status |
|---|---|---|
| **UI** | Renders interface elements (buttons, cards, inputs, layout primitives). Owns presentation only. | Tech decided — React, shadcn/ui on Radix, Tailwind (WD-011, WD-017, WD-016); physical home — `components/`, mirroring the Component Library's eight categories (WD-117) |
| **Features** | Composes UI into functional product experiences (e.g., the Interactive Showcase, the Contact flow). Owns feature-specific logic and state. | Principle approved (feature-based organization, Part 5 — File Organization); state tooling decided (Zustand, opt-in — WD-022); physical home — `features/`, feature-first internally (WD-117); each feature's own internal file layout remains `[PENDING PROJECT OWNER DECISION]` |
| **Content** | Holds business/marketing content (copy, offerings, pricing language, testimonials) independent of how it is rendered. | Principle approved — Amendment 1 Content/Component Separation Rule (`DECISIONS.md` WD-010); physical home — `content/` (WD-117); storage mechanism (CMS vs. Git-based) `[PENDING PROJECT OWNER DECISION]` |
| **Infrastructure** | Backend services, data persistence, hosting, deployment. | Backend architecture, database, and ORM decided — Next.js Route Handlers/Server Actions, PostgreSQL, Prisma (WD-026, WD-024, WD-025); physical home — `lib/`, scope-disciplined (WD-117); hosting `[PENDING PROJECT OWNER DECISION]` |

Per the Constitution's File Organization principle, the concrete structure must remain predictable, avoid deep nesting, and organize by feature. The top-level physical structure beneath `src/` (`DECISIONS.md` WD-116) is now approved as a Hybrid model — layer-first at the top, feature-first within `features/` — with required directories, directories intentionally not created yet, and directories rejected outright all explicitly recorded (`DECISIONS.md` WD-117–WD-120; full detail in `PROJECT_STRUCTURE.md` §11). Route grouping within `app/`, each feature's internal file layout, and file naming conventions remain open (see §3 constraint note below and `DECISIONS.md` Pending Decisions).

**Current actual repository state** (for reference, not as an architectural decision):

```
Weber/
├── docs/                 (documentation system)
└── weber logo.png         (official brand asset)
```

No `src/`, application, or configuration structure has been physically created yet — `src/` and `@/*` are approved (`DECISIONS.md` WD-116) but not yet instantiated, since Bootstrap itself has not run.

---

## 3. Application Architecture

Approved, from the Constitution's Engineering Constitution (Part 5):

- **Separation of Concerns.** Each module has one clear responsibility: UI components render, business logic processes, the data layer stores data, the API layer communicates, validation verifies input, authentication manages identity. Each responsibility belongs in its own layer.
- **Single Responsibility Principle.** Every component, function, module, and service has one reason to change. Files that solve multiple unrelated problems are avoided.
- **Reusability, not over-engineering.** Functionality expected to be reused is extracted into a shared abstraction; functionality used once is not prematurely abstracted.
- **Naming.** Names describe intent immediately, without abbreviation (e.g., `createProject()`, `isAuthenticated()`).

Backend architecture pattern is decided: Next.js Route Handlers and Server Actions, no separate backend service for V1 (`DECISIONS.md` WD-026). Top-level directory names are now decided (`DECISIONS.md` WD-117; `PROJECT_STRUCTURE.md` §11) — Server Actions live colocated with their owning feature inside `features/`, not in a separate top-level directory (WD-119 explicitly rejects `actions/` as a duplicate). Concrete module boundaries within each layer remain `[PENDING PROJECT OWNER DECISION]`.

---

## 4. Routing Architecture

**High-level philosophy (approved):** URLs are clean; routing changes are never made silently (Part 5 — SEO; Part 7 — No Silent Changes). Routing must never interrupt the Confidence Journey — the emotional progression a visitor moves through on the site (Part 4 — The Confidence Journey).

**Public pages:** The Constitution defines a set of experience *sections*, each with exactly one job — Hero (introduce Weber), Services (explain problems solved), Portfolio (build credibility), Interactive Showcase (help visitors visualize success), Testimonials (reduce uncertainty), FAQ (remove objections), Contact (convert confidence into action) (Part 4 — Every Section Has One Job). Two additional Home page sections, Why Weber and Process, and the Blog as a Version 1 destination, were approved during Information Architecture Synchronization (`DECISIONS.md` WD-039, WD-041, WD-042). **Weber officially uses a multi-route architecture — each Version 1 destination is a distinct route, not a section of a single scrolling page** (`DECISIONS.md` WD-043). This resolves what was previously an open question.

**Future expansion strategy:** Routing must remain compatible with future additions (the Learning Platform — confirmed Version 2, with Version 1 required to stay architecturally prepared for it, `DECISIONS.md` WD-038 — a client portal, a student portal — Part 1 — Long-Term Mission) without requiring architectural rework. Routing technology and multi-route structure are decided (Next.js App Router — WD-014; multi-route — WD-043); exact URL scheme and expansion-route naming: `[PENDING PROJECT OWNER DECISION]`.

---

## 5. Component Architecture

Approved principles (Part 5 — Component Philosophy; Part 6 — Component Consistency):

- **Reusable components.** Components are reusable, independent, predictable, accessible, small, and composable. One component solves one problem (buttons trigger actions, cards group information, dialogs request attention, badges communicate status, inputs collect information). Giant, multi-purpose components are avoided. Some primitives stay genuinely reusable specifically by remaining value-agnostic mechanisms rather than deciding their own configuration — Grid provides responsive column-arrangement infrastructure but no default column counts, leaving those to each consuming component (`DECISIONS.md` WD-137).
- **Feature-based organization.** The Constitution's File Organization principle directs organizing by feature whenever practical, keeping structure predictable and avoiding deep nesting or oversized directories.
- **Shared UI philosophy.** Components with identical purposes must always look and behave identically — this is what makes the Design System (§8) a language rather than a component library. Every interactive element clearly communicates its state (default, hover, focus, pressed, disabled, loading, success, error).

Frontend framework: **React** (`DECISIONS.md` WD-011), built with **shadcn/ui on Radix UI primitives** (`DECISIONS.md` WD-017) and styled with **Tailwind CSS** (`DECISIONS.md` WD-016). Top-level directory layout is decided — `components/` mirrors the Component Library's eight documented categories directly (`DECISIONS.md` WD-117; `PROJECT_STRUCTURE.md` §11). Whether shadcn/ui's own raw primitive output (`components/ui/`) sits alongside or beneath those category folders, along with file extensions and props typing patterns, remain `[PENDING PROJECT OWNER DECISION]`.

---

## 6. Content Architecture

**Separation of content from UI (approved — Amendment 1, `DECISIONS.md` WD-010):** content must never live inside a React component unless it is truly UI-specific (e.g., a label that exists only because of that specific interaction). Business, marketing, and product content — copy, offerings, pricing language, testimonials — is kept separate from component code and referenced or passed in, not hardcoded.

**MDX/content strategy:** No content storage or authoring technology (MDX, a CMS, structured content files, a database-backed content model, etc.) has been evaluated or approved — Content Management was explicitly excluded from Technology Stack Finalization Phase 2. `[PENDING PROJECT OWNER DECISION]`

**Localization-ready structure:** The Constitution names multi-language support as a future scalability consideration that architecture must remain compatible with (Part 5 — Scalability; Part 8 — Future Scalability Review: "Multi-language Website"), and Arabic/English are the confirmed target languages (`DECISIONS.md` WD-012). The i18n library is now decided — **next-intl** (`DECISIONS.md` WD-023). Translation-file format, locale-routing scheme, and launch-language sequencing remain `[PENDING PROJECT OWNER DECISION]`.

---

## 7. Data Flow Architecture

**Single Source of Truth (approved — Amendment 1, `DECISIONS.md` WD-010):** every piece of data has exactly one authoritative origin. No value may be duplicated across multiple stores, components, or state containers in a way that allows copies to drift out of sync — everything else derives from or references that single source.

**Conceptual flow direction:** consistent with the layer separation in §2 and the Constitution's Separation of Concerns (Part 5), data conceptually originates in Content or Infrastructure, is composed by Features, assembled into Pages, and rendered by Components down to UI. The client-state library is decided — **Zustand**, used only when state is genuinely shared, per `DECISIONS.md` WD-022 — and the data layer runs through **Prisma ORM** over **PostgreSQL** (`DECISIONS.md` WD-025, WD-024). A server-state/data-fetching library (e.g., for future dashboard use) and any formal API contract remain `[PENDING PROJECT OWNER DECISION]`.

---

## 8. Design System Architecture

Approved (Part 6 — Design System Constitution; `DECISIONS.md` WD-002, WD-003):

- **Design tokens.** The Design System is driven by tokens — not hardcoded values — for color, spacing, typography, border radius, elevation, animation, transitions, breakpoints, opacity, and sizing. Future visual changes happen at the token level, not by editing individual components. **Tailwind CSS** (`DECISIONS.md` WD-016) is the mechanism that enforces this — tokens live in its theme configuration, not in component files. The concrete mechanism is now resolved (`DECISIONS.md` WD-134): Tailwind v4's native `@theme` block in `src/app/globals.css` is the single source of truth — no separate hand-authored CSS-variables file, no `tailwind.config.ts` theme extension. Every `@theme` entry is automatically both a Tailwind utility and a real CSS custom property. This is a documentation decision only; `globals.css` has not yet been edited to reflect it.
- **Approved token values:** the full token set — typography scale, font weights, line-height, spacing scale, border radius, elevation (including shadow-rendering strategy), motion, breakpoints, container widths, neutral scale, and z-index — is approved and documented in full in [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md) (`DECISIONS.md` WD-027–WD-036, WD-129–WD-134). Color palette: Background `#0B0C0F`, Primary `#FFFFFF`, Secondary `#D4D4D8`, Accent `#71717A` (WD-002); dark theme as the primary/default experience (WD-003). Semantic color roles and their hex values are fully approved (WD-036, WD-130). Font family: Geist Sans / Geist Mono (WD-131).
- **Consistency rules.** Buttons, cards, forms, and navigation patterns behave identically wherever they appear. Every page must feel like it belongs to the same company (Part 2 — Brand Consistency).
- **Accessibility-first.** Accessibility is built into the Design System from the start, not added later: proper contrast, keyboard accessibility, visible focus indicators, readable font sizes, accessible spacing, touch-friendly targets (Part 6 — Accessibility).

---

## 9. Security Principles

High-level only — this document does not define specific security mechanisms. The detailed specification lives in `docs/SECURITY_POLICY.md` (`DECISIONS.md` WD-101–WD-103), which is now official — see note under §12 below.

- Security is a requirement, not a feature (Part 5 — Security).
- Secure defaults are followed; authentication, authorization, API routes, sensitive data, environment variables, uploads, cookies, sessions, and database access are all protected. Secrets are never exposed, hardcoded, or logged (Part 5 — Security, Logging).
- Input is never trusted — validated client-side, server-side, and at the database level where appropriate (Part 5 — Validation).
- Per Amendment 1 (`DECISIONS.md` WD-010): **the AI may generate and implement security-related code, but may never independently decide the underlying security approach** — authentication method, encryption strategy, authorization model, or session strategy. These require an explicit proposal with trade-offs and Project Owner approval before implementation.

No authentication method, encryption approach, or authorization model has been chosen. `[PENDING PROJECT OWNER DECISION]`

---

## 10. Performance Principles

High-level only — this document does not define specific performance budgets or tooling. The detailed specification lives in `docs/PERFORMANCE_GUIDE.md` (`DECISIONS.md` WD-104–WD-106), which is now official — see note under §12 below.

- Performance is part of the user experience: a fast site feels trustworthy, a slow one feels unreliable (Part 4 — Performance Equals UX).
- Optimization targets images, fonts, JavaScript bundles, database queries, network requests, and animations — measured before optimizing, never prematurely (Part 5 — Performance).
- Per Amendment 1 (`DECISIONS.md` WD-010): **no feature may be added if it noticeably degrades performance without delivering equivalent user value.** This is evaluated during Phase Planning and the Performance Review step of the Architect Review Mindset (Part 8), not discovered after the fact.

No performance budgets, targets, or monitoring tooling have been chosen. `[PENDING PROJECT OWNER DECISION]` — tracked in `docs/PERFORMANCE_GUIDE.md` §2 (Performance Decision Boundaries) and §4 (Pending Decisions).

---

## 11. Future Expansion Strategy

Approved direction (Part 1 — Long-Term Mission; Part 3 — Future Growth; `PROJECT_ROADMAP.md`):

- **Version 2 readiness.** No Version 2 scope has been approved (`PROJECT_ROADMAP.md` — Version 2 Goals is a placeholder). The only architectural constraint currently approved is that today's decisions must not foreclose future expansion (Part 9 — Long-Term Thinking).
- **Educational platform integration.** Confirmed as a Version 2 direction (the Learning Platform — `DECISIONS.md` WD-038), explicitly **not** part of Version 1 scope, though Version 1's architecture must remain prepared for it (Part 1; Part 3 — Future Growth). No technical integration approach has been approved. `[PENDING PROJECT OWNER DECISION]`
- **Client Dashboard.** Confirmed as a future direction (Client Portal) under the same identity and mission. No technical approach approved. `[PENDING PROJECT OWNER DECISION]`
- **Additional services.** SaaS Products, Business Tools, Developer Resources, and Community are named as future ecosystem expansions, all continuing to serve "Building Trust Through Technology" rather than becoming separate businesses (Part 1; Part 3 — Product Evolution).

None of these have approved timelines, scopes, or technical designs — see `PROJECT_ROADMAP.md` for the roadmap-level placeholders and `DECISIONS.md` Pending Decisions for what remains open.

---

## 12. Referenced but Not-Yet-Created Documents

`SECURITY_POLICY.md` and `PERFORMANCE_GUIDE.md` were referenced in §9 and §10 as the intended homes for detailed security and performance specifications. **Both now exist.** `SECURITY_POLICY.md` (Security Policy Finalization, `DECISIONS.md` WD-101–WD-103) — its Security Decision Boundaries section (§2) explicitly does not define or imply an authentication mechanism, authorization model, session strategy, or encryption approach, consistent with WD-010. `PERFORMANCE_GUIDE.md` (Performance Guide Finalization, `DECISIONS.md` WD-104–WD-106) — its Performance Decision Boundaries section (§2) explicitly does not define or imply performance budgets, Core Web Vitals targets, caching strategy, monitoring tooling, database optimization strategy, or API optimization strategy.

---

## Pending Decisions Summary

Every item below is referenced somewhere in this document and requires explicit Project Owner approval before it can be turned into a concrete architectural statement. None have been assumed or invented. Items resolved by Technology Stack Finalization Phase 2 (`DECISIONS.md` WD-014–WD-026) — frontend meta-framework, language, styling, UI components, animation, icons, forms, validation, client-state library, i18n library, database, ORM, and V1 backend architecture — have been removed from this list:

- Hosting/deployment platform.
- Authentication method, encryption approach, authorization model (explicitly excluded from Phase 2).
- Content management/CMS strategy (explicitly excluded from Phase 2).
- Folder structure for the application source tree.
- Exact URL scheme and slugs for the core experience destinations (multi-route architecture itself is decided — `DECISIONS.md` WD-043).
- Component conventions beyond the library (file extensions, directory layout, props typing patterns).
- Content storage/authoring format (tied to the still-open Content Management decision).
- Localization implementation specifics (translation-file format, locale-routing scheme, launch sequencing — the library, next-intl, is decided).
- A server-state/data-fetching library.
- Formal API design and versioning specifics.
- Semantic color hex values (roles approved — `DECISIONS.md` WD-036 — values still open).
- Performance budgets, targets, and monitoring tooling.
- Technical approach for Version 2, the educational platform, the client dashboard, and additional future services.

This list is identical in substance to the Pending Decisions section of `DECISIONS.md`; it is repeated here in architectural terms for traceability within this document.

---

## How This Document Is Maintained

Each `[PENDING PROJECT OWNER DECISION]` marker above is replaced with concrete architectural detail only after that decision is proposed, reviewed, and approved by the Project Owner, and logged in `DECISIONS.md`. This document must never contain invented implementation details, and must be re-checked against `PROJECT_CONSTITUTION.md` and `DECISIONS.md` for consistency whenever either changes.
