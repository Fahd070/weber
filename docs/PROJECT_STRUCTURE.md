# Weber — Project Structure Specification

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and must remain consistent with `DECISIONS.md` and `ARCHITECTURE.md`. Sections 1–10 describe the project's organization from an architectural perspective — logical categories and responsibilities. **Section 11 is the exception**: the physical `src/` structure is now approved (`DECISIONS.md` WD-116–WD-120) and documented there with real directory names. Every statement below either restates an approved Constitution principle, restates a logged decision from `DECISIONS.md`, or is explicitly marked `[PENDING PROJECT OWNER DECISION]`.
>
> This document is a companion to `ARCHITECTURE.md`: `ARCHITECTURE.md` defines architectural philosophy and system layers; this document defines how those layers translate into a logical project organization, and (§11) the approved physical structure. Where content overlaps, this document cross-references `ARCHITECTURE.md` rather than restating it.

**Status:** Structural philosophy and logical organization are finalized. The technologies that implement these layers are approved (`DECISIONS.md` WD-014–WD-026 — see `ARCHITECTURE.md` §0), and the physical `src/` structure is now approved (§11; `DECISIONS.md` WD-116–WD-120). File naming conventions and each feature's internal sub-structure remain open — see the Pending Decisions Summary.

---

## 1. Project Organization Philosophy

The project is organized around responsibility, not convenience. This serves three approved Constitution principles directly (Part 5 — Engineering Constitution):

- **Maintainability.** Structure must remain predictable — files and logic exist where an experienced developer would expect them, without deep nesting or oversized groupings (Part 5 — File Organization). The codebase should remain understandable years after it was written, without requiring a major rewrite (Part 5 — Engineering Mission).
- **Scalability.** Every organizational choice is evaluated against Weber's future expansion into an educational platform, a client portal, and additional services (Part 5 — Scalability; Part 8 — Future Scalability Review; Part 9 — Long-Term Thinking). Organization is built around systems, not pages (Part 9 — Build Systems, Not Pages).
- **Separation of concerns.** Each part of the project has one clear responsibility — UI renders, content holds meaning, features compose behavior, infrastructure persists and serves data (Part 5 — Separation of Concerns).

---

## 2. High-Level Project Structure

At the highest level, the project separates into six logical categories. These are organizational concepts, not directories:

| Category | Purpose | Status |
|---|---|---|
| **Application Code** | UI, components, features, and pages — everything that renders and drives the product experience. | Principles and implementing technologies approved (§3; `ARCHITECTURE.md` §0); physical layout approved for the top level (§11 — `app/`, `components/`, `features/`; `DECISIONS.md` WD-117); each feature's own internal sub-structure remains `[PENDING PROJECT OWNER DECISION]` |
| **Content** | Business and marketing content, independent of how it is rendered. | Separation principle approved (Amendment 1, `DECISIONS.md` WD-010); physical home approved (§11 — `content/`; WD-117); storage mechanism `[PENDING PROJECT OWNER DECISION]` (CMS explicitly excluded from Technology Stack Finalization Phase 2) |
| **Assets** | Logos, images, icons, illustrations, social images, future media. | Logical categories approved (§7); icon family decided (Lucide React, `DECISIONS.md` WD-019); physical layout deliberately not created under `src/` — belongs in `public/` by framework convention (§11; `DECISIONS.md` WD-118) |
| **Documentation** | `docs/` — governance, planning, technical, process, and design references. | Approved and already in place (§8) |
| **Configuration** | Build, environment, and tooling configuration. | Tech stack now known (`ARCHITECTURE.md` §0); a general-purpose `config/` directory was reviewed and explicitly not created now (§11; `DECISIONS.md` WD-118) |
| **Future Modules** | Space reserved conceptually for Version 2 and ecosystem expansion (education, client dashboard, additional services). | Direction approved (§9); specific future directories identified but deliberately not created (§11; `DECISIONS.md` WD-120) |

This mirrors the four-layer conceptual split in `ARCHITECTURE.md` §2 (UI / Features / Content / Infrastructure), with Assets, Documentation, Configuration, and Future Modules named explicitly at the project-organization level.

---

## 3. Application Layers

Approved responsibility boundaries within Application Code (extends `ARCHITECTURE.md` §2–§5):

- **UI.** The smallest, most generic presentation primitives — the visual vocabulary of the Design System (buttons, inputs, cards, layout primitives). Owns presentation only; carries no business logic and no content (Part 5 — Component Philosophy; Part 6 — Design System Constitution).
- **Shared Components.** Compositions of UI primitives that are reused across more than one feature (e.g., a testimonial card used on both the homepage and a future case-study page). Still carries no feature-specific business logic — reusability is the defining trait (Part 5 — Reusability).
- **Feature Components.** Components specific to a single feature's behavior and internal state (e.g., the Interactive Showcase's business-type selector). Not reused outside their owning feature (§4).
- **Pages.** Compose Feature Components, Shared Components, and UI into a complete, routed experience. Own page-level composition and content wiring — not detailed business logic, which belongs to Features.
- **Content.** Business and marketing content (copy, offerings, pricing language, testimonials), held independently of rendering and never hardcoded inside a component unless truly UI-specific (Amendment 1, `DECISIONS.md` WD-010). Feeds Pages and Features.
- **Infrastructure.** Backend services, data persistence, hosting, and deployment. Backend architecture, database, and ORM are decided — Next.js Route Handlers/Server Actions, PostgreSQL, Prisma ORM (`DECISIONS.md` WD-026, WD-024, WD-025); hosting remains `[PENDING PROJECT OWNER DECISION]`.

Physical implementation of these layers at the top level is now approved — see §11. File-naming conventions and the internal structure of each individual feature remain `[PENDING PROJECT OWNER DECISION]`. The technologies that implement each layer are decided — see `ARCHITECTURE.md` §0 for the full approved stack.

---

## 4. Feature Organization

Each feature is organized as a self-contained unit: it owns its Feature Components, its feature-specific logic and state, and communicates with the rest of the system only through defined boundaries (Pages compose it; it consumes Content and Shared/UI components) — never by reaching directly into another feature's internals. This follows the Constitution's Separation of Concerns and Single Responsibility principles applied at the feature level (Part 5).

Approved / referenced features:

- **Services** — approved as a core experience section (Part 4 — Every Section Has One Job: "explain what problems Weber solves"). Version 1 scope is now confirmed as four services — Website Development, Mobile Applications, Desktop Applications, Templates (`DECISIONS.md` WD-037). Full information architecture for each service is documented in `INFORMATION_ARCHITECTURE.md` §6.
- **Interactive Showcase** — approved as Weber's signature feature, distinct from Portfolio (`DECISIONS.md` WD-005).
- **Portfolio** — approved as a core experience section, distinct from and coexisting with the Interactive Showcase (`DECISIONS.md` WD-005).
- **Contact** — approved as a core experience section ("convert confidence into action," Part 4), following the partnership-toned CTA rule (`DECISIONS.md` WD-007).
- **Blog** — approved as a **Version 1** feature, documented as a content strategy feature (`DECISIONS.md` WD-039). Full information architecture documented in `INFORMATION_ARCHITECTURE.md` §9. Its content storage/authoring technology remains open (tied to the still-open Content Management decision).
- **Client Dashboard (future)** — approved future direction, named explicitly in Part 9 — Long-Term Thinking ("Client Dashboard").
- **Learning Platform (future)** — confirmed as a **Version 2** direction, explicitly not part of Version 1 (`DECISIONS.md` WD-038), named explicitly in Part 8 — Future Scalability Review ("Learning Platform") and Part 1 — Long-Term Vision ("Learning Ecosystem"). Version 1's architecture must remain prepared for its future integration without presenting it as a current service.

Every feature lives inside the approved top-level `features/` directory (§11; `DECISIONS.md` WD-117). No individual feature's *internal* organization (its own sub-structure, file layout) has been decided beyond that top-level container — `[PENDING PROJECT OWNER DECISION]`.

---

## 5. Content Organization

Content remains structurally independent from UI, per the Content/Component Separation Rule (Amendment 1, `DECISIONS.md` WD-010) and the Content Architecture section of `ARCHITECTURE.md` (§6): content is never hardcoded inside a component unless it is genuinely UI-specific.

At the structural level, this means content is organized as its own logical category (§2), addressable and editable independently of any component, feature, or page that happens to render it — so the same content can be reused across multiple surfaces, and content changes never require touching component code.

No content storage or authoring technology (MDX, a CMS, structured content files, etc.) has been approved — this remains `[PENDING PROJECT OWNER DECISION]`, consistent with `ARCHITECTURE.md` §6.

---

## 6. Localization Readiness

Weber's target languages are **Arabic and English** (`DECISIONS.md` WD-012). The internationalization library is now decided — **next-intl** (`DECISIONS.md` WD-023), built for the Next.js App Router (`DECISIONS.md` WD-014).

Structural principle: because content is already required to live independently of UI (§5), the project's structure must not embed assumptions that would block adding a second language later — specifically:

- Content must be organized so that it can exist in more than one language without altering component or page structure.
- Layout and UI structure must not assume a single fixed text direction — Arabic is a right-to-left (RTL) language and English is left-to-right (LTR), so structure must not hardcode direction-dependent assumptions into components, spacing, or Pages.
- Translation-file format, locale-prefixed routing scheme, and launch-language sequencing remain `[PENDING PROJECT OWNER DECISION]`.

This section describes structural readiness only — it does not decide *when* Arabic support ships or the remaining implementation specifics above.

---

## 7. Asset Organization

Logical separation of asset categories (not physical folder paths):

- **Logos.** The official Weber logo is the single source of truth for brand identity and must never be redesigned without approval (`DECISIONS.md` WD-004). Held as its own category, distinct from general imagery.
- **Images.** Photography and product imagery used across Pages and Features (e.g., Portfolio work samples, Interactive Showcase previews).
- **Icons.** One consistent icon family is used throughout the project; icons support understanding and never replace clear labels (Part 6 — Icons).
- **Illustrations.** Used only when they serve understanding — never decoratively (Part 6 — Design Principles; Part 10 — Premium Means Invisible). The snake motif specifically must never appear as a literal illustration anywhere on the site (Part 2 — Snake Philosophy; `DECISIONS.md` WD-004).
- **Social images.** Open Graph and social-sharing imagery, required for every public page's SEO metadata (Part 5 — SEO).
- **Future media.** Reserved category for media types not yet in use (e.g., video), so their eventual addition does not require restructuring existing asset organization.

Physical asset directory layout: reviewed and explicitly not placed under `src/` — static assets belong in `public/` by Next.js's own framework convention, a directory that sits alongside `src/`, not inside it (§11; `DECISIONS.md` WD-118). The font family decision is now resolved (Geist Sans/Mono, `DECISIONS.md` WD-131); no local font asset placement is needed regardless, since Geist loads via `next/font`.

---

## 8. Documentation Organization

The purpose of each existing documentation category in `docs/`:

| Category | Document(s) | Purpose |
|---|---|---|
| Governance | `PROJECT_CONSTITUTION.md` | Highest-authority source for every product, brand, UX, engineering, and design decision. |
| Planning | `PROJECT_ROADMAP.md` | Vision, current stage, and long-term direction. |
| Decision Record | `DECISIONS.md` | Traceable log of every approved architectural/product decision. |
| Technical Specification | `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md` (this document) | System architecture and logical project organization. |
| Engineering Standards | `CODING_STANDARDS.md` | Naming, component, accessibility, performance, and review standards. |
| Process | `DEVELOPMENT_GUIDE.md` | Branching, implementation, approval, review, testing, deployment, documentation workflow. |
| Design & Brand | `UI_UX_GUIDELINES.md`, `BRAND_GUIDELINES.md` | Design and UX philosophy; brand identity, tone, and visual system. |
| History | `CHANGELOG.md` | Version history once releases begin. |
| Execution Sequencing | `IMPLEMENTATION_BLUEPRINT.md` | Converts the approved documentation system into a dependency-driven build order, critical path, and implementation readiness checklist. |

`SECURITY_POLICY.md` and `PERFORMANCE_GUIDE.md` were referenced by `ARCHITECTURE.md` §9–§10 as intended future homes for detailed security and performance specifications. Both now exist (`DECISIONS.md` WD-101–WD-103 and WD-104–WD-106 respectively). `IMPLEMENTATION_BLUEPRINT.md` was created via Implementation Blueprint Finalization (`DECISIONS.md` WD-107–WD-109).

---

## 9. Future Expansion Strategy

Version 2 and ecosystem features (education/Learning Platform, Client Dashboard, additional services — Part 1, Part 3, Part 9) are expected to integrate as new Features (§4), consuming the same UI, Shared Components, and Content organization already in place — not as parallel, isolated systems requiring their own structure. This follows directly from Part 9 — Build Systems, Not Pages: "Every new feature should strengthen an existing system instead of becoming an isolated implementation."

Concretely, this means the logical categories in §2 and the layer responsibilities in §3 are expected to remain stable as the product grows — new Features are added within the existing Application Code category, new content is added within the existing Content category, and so on, rather than the categories themselves being redefined per version.

No Version 2 scope, timeline, or technical integration plan has been approved (`PROJECT_ROADMAP.md` — Version 2 Goals is a placeholder); this section describes the structural *capacity* for expansion, not its schedule.

---

## 10. Structural Principles

Approved, directly from the Constitution (Part 5 — Engineering Constitution):

- **Separation of Concerns.** Each module has one clear responsibility; each responsibility belongs in its own layer.
- **Single Responsibility Principle.** Every component, function, module, and feature has one reason to change.
- **Reusability.** Functionality expected to be reused more than once is extracted into a shared abstraction; nothing is over-engineered ahead of actual need.
- **Predictable Organization.** Structure is where an experienced developer would expect it — no deep nesting, no oversized groupings, organized by feature whenever practical.
- **Minimal Coupling.** Features and layers depend on each other only through defined boundaries (§3, §4) — never by reaching into another module's internals.
- **High Cohesion.** Everything a feature or layer needs to fulfill its one responsibility lives together; unrelated concerns are not bundled in for convenience.

---

## 11. Physical Project Structure (Approved)

Resolved via the Project Structure Workshop and Finalization (`DECISIONS.md` WD-117–WD-120). This is the one section in this document with real directory names — everything above remains a logical/conceptual description; this section is the physical instantiation of it beneath the already-approved `src/` directory (`DECISIONS.md` WD-116).

### 11.1 Organizational Model: Hybrid

The top level follows the four conceptual layers (§2–§3; `ARCHITECTURE.md` §2) as a layer-first spine. Within `features/` specifically, organization is feature-first, per the approved feature-based organization principle (`ARCHITECTURE.md` §5). This is the only model consistent with both already-approved principles simultaneously — pure layer-first would omit `features/` despite it being named directly in `ARCHITECTURE.md` §2; pure feature-first would fragment the Component Library's own documented eight-category taxonomy (`DECISIONS.md` WD-063–069).

```
src/
├── app/                  — App Router routes (WD-014)
├── components/           — mirrors the 8 documented Component Library categories
│   ├── layout/
│   ├── navigation/
│   ├── inputs/
│   ├── feedback/
│   ├── data-display/
│   ├── surfaces/
│   ├── marketing/
│   └── utilities/
├── features/             — feature-first within this layer (§4; ARCHITECTURE.md §2, §5)
│   ├── interactive-showcase/
│   └── contact/
├── content/               — Content/Component Separation (§5; DECISIONS.md WD-010)
├── lib/                  — Prisma client, server-only utilities (scope-disciplined, see 11.3)
└── providers/            — next-intl integration only (DECISIONS.md WD-023)
```

### 11.2 Required Directories

| Directory | Required by |
|---|---|
| `app/` | App Router (`DECISIONS.md` WD-014) |
| `components/` | The Component Library's eight documented categories (`DECISIONS.md` WD-063–069) |
| `features/` | `ARCHITECTURE.md` §2 (Features conceptual layer), §5 (feature-based organization) |
| `content/` | Content/Component Separation Rule (`DECISIONS.md` WD-010) |
| `lib/` | Infrastructure layer — minimally the Prisma client singleton (`DECISIONS.md` WD-024, WD-025) |
| `providers/` | next-intl's App Router integration (`DECISIONS.md` WD-023) — scoped to this need only, not a general-purpose provider directory |

### 11.3 Directories Intentionally Not Created Now

Each was individually evaluated against existing approved documentation and found to have no current justification, an unresolved blocking dependency, or a direct conflict with an already-approved principle (`DECISIONS.md` WD-118). Recorded here specifically so none is silently reopened without a new Project Owner decision.

| Directory | Why it is intentionally absent |
|---|---|
| `store/` | Zustand is "opt-in, used only when state is genuinely shared" (`DECISIONS.md` WD-022). No approved Version 1 feature has a confirmed shared-state need yet. |
| `services/` | No approved architecture calls for an API-client abstraction layer — Server Actions/Route Handlers (WD-026) are called directly; formal API design/versioning is still pending. |
| `middleware.ts` | Next.js convention is a single root file, not a directory; even that file's need depends on the still-pending next-intl locale-routing scheme (§6) and the reserved authentication mechanism (`DECISIONS.md` WD-102). |
| `utils/` | "Extract logic into reusable abstractions only once genuine duplication exists" (`CODING_STANDARDS.md`) — pre-scaffolding an empty directory contradicts this directly. |
| `config/` | No app-wide technical-configuration need is identified distinct from `content/` or `lib/`. |
| `constants/` | The Design Token ↔ Tailwind integration mechanism is now resolved (`DECISIONS.md` WD-134): tokens live exclusively in Tailwind v4's native `@theme` block in `app/globals.css`. There is no separate token file for `constants/` to hold. |
| `styles/` | A single `app/globals.css` (WD-016) is sufficient; a dedicated directory for one file works against Simplicity Wins. |
| `assets/` (under `src/`) | Belongs in `public/` by Next.js's own convention, outside `src/` entirely. The font family decision is now resolved (Geist Sans/Mono, `DECISIONS.md` WD-131) — moot for this directory regardless, since Geist loads via `next/font` and requires no manual local font asset files. |
| `types/` | `CODING_STANDARDS.md` prefers Zod-inferred and Prisma-generated types over hand-written duplicates — a general `types/` directory risks undermining the Single Source of Truth Rule. |

### 11.4 Directories Rejected as Duplicate Responsibilities

Unlike §11.3, these are not deferred pending a future condition — each duplicates a responsibility already fully owned elsewhere, and re-proposing any of them requires demonstrating a genuinely uncovered responsibility (`DECISIONS.md` WD-119).

| Directory | Duplicates | Reason |
|---|---|---|
| `actions/` | `features/` | A top-level Server Actions directory would fragment feature-specific logic across two locations, contradicting the approved feature-based organization principle. |
| `server/` | `lib/` | Server Components are the default everywhere under App Router — server-ness is a per-file convention, not a folder-level split. |
| `shared/` | `components/`, `content/`, `lib/` | A generic catch-all with no distinct responsibility; every legitimate use case already has a more specific home. |

### 11.5 Version 2 Deferrals

Recorded separately from §11.3 because each is tied to an entire unscoped Version 2 feature or system, not a resolvable Version 1 condition (`DECISIONS.md` WD-120):

| Future directory | Tied to |
|---|---|
| A `features/` entry for the Client Dashboard | `DECISIONS.md` WD-038 — follows the same `features/` pattern once scoped |
| An authentication-related directory | Security Decision Boundaries (`DECISIONS.md` WD-102) — authentication mechanism not decided |
| A versioned API structure | "Formal API design/versioning," pending in `ARCHITECTURE.md` §0 |

### 11.6 Still Open (Not Resolved by This Section)

Whether `components/ui/` (shadcn/ui's own raw primitive output path) sits alongside or beneath the category folders in 11.1. Exact App Router route-grouping convention within `app/`. Each feature's own internal file layout beneath `features/<name>/`. File naming conventions. `hooks/` and `types/`-adjacent conventions beyond what §11.3 already resolves for `types/` itself.

---

## Pending Decisions Summary

Top-level physical structure is now resolved (§11; `DECISIONS.md` WD-116–WD-120). What remains open:

- Whether `components/ui/` sits alongside or beneath the Component Library category folders (§11.6).
- Exact App Router route-grouping convention within `app/` (§11.6).
- Internal organization of each individual feature beneath `features/<name>/` (§4, §11.6).
- File naming conventions.
- Content storage/authoring technology (CMS vs. Git-based — explicitly excluded from Technology Stack Finalization Phase 2).
- Localization routing scheme and translation-file format (the library, next-intl, is decided — `DECISIONS.md` WD-023).
- Configuration structure beyond what §11.3 already resolves (no dedicated `config/` directory; specific technical settings, if any emerge, still need a home).
- Technical integration plan for Version 2 / future modules (§11.5 names the anticipated directories; none is scoped yet).
- Blog's content storage/authoring technology (route-level IA is now documented in `INFORMATION_ARCHITECTURE.md` §9; feature existence is decided — `DECISIONS.md` WD-039).

---

## Conflicts / Traceability Gaps

**Resolved.** Arabic and English as target languages, originally flagged here as a traceability gap, were formally logged as `DECISIONS.md` WD-012 in the Documentation Synchronization task that followed this document's creation. No unresolved conflicts remain in this document as of Technology Stack Finalization Phase 2.

---

## How This Document Is Maintained

Each `[PENDING PROJECT OWNER DECISION]` marker is replaced with concrete detail only after that decision is proposed, reviewed, and approved by the Project Owner, and logged in `DECISIONS.md`. This document must be re-checked against `PROJECT_CONSTITUTION.md`, `DECISIONS.md`, and `ARCHITECTURE.md` for consistency whenever any of them changes.
