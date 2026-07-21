# Weber — Architectural & Product Decision Log

> This log records every decision that has actually been approved. It does not invent alternatives, dates, or reasoning that were not part of the original discussion. Where a source document states a decision without recording the alternatives that were weighed, this log says so explicitly rather than fabricating them.
>
> This is the **primary source of truth for approved project decisions**. Every other document in `docs/` (`ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `CODING_STANDARDS.md`, etc.) must cite decisions from here rather than restating them independently.

Decisions are numbered sequentially by the date they were approved: `WD-001`, `WD-002`, etc. ("WD" = Weber Decision). IDs are permanent and are never renumbered or reused, since other documents cite them directly — decisions are instead grouped by category below for navigation, without changing their IDs.

---

## Decision Index by Category

| Category | Decisions |
|---|---|
| Governance | WD-001, WD-009, WD-010 |
| Product | WD-005, WD-006, WD-012 |
| UX | WD-007, WD-140, WD-144 |
| Content | WD-010 (Content/Component Separation Rule) |
| Architecture | WD-010 (Single Source of Truth Rule), WD-011, WD-013, WD-117, WD-118, WD-119, WD-120, WD-149, WD-153, WD-154, WD-155, WD-156, WD-157, WD-159, WD-160, WD-161, WD-162, WD-163, WD-164, WD-165, WD-166 |
| Technology Stack | WD-014, WD-015, WD-016, WD-017, WD-018, WD-019, WD-020, WD-021, WD-022, WD-023, WD-024, WD-025, WD-026, WD-114, WD-115, WD-116, WD-121, WD-122, WD-123, WD-124, WD-125, WD-126, WD-127, WD-128, WD-135 |
| Design Tokens | WD-027, WD-028, WD-029, WD-030, WD-031, WD-032, WD-033, WD-034, WD-035, WD-036, WD-129, WD-130, WD-131, WD-132, WD-133, WD-134 |
| Information Architecture | WD-037, WD-038, WD-039, WD-040, WD-041, WD-042, WD-043, WD-139, WD-141, WD-142, WD-143, WD-145, WD-146, WD-147, WD-150, WD-151, WD-152, WD-168, WD-169, WD-170, WD-171 |
| UX Specification | WD-044, WD-045, WD-046, WD-047, WD-048, WD-049, WD-050, WD-051, WD-052 |
| Design System | WD-002, WD-003, WD-008, WD-053, WD-054, WD-055, WD-056, WD-057, WD-058, WD-059, WD-060, WD-061, WD-062 |
| Component Library | WD-063, WD-064, WD-065, WD-066, WD-067, WD-068, WD-069, WD-070, WD-071, WD-072, WD-073, WD-074, WD-075, WD-076, WD-077, WD-078, WD-079, WD-080, WD-081, WD-082, WD-083, WD-084, WD-085, WD-086, WD-087, WD-088, WD-089, WD-090, WD-091, WD-092, WD-093, WD-094, WD-095, WD-096, WD-097, WD-098, WD-099, WD-100, WD-110, WD-111, WD-112, WD-113, WD-136, WD-137, WD-138 |
| Brand | WD-004 |
| Security | WD-010 (AI Security Decision Authority Rule), WD-101, WD-102, WD-103 |
| Performance | WD-010 (Performance Trade-off Rule), WD-104, WD-105, WD-106 |
| Engineering Workflow | WD-107, WD-108, WD-109, WD-172 |

---

## Governance

### WD-001 — Adoption of the Project Constitution

**Category:** Governance
**Date:** 2026-07-16
**Status:** Approved
**Description:** Adoption of the Weber Project Constitution (Version 1.0) as the single governing document for all product, brand, UX, engineering, security, performance, and workflow decisions on the Weber project.
**Reason:** To ensure the project remains consistent over time regardless of future developers, AI assistants, or technology changes, and to establish a single highest-authority reference for resolving conflicts.
**Alternatives Considered:** Not documented — the Constitution was provided directly by the Project Owner as the founding governance document.
**Final Decision:** The Constitution (`PROJECT_CONSTITUTION.md`) is binding. Any future instruction that conflicts with it is subordinate until the Project Owner explicitly approves a change.
**Impact:** All subsequent engineering, design, UX, and product decisions must be evaluated against this document.
**References:** `PROJECT_CONSTITUTION.md` (entire document).

---

### WD-009 — Creation of the `docs/` Documentation System

**Category:** Governance
**Date:** 2026-07-16
**Status:** Approved
**Description:** Creation of the `docs/` documentation system at the project root, containing the governance/reference documents listed in `README.md`.
**Reason:** To give the project (and any future developer or AI assistant) a single, authoritative, version-controllable home for constitution, roadmap, architecture, decisions, workflow, standards, UX, brand, and changelog documentation.
**Alternatives Considered:** Keeping the Constitution only in conversation history (rejected — not durable or accessible to future contributors); embedding documentation inside a not-yet-created `src/` tree (rejected — documentation should not depend on an application structure that doesn't exist yet).
**Final Decision:** `docs/` is created at the project root, independent of any future application source tree.
**Impact:** Establishes the documentation hub referenced by all future phase planning reports.
**References:** `README.md`.

---

### WD-010 — Ratification of Constitutional Amendment 1

**Category:** Governance (cross-referenced under Content, Architecture, Security, and Performance for its four constituent rules — see those sections)
**Date:** 2026-07-16
**Status:** Approved
**Description:** Ratified Amendment 1 to the Project Constitution (now Version 1.1), adding four rules: (1) content must not live inside UI components unless truly UI-specific, (2) data must always have a single source of truth, (3) the AI may generate security-related code but may never decide the underlying security approach unilaterally, and (4) no feature may be added if it noticeably degrades performance without delivering equivalent user value.
**Reason:** To close gaps in the original Constitution around content/component coupling, data duplication risk, security decision authority, and performance-vs-feature trade-offs, as requested directly by the Project Owner.
**Alternatives Considered:** Editing the new rules directly into Parts 1–10 (rejected — would silently alter the originally ratified text and break traceability); leaving the rules undocumented outside the Constitution (rejected — the Constitution is the single highest-authority document, so binding rules belong in it).
**Final Decision:** New rules are appended as `Part 11 — Constitutional Amendments` in `PROJECT_CONSTITUTION.md`, preserving Parts 1–10 verbatim. Two of the four submitted rules ("Security is a requirement, not a feature" and "Performance is part of the user experience") were identified as already present verbatim in Parts 4 and 5; they were reaffirmed as anchors for their accompanying new rules rather than duplicated as standalone entries.
**Impact:** Binding on all future implementation. Raised an open question about whether the Content/Component Separation Rule's reference to "React components" confirmed React as Weber's frontend framework — resolved the same day; see WD-011.
**References:** `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1.

---

## Product

### WD-005 — Interactive Showcase as a Distinct, Coexisting Feature

**Category:** Product
**Date:** 2026-07-16
**Status:** Approved
**Description:** The Interactive Showcase (business type + company name → realistic website preview) is Weber's signature product feature, distinct from and coexisting with the Portfolio.
**Reason:** The Portfolio demonstrates completed work; the Interactive Showcase personalizes the experience for the visitor to build confidence ("I can imagine my business looking like this").
**Alternatives Considered:** Not documented — the Constitution defines this directly as a core, non-negotiable product concept.
**Final Decision:** Both features must exist. Neither replaces the other.
**Impact:** Scopes future product/UX work; both features must be planned for in any roadmap or architecture.
**References:** `PROJECT_CONSTITUTION.md` Part 3 — The Interactive Showcase, Portfolio Philosophy.

---

### WD-006 — Consultation-First Pricing

**Category:** Product
**Date:** 2026-07-16
**Status:** Approved
**Description:** Pricing is consultation-first rather than fixed-package display.
**Reason:** Businesses and projects vary; understanding the customer's goals must precede quotation.
**Alternatives Considered:** Fixed/published pricing packages — implicitly rejected in favor of consultation, per the Constitution's Pricing Philosophy.
**Final Decision:** No fixed pricing tiers are displayed. Pricing conversations begin with a consultation.
**Impact:** Affects the Contact/CTA flow and any future pricing-related UI.
**References:** `PROJECT_CONSTITUTION.md` Part 3 — Pricing Philosophy.

---

### WD-012 — Arabic and English as Target Languages

**Category:** Product (with Content/UX implications)
**Date:** 2026-07-16
**Status:** Approved
**Description:** Weber's target languages are Arabic and English.
**Reason:** Stated directly by the Project Owner during Documentation Finalization Phase 1, Task 2, to establish the audience/localization requirement that `PROJECT_STRUCTURE.md` §6 (Localization Readiness) needed to document. This was new information not previously present in the Constitution.
**Alternatives Considered:** Not documented — stated directly as a target-market fact, not presented as a choice among alternatives.
**Final Decision:** Weber's content and structural architecture must remain compatible with both Arabic (a right-to-left language) and English (a left-to-right language) without hardcoding a single fixed text direction into components, spacing, or page structure. This decision covers *language targets and structural readiness only* — it does not decide an i18n library, translation-file format, locale-routing scheme, or launch-language sequencing, which remain open (see Pending Decisions).
**Impact:** Governs `PROJECT_STRUCTURE.md` §6; binding on all future content and UI structural decisions so a second language can be added without restructuring.
**References:** `PROJECT_STRUCTURE.md` §6 — Localization Readiness; `PROJECT_CONSTITUTION.md` Part 5 — Scalability, Part 8 — Future Scalability Review ("Multi-language Website").

---

## UX

### WD-007 — Partnership-Toned Calls to Action

**Category:** UX
**Date:** 2026-07-16
**Status:** Approved
**Description:** Call-to-action language must invite partnership ("Let's discuss your project," "Request your website," "Tell us about your business") rather than create sales pressure ("Buy Now").
**Reason:** Trust must always precede conversion; the CTA should feel like the start of a relationship, not a transaction.
**Alternatives Considered:** Direct/urgency-driven CTA language — explicitly rejected by the Constitution.
**Final Decision:** All CTAs across the product must follow the partnership tone.
**Impact:** Applies to every current and future page, form, and marketing surface.
**References:** `PROJECT_CONSTITUTION.md` Part 4 — Call-To-Action Philosophy.

---

## Content

Content-specific rules are ratified as part of Amendment 1 — see **WD-010** in the Governance section above.

### WD-010 (Content/Component Separation Rule) — cross-reference

**Rule:** "Content should never live inside React components unless it is truly UI-specific."
**Final Decision:** Content (copy, offerings, pricing language, testimonials, etc.) must be kept separate from component code and referenced/passed in, not hardcoded, unless genuinely UI-specific.
**Full entry:** See WD-010 above for date, status, rationale, and alternatives.
**References:** `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1, Rule 1; `ARCHITECTURE.md` §6; `PROJECT_STRUCTURE.md` §5.

---

## Architecture

### WD-010 (Single Source of Truth Rule) — cross-reference

**Rule:** "Data should always have a single source of truth."
**Final Decision:** Every piece of data has exactly one authoritative origin; no value may be duplicated across stores, components, or state containers in a way that allows copies to drift out of sync.
**Full entry:** See WD-010 in the Governance section above for date, status, rationale, and alternatives.
**References:** `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1, Rule 2; `ARCHITECTURE.md` §7.

---

### WD-011 — React Confirmed as Frontend Framework

**Category:** Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** React is confirmed as Weber's frontend framework.
**Reason:** Confirmed directly by the Project Owner in response to an open question raised by Amendment 1's reference to "React components."
**Alternatives Considered:** Not documented — this was a direct confirmation of an existing implicit signal, not a comparison between frameworks.
**Final Decision:** React is the official frontend framework. This decision covers the frontend framework only — it does not resolve language (JavaScript vs. TypeScript), backend framework/language, database, or hosting/deployment platform, which remain open (see Pending Decisions).
**Impact:** Updates the Tech Stack and Frontend Architecture sections of `ARCHITECTURE.md`, and unblocks the `React Rules` section of `CODING_STANDARDS.md` at a principles level. The `TypeScript Rules` section remains a placeholder, since React does not imply TypeScript on its own.
**References:** `ARCHITECTURE.md` §Tech Stack, §Frontend Architecture; `CODING_STANDARDS.md` — React Rules.

---

### WD-013 — Six-Category Project Organization and Six-Layer Application Architecture Model

**Category:** Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** Adoption of a six-category logical project organization (Application Code, Content, Assets, Documentation, Configuration, Future Modules) and a six-layer application architecture model (UI, Shared Components, Feature Components, Pages, Content, Infrastructure).
**Reason:** To give the project a stable, traceable logical structure that future features and Version 2/ecosystem expansion can integrate into without requiring restructuring, per the Constitution's "Build Systems, Not Pages" and Scalability principles.
**Alternatives Considered:** Not separately documented — the model was specified directly through Documentation Finalization Phase 1 task instructions (an initial four-layer framing in `ARCHITECTURE.md` Task 1, refined to the six-layer/six-category framing in `PROJECT_STRUCTURE.md` Task 2) and formalized across two reviewed documentation tasks without objection.
**Final Decision:** The six-layer application model and six-category project organization described above are the approved logical structure. This refines — and does not contradict — the earlier four-layer framing in `ARCHITECTURE.md` §2 (UI / Features / Content / Infrastructure), by splitting "Features" into Shared Components, Feature Components, and Pages. Physical/technical implementation of these layers (directory names, file conventions, framework-specific structure) remains undecided.
**Impact:** Governs `ARCHITECTURE.md` §2–§5 and `PROJECT_STRUCTURE.md` §2–§4; binding on all future feature and component organization work.
**References:** `ARCHITECTURE.md` §2 (System Architecture Overview), §3–§5; `PROJECT_STRUCTURE.md` §2 (High-Level Project Structure), §3–§4; `PROJECT_CONSTITUTION.md` Part 5 — Architecture Principles, File Organization; Part 9 — Build Systems, Not Pages.

---

### WD-117 — Physical Project Structure Approved: Hybrid Model, Required Directories

**Category:** Architecture
**Date:** 2026-07-17
**Status:** Approved
**Description:** Weber's physical structure beneath `src/` (WD-116) is approved as a **Hybrid** model: the top level follows the already-approved four conceptual layers (`ARCHITECTURE.md` §2 — UI, Features, Content, Infrastructure) as a layer-first spine, while organization within the Features layer specifically is feature-first, per the already-approved feature-based organization principle (`ARCHITECTURE.md` §5). Six directories are approved as required:
- **`app/`** — App Router routes (WD-014).
- **`components/`** — mirrors the eight documented Component Library categories (Layout, Navigation, Inputs, Feedback, Data Display, Surfaces, Marketing, Utilities — `DECISIONS.md` WD-063–069) as subdirectories.
- **`features/`** — feature-first internally; each feature (e.g., Interactive Showcase, Contact) owns its own components, logic, and Server Actions in one place.
- **`content/`** — the physical home for the Content/Component Separation Rule (Amendment 1, `DECISIONS.md` WD-010).
- **`lib/`** — Infrastructure-layer code, minimally the Prisma client singleton (WD-024, WD-025); scope is deliberately narrow, not a general catch-all (see WD-118 for what does not belong here).
- **`providers/`** — narrowly scoped to the next-intl App Router integration (`DECISIONS.md` WD-023) only; not a general-purpose provider catch-all.
**Reason:** Neither a pure layer-first model (which would omit `features/` despite it being named almost verbatim in `ARCHITECTURE.md` §2) nor a pure feature-first model (which would fragment the Component Library's own already-documented eight-category taxonomy) is consistent with both existing approved principles simultaneously. The Hybrid model is the only one that honors both without contradiction. Each required directory traces to a specific existing decision, not to convention or popularity — see the Phase 1 review for the full per-directory justification.
**Alternatives Considered:** Pure layer-first — presented in the Phase 1 review and rejected for ignoring the approved feature-based organization principle. Pure feature-first — presented and rejected for fragmenting the Component Library's documented category structure. A general-purpose `providers/` directory anticipating future providers (e.g., a theme provider) — rejected, since Theme Switcher is not approved for Version 1 (`DECISIONS.md` WD-080); `providers/` is scoped only to the one currently-justified need.
**Final Decision:** The six directories above, and the Hybrid organizational model, are official. `docs/PROJECT_STRUCTURE.md` §11 documents this structure in full, mirroring `01_FOUNDATIONS.md`'s Component Library category list directly.
**Impact:** Resolves the "physical directory layout" gap flagged throughout `PROJECT_STRUCTURE.md` and `ARCHITECTURE.md` §2. Updates `docs/PROJECT_STRUCTURE.md`, `ARCHITECTURE.md` §2–§3, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/PROJECT_STRUCTURE.md` §11; `ARCHITECTURE.md` §2, §5; `DECISIONS.md` WD-063–069, WD-116.

---

### WD-118 — Directories Intentionally Not Created Now (Premature)

**Category:** Architecture
**Date:** 2026-07-17
**Status:** Approved
**Description:** Nine directories are explicitly reviewed and **not created now**, each for a distinct, documented architectural reason rather than mere omission. This decision exists specifically to prevent each one from being silently reopened without a new Project Owner decision:
- **`store/`** — Zustand is approved as "opt-in, used only when state is genuinely shared" (`DECISIONS.md` WD-022). No approved Version 1 feature has a confirmed shared-state need; Mobile Navigation Toggle's state is component-local, and the Interactive Showcase's inputs are plausibly local form state via React Hook Form. Create only once a specific feature is confirmed to need shared state.
- **`services/`** — No approved architecture calls for an API-client abstraction layer. WD-026 approves Server Actions and Route Handlers called directly; formal API design/versioning remains explicitly pending (`ARCHITECTURE.md` §0). Introducing this now would be prematurely abstracted functionality (Part 5 — Reusability).
- **`middleware.ts`** — Next.js App Router convention is a single root file, not a directory. Even that file's necessity depends on the still-pending next-intl locale-routing scheme (`ARCHITECTURE.md` §6) and the reserved authentication mechanism (Security Decision Boundaries, `DECISIONS.md` WD-102) — neither exists yet.
- **`utils/`** — "Extract logic into reusable abstractions only once genuine duplication exists — do not over-engineer speculatively" (`CODING_STANDARDS.md` Best Practices). Pre-scaffolding an empty `utils/` directly contradicts this already-approved principle.
- **`config/`** — No app-wide technical-configuration need is identified distinct from `content/` or `lib/`. No document justifies it by name.
- **`constants/`** — Directly downstream of the still-open Design Token ↔ Tailwind integration mechanism (flagged in the Bootstrap Workshop) — where token values physically live depends on that unresolved question.
- **`styles/`** — A single `app/globals.css` importing Tailwind directives (WD-016) is the standard, sufficient pattern. A dedicated directory for what is currently one file works against Simplicity Wins (Part 10).
- **`assets/`** (under `src/`) — Static assets belong in `public/` by Next.js's own framework convention, a directory that sits alongside `src/`, not inside it. Any local-font-specific asset placement is additionally blocked on the still-pending font family decision (`BRAND_GUIDELINES.md`).
- **`types/`** — `CODING_STANDARDS.md` explicitly prefers Zod-inferred and Prisma-generated types over hand-written duplicates, "consistent with the Single Source of Truth Rule." A general `types/` directory risks becoming a place where Zod/Prisma-derived shapes get hand-duplicated, undermining that rule directly.
**Reason:** Each directory above was evaluated individually against existing approved documentation in the Phase 1 review and found to have no current justification, an unresolved dependency blocking it, or a direct conflict with an already-approved principle. Recording the rationale now, rather than leaving these as a silent absence, prevents each from being re-litigated without a new decision — the same discipline already applied to rejected Component Library candidates (e.g., `DECISIONS.md` WD-077, WD-082, WD-086, WD-090).
**Alternatives Considered:** Creating all nine now, "to be safe" — presented in the Phase 1 review and rejected as directly contrary to "avoid oversized directories" (Part 5) and "do not over-engineer speculatively" (`CODING_STANDARDS.md`). Leaving the absence undocumented — rejected per direct Project Owner instruction, since an undocumented absence invites exactly the re-litigation this decision exists to prevent.
**Final Decision:** None of the nine directories is created now. Each remains open for proposal only once its specific blocking condition (named above) is resolved, through the normal Component Lifecycle / Engineering Decision → Project Owner Approval path — never assumed or defaulted back in.
**Impact:** Closes nine potential re-litigation points with a single traceable reference. Documented in `docs/PROJECT_STRUCTURE.md` §11.
**References:** `docs/PROJECT_STRUCTURE.md` §11; `DECISIONS.md` WD-022, WD-026, WD-080, WD-102, WD-116.

---

### WD-119 — Directories Rejected as Duplicate Responsibilities

**Category:** Architecture
**Date:** 2026-07-17
**Status:** Approved
**Description:** Three candidate directories are rejected outright, not merely deferred — each duplicates a responsibility already owned elsewhere in the approved structure:
- **`actions/`** — A top-level Server Actions directory would fragment feature-specific logic across two locations (e.g., `features/contact/` and `actions/contact.ts`), directly contradicting the approved feature-based organization principle (`ARCHITECTURE.md` §5). Server Actions belong colocated with the feature that owns them, inside `features/`.
- **`server/`** — Server Components are the *default* everywhere under App Router; server-ness is a per-file convention ("use client" as the opt-in exception), not a folder-level split. A dedicated `server/` directory implies a client/server boundary that doesn't structurally exist, and its legitimate concerns (the Prisma client, server-only utilities) already belong in `lib/`.
- **`shared/`** — A generic catch-all with no distinct responsibility of its own; every legitimate "shared" use case already has a more specific, better-justified home (`components/`, `content/`, or `lib/`). A generic name is itself the anti-pattern "predictable, feature-organized" structure (Part 5) warns against.
**Reason:** Unlike the nine directories in WD-118, which lack a current justification but could become justified once a specific condition changes, these three are rejected because their entire responsibility is already fully owned by an existing, better-justified directory — creating them would not add capability, only duplication and ambiguity about which location is authoritative.
**Alternatives Considered:** Each was presented in the Phase 1 review as a common convention from other projects; all three were rejected specifically because Weber's own already-approved documentation (the feature-based organization principle, the Server Components default, and Part 5's anti-catch-all guidance) already resolves the question these directories would otherwise exist to answer.
**Final Decision:** None of the three is created. Unlike WD-118's premature list, these do not have a "once resolved" reopening condition — re-proposing any of them requires demonstrating a responsibility not already covered by `features/`, `lib/`, `components/`, or `content/`.
**Impact:** Documented in `docs/PROJECT_STRUCTURE.md` §11 to prevent re-proposal without new justification.
**References:** `docs/PROJECT_STRUCTURE.md` §11; `ARCHITECTURE.md` §5.

---

### WD-120 — Version 2 Directory Deferrals

**Category:** Architecture
**Date:** 2026-07-17
**Status:** Approved
**Description:** Three future directories are recorded separately from both the premature (WD-118) and rejected (WD-119) lists, since each is tied to an entire unscoped Version 2 feature or decision rather than a resolvable Version 1 condition:
- **A future `features/` entry for the Client Dashboard** (e.g., `features/dashboard/`) — tied to `DECISIONS.md` WD-038; follows the same `features/` pattern once scoped, not before.
- **An authentication-related directory** (e.g., `auth/`) — explicitly reserved by the Security Decision Boundaries (`DECISIONS.md` WD-102); authentication mechanism is not decided.
- **A versioned API structure** — tied to "formal API design/versioning," explicitly listed as pending in `ARCHITECTURE.md` §0.
**Reason:** These differ from WD-118's premature list in kind, not just degree — WD-118's nine directories could each individually become justified by a Version 1 clarification (e.g., a single feature needing shared state), while these three require an entire feature or system (Client Dashboard, an authentication system, a formal API) to be scoped first, which is itself Version 2 territory (`PROJECT_ROADMAP.md` — Version 2 Goals is a placeholder).
**Alternatives Considered:** Folding these into WD-118's premature list — rejected per direct Project Owner instruction to record Version 2 deferrals separately, since conflating "needs one more Version 1 decision" with "needs an entire unscoped future system" would misrepresent how close each is to being resolvable.
**Final Decision:** None of the three is created now or anticipated with placeholder structure. Each is revisited only when its owning feature or system (Client Dashboard, authentication, formal API design) is itself scoped.
**Impact:** Documented in `docs/PROJECT_STRUCTURE.md` §11 and §9 (Future Expansion Strategy).
**References:** `docs/PROJECT_STRUCTURE.md` §9, §11; `DECISIONS.md` WD-038, WD-102.

---

### WD-149 — Interactive Showcase Generation Strategy Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Weber adopts a React-Rendered Preview mechanism (Strategy D) for Version 1 of the Interactive Showcase's generation. The preview is assembled using Weber's own, already-existing Design System components, with content personalized based on Business Type and Company Name. No AI service, image-generation service, or other external generation service is used.
**Reason:** This approach was selected because it: preserves Weber's visual identity 100%; reuses components that already exist; adds no external dependency; adds no recurring operational cost; adds no new security surface; directly implements "Build Systems, Not Pages" (`PROJECT_CONSTITUTION.md` Part 9); complies with the Performance Trade-off Rule (Amendment 1, Rule 4); and complies with the Constitution's policy of depending on the fewest possible dependencies (Part 5 — Dependencies).
**Alternatives Considered:** Static Template Library (Strategy A) — a close variant of the chosen approach, but implies a separate template/mockup asset system rather than reusing Weber's actual production components directly. AI-Generated Layout (Strategy B) and Hybrid Template + AI (Strategy C) — both rejected because no AI/LLM provider is approved anywhere in this project, both would introduce an unapproved, unbounded recurring operational cost, and both carry unpredictable-output risk on a premium-branded, trust-first surface. Image Generation (Strategy E) — rejected for the same dependency/cost reasons as B/C, at greater severity (highest cost, highest latency, weakest architectural consistency, since the preview would no longer even use Weber's own component system). Full evaluation recorded in the Interactive Showcase Generation Mechanism Workshop.
**Final Decision:** Version 1 uses: React components, the existing Design System, and deterministic content mapping keyed to Business Type and Company Name. Version 1 does not use: AI, LLMs, image generation, or external generation APIs. Version 2 or later versions may study introducing AI or external generation services, but doing so requires its own, independent architectural decision covering operational cost, reliability, security, brand protection, error handling, and rate limiting. This decision is not advance approval of any external service.
**Impact:** Preview Frame will render Weber's real, existing components. No additional backend services are introduced. No AI services are introduced. No per-request operational cost is introduced. The content mapping itself can be replaced or extended later without rebuilding the interface.
**References:** `PROJECT_CONSTITUTION.md` Part 3 (The Interactive Showcase), Part 9 (Build Systems, Not Pages), Part 11 — Amendment 1 (Performance Trade-off Rule); `DECISIONS.md` WD-005, WD-026, WD-033, WD-047, WD-048; `PERFORMANCE_GUIDE.md`; `SECURITY_POLICY.md`; Interactive Showcase Generation Mechanism Workshop.

---

## Technology Stack

Approved in **Technical Stack Finalization — Phase 2**, following the Phase 1 technical review. Every entry below was directly approved by the Project Owner from a set of options and trade-offs presented in that review; "Alternatives Considered" summarizes what was presented, not a comparison the AI made unilaterally afterward.

### WD-014 — Next.js (App Router) as Frontend Meta-Framework

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Next.js, using the App Router, is adopted as the meta-framework for the approved React frontend (WD-011).
**Reason:** Hybrid SSR/SSG rendering serves the Constitution's SEO and Performance requirements; file-based routing maps cleanly onto the destinations in `ROUTES.md`; built-in image and metadata APIs remove several other open decisions.
**Alternatives Considered:** Remix / React Router v7, Vite + React Router (SPA), Astro with React islands — presented in the Phase 1 technical review.
**Final Decision:** Next.js (App Router) is the official frontend meta-framework, extending WD-011.
**Impact:** Resolves the meta-framework placeholder in `ARCHITECTURE.md` §Frontend Architecture. Strongly implies — but does not by itself formally decide — that Version 1 routes are implemented as distinct file-based routes rather than sections of a single page; this remains flagged as a related open question in `ROUTES.md`, not silently resolved by this entry.
**References:** `ARCHITECTURE.md` — Tech Stack, Frontend Architecture; `ROUTES.md` (routing-implementation implication).

---

### WD-015 — TypeScript as Programming Language

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** TypeScript is adopted as Weber's programming language across the frontend and backend.
**Reason:** Supports long-term maintainability and makes the Single Source of Truth rule (WD-010) enforceable at the type level, consistent with "write code as if another senior engineer will maintain it for the next ten years" (Part 5).
**Alternatives Considered:** Plain JavaScript — presented in the Phase 1 technical review.
**Final Decision:** TypeScript is official; JavaScript is not used for application code.
**Impact:** Resolves the Frontend language row in `ARCHITECTURE.md` Tech Stack and unblocks the TypeScript Rules section of `CODING_STANDARDS.md`.
**References:** `ARCHITECTURE.md` — Tech Stack; `CODING_STANDARDS.md` — TypeScript Rules.

---

### WD-016 — Tailwind CSS as Styling System

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Tailwind CSS is adopted as Weber's styling system.
**Reason:** Utility classes enforce the approved design tokens (color palette — WD-002; dark theme — WD-003) instead of ad hoc values, and carry no CSS-in-JS runtime cost, aligning with the Performance Trade-off Rule (WD-010).
**Alternatives Considered:** CSS Modules, styled-components/CSS-in-JS, vanilla-extract — presented in the Phase 1 technical review.
**Final Decision:** Tailwind CSS is official, configured against Weber's approved token values.
**Impact:** Informs `ARCHITECTURE.md` §8 (Design System Architecture) and `CODING_STANDARDS.md`.
**References:** `ARCHITECTURE.md` §8; `CODING_STANDARDS.md`.

---

### WD-017 — shadcn/ui (Radix UI) as UI Component System

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** shadcn/ui, built on Radix UI primitives, is adopted as Weber's UI component system.
**Reason:** Radix provides accessible-by-default primitives (keyboard, focus, ARIA), satisfying "accessibility is built in, not added later" (Part 6); shadcn/ui's copy-into-repo pattern keeps full visual control for Weber's specific brand identity rather than overriding a pre-styled library's opinions.
**Alternatives Considered:** Material UI, Chakra UI, Ant Design, a fully custom component set — presented in the Phase 1 technical review; the pre-styled kits were recommended against there for conflicting with brand identity.
**Final Decision:** shadcn/ui on Radix UI is official.
**Impact:** Resolves the component-library item in `ARCHITECTURE.md` §5 and `PROJECT_STRUCTURE.md` §3; unblocks the Component Conventions section of `CODING_STANDARDS.md`.
**References:** `ARCHITECTURE.md` §5; `PROJECT_STRUCTURE.md` §3; `CODING_STANDARDS.md`.

---

### WD-018 — Motion (Framer Motion) as Animation Library

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Motion (formerly Framer Motion) is adopted for meaningful interaction and layout animation.
**Reason:** Built-in `prefers-reduced-motion` support and a declarative React API satisfy the Motion System's accessibility and purposeful-motion requirements (Part 6) directly.
**Alternatives Considered:** GSAP, React Spring, CSS-transitions-only — presented in the Phase 1 technical review.
**Final Decision:** Motion is official, reserved for animation that communicates state — not decorative use, per "if an animation exists only because it looks cool, remove it" (Part 6).
**Impact:** Informs `CODING_STANDARDS.md` and `UI_UX_GUIDELINES.md` — Animation Philosophy, as implementation of an already-approved principle rather than a new UX rule.
**References:** `UI_UX_GUIDELINES.md` — Animation Philosophy; `CODING_STANDARDS.md`.

---

### WD-019 — Lucide React as Icon Library

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Lucide React is adopted as Weber's single icon family.
**Reason:** Satisfies "use one icon family throughout the project" (Part 6) directly; minimal line style matches Weber's premium-restrained brand identity.
**Alternatives Considered:** Heroicons, Phosphor Icons, Font Awesome — presented in the Phase 1 technical review.
**Final Decision:** Lucide React is official and exclusive — no second icon family without a new decision.
**Impact:** Informs `CODING_STANDARDS.md`; names the family required by `PROJECT_CONSTITUTION.md` Part 6 — Icons.
**References:** `CODING_STANDARDS.md`; `PROJECT_CONSTITUTION.md` Part 6 — Icons.

---

### WD-020 — React Hook Form as Form Library

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** React Hook Form is adopted for client-side form handling.
**Reason:** Minimizes re-renders and bundle size, particularly relevant for multi-step forms such as the Interactive Showcase.
**Alternatives Considered:** Formik — presented in the Phase 1 technical review and recommended against there on performance grounds.
**Final Decision:** React Hook Form is official for forms requiring client-side interactivity or multi-step state. It works alongside, not instead of, Server Actions (WD-026) for simpler forms such as Contact.
**Impact:** Informs `CODING_STANDARDS.md`; pairs with Zod (WD-021).
**References:** `CODING_STANDARDS.md`; `ROUTES.md` §6.

---

### WD-021 — Zod as Validation Library

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Zod is adopted as Weber's validation library, used for both client- and server-side validation from a single schema.
**Reason:** A single schema driving both validation and the inferred TypeScript type is the most direct technical enforcement of the Single Source of Truth rule (WD-010) for data shape, and directly implements "never trust user input... validated client side, server side" (Part 5).
**Alternatives Considered:** Yup, Valibot, hand-written validation — presented in the Phase 1 technical review.
**Final Decision:** Zod is official.
**Impact:** Pairs with TypeScript (WD-015) and React Hook Form (WD-020); informs `CODING_STANDARDS.md` — Data Rules, Security Rules.
**References:** `CODING_STANDARDS.md` — Data Rules, Security Rules.

---

### WD-022 — Zustand as State Management Library

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Zustand is adopted as Weber's global client-state library, used only when state is genuinely shared beyond a single component.
**Reason:** Lighter-weight than Redux Toolkit, consistent with "keep state local whenever possible... global state should represent shared application data, not UI convenience" (Part 5) and "Simplicity Wins" (Part 10).
**Alternatives Considered:** Redux Toolkit, Jotai — presented in the Phase 1 technical review; Redux Toolkit recommended against there as disproportionate ceremony for V1.
**Final Decision:** Zustand is official for global client state; local component state remains the default and Zustand is opt-in. A server-state library (e.g., for future dashboard data fetching) was discussed in the Phase 1 review but is **not** part of this approval and remains undecided.
**Impact:** Resolves the state-management-library item in `ARCHITECTURE.md` — State Management.
**References:** `ARCHITECTURE.md` — State Management; `CODING_STANDARDS.md` — Data Rules.

---

### WD-023 — next-intl as Internationalization Library

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** next-intl is adopted as Weber's internationalization library, supporting Arabic and English (WD-012).
**Reason:** Built specifically for the Next.js App Router (WD-014), with locale-aware routing supporting the localization-readiness requirement for URLs (`ROUTES.md` §7).
**Alternatives Considered:** react-i18next / next-i18next, Lingui, Paraglide — presented in the Phase 1 technical review.
**Final Decision:** next-intl is official. Translation-file format, exact locale-routing scheme, and launch-language sequencing remain undecided.
**Impact:** Resolves the i18n-library item in `PROJECT_STRUCTURE.md` §6 and `ROUTES.md` §7.
**References:** `PROJECT_STRUCTURE.md` §6; `ROUTES.md` §7.

---

### WD-024 — PostgreSQL as Database

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** PostgreSQL is adopted as Weber's database.
**Reason:** Relational integrity fits Weber's content relationships now and future user/course/enrollment data, directly matching "design around data integrity... maintain referential integrity" (Part 5 — Database Philosophy).
**Alternatives Considered:** MySQL, MongoDB — presented in the Phase 1 technical review; MongoDB recommended against there given how relational Weber's data is.
**Final Decision:** PostgreSQL is official. The specific hosting/provider for it is not decided by this entry and remains tied to the still-pending Hosting decision.
**Impact:** Resolves the Database row in `ARCHITECTURE.md` Tech Stack.
**References:** `ARCHITECTURE.md` — Tech Stack.

---

### WD-025 — Prisma ORM as ORM

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Prisma ORM is adopted as Weber's ORM for PostgreSQL (WD-024).
**Reason:** Mature migration tooling and strong TypeScript integration.
**Alternatives Considered:** Drizzle, raw SQL, TypeORM — presented in the Phase 1 technical review, where Drizzle was the lead recommendation for serverless cold-start performance; the Project Owner approved Prisma instead, a fully reasonable choice weighted toward migration-tooling maturity.
**Final Decision:** Prisma ORM is official.
**Impact:** Informs `CODING_STANDARDS.md` — Data Rules; pairs with PostgreSQL (WD-024) and TypeScript (WD-015).
**References:** `CODING_STANDARDS.md` — Data Rules.

---

### WD-026 — Next.js Route Handlers and Server Actions as Backend Architecture

**Category:** Technology Stack
**Date:** 2026-07-16
**Status:** Approved
**Description:** Next.js Route Handlers and Server Actions are adopted as Weber's backend architecture for Version 1 — no separate backend service.
**Reason:** One codebase and one deploy for V1's actual needs (Contact form, Interactive Showcase logic), consistent with "the simplest solution that fully solves the problem" (Part 10).
**Alternatives Considered:** A dedicated Node/Nest.js service, a separate backend in another language — presented in the Phase 1 technical review as the option to revisit once the Client Dashboard is scoped.
**Final Decision:** Route Handlers and Server Actions are official for V1. A dedicated backend service remains undecided, expected to be revisited for Version 2.
**Impact:** Resolves the Backend framework/language row in `ARCHITECTURE.md` Tech Stack; informs `ARCHITECTURE.md` §API Structure (mechanism resolved; formal API design/versioning still open).
**References:** `ARCHITECTURE.md` — Tech Stack, §API Structure.

---

### WD-114 — Package Manager Adopted: pnpm

**Category:** Technology Stack
**Date:** 2026-07-17
**Status:** Approved
**Description:** pnpm is adopted as Weber's official package manager, resolving the gap identified during the Bootstrap Foundation Workshop. No other Bootstrap-level decision (Node.js version, `create-next-app` configuration, physical project structure, tooling, scripts, or Git workflow) is resolved by this decision — each remains open for its own future workshop.
**Reason:** Evaluated against Weber's already-approved engineering principles rather than popularity: long-term maintainability (Part 5 — pnpm is independently, actively maintained, with materially lower continuity risk than Bun and without Yarn's Classic/Berry fragmentation); Scalability (Part 5, Part 8 — pnpm's monorepo/workspace support is best-in-class among the four, a genuine advantage if Weber's confirmed future expansion into a Client Dashboard or Learning Platform, WD-038, ever warrants a workspace split, at zero cost today as a single application); and the Single Source of Truth discipline already established elsewhere (Amendment 1, WD-010 — pnpm's strict dependency resolution surfaces phantom-dependency bugs at install time rather than in production, the dependency-graph equivalent of that same discipline). No option contradicts any existing approved decision — every package in Weber's approved stack (Next.js, TypeScript, Tailwind, shadcn/ui on Radix UI, Motion, Lucide React, React Hook Form, Zod, Zustand) is fully compatible with pnpm.
**Alternatives Considered:** npm — presented as the legitimate, lower-risk alternative (zero setup, zero CI configuration burden, lowest possible continuity risk as part of Node.js core tooling); set aside in favor of pnpm's workspace, disk-efficiency, and strict-resolution advantages, but explicitly not rejected as unreasonable. Yarn — presented and set aside for splitting into two incompatible generations (Classic frozen, Berry actively developed with documented Next.js App Router friction in PnP mode) with no objective advantage over pnpm for Weber's specific stack. Bun — presented and set aside as the highest-risk option (youngest, VC-backed, historically binary lockfile, least mature `shadcn/ui` CLI support) for a project whose governance model explicitly favors proven stability over cutting-edge tooling.
**Final Decision:** pnpm is official. Lockfile format, workspace configuration, and CI setup specifics are implementation detail, not decided here.
**Impact:** Resolves the Critical package-manager blocker identified in the Bootstrap Foundation Workshop. Updates `ARCHITECTURE.md` §0 (Approved Technology Stack table).
**References:** `ARCHITECTURE.md` §0.

---

### WD-115 — Node.js Version Policy Adopted: Active LTS (Concrete Version Deferred)

**Category:** Technology Stack
**Date:** 2026-07-17
**Status:** Approved
**Description:** Weber adopts a Node.js version **policy**, explicitly separated from the **concrete version number** and the **enforcement mechanism** — three distinct layers, only the first of which is resolved by this decision:
- **Policy (decided now):** Weber tracks **Active LTS**. Future updates are **event-driven**, triggered only by (a) Weber's Next.js version being upgraded to a new major version, or (b) the currently-adopted Node LTS line transitioning out of Active status — never on a fixed calendar schedule.
- **Concrete version (explicitly deferred, not decided here):** The exact minimum Node.js version is a dependent value, not an independent choice — it is determined only once Weber's Next.js version (approved in principle via WD-014, still unpinned) is officially pinned, since each Next.js major version publishes its own minimum Node requirement. No specific version number is named, implied, or defaulted to by this decision.
- **Enforcement mechanism (choice decided now, values deferred):** `package.json` `engines` and `.nvmrc` are both adopted as the approved enforcement mechanisms, used together rather than as alternatives. The version *values* written into them remain `[PENDING PROJECT OWNER DECISION]` until the concrete Node.js version above is separately approved.
**Reason:** Mirrors a pattern already used successfully three times elsewhere in this documentation system: `DECISIONS.md` WD-036 approved semantic color roles while leaving exact hex values pending as a separate step; `SECURITY_POLICY.md`'s Security Decision Boundaries (WD-102) and `PERFORMANCE_GUIDE.md`'s Performance Decision Boundaries (WD-105) both approve governing principles now while explicitly reserving specific mechanisms/numbers for a later, distinct decision. Active LTS is chosen over tracking Current (unnecessary regression risk for a project with no measured need for bleeding-edge runtime features, Part 10 — Simplicity Wins) and over pinning a Maintenance LTS (approaches end-of-life sooner, forgoes recent security and performance work, against `SECURITY_POLICY.md` §3.1's secure-defaults principle and the "every dependency increases maintenance cost" principle, Part 5, applied here to the runtime). An event-driven rather than calendar-driven update policy is consistent with this project's standing discipline of deciding deliberately rather than on autopilot (Part 7 — Approval Workflow).
**Alternatives Considered:** Tracking Current — presented and rejected as unnecessary regression risk with no corresponding approved need. Pinning a Maintenance LTS — presented and rejected as working against long-term maintainability rather than serving it. Naming an exact Node.js version now — presented and rejected as premature: the true minimum is mathematically downstream of the still-unpinned Next.js version (WD-014), so any number chosen today would be a guess, not a derivation. A calendar-driven update cadence — presented and rejected as unsupported by any approved documentation and inconsistent with this project's event-driven, approval-gated decision pattern.
**Final Decision:** Active LTS is the official Node.js version policy. The concrete Node.js version remains open, to be determined only once Next.js is pinned. `package.json` `engines` and `.nvmrc` are the approved enforcement mechanisms; their version values remain open alongside the concrete version itself. This decision does not select or imply the exact Node.js version, the Next.js version, `create-next-app` configuration, project tooling, scripts, Git workflow, or CI platform configuration — each remains a separate, still-open decision.
**Impact:** Resolves the Node.js version *policy* layer of the second Critical Bootstrap blocker identified in the Bootstrap Foundation Workshop, while explicitly leaving the *concrete version* layer open. Updates `ARCHITECTURE.md` §0 and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `ARCHITECTURE.md` §0; `DECISIONS.md` WD-014, WD-036, WD-102, WD-105, WD-114.

---

### WD-116 — Create Next App Configuration: Bootstrap Decisions and Tooling Policy

**Category:** Technology Stack
**Date:** 2026-07-17
**Status:** Approved
**Description:** Weber's `create-next-app` configuration is resolved across four strictly separated layers, following the Create Next App Configuration Workshop's classification of each interactive prompt:
- **Bootstrap configuration (decided):** TypeScript (restated for Bootstrap traceability — already WD-015), Tailwind CSS (WD-016), and App Router (WD-014) are confirmed as already-resolved prompts requiring no further input. **`src/` directory: adopted** — application code lives under `src/` (e.g. `src/app`, `src/lib`), keeping the repository root reserved for configuration files. **Import alias: `@/*`** — the Next.js and shadcn/ui default convention, resolving to `src/`. Both were open architectural questions in the Phase 1 review and are resolved here by direct Project Owner decision, not by AI default.
- **Tooling policy (decided, tool inclusion only):** ESLint is installed as a Bootstrap tool, using Next.js's own baseline configuration. **This decides tool inclusion only — the rule-set, strictness, and any custom configuration remain a separate, undecided future decision**, consistent with `CODING_STANDARDS.md`'s existing "specific tooling (linting rules...)" placeholder. Turbopack is enabled for `next dev` only — local development, trivially reversible, no structural consequence.
- **ESLint rule configuration (explicitly NOT decided):** Rule strictness, custom overrides, and Prettier integration remain open, tracked separately from the tool-inclusion decision above.
- **Future Next.js version-dependent features (explicitly NOT decided, deferred):** React Compiler and Turbopack for production builds are both deferred until Weber's Next.js version is pinned — neither is evaluable independent of that still-open decision.
**Reason:** `src/` and the import alias were identified as the two prompts with real, coupled architectural weight (every internal import path depends on both) — resolved together as one physical-structure decision rather than as isolated CLI answers, per the Phase 1 review's explicit recommendation. ESLint tool inclusion and dev-only Turbopack were both classified as safe defaults (low risk, trivially reversible, no contradiction with any approved decision) and are recorded as such rather than left ambiguous. React Compiler and production Turbopack are both explicitly version-dependent per external technical evidence (their availability and stability vary by Next.js release) and cannot be responsibly evaluated ahead of a pinned Next.js version.
**Alternatives Considered:** No `src/` directory (app code at repository root) — presented in the Phase 1 review as the lower-nesting alternative; superseded by direct Project Owner decision favoring a clean repository root. A custom import alias string, or no alias at all — both presented; superseded by direct Project Owner decision for the `@/*` default. Deciding ESLint rules, React Compiler, or production Turbopack now — each presented and rejected as premature, either because the underlying policy is a separate decision (ESLint rules) or because the evaluation is explicitly version-dependent on an unpinned Next.js version (React Compiler, production Turbopack).
**Final Decision:** `src/` directory and `@/*` import alias are official. ESLint is installed as a tool; its rule configuration is not decided. Turbopack is enabled for development only. React Compiler, production Turbopack, the Next.js version itself, Prettier, Husky, lint-staged, EditorConfig, Git workflow, and scripts are explicitly not decided by this entry.
**Impact:** Resolves the coupled `src/`/import-alias physical-structure question flagged in `ARCHITECTURE.md` §2 and `CODING_STANDARDS.md`. Updates `ARCHITECTURE.md` §0 and §2, `CODING_STANDARDS.md`, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `ARCHITECTURE.md` §0, §2; `CODING_STANDARDS.md`; `DECISIONS.md` WD-014, WD-015, WD-016, WD-115.

---

### WD-121 — ESLint Rule Policy: Philosophy, Approved Categories, Explicit Deferrals

**Category:** Technology Stack
**Date:** 2026-07-17
**Status:** Approved
**Description:** Weber's ESLint rule-set layer — explicitly separated from tool installation by WD-116 — is resolved across four strictly separated parts:
- **Philosophy (decided):** Correctness-first and maintainability-first, at a **moderate** rule set — not minimal (accessibility and hooks correctness are non-negotiable) and not maximal (no invented numeric thresholds or unapproved stylistic policing).
- **Approved rule categories (decided):** Accessibility rules (`eslint-plugin-jsx-a11y`, via the already-approved Next.js baseline, WD-116), React rules, React Hooks rules (`rules-of-hooks`, `exhaustive-deps`), the base `@typescript-eslint` plugin, `no-explicit-any`, `no-debugger`, `prefer-const`, and `no-var`.
- **Import-boundary enforcement (architectural direction approved, implementation deferred):** Enforcing WD-068's four-tier dependency layering via import-boundary lint rules is approved as the correct architectural direction. **The concrete plugin, rule configuration, and tier-to-path mapping remain a separate, future tooling decision** — this entry approves the *approach*, not a specific implementation.
- **Explicitly deferred (not decided):** `complexity`, `max-lines`, and `max-params` numeric thresholds, and mechanical (casing-based) naming-convention enforcement — none has an approved specific value, and `CODING_STANDARDS.md`'s existing Naming Conventions section is qualitative ("describe intent immediately"), not mechanically checkable by lint as currently written.
- **Strict separation of responsibilities (recorded, not newly decided):** ESLint owns correctness and discipline rules TypeScript itself does not enforce (e.g., `no-explicit-any` — TypeScript permits `any` freely). TypeScript compiler strictness (which would affect `no-unused-vars`-adjacent overlap) remains `[PENDING PROJECT OWNER DECISION]` (`CODING_STANDARDS.md`). Prettier and its configuration remain entirely unapproved — any ESLint/Prettier division of labor is forward-looking, not decided here.
**Reason:** Each approved rule category traces to a specific existing principle, not popularity: accessibility to Part 4/6's repeated "accessibility is mandatory"; React Hooks correctness to Reliability (Part 5) and Stateless-by-default (`DECISIONS.md` WD-054); `no-explicit-any` to `CODING_STANDARDS.md`'s near-verbatim statement about WD-015; `no-debugger` to the Constitution's "No debug code." (Launch Readiness). Import-boundary enforcement is approved in direction only because it is the concrete mechanism identified in the Project Structure Workshop review as the way to actually enforce WD-068 (mirroring the Component Library's eight categories as folders does not by itself prevent an import running the wrong direction) — but selecting and configuring the specific plugin is real, non-trivial work not resolved by this entry. Numeric-threshold rules are deferred specifically because inventing a number now would itself be an undocumented default, the same discipline already applied throughout this documentation system.
**Alternatives Considered:** A minimal rule set (accessibility/hooks only) — presented in the Phase 1 review and rejected as under-serving Reliability and Maintainability, both named Engineering Values (Part 5). A maximal rule set (including numeric thresholds and full naming-convention enforcement) — presented and rejected as inventing unapproved policy, contrary to Simplicity Wins (Part 10) and "do not over-engineer speculatively" (`CODING_STANDARDS.md`). Deciding the specific import-boundary plugin now — presented and deferred as requiring dedicated design work mapping WD-068's four tiers to concrete import paths, not a single-entry decision.
**Final Decision:** The philosophy and eight approved rule categories above are official. Import-boundary enforcement is approved as the architectural direction for enforcing WD-068; its concrete implementation is a separate future tooling decision. `complexity`, `max-lines`, `max-params`, and mechanical naming-convention enforcement are explicitly deferred. Prettier configuration, TypeScript compiler strictness, any ESLint plugin beyond those named above, and all numeric thresholds are explicitly not decided by this entry.
**Impact:** Completes the rule-set layer WD-116 left open. Updates `docs/DEVELOPMENT_GUIDE.md`, `ARCHITECTURE.md` §0, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/DEVELOPMENT_GUIDE.md`; `ARCHITECTURE.md` §0; `DECISIONS.md` WD-054, WD-068, WD-116, WD-117.

---

### WD-122 — Prettier Adopted: Formatting Philosophy and Scope

**Category:** Technology Stack
**Date:** 2026-07-17
**Status:** Approved
**Description:** Prettier is officially adopted as Weber's formatting tool — resolving the last "still open" item named repeatedly since the original Bootstrap Workshop and restated in WD-116 and WD-121. The formatting philosophy is: **"Defer to Prettier defaults unless an approved Weber principle requires otherwise."** Resolved across four strictly separated parts:
- **Approved formatting categories (decided):** Trailing commas, JSX formatting, LF line endings, and end-of-file newline are approved formatting categories, each traced to a specific Weber concern (diff cleanliness for reviewable commits — Part 7; Consistency across the Component Library's 54 documented components — Part 5; cross-platform diff-noise prevention; POSIX/git hygiene, respectively).
- **Explicitly deferred (not decided):** Print width, quote style, semicolons, and tab width. None has an approved Weber-specific value. Print width in particular mirrors WD-121's own numeric-threshold discipline (`complexity`, `max-lines`, `max-params`) exactly — accepting a default silently here would break the precedent WD-121 just established.
- **Scope exclusion (decided):** Automatic formatting of the `docs/` directory is **NOT approved** and remains excluded by default. Weber's governance documentation — the Constitution, `DECISIONS.md`, the Component Library, and all companion documents — is intentionally maintained manually through the Workshop → Finalization cycle, not by automated tooling.
- **Strict separation of responsibilities (reaffirmed, not newly decided):** Prettier owns presentation only — quotes, spacing, line breaks — with zero logic or correctness implication. **Import ordering explicitly belongs to ESLint, not Prettier** — Prettier does not natively sort imports; this stays with ESLint's `import` plugin, already categorized as "Recommended — high value" in WD-121. TypeScript compiler strictness and all ESLint correctness rules (accessibility, hooks, `no-explicit-any`, import-boundary enforcement) remain entirely outside Prettier's remit, per WD-121 and WD-015.
**Reason:** Deferring to Prettier's own defaults where no Weber principle argues otherwise avoids inventing dozens of arbitrary micro-decisions (quotes, spacing, parens) with zero textual grounding either direction — directly extending Simplicity Wins (Part 10) and "do not over-engineer speculatively" (`CODING_STANDARDS.md`) into formatting territory, the same reasoning WD-121 already applied to reject a maximal ESLint rule set. The four approved categories each connect to a genuine, if sometimes indirect, Weber concern rather than popularity. The four deferred settings lack any such connection and, in print width's case, directly parallel an already-established "don't invent a number" precedent. Excluding `docs/` protects Weber's governance record from unreviewable, high-volume reformatting diffs across decision logs and component documentation that have been carefully hand-maintained across many Finalization cycles.
**Alternatives Considered:** Adopting Prettier's full default configuration wholesale, including print width — presented in the Phase 1 review and rejected as silently breaking WD-121's numeric-threshold discipline. Assigning import ordering to a Prettier plugin — presented and rejected as contradicting WD-121's own categorization of import rules as ESLint's responsibility. Applying Prettier to `docs/` alongside application code — presented and rejected given the high risk of mass, low-value reformatting diffs across the governance record.
**Final Decision:** Prettier is official. Trailing commas, JSX formatting, LF line endings, and end-of-file newline are approved. Print width, quote style, semicolons, and tab width remain undecided. `docs/` is excluded from automatic Prettier formatting by default. Import ordering, TypeScript compiler strictness, and all ESLint correctness rules remain outside Prettier's scope.
**Impact:** Resolves the last remaining "not yet decided" tooling item named since the original Bootstrap Workshop. Updates `docs/DEVELOPMENT_GUIDE.md`, `ARCHITECTURE.md` §0, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/DEVELOPMENT_GUIDE.md`; `ARCHITECTURE.md` §0; `DECISIONS.md` WD-121.

---

### WD-123 — EditorConfig Adopted: Scope Limited to Genuine Editor-Level Territory

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** EditorConfig is adopted, scoped narrowly to editor-level consistency at keystroke time — the earliest stage in the formatting pipeline, before Prettier (save), ESLint (lint), or TypeScript (build) ever run. Resolved across four strictly separated layers:
- **EditorConfig responsibilities (decided):** `root = true` (Weber is a single application, not a monorepo — WD-117's Hybrid model does not create a workspace structure); `charset = utf-8` (no other tool in the pipeline addresses character encoding); a Markdown-specific (`[*.md]`) section protecting intentional trailing whitespace (the two-trailing-space hard-line-break convention), disabling `trim_trailing_whitespace` for that file type specifically.
- **Existing decisions reflected, not independently decided:** `end_of_line = lf` and `insert_final_newline = true` are set to **mirror** WD-122's already-approved LF line endings and end-of-file newline. These are not fresh EditorConfig decisions — they exist here only so the editor behaves consistently with what Prettier already enforces, preventing the two tools from drifting out of sync.
- **Explicitly deferred / not decided:** `indent_size`, `tab_width`, `indent_style` (tabs vs. spaces), quote style, semicolons, print width, JSON formatting, YAML formatting, any Prettier configuration beyond what WD-122 already approved, any ESLint configuration beyond WD-121, and any TypeScript compiler option. None of these is decided, implied, or defaulted by this entry.
- **Responsibility boundaries (reaffirmed, not newly decided):** EditorConfig governs keystroke-time editor behavior only. It must never become a second source of formatting policy — Prettier remains the authority on presentation (WD-122), ESLint on correctness and import discipline (WD-121), and TypeScript on type correctness (WD-015). Where EditorConfig and Prettier both touch a property, EditorConfig echoes Prettier's value; it never decides independently or contradicts it.
**Reason:** `root=true` and `charset=utf-8` are EditorConfig's own genuine territory — no other tool in the pipeline has an equivalent. The Markdown-specific override directly extends WD-122's own reasoning for excluding `docs/` from automatic Prettier formatting: Weber's governance documentation is intentionally hand-maintained, and a blanket `trim_trailing_whitespace` would silently strip Markdown's meaningful two-space hard-line-break syntax, undoing that same protection at an earlier stage in the pipeline. Mirroring — rather than re-deciding — `end_of_line` and `insert_final_newline` prevents EditorConfig from becoming a second, independently-drifting source of truth for values WD-122 already settled. Every deferred item lacks an approved Weber-specific value; inventing one via EditorConfig specifically would repeat the exact undocumented-default failure mode WD-121 and WD-122 were both written to prevent.
**Alternatives Considered:** Deciding `indent_size`/`tab_width` independently via EditorConfig since WD-122 left it open — presented in the Phase 1 review and rejected, since EditorConfig inventing a number Prettier itself doesn't share would create a new cross-tool conflict rather than resolve one. Treating `end_of_line`/`insert_final_newline` as fresh, independent EditorConfig decisions — presented and rejected in favor of explicitly mirroring WD-122, preserving one source of truth. Approving `indent_style` and application-code `trim_trailing_whitespace` now — presented in the Phase 1 review as low-stakes options but not approved in this Finalization; both remain open.
**Final Decision:** `root=true`, `charset=utf-8`, and the Markdown-specific whitespace-protection section are official. `end_of_line=lf` and `insert_final_newline=true` are recorded as reflections of WD-122, not independent decisions. `indent_size`, `tab_width`, `indent_style`, and every other item listed above remain undecided.
**Impact:** Completes the editor-level layer of Weber's formatting pipeline, sitting ahead of Prettier (WD-122) and ESLint (WD-121) without duplicating either. Updates `docs/DEVELOPMENT_GUIDE.md`, `ARCHITECTURE.md` §0, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/DEVELOPMENT_GUIDE.md`; `ARCHITECTURE.md` §0; `DECISIONS.md` WD-121, WD-122.

---

### WD-124 — Husky Adopted: Git Hook Orchestration Scoped to pre-commit Only

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** Husky is officially adopted as Weber's Git hook orchestration tool, resolving the last item named repeatedly as "still open" since WD-116. Resolved across five clearly separated sections:
- **Approved philosophy:** Orchestrate only what is already decided; Husky must never become a mechanism for introducing new engineering policy. It decides *when*, at a Git lifecycle moment, an already-approved check runs — it never decides the content of that check.
- **Approved responsibilities:** Husky is officially adopted. It is responsible only for Git hook orchestration. `pre-commit` is the only approved hook. `pre-commit` may orchestrate already-approved tooling only (ESLint, WD-121; Prettier, WD-122) — its own lint-staged payload/configuration is a separate, undecided item, not resolved by this entry.
- **Explicitly deferred responsibilities:** `commit-msg` — blocked on the commit message convention, which is not decided anywhere in Weber's documentation. `pre-push` — blocked on two separate still-open decisions: the testing framework and branch strategy (both explicitly pending, `DEVELOPMENT_GUIDE.md`). `post-merge` and `post-checkout` — no Weber document names a specific automation need for either; deferred as a plausible future convenience, not urgent. Every other Git hook not named above.
- **Responsibility boundaries (reaffirmed, not newly decided):** Husky decides **when** tooling runs. lint-staged decides **what** runs and **which files** are affected. ESLint defines lint policy (WD-121). Prettier defines formatting policy (WD-122). EditorConfig defines editor behavior (WD-123). TypeScript defines compiler behavior (WD-015). Husky must never decide ESLint rules, Prettier configuration, TypeScript compiler settings, lint-staged configuration, Git workflow, commit message convention, or CI/CD behavior.
- **Remaining prerequisites:** Commit message convention (blocks `commit-msg`). Testing framework and branch strategy (both block `pre-push`). lint-staged's own configuration (blocks `pre-commit`'s actual payload, though the hook's existence is approved). **Husky is explicitly not a Bootstrap blocker** — it does not appear in `IMPLEMENTATION_BLUEPRINT.md`'s Critical Path and can be adopted without affecting Tier 1 implementation readiness.
**Reason:** `pre-commit` is the only hook with an already-approved payload to orchestrate — ESLint (WD-121) and Prettier (WD-122) are both fully decided, so orchestrating them earlier in the workflow adds no new policy, only timing. Every deferred hook is blocked by a specific, named prerequisite decision that remains genuinely open elsewhere in the documentation set; approving any of them now would require this entry to either do nothing meaningful or silently invent the missing convention (a commit format, a test command, a branch rule) — precisely the failure mode WD-121, WD-122, and WD-123 were each structured to prevent, now extended into Git-hook territory.
**Alternatives Considered:** Approving `commit-msg` with an inferred or default convention (e.g., Conventional Commits) — presented in the Phase 1 review and rejected as inventing a commit message convention, explicitly out of scope. Approving `pre-push` to run "whatever tests exist" — presented and rejected since no testing framework is decided, making the hook's content undefined. Deferring Husky's adoption itself, not just its hooks — presented and rejected, since the tool has genuine, already-approved content (`pre-commit`) to orchestrate now, unlike the fully-blocked hooks.
**Final Decision:** Husky is official. `pre-commit` is the only approved hook, scoped to orchestrating already-approved ESLint and Prettier policy. `commit-msg`, `pre-push`, `post-merge`, `post-checkout`, and every other hook remain deferred, each against its own named blocking decision. Husky is not a Bootstrap requirement.
**Impact:** Completes the Git-hook orchestration layer of Weber's tooling pipeline, sitting alongside — not inside — the EditorConfig/Prettier/ESLint/TypeScript chain (WD-121–WD-123, WD-015). Updates `docs/DEVELOPMENT_GUIDE.md`, `ARCHITECTURE.md` §0, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/DEVELOPMENT_GUIDE.md`; `ARCHITECTURE.md` §0; `DECISIONS.md` WD-015, WD-121, WD-122, WD-123.

---

### WD-125 — lint-staged Adopted: Completes the pre-commit Payload

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** lint-staged is officially adopted, completing the `pre-commit` payload WD-124 deliberately left open. Resolved across five clearly separated sections:
- **Approved philosophy:** lint-staged operates only on staged files, and may execute only already-approved tooling. It completes the already-approved `pre-commit` pipeline (WD-124) — it does not extend it. It must never become a mechanism for introducing new engineering policy.
- **Approved responsibilities:** lint-staged is officially adopted. ESLint is approved to run on staged source files (WD-121). Prettier is approved to run on staged source files (WD-122). `docs/` must remain excluded exactly as required by WD-122 — no lint-staged configuration may format `docs/` content.
- **Explicitly deferred responsibilities:** Type checking — not named in WD-124's closed two-tool authorization, and structurally mismatched with staged-file scoping (TypeScript needs the whole project's type graph). Testing — no testing framework is decided anywhere (`DEVELOPMENT_GUIDE.md`). Build execution — a whole-project operation, not a per-staged-file one; belongs to CI once decided. Generated files — no approved convention exists for what "generated files" means in Weber's context. Prisma-specific behavior — Prisma is approved as the ORM (WD-025), but no staged-file behavior for `.prisma` files is decided. `package.json`-specific behavior — no special handling is named anywhere. Image optimization — no tool or pipeline is named anywhere; would introduce unapproved tooling. Every other task not already approved above.
- **Responsibility boundaries (reaffirmed, not newly decided):** Husky decides **when** hooks execute (WD-124). lint-staged decides **what** runs on staged files, within WD-124's closed authorization. ESLint defines lint policy (WD-121). Prettier defines formatting policy (WD-122). EditorConfig defines editor behavior (WD-123). TypeScript defines compiler behavior. **CI performs repository-wide verification** — CI itself remains entirely undecided; this boundary is stated for completeness, not as an implied CI decision.
- **Remaining prerequisites:** Testing framework (blocks type checking and testing). CI platform (blocks build execution and repository-wide verification generally). A defined convention for generated files and Prisma schema handling (blocks both). **lint-staged is recommended for Bootstrap completion — it is NOT a Bootstrap blocker.**
**Reason:** ESLint and Prettier are the only two candidates that clear both bars this review applied: an already-approved policy to enforce (WD-121, WD-122) and a genuine fit with per-staged-file scoping. Every deferred item is blocked by a specific, named prerequisite — not disqualified in principle — consistent with the discipline WD-121 through WD-124 already established: never fill a gap with an invented default. Excluding `docs/` is not a new decision; it is WD-122's existing exclusion, restated here specifically because a naive Markdown glob is the most concrete, easy-to-make configuration mistake this review identified.
**Alternatives Considered:** Including type checking or a build step "to be thorough" — presented in the Phase 1 review and rejected as exceeding WD-124's closed authorization and inventing CI's role at the wrong layer. Including testing once a framework exists, decided now to save a future step — presented and rejected as inventing a testing strategy ahead of that decision. Treating lint-staged as a Bootstrap blocker, matching the urgency of package manager/Node version — presented and rejected; nothing in `IMPLEMENTATION_BLUEPRINT.md`'s Critical Path depends on it, the same conclusion already reached for Husky itself.
**Final Decision:** lint-staged is official, scoped to ESLint and Prettier on staged files, with `docs/` excluded per WD-122. Type checking, testing, build execution, generated files, Prisma-specific behavior, `package.json`-specific behavior, image optimization, and every other unnamed task remain deferred against their respective prerequisites. lint-staged completes the already-approved `pre-commit` pipeline; it is recommended for Bootstrap completion and is not a Bootstrap blocker.
**Impact:** Closes the last open item in Weber's formatting/linting/hook pipeline (EditorConfig → Prettier → ESLint → Husky → lint-staged). Updates `docs/DEVELOPMENT_GUIDE.md`, `ARCHITECTURE.md` §0, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/DEVELOPMENT_GUIDE.md`; `ARCHITECTURE.md` §0; `DECISIONS.md` WD-015, WD-121, WD-122, WD-123, WD-124.

---

### WD-126 — Next.js Version Policy Adopted: Active Major, Deliberately Pinned (Concrete Version Still Pending)

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** Weber adopts a Next.js version **policy**, following the same governance pattern established by WD-115 (Node.js Version Policy) and WD-116 (Bootstrap Configuration) — the policy is decided now; the concrete version is not. Resolved across four strictly separated layers:
- **Version Policy (decided now):** **Active Major, deliberately pinned, never floating automatically.** Weber tracks a specific, deliberately-chosen Next.js major version — never "latest" (which would chase every release) and never a literal "LTS version" (Next.js has no official LTS program, unlike Node.js's Active/Maintenance/EOL tiers — applying that label here would misdescribe the ecosystem). Patch-level updates within the pinned major flow via the standard caret-range convention; the major itself is never changed automatically.
- **Concrete version (explicitly deferred, not decided here):** The exact Next.js major version number is not chosen by this decision. Naming one now would mean assuming either "newest" or "old and stable," both explicitly rejected in the Phase 1 review as ungrounded defaults. This remains open for a dedicated future decision.
- **Upgrade Policy (decided now):** **Event-driven, never calendar-driven.** Future major-version upgrades are triggered only by (a) a deliberate decision tied to a specific feature need, or (b) the currently-pinned major approaching the end of the Next.js team's active attention — never a fixed schedule. Mirrors WD-115's event-driven Node.js update policy directly.
- **Responsibility boundaries (reaffirmed, not newly decided):** This decision does **not** choose a concrete Next.js version, does **not** choose React Compiler, does **not** choose Production Turbopack, and does **not** choose the concrete Node.js version. It only makes those decisions *possible* later: pinning the major mechanically resolves the Node.js version formula WD-115 already established (a lookup against Next.js's own published requirement, not a fresh decision), and removes the version-dependency blocker WD-116 recorded against React Compiler and Production Turbopack — without approving either. Both remain separate, independent decisions.
**Reason:** Next.js has no official LTS program — an external technical fact, not a Weber-specific one — so the closest honest analog to WD-115's Active LTS choice for Node.js is "Active Major, pinned deliberately," not a literal LTS claim. Always tracking latest was rejected as the highest-churn, highest-regression-risk option, working against the "moderate, not maximal" philosophy already governing WD-121/122. A fully floating version was rejected as breaking WD-115's own dependent-formula approach, since the Node.js version cannot be mechanically derived from a moving target. Event-driven upgrades mirror WD-115's own reasoning directly, avoiding the same undocumented-cadence risk already ruled out there.
**Alternatives Considered:** Tracking latest stable — presented in the Phase 1 review and rejected for churn/regression risk. A literal "LTS-style" policy — presented and rejected as a category error, since Next.js's release model has no LTS tier to apply it to. A fully floating, unpinned version — presented and rejected as breaking the Node.js dependent-formula relationship (WD-115). Naming a concrete version now to unblock WD-115/WD-116 immediately — presented and rejected as inventing a number under the "newest" or "old stable" assumptions this review was explicitly told not to make.
**Final Decision:** Active Major (deliberately pinned, never floating) is the official Next.js version policy. Upgrades are event-driven, never calendar-driven. The concrete version remains open for a separate, future decision. This entry resolves no version number, does not approve React Compiler, does not approve Production Turbopack, and does not resolve the concrete Node.js version — it only removes the blockers WD-115 and WD-116 recorded against evaluating them.
**Impact:** Unblocks WD-115's Node.js version formula (mechanically resolvable once a concrete Next.js version is chosen) and WD-116's React Compiler/Production Turbopack evaluations (now evaluable, still not decided). Updates `ARCHITECTURE.md` §0 and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `ARCHITECTURE.md` §0; `DECISIONS.md` WD-014, WD-115, WD-116.

---

### WD-127 — Concrete Next.js Version Adopted: Next.js 16

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** Weber pins **Next.js 16** as its official concrete Next.js major version, resolving the single layer WD-126 deliberately left open. Distinguished explicitly against WD-126's four-layer structure:
- **Version Policy (already decided, WD-126, unchanged):** Active Major, deliberately pinned, never floating automatically. Not re-decided here.
- **Concrete Version (resolved by this decision):** **Next.js 16.** Patch and minor updates within major 16 flow via the standard caret-range convention already established by WD-126; the major itself changes only on a future event-driven decision.
- **Upgrade Policy (already decided, WD-126, unchanged):** Event-driven, never calendar-driven. Not re-decided here.
- **Responsibility Boundaries (unchanged from WD-126):** This decision resolves the concrete Next.js version number and, by doing so, mechanically enables — but does not itself perform — the concrete Node.js version lookup (WD-115's formula), the `package.json` `engines` value, and the `.nvmrc` value. It makes React Compiler and Production Turbopack **evaluable** (both are stable, opt-in features of Next.js 16). It does **not** approve React Compiler. It does **not** approve Production Turbopack. Both remain separate, independent, still-open decisions.
**Reason:** Next.js 15's active security-backport window closes within approximately three months of this decision (~October 2026), while Next.js 14 is already past end of support — pinning either would create an involuntary, near-immediate upgrade trigger, directly undermining WD-126's "deliberately pinned, not floating" intent. Next.js 16 is the current actively-supported major, nine months and three minor releases past its stable launch (16.0 → 16.2, patched to 16.2.10), with Turbopack's production build path and React Compiler both promoted from experimental/alpha (in 15) to stable (in 16). Because Weber has no existing Next.js installation, none of the 15→16 breaking changes (fully-async Request APIs, `middleware`→`proxy`, image-default changes, `next lint` removal) carry any migration cost — a cost that would normally be the strongest argument for staying one major behind. `next lint`'s removal in favor of running ESLint directly is a point of alignment with Weber's already-adopted ESLint policy (WD-121), not a new obligation.
**Alternatives Considered:** Pinning Next.js 15 — presented in the Phase 1 review and rejected because its security-backport window closes almost immediately after this decision, creating the exact reactive-upgrade scenario WD-115/WD-126 were written to prevent, with no offsetting migration-avoidance benefit since Weber has no existing 15 installation to protect. Pinning Next.js 14 — presented and rejected outright as already past end of support. Delaying the concrete version decision further — presented and rejected as contradicting this item's own prior classification (in the Next.js Version Workshop underlying WD-126) as a Critical Bootstrap blocker, with no pending Next.js release event identified that would reduce ambiguity by waiting.
**Final Decision:** Next.js 16 is Weber's official concrete Next.js version. This entry resolves only the version number. It does not approve React Compiler, does not approve Production Turbopack, and does not itself set the concrete Node.js version, `engines`, or `.nvmrc` values — it mechanically enables each to be resolved next.
**Impact:** Mechanically enables the concrete Node.js version lookup (WD-115's Active LTS formula, now runnable against Next.js 16's published minimum of Node.js ≥ 20.9.0), the `package.json` `engines` value, and the `.nvmrc` value. Makes React Compiler and Production Turbopack evaluable — neither approved. Updates `ARCHITECTURE.md` §0, `docs/DEVELOPMENT_GUIDE.md`, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `ARCHITECTURE.md` §0; `DECISIONS.md` WD-115, WD-116, WD-126.

---

### WD-128 — Concrete Node.js Version Adopted: Node.js 24

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** Weber pins **Node.js 24** as its official concrete Node.js version, resolving the single layer WD-115 deliberately left open — now runnable because WD-127 supplied the missing input (the concrete Next.js version). Distinguished explicitly across four layers:
- **Version Policy (already resolved, WD-115, unchanged):** Active LTS, with updates triggered only by a Next.js major upgrade or an Active LTS transition — never a calendar schedule. Not re-decided here.
- **Concrete Version (resolved by this decision):** **Node.js 24** — the current Active LTS line, the mechanical output of running WD-115's Active LTS formula against Next.js 16's published minimum (Node.js ≥ 20.9.0, WD-127).
- **Upgrade Policy (already resolved, WD-115, unchanged):** Event-driven, never calendar-driven. Not re-decided here.
- **Responsibility Boundaries (unchanged from WD-115):** This decision mechanically resolves `package.json` `engines`, `.nvmrc`, the local development runtime, and the CI runtime baseline — each a direct write-through of the single Node 24 value, not a new architectural policy. It does **not** approve React Compiler, does **not** approve Production Turbopack, does **not** change the Next.js version policy (WD-126), does **not** change the concrete Next.js version (WD-127), does **not** change the Package Manager (WD-114), and does **not** change any other Bootstrap configuration (WD-116). All remain separate, independent, unaffected decisions.
**Reason:** WD-115 already specified the formula — Active LTS — leaving only its inputs to be determined; this decision performs no independent judgment beyond running that formula. Node.js 20, the literal minimum Next.js 16 will accept, reached end-of-life on April 30, 2026 and receives no further security patches, making it unfit regardless of technical compatibility. Node.js 22 is Maintenance LTS only. Node.js 24 is the current Active LTS line (entered LTS October 2025, Active until approximately October 2026, full support — including non-critical fixes — until then, security support until April 30, 2028), and independently clears pnpm 11's own Node ≥ 22 requirement (WD-114) as well as Next.js 16's 20.9.0 floor (WD-127). Node.js 26 was not eligible: it is still a Current release as of this decision and does not enter LTS until October 2026, so selecting it would require reopening WD-115's Active LTS policy itself, which is outside this decision's authority.
**Alternatives Considered:** Node.js 20 (Next.js 16's literal minimum) — presented in the Phase 1 review and rejected as already past end-of-life, receiving no security patches. Node.js 22 (Maintenance LTS) — presented and rejected as not the Active LTS line WD-115's formula specifies. Node.js 26 (newest release) — presented and rejected as not yet an LTS line at all, and as requiring an unauthorized reopening of WD-115's Active LTS policy to justify.
**Final Decision:** Node.js 24 is Weber's official concrete Node.js version. This entry resolves only the version number and its direct mechanical write-throughs (`engines`, `.nvmrc`, local runtime, CI runtime baseline). It introduces no new architectural policy and leaves WD-115's Version Policy and Upgrade Policy, WD-126's Next.js Version Policy, WD-127's concrete Next.js version, WD-114's Package Manager, and WD-116's Bootstrap Configuration entirely unchanged.
**Impact:** Resolves `package.json` `engines` and `.nvmrc` to Node.js 24, establishes the local development runtime and the CI runtime baseline. Completes the version-resolution chain begun by WD-126/WD-127. Does not make React Compiler or Production Turbopack approved — both remain separately open. Updates `ARCHITECTURE.md` §0, `docs/DEVELOPMENT_GUIDE.md`, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `ARCHITECTURE.md` §0; `DECISIONS.md` WD-114, WD-115, WD-126, WD-127.

---

### WD-135 — Class Name Composition Strategy: clsx + tailwind-merge (CVA Deferred)

**Category:** Technology Stack
**Date:** 2026-07-18
**Status:** Approved
**Description:** **clsx** and **tailwind-merge**, composed together as a single `cn()` helper, are adopted as Weber's official class name composition and conflict-resolution strategy, resolving the Class Name Composition Strategy Workshop review. **class-variance-authority (CVA)** is explicitly evaluated and **deferred** — not rejected — until a component with genuine multi-dimensional variant management exists. This decision distinguishes three previously-conflated concerns and resolves only the first two:
- **Class composition (resolved):** conditional/array/object class joining. **clsx.**
- **Class conflict resolution (resolved):** ensuring a consumer's `className` reliably overrides a component's own default Tailwind utility classes, which Tailwind's equal-specificity utilities do not guarantee under plain string concatenation. **tailwind-merge.**
- **Variant management (explicitly not resolved):** structured, type-safe variant/size/state matrices (Button, Badge, Alert, Card). **CVA was evaluated and found architecturally appropriate for this, but is deliberately not adopted now.**
**Reason:** The already-implemented Foundation Components (Container, Section, Stack, Cluster, Divider, VisuallyHidden — Component Library Foundation Components Finalization) used plain string concatenation in the absence of an approved tool, and the Phase 1 review found this has a real defect: Tailwind utilities carry equal CSS specificity, so naive concatenation cannot guarantee a consumer's override wins. tailwind-merge is purpose-built to resolve exactly this, and is confirmed compatible with Weber's installed Tailwind v4 (tailwind-merge v3 specifically targets Tailwind v4). clsx solves the separate, narrower problem of readable conditional composition. Together they form the exact `cn()` utility that WD-017's already-approved shadcn/ui generates by its own convention — adopting it now implements a foreseeable consequence of an already-approved decision rather than opening an independent new one. classnames was evaluated and rejected on technical grounds, not popularity: it duplicates clsx's exact functionality at several times the bundle size, with no offsetting advantage. CVA was found to directly implement the Variant Philosophy (`DECISIONS.md` WD-057) once Button/Badge/Alert/Card exist, but no currently-approved, currently-built component has a genuine variant matrix — adopting it now would be building infrastructure ahead of a real need, the same restraint already applied to `store/` (WD-119) and the Surface primitive (WD-092/WD-094).
**Alternatives Considered:** Native string concatenation (the status quo) — presented and rejected as the sole strategy due to its demonstrated, unreliable override behavior. classnames — presented and rejected as strictly dominated by clsx (identical function, larger cost). tailwind-merge alone — presented and rejected as insufficient alone, lacking conditional-composition ergonomics. clsx alone — presented and rejected as insufficient alone, since it cannot resolve Tailwind class conflicts. class-variance-authority — presented, evaluated as architecturally correct for a future need, and explicitly deferred rather than adopted or rejected.
**Final Decision:** clsx + tailwind-merge (a single `cn()` helper) are official for class composition and conflict resolution. CVA is explicitly deferred, to be revisited when a component with genuine variant management (most likely Button) is next approved for implementation — this is not a rejection and requires no new Workshop to reconsider once that trigger occurs. Neither the exact file location/export name for `cn()` nor tailwind-merge's custom-theme extension configuration (teaching it Weber's custom container/color/z-index tokens) is decided here — both remain implementation details for a future implementation task. This is a documentation Finalization only: neither package is installed and no project code is modified by this entry.
**Impact:** Resolves the class-composition portion of `CODING_STANDARDS.md`'s "Concrete conventions beyond the library itself" placeholder. Establishes the target mechanism the six existing Foundation Components should migrate to when next touched — does not itself modify their code. Updates `ARCHITECTURE.md` §0, `CODING_STANDARDS.md`, `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `DECISIONS.md` WD-010, WD-016, WD-017, WD-057, WD-092, WD-094, WD-119; `CODING_STANDARDS.md` — Component Architecture, Styling Rules.

---

## Design Tokens

Approved in **Design Tokens Finalization**, following a two-phase design-system review (Design Tokens Decision Workshop, Phase 1 — strategy; Phase 2 — numeric values, both published for review, neither creating any project file). The Project Owner approved the reviewed system with two explicit deviations from the AI's Phase 2 recommendation — a fourth font weight (WD-028) and a wider Reading container (WD-035) — both noted below. Everything else reflects the numeric system as reviewed in Phase 2.

### WD-027 — Typography Scale System

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** A ten-role, rem-based typography scale — Display, H1, H2, H3, Title, Subtitle, Body, Caption, Button, Code — using a hybrid modular-plus-hand-tuned strategy, with a 16px (1rem) floor for Body text at every viewport.
**Reason:** rem units respect the user's browser font-size setting rather than overriding it; a 16px Body floor is the generally accepted minimum for comfortable web reading and avoids iOS Safari's automatic zoom-on-focus for smaller inputs; a hybrid scale stays disciplined enough to be consistent while allowing hand-tuned adjustment at the extremes (Display, Caption) where optical judgment matters more than formula.
**Alternatives Considered:** A strict modular scale and a fully hand-tuned/editorial scale — both presented in the Design Tokens Decision Workshop Phase 1 review; px-based sizing — presented and recommended against in Phase 2 on accessibility grounds.
**Final Decision:** Approved as reviewed. Ten roles, rem units, 16px Body floor at all viewports; Display and H1 scale down on mobile, all other roles stay constant. Full per-role values (desktop/mobile) as published in the Phase 2 review are adopted as official — see `DESIGN_TOKENS.md` for the complete table.
**Impact:** Resolves the typographic-scale placeholder in `ARCHITECTURE.md` §8 and `CODING_STANDARDS.md` — Styling Rules.
**References:** `DESIGN_TOKENS.md` §1; `ARCHITECTURE.md` §8.

---

### WD-028 — Font Weight System

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Four font weights: 400 (Regular), 500 (Medium), 600 (Semibold), and 700 (Bold), with 700 explicitly restricted to high-emphasis headings only.
**Reason:** Regular/Medium/Semibold cover the default reading, UI-label, and heading needs described in the Phase 2 review; the Project Owner additionally approved a restricted 700 for moments that need stronger emphasis than Semibold provides.
**Alternatives Considered:** The Phase 2 review recommended **three** weights only (400/500/600), explicitly advising against a true Bold (700) to preserve a calm, restrained register and minimize font-file payload (Performance Trade-off Rule, `DECISIONS.md` WD-010). **This is a deliberate Project Owner deviation from that recommendation**, not an oversight — recorded here for traceability.
**Final Decision:** Four weights are official. 700 is constrained to high-emphasis headings only — it is not available for body text, buttons, or general UI labels, preserving most of the calm-register rationale from the original recommendation while allowing genuine emphasis where the Project Owner judges it necessary.
**Impact:** Resolves the font-weight placeholder in `ARCHITECTURE.md` §8 and `CODING_STANDARDS.md` — Styling Rules.
**References:** `DESIGN_TOKENS.md` §2.

---

### WD-029 — Line-Height System

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Body line-height is 1.6 (unitless). Line-height for other role groups (Display/H1 tight; H2/H3/Title moderate; Caption/Button/Code compact) follows the tiered system published in the Phase 2 review.
**Reason:** 1.6 for Body meets and exceeds WCAG 1.4.8's recommended minimum of 1.5× for body text. Line-height decreasing as font size increases is standard typographic practice — large text carries enough visual weight per line that tighter spacing still reads comfortably, while small text needs more relative breathing room.
**Alternatives Considered:** Uniform line-height across all roles — presented in the Phase 2 review and set aside because it under-serves small text and over-serves large text simultaneously.
**Final Decision:** Body line-height of 1.6 is explicitly approved by the Project Owner. The remaining role-group line-heights (tight/moderate/compact tiers) are adopted as reviewed in Phase 2, consistent with the Project Owner's approval of "the reviewed design foundation" as a whole; these are marked as carried over from the review, not independently re-confirmed number-by-number, and remain open to correction if any specific value was not intended to be included.
**Impact:** Resolves the line-height placeholder in `ARCHITECTURE.md` §8.
**References:** `DESIGN_TOKENS.md` §3.

---

### WD-030 — Spacing Scale

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** A ten-step hybrid spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (px).
**Reason:** 8px steps produce the generous whitespace the Constitution requires (Part 6 — Color Usage: "whitespace is more valuable than additional colors"); the 4px and 12px half-steps preserve precision for compact UI (icon/label pairs, form and badge internals) without a second, parallel scale.
**Alternatives Considered:** Pure 8pt-only and pure 4pt-only scales, and a Fibonacci-style progression — all presented and compared in the Phase 2 review; pure 8pt was set aside for lacking a step between 8 and 16, pure 4pt for producing too many near-duplicate values, and Fibonacci for producing steps with no clear semantic role.
**Final Decision:** The ten-step scale above is official, as reviewed.
**Impact:** Resolves the spacing-scale placeholder in `ARCHITECTURE.md` §8 and `CODING_STANDARDS.md` — Styling Rules; extends the spacing strategy already approved in principle in the Phase 1 review.
**References:** `DESIGN_TOKENS.md` §4.

---

### WD-031 — Border Radius Scale

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Five radius levels: None (0px), Small (4px), Medium (8px), Large (16px), Full (9999px / 50%).
**Reason:** The Constitution explicitly favors restraint here — "avoid excessive rounding... the interface should feel modern rather than playful" (Part 6 — Border Radius). Five levels are enough to distinguish structural, default, and prominent surfaces without building a longer scale a restrained brand doesn't need.
**Alternatives Considered:** A longer, Material-Design-style radius scale (8+ levels) — presented in the Phase 2 review and set aside as disproportionate to the brand's restrained visual identity.
**Final Decision:** The five levels above are official, as reviewed.
**Impact:** Resolves the radius-scale placeholder in `ARCHITECTURE.md` §8.
**References:** `DESIGN_TOKENS.md` §5.

---

### WD-032 — Elevation Scale

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Four elevation levels: 0 (Flat, the default), 1 (Resting), 2 (Raised), 3 (Overlay).
**Reason:** The Constitution states a flat-first preference directly — "flat design is preferred unless depth improves usability... avoid dramatic shadows... depth should be subtle" (Part 6 — Elevation). Four levels distinguish resting, interactive, and overlay content without building a deep "depth system" that would contradict that preference.
**Alternatives Considered:** A deeper, Material-Design-style elevation system (6+ levels) — presented in the Phase 2 review and set aside as directly conflicting with the Constitution's flat-design preference.
**Final Decision:** The four levels above are official, as reviewed. Exact shadow/background values for dark-mode elevation (where conventional drop-shadows read poorly against a near-black background) are left to implementation, not defined by this token decision.
**Impact:** Resolves the elevation-scale placeholder in `ARCHITECTURE.md` §8.
**References:** `DESIGN_TOKENS.md` §6.

---

### WD-033 — Motion Duration & Easing Tokens

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Four motion-duration groups — Micro (100–150ms), Standard (200–250ms), Moderate (300–400ms), Deliberate (~500ms) — with directional easing: ease-out for entering elements, ease-in for exiting elements, ease-in-out for two-sided state changes, and linear reserved for continuous/looping elements only.
**Reason:** A small, named set of durations prevents arbitrary per-component timing values, the same discipline already applied to spacing (WD-030). Directional easing matches how motion is perceived — fast-start/gentle-settle for arrivals, gentle-start/accelerating for departures — consistent with "smooth interactions, precise movement, elegant transitions" (Part 2 — Snake Philosophy).
**Alternatives Considered:** Arbitrary, per-component durations and uniform ease-in-out for all motion — both presented in the Phase 2 review and set aside for reintroducing the inconsistency a token system exists to prevent.
**Final Decision:** The four duration groups and directional easing philosophy above are official, as reviewed. `prefers-reduced-motion` continues to be respected without exception (`UI_FOUNDATION.md §6`); no motion-only signal is permitted without an accompanying non-motion cue.
**Impact:** Informs `CODING_STANDARDS.md` — Animation & Icon Rules, and the implementation of Motion (`DECISIONS.md` WD-018).
**References:** `DESIGN_TOKENS.md` §7.

---

### WD-034 — Breakpoint Tiers

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Four responsive tiers — Mobile (base, no query), Tablet (≥768px), Laptop (≥1024px), Desktop (≥1280px).
**Reason:** Four tiers are sufficient given mobile-first, progressive enhancement (Part 6 — Responsive Design); beyond the Desktop tier, the Container Width Strategy (WD-035) — not additional breakpoints — prevents content from stretching on very large screens.
**Alternatives Considered:** A more granular, 6+ tier breakpoint system for finer device targeting — presented in the Phase 2 review and set aside as solving a problem the container strategy already solves.
**Final Decision:** The four tiers above are official, as reviewed, as illustrative device-class ranges rather than a framework-specific implementation.
**Impact:** Resolves the breakpoint-strategy placeholder in `ARCHITECTURE.md` §8 and `UI_FOUNDATION.md` §8 (Responsive Philosophy).
**References:** `DESIGN_TOKENS.md` §8.

---

### WD-035 — Container Width Variants

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved
**Description:** Three named containers: Reading (720px), Standard (1152px), Wide (1320px).
**Reason:** Text-heavy content, balanced marketing content, and wide grids/showcases have different optical needs; a single universal width serves none of them well (Phase 1 review, Container Philosophy).
**Alternatives Considered:** A single universal container width — presented in both Phase 1 and Phase 2 reviews and set aside for the reason above. For Reading specifically, the Phase 2 review recommended approximately 680px, sized against classic reading-comfort research (roughly 60–75 characters per line at Body's type size). **The Project Owner approved 720px instead — a deliberate deviation, noted here for traceability**, still within the range that research treats as comfortable.
**Final Decision:** Reading: 720px. Standard: 1152px. Wide: 1320px. All three official as approved.
**Impact:** Resolves the container-width item in `ROUTES.md`, `ARCHITECTURE.md` §8, and the Container Philosophy established in `UI_FOUNDATION.md` §3.
**References:** `DESIGN_TOKENS.md` §9.

---

### WD-036 — Semantic Color Roles (Conceptual)

**Category:** Design Tokens
**Date:** 2026-07-16
**Status:** Approved (roles only — values pending)
**Description:** Five semantic color roles are approved conceptually: Success, Warning, Danger, Information, Neutral. No hex values are approved for any of them.
**Reason:** The Constitution's own Interactive States, Error States, and Forms sections (Part 6) require the interface to visually distinguish these states; approving the roles now lets `CODING_STANDARDS.md` and future component work reference them by name while the actual colors remain a separate, deliberate decision consistent with "additional colors may only be introduced when they solve a real usability problem" (Part 6 — Color System).
**Alternatives Considered:** Not applicable — the roles themselves were proposed in `UI_FOUNDATION.md` §5 as roles the system would eventually need; this decision formalizes their approval without inventing values.
**Final Decision:** The five roles are official as names/concepts. Hex values, exact shade, and dark/light-mode variants remain `[PENDING PROJECT OWNER DECISION]`.
**Impact:** Updates the semantic-color item in `UI_FOUNDATION.md` §5 from "not yet approved" to "roles approved, values pending."
**References:** `DESIGN_TOKENS.md` §10; `UI_FOUNDATION.md` §5.

---

Approved in **Design Foundation Finalization**, following the Design Foundation Workshop Phase 1 review (published for review, creating no project file). The review found most of the requested scope already resolved by WD-027–WD-036; the six entries below finalize only the items that review found genuinely open.

### WD-129 — Neutral Gray Scale

**Category:** Design Tokens
**Date:** 2026-07-18
**Status:** Approved
**Description:** A six-step neutral gray scale — `neutral.100` through `neutral.950` — interpolated along the achromatic axis already established by WD-002, using Background (#0B0C0F) and Primary (#FFFFFF) as its two endpoints and Secondary (#D4D4D8) and Accent (#71717A) as fixed midpoints, rather than an independent new hue.
**Reason:** The Design Foundation Workshop review found borders, disabled states, tertiary text, and muted surfaces need more than the four single-point WD-002 colors provide, but an unrelated new hue would violate "additional colors may only be introduced when they solve a real usability problem" (Part 6 — Color System). Deriving the scale from values already approved satisfies that constraint directly — no new hue enters the palette, only intermediate lightness steps of the existing one.
**Alternatives Considered:** An independent gray hue unrelated to WD-002's anchors — presented in the Phase 1 review and rejected as an unnecessary new color introduction. A longer, 9+ step scale (Tailwind's own default gray convention) — rejected as disproportionate to a four-color, restrained palette.
**Final Decision:** neutral.950 = #0B0C0F (= Background), neutral.900 = #1C1D21, neutral.700 = #3A3B40, neutral.500 = #71717A (= Accent), neutral.300 = #9A9AA1, neutral.100 = #D4D4D8 (= Secondary).
**Impact:** Resolves the neutral-scale gap identified in the Design Foundation Workshop review. Feeds the shadow-rendering strategy (WD-132) and the Tailwind v4 mapping (WD-134). Updates `DESIGN_TOKENS.md`.
**References:** `DESIGN_TOKENS.md` §11 (new); `DECISIONS.md` WD-002.

---

### WD-130 — Semantic Color Hex Values

**Category:** Design Tokens
**Date:** 2026-07-18
**Status:** Approved
**Description:** Completes WD-036 by adopting hex values for the five approved semantic color roles: Success `#6FA98A`, Warning `#C9A15C`, Danger `#C97B72`, Information `#7C9FC9`, and Neutral (semantic) `#71717A` — reusing the already-approved Accent color rather than introducing a fifth new hue.
**Reason:** WD-036 approved the five roles conceptually and explicitly deferred hex values. The Design Foundation Workshop review found the semantic Neutral role's stated purpose — "supports structure... without competing with Primary/Secondary/Accent" — functionally identical to Accent's already-approved role, so no new color is needed for it. The remaining four have no existing equivalent; the chosen hues are desaturated, muted tones calibrated for legibility against the `#0B0C0F` background, consistent with "calm, not alarm" (Success/Warning) and "never blames the user" (Danger) from `UI_FOUNDATION.md` §5.
**Alternatives Considered:** Brighter, more saturated conventional status colors (standard web green/amber/red) — presented in the Phase 1 review and rejected as inconsistent with the desaturated, restrained register the rest of the palette establishes. Assigning Neutral (semantic) its own new hex — rejected once Accent was found to already serve the identical function.
**Final Decision:** Success `#6FA98A`, Warning `#C9A15C`, Danger `#C97B72`, Information `#7C9FC9`, Neutral (semantic) `#71717A` (= Accent, no new hex). All five remain subject to a real contrast-ratio check during implementation; the values here are the approved starting point, not exempt from accessibility verification.
**Impact:** Removes the "hex values pending" status from WD-036 / `DESIGN_TOKENS.md` §10. Unblocks Alert, Error Message, and all future feedback-bearing components. Updates `DESIGN_TOKENS.md`, `UI_FOUNDATION.md` §5, `IMPLEMENTATION_BLUEPRINT.md`.
**References:** `DECISIONS.md` WD-036; `DESIGN_TOKENS.md` §10; `UI_FOUNDATION.md` §5.

---

### WD-131 — Font Family: Geist Sans / Geist Mono

**Category:** Design Tokens
**Date:** 2026-07-18
**Status:** Approved
**Description:** Geist Sans (UI/body text) and Geist Mono (Code typography role) are Weber's official font family, resolving the placeholder in `BRAND_GUIDELINES.md`.
**Reason:** Geist is already integrated into the Bootstrap-scaffolded project via `next/font`, requiring no additional install or external font request — serving the Performance Trade-off Rule (WD-010) directly, since it is self-hosted automatically rather than fetched from a third-party CDN. As a variable font, its weight axis covers WD-028's exact 400/500/600/700 scale natively. Its geometric-humanist character reads as modern and restrained, consistent with "readable, clean, well-spaced... decorative fonts are avoided" (`BRAND_GUIDELINES.md` — Typography). Vercel is one of the six companies `BRAND_GUIDELINES.md` names as a principles-level inspiration (clarity, spacing, hierarchy, typography, minimalism); adopting their typeface honors that stated relationship without copying any layout or branding.
**Alternatives Considered:** Inter — presented in the Phase 1 review as the most battle-tested option, rejected as the single most common choice in this exact product category, working against "the brand should feel modern today and still feel relevant many years from now" and Weber's stated ambition to avoid reading as templated. A distinctive third-party/paid geometric sans — presented and rejected for requiring self-hosting work and licensing cost with no approved budget decision behind it, when Geist achieves comparable distinctiveness at zero additional cost or engineering effort.
**Final Decision:** Geist Sans is official for all UI and body text; Geist Mono is official for the Code typography role (`DESIGN_TOKENS.md` §1). Both load via `next/font`, consistent with the existing Bootstrap scaffold.
**Impact:** Resolves the font-family placeholder in `BRAND_GUIDELINES.md`. Unblocks the `--font-sans`/`--font-mono` Tailwind theme variables (WD-134) and every text-rendering component. Updates `BRAND_GUIDELINES.md`, `IMPLEMENTATION_BLUEPRINT.md`.
**References:** `BRAND_GUIDELINES.md` — Typography; `DESIGN_TOKENS.md` §1; `DECISIONS.md` WD-028.

---

### WD-132 — Shadow Rendering Strategy

**Category:** Design Tokens
**Date:** 2026-07-18
**Status:** Approved
**Description:** Completes WD-032 by adopting a concrete shadow-rendering technique per elevation level: elevation 0–2 use a background-lightness step (drawn from the WD-129 neutral scale) plus a 1px low-opacity border, with no `box-shadow`; elevation 3 (Overlay) alone uses a soft, low-opacity, high-blur `box-shadow`.
**Reason:** WD-032 approved four elevation levels but explicitly deferred exact rendering, noting that conventional drop-shadows "read poorly on Weber's near-black default background... may need to lean on subtle background-lightness shifts or borders instead" (`DESIGN_TOKENS.md` §6). Reserving real shadows for Overlay only is the most literal application of the Constitution's flat-first preference ("avoid dramatic shadows... depth should be subtle," Part 6 — Elevation), while still giving modals/dialogs the genuine visual separation they functionally need.
**Alternatives Considered:** A conventional `box-shadow` at every elevation level, scaled by intensity (the Material Design pattern already rejected in principle by WD-032) — presented and rejected as both visually poor against a near-black background and inconsistent with the flat-first Constitution language WD-032 already cited. Border-only with no lightness shift — presented and rejected as insufficient to distinguish elevation.1 from elevation.2 without relying on hover/focus state changes alone.
**Final Decision:** Elevation 0 = no treatment. Elevation 1–2 = background-lightness step + 1px low-opacity border, no shadow. Elevation 3 = soft, low-opacity, high-blur `box-shadow` — the only level using a true shadow.
**Impact:** Resolves the deferred rendering question in WD-032 / `DESIGN_TOKENS.md` §6. Updates `DESIGN_TOKENS.md`.
**References:** `DECISIONS.md` WD-032, WD-129; `DESIGN_TOKENS.md` §6.

---

### WD-133 — z-index Scale

**Category:** Design Tokens
**Date:** 2026-07-18
**Status:** Approved
**Description:** A five-token z-index scale — `z.base` (0), `z.sticky` (10), `z.dropdown` (20), `z.overlay` (30), `z.skip-link` (50) — sized to the stacking needs of components actually approved for Version 1, not a generic scale pre-allocated for the deferred Version 2 Modal/Sheet/Popover family.
**Reason:** No prior decision addresses z-index or stacking order at all — the Design Foundation Workshop review found zero grounding anywhere in the documentation system. Grounding the scale in actually-approved V1 components (Header's sticky positioning, Select's floating menu, Mobile Navigation Toggle's overlay, Tooltip, and Skip Link's must-always-be-topmost requirement) keeps it proportionate, consistent with the restraint already applied to the elevation scale (WD-032) rather than inventing values for hypothetical components.
**Alternatives Considered:** A deep, Material-Design-style z-index scale with reserved bands for every conceivable future layer — presented and rejected as disproportionate, since Modal, Dialog, Sheet, Drawer, and Popover are all explicitly deferred to Version 2 (Surfaces Components Finalization). Arbitrary per-component z-index values with no shared scale — presented and rejected as reintroducing the inconsistency a token system exists to prevent.
**Final Decision:** The five tokens above are official. Deliberate headroom (40, 60+) is left unallocated for the deferred Modal/Sheet/Popover family rather than pre-assigned now.
**Impact:** Establishes Weber's first stacking-order token set. Updates `DESIGN_TOKENS.md`.
**References:** `DESIGN_TOKENS.md` §12 (new); `DECISIONS.md` WD-032, WD-071 (Skip Link), WD-076 (Header, Mobile Navigation Toggle), WD-081 (Select), WD-092 (Tooltip).

---

### WD-134 — CSS Variables Strategy & Tailwind v4 Theme Mapping

**Category:** Design Tokens
**Date:** 2026-07-18
**Status:** Approved
**Description:** Resolves the "Design Token ↔ Tailwind integration mechanism" gap flagged since the Bootstrap Workshop (`PROJECT_STRUCTURE.md` §11.3; `DECISIONS.md` WD-119). Weber's design tokens live exclusively in Tailwind v4's native `@theme` block inside `src/app/globals.css` — no separate hand-authored CSS-variables file and no `tailwind.config.ts` theme extension. Each token declared in `@theme` is automatically both a Tailwind utility and a real CSS custom property, satisfying "tokens live in [Tailwind's] theme configuration" (`ARCHITECTURE.md` §8) with a single source of truth.
**Reason:** The Bootstrap Implementation installed Tailwind CSS v4 (`@tailwindcss/postcss` ^4), which is CSS-first by design — an external technical fact about the already-approved tool (WD-016), not a new tool choice. Adopting its native mechanism avoids maintaining the same values in two places, directly serving Simplicity Wins (Part 10). It also explains, retroactively, why `constants/` was correctly left uncreated in WD-119/`PROJECT_STRUCTURE.md` §11.3 — there is no separate token file for it to hold; tokens' physical home is `globals.css` itself.
**Alternatives Considered:** A hand-authored CSS custom-properties file plus a matching `tailwind.config.ts` theme extension (the standard Tailwind v3-era pattern) — presented in the Phase 1 review and rejected as duplicating values across two files for no benefit, and working against the grain of the version actually installed.
**Final Decision:** Tailwind v4's `@theme` block in `globals.css` is the single, official source of truth for every Weber design token. The mapping below is the concrete translation of every already-approved and newly-finalized token:

| Weber token | Tailwind v4 `@theme` variable | Note |
|---|---|---|
| color.background/primary/secondary/accent (WD-002) | `--color-background`, `--color-primary`, `--color-secondary`, `--color-accent` | |
| color.success/warning/danger/information/neutral (WD-130) | `--color-success`, `--color-warning`, `--color-danger`, `--color-information`, `--color-neutral` | Neutral reuses `--color-accent` |
| neutral.100–950 (WD-129) | `--color-neutral-100` … `--color-neutral-950` | |
| typography.* — 10 roles (WD-027) | `--text-display` … `--text-code`, paired with `--text-*--line-height` | |
| weight.regular/medium/semibold/bold (WD-028) | Tailwind's default `font-normal/medium/semibold/bold` | Already equal 400/500/600/700 — no custom token needed |
| space.1–10 (WD-030) | Tailwind's default spacing scale | Already lands on 4/8/12/16/24/32/48/64/96/128px — no custom token needed |
| radius.none/sm/md/lg/full (WD-031) | `--radius-sm`, `--radius-md`, `--radius-lg` | `full` via Tailwind's built-in `rounded-full` |
| elevation.0–3 rendering (WD-032, WD-132) | `--shadow-elevation-3` only; 0–2 use `--color-neutral-*` background steps + border | |
| duration.micro/standard/moderate/deliberate (WD-033) | `--duration-*` | One concrete value chosen within each approved range: 150ms/200ms/350ms/500ms |
| easing.out/in/inOut/linear (WD-033) | `--ease-out`, `--ease-in`, `--ease-in-out`, `--ease-linear` | |
| breakpoint.tablet/laptop/desktop (WD-034) | Tailwind's default `md`/`lg`/`xl` | Already equal 768/1024/1280px — no custom token needed |
| container.reading/standard/wide (WD-035) | `--container-reading`, `--container-standard`, `--container-wide` | No Tailwind default matches these |
| font-sans/font-mono (WD-131) | `--font-sans`, `--font-mono` | Geist Sans / Geist Mono |
| z.base/sticky/dropdown/overlay/skip-link (WD-133) | `--z-base`, `--z-sticky`, `--z-dropdown`, `--z-overlay`, `--z-skip-link` | |

**Impact:** Resolves the flagged Bootstrap Workshop gap. Supersedes the open reasoning (not the decision itself) behind `constants/`'s absence in `PROJECT_STRUCTURE.md` §11.3. Updates `ARCHITECTURE.md` §8, `PROJECT_STRUCTURE.md` §11.3, `DESIGN_TOKENS.md`. This is a documentation Finalization only — it does not itself edit `globals.css`; implementation follows in a future Development Phase task.
**References:** `ARCHITECTURE.md` §8; `PROJECT_STRUCTURE.md` §11.3; `DECISIONS.md` WD-016, WD-119, WD-129, WD-130, WD-131, WD-132, WD-133.

---

## Information Architecture

Approved via **IA Decision Synchronization**, following the Information Architecture Workshop Phase 1 review, which flagged several inputs as unverified against approved documentation. This synchronization resolves every flag raised in that review.

### WD-037 — Version 1 Official Services

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** Version 1 officially includes four services: Website Development, Mobile Applications, Desktop Applications, and Templates.
**Reason:** Confirms and extends the only previously-grounded service (Website Development — Part 1, Current Focus) with three additional service lines, resolving the gap flagged in the Information Architecture Workshop Phase 1 review, where only Website Development could be verified against existing documentation.
**Alternatives Considered:** Not documented — this was a direct scope confirmation by the Project Owner in response to the flagged gap, not a comparison between alternative service sets.
**Final Decision:** The four services above are Version 1 scope. The Learning Platform is explicitly excluded from this list (see WD-038). Detailed information hierarchy for these services (categories, page structure) is deferred to Information Architecture Finalization — this decision confirms scope only.
**Impact:** Resolves the Services-list ambiguity flagged in the IA Workshop Phase 1 review §4; unblocks Services-related content in `ROUTES.md` and `PROJECT_ROADMAP.md`.
**References:** `ROUTES.md` — Services; `PROJECT_ROADMAP.md` — Version 1 Goals.

---

### WD-038 — Learning Platform Confirmed as Version 2

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** The Learning Platform is officially a Version 2 product, not a Version 1 service. Version 1 must remain architecturally prepared for its future integration, without presenting it as a current service.
**Reason:** Resolves the direct contradiction flagged in the IA Workshop Phase 1 review, where the task's own §4 listed "Educational Platform" as a current service while §8 treated it as a future direction. This decision confirms the future-only framing already established elsewhere (Part 1 — Long-Term Vision; Part 8 — Future Scalability Review) and rejects the conflicting "current service" framing.
**Alternatives Considered:** Treating Educational Platform/Learning Platform as a current Version 1 service — this was the ambiguity itself, not a genuine alternative under consideration; the Project Owner's decision removes the ambiguity rather than choosing between two live options.
**Final Decision:** Learning Platform remains Version 2 only. "Architecturally prepared" means Version 1's architecture (the six-layer/six-category model, `DECISIONS.md` WD-013) must not foreclose its future integration — it does not require any Learning-Platform-specific work in Version 1.
**Impact:** Resolves the Services-vs-Future-Direction contradiction identified in the IA Workshop Phase 1 review (Risks, "Educational Platform: V1 or V2?"); confirms existing framing in `ROUTES.md` §3, `PROJECT_STRUCTURE.md` §4, and `PROJECT_ROADMAP.md`.
**References:** `ROUTES.md` §3; `PROJECT_STRUCTURE.md` §4; `PROJECT_ROADMAP.md` — Future Educational Platform.

---

### WD-039 — Blog Approved as a Version 1 Feature

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** The Blog is officially part of Version 1, documented as a content strategy feature. No CMS, storage technology, or implementation detail is decided by this entry.
**Reason:** Reverses the "unapproved feature" status the Blog carried through `PROJECT_STRUCTURE.md` §4, `ROUTES.md`, and the IA Workshop Phase 1 review — the Project Owner has now explicitly confirmed it as Version 1 scope.
**Alternatives Considered:** Not documented — this is a direct scope confirmation, not a comparison between alternatives. The Content Management technology decision (CMS vs. Git-based, `DECISIONS.md` Pending Decisions) remains fully open and is a separate decision from the Blog's existence.
**Final Decision:** Blog exists in Version 1 as a content strategy feature — its purpose is informational/trust-building content and SEO discovery, consistent with the Constitution's SEO requirements (Part 5) and Conversion Philosophy ("educate first," Part 3). Its route structure, categories, and CMS/storage technology are not decided here and remain open for Information Architecture Finalization and the Content Management decision respectively.
**Impact:** Resolves the Blog-approval gap flagged repeatedly across `PROJECT_STRUCTURE.md`, `ROUTES.md`, `DECISIONS.md` Pending Decisions, and the IA Workshop Phase 1 review.
**References:** `ROUTES.md` §2; `PROJECT_STRUCTURE.md` §4.

---

### WD-040 — Home Page Section Order

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** The Home page's official section order is: Hero, Services, Interactive Showcase, Why Weber, Portfolio, Process, Testimonials, FAQ, Contact CTA.
**Reason:** This order tracks the Constitution's Confidence Journey (Curiosity → Interest → Understanding → Trust → Confidence → Excitement → Action, Part 4) — confirmed in the IA Workshop Phase 1 review as consistent with that progression. It extends the Constitution's original seven named sections (Part 4 — Every Section Has One Job: Hero, Services, Portfolio, Interactive Showcase, Testimonials, FAQ, Contact) with two additional sections, Why Weber and Process, approved separately (WD-041, WD-042).
**Alternatives Considered:** Not documented — the order was proposed in the IA Workshop Phase 1 review and approved as reviewed, with no alternative ordering presented.
**Final Decision:** The nine-section order above is official for the Home page.
**Impact:** Resolves the "exact placement of Testimonials and FAQ" pending item and the Home-page structure ambiguity in `ROUTES.md`; supersedes the seven-section list as the current Home page composition (the Constitution's original seven-section list remains valid as the source of each section's core purpose — Part 4 is unmodified).
**References:** `ROUTES.md` — Home.

---

### WD-041 — "Why Weber" Section Approved

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** A "Why Weber" section is approved for the Home page (per WD-040), with the purpose of building trust by presenting: Guarantees, Quality, Performance, Maintenance, Professionalism, and Long-term support.
**Reason:** Resolves the gap flagged in the IA Workshop Phase 1 review, where "Why Weber" had no textual grounding in the Constitution's original section list. It is now approved as new scope, consistent with the Constitution's Trust Signals (Part 4: "professional portfolio, client testimonials, clear process, support commitment... security, consistency").
**Alternatives Considered:** Not documented — proposed in the IA Workshop Phase 1 review as a flagged addition; approved as proposed rather than compared against alternative trust-building formats.
**Final Decision:** "Why Weber" is an approved Home page section. Its content covers Guarantees, Quality, Performance, Maintenance, Professionalism, and Long-term support — visual design and exact copy are not decided by this entry.
**Impact:** Resolves the "Why Weber" flag from the IA Workshop Phase 1 review; informs the Home route entry in `ROUTES.md`.
**References:** `ROUTES.md` — Home.

---

### WD-042 — "Process" Section Approved

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** A "Process" section is approved for the Home page (per WD-040), with the purpose of demonstrating Weber's professional workflow. No implementation detail is decided.
**Reason:** The Constitution already names "clear process" directly as a Trust Signal (Part 4 — Trust Signals). This decision formalizes that existing principle into a dedicated Home page section, consistent with the IA Workshop Phase 1 review's assessment that Process was "a formalization of the already-approved Trust Signals principle rather than a new idea."
**Alternatives Considered:** Folding process information into "Why Weber" or Services instead of a standalone section — implicitly available but not the direction approved; a dedicated section was chosen.
**Final Decision:** "Process" is an approved Home page section, with the sole architectural purpose of demonstrating Weber's professional workflow. Its specific steps, visual treatment, and content are not decided by this entry.
**Impact:** Resolves the "Process" flag from the IA Workshop Phase 1 review; informs the Home route entry in `ROUTES.md`.
**References:** `ROUTES.md` — Home.

---

### WD-043 — Multi-Route Architecture Adopted

**Category:** Information Architecture
**Date:** 2026-07-16
**Status:** Approved
**Description:** Weber officially adopts a multi-route architecture — Version 1 destinations (Home, Services, Interactive Showcase, Portfolio, Contact, Blog) are implemented as distinct routes, not as sections within a single scrolling page.
**Reason:** Resolves the recurring open question flagged across `ARCHITECTURE.md` §4, `ROUTES.md`, `PROJECT_STRUCTURE.md`, and the IA Workshop Phase 1 review (listed there as a risk that "blocks IA.md either way"). Next.js App Router (`DECISIONS.md` WD-014) was already noted as strongly implying this outcome by convention; this decision makes it explicit and official rather than an unconfirmed implication.
**Alternatives Considered:** A single scrolling page with anchor-linked sections — the interpretation `ROUTES.md` deliberately stayed agnostic about until this decision; explicitly not chosen.
**Final Decision:** Multi-route architecture is official. Each Version 1 destination in `ROUTES.md` §2 is a distinct route. Exact URL scheme, slugs, and framework-level routing conventions remain `[PENDING PROJECT OWNER DECISION]`.
**Impact:** Resolves the single-page-vs-multi-route pending item everywhere it was flagged: `ARCHITECTURE.md` §4, `ROUTES.md` (scope note, §7, Pending Decisions), and `PROJECT_STRUCTURE.md`.
**References:** `ARCHITECTURE.md` §4; `ROUTES.md` §7.

---

## UX Specification

Approved via **UX Specification Finalization**, following the UX Specification Workshop Phase 1 review (published for review, creating no project file). The Project Owner approved the review in full as "the authoritative foundation" — every entry below reflects the review's content, now official.

### WD-044 — Global Interaction State Model

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** Nine canonical interaction states apply product-wide: Default, Hover, Active/Pressed, Focus, Disabled, Loading, Success, Error, Empty.
**Reason:** The Constitution already names seven of these directly (Part 6 — Interactive States); Active (a naming alignment with "Pressed") and Empty are added because real content and forms require them. One canonical set prevents each future component from inventing its own state model, protecting Brand Consistency (Part 6).
**Alternatives Considered:** Not documented — this formalizes an existing Constitution list rather than choosing between alternatives.
**Final Decision:** The nine states above are official and apply to every interactive element in the product.
**Impact:** Establishes the state vocabulary every future component must implement; informs the upcoming Design System/Component Library phase.
**References:** `UX_SPECIFICATION.md` §3.

---

### WD-045 — Navigation Behavior Philosophy

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** A persistent, slim sticky header is the default header behavior. Breadcrumb readiness is scoped to second-level content only (individual Services, Portfolio case studies, Blog posts) — not required for the shallow five-destination core. Footer is non-sticky, appearing once per page.
**Reason:** Sticky navigation keeps every core destination reachable within a small number of interactions (Remove Friction, Part 4) without the space cost of a heavy implementation, which would work against Minimal (`UI_FOUNDATION.md` §1). Breadcrumbs are unnecessary for a shallow core structure (Navigation Philosophy: "zero learning," Part 4) but useful once a visitor lands mid-hierarchy via search on Services detail, Portfolio, or Blog content (`INFORMATION_ARCHITECTURE.md` §6, §8, §9).
**Alternatives Considered:** A heavier, more prominent sticky header; breadcrumbs everywhere or nowhere — both presented in the Phase 1 review and set aside as disproportionate to Weber's shallow IA.
**Final Decision:** Slim sticky header (confirmed as default behavior); breadcrumb readiness scoped to second-level content; footer non-sticky.
**Impact:** Governs the Component Library's Header and Breadcrumb component scope.
**References:** `UX_SPECIFICATION.md` §4.

---

### WD-046 — Forms Interaction Philosophy

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** Forms validate on blur/submit by default, switching to real-time validation on a field only after that field's first error. Required fields are the default and minimized; optional fields are rare and explicitly marked when present.
**Reason:** Validating every keystroke adds friction before a visitor has finished typing; switching to real-time validation after a first error gives immediate positive feedback on correction (Part 6: "validation is immediate"; Part 4 — Error Prevention: "validate early"). Minimizing required fields directly implements "request only necessary information" (Part 4 — Forms).
**Alternatives Considered:** Real-time validation on every keystroke always — presented in the Phase 1 review and set aside as unnecessary friction.
**Final Decision:** The validation-timing and required/optional philosophy above is official, applying to all Version 1 forms (Contact, Interactive Showcase) and any future forms.
**Impact:** Governs the Component Library's Form and Input component behavior.
**References:** `UX_SPECIFICATION.md` §5.

---

### WD-047 — Interactive Showcase Interaction Journey

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** A seven-step interaction journey for the Interactive Showcase — Empty, Typing, Processing, Preview, Retry, Error, Conversion — with explicitly elevated design care on the Processing, Preview, Retry, and Error steps, given the Showcase's unique role as Weber's only "show, don't tell" trust-building interaction.
**Reason:** The Showcase is already approved as Weber's signature feature (`DECISIONS.md` WD-005); this decision formalizes the interaction-level journey needed to deliver it well, consistent with "transforming imagination into confidence" (Part 3).
**Alternatives Considered:** Not documented — the journey structure follows directly from the already-approved Showcase concept rather than comparing alternative journeys.
**Final Decision:** The seven-step journey is official. Processing, Preview, Retry, and Error receive design priority over equivalent states elsewhere in the product.
**Impact:** Directly informs the Component Library's Interactive Showcase component and its Loading/Error state implementations (WD-048, WD-049).
**References:** `UX_SPECIFICATION.md` §6.

---

### WD-048 — Loading Experience Patterns

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** Skeletons are used where the eventual layout is known in advance (Portfolio grid, Blog listing); spinners where duration and layout are both unknown (Interactive Showcase generation, form submission); progressive loading for image-heavy views; lazy loading for offscreen/below-the-fold content.
**Reason:** Skeletons preserve layout stability and avoid sudden content shifts (Part 6 — Loading States); spinners communicate less information and are reserved for cases with no better option. Lazy loading directly serves the Performance Trade-off Rule (`DECISIONS.md` WD-010, Amendment 1 Rule 4).
**Alternatives Considered:** A single, uniform loading treatment (spinner-only) for all cases — presented in the Phase 1 review and set aside for under-serving cases where layout is predictable.
**Final Decision:** The four patterns above are official, applied per the "appropriate when" criteria in `UX_SPECIFICATION.md` §7.
**Impact:** Governs the Component Library's Skeleton, Spinner, and image-loading component behavior.
**References:** `UX_SPECIFICATION.md` §7.

---

### WD-049 — Feedback System Philosophy

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** Four feedback message types — Success, Warning, Error, Informational — each with a defined role, all sharing one calm, professional, non-alarmist tone.
**Reason:** Directly implements the semantic color roles already approved conceptually (`DECISIONS.md` WD-036) at the messaging level, and the Constitution's Brand Voice (Part 2) applied to system feedback specifically — even an error should read as composed, not panicked.
**Alternatives Considered:** Not documented — formalizes existing Constitution/WD-036 principles rather than comparing alternative tones.
**Final Decision:** The four message types and shared calm tone are official.
**Impact:** Governs the Component Library's Toast/Alert/Message component copy and behavior; pairs directly with WD-036's semantic color roles once hex values are decided.
**References:** `UX_SPECIFICATION.md` §8.

---

### WD-050 — Accessibility Interaction Requirements

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** Full keyboard operability, logical focus management (including on dynamically revealed content), screen-reader live-region announcements for dynamic feedback, unconditional `prefers-reduced-motion` support, and no hover-dependent interactions anywhere in the product.
**Reason:** Extends `UI_FOUNDATION.md` §7's accessibility philosophy to interaction specifics — dynamic states (loading, success, error) are meaningless to a screen-reader user without live-region announcement, and mobile-first (`DECISIONS.md` WD-034) requires that no interaction depend on hover, which doesn't exist on touch.
**Alternatives Considered:** Not documented — this is a direct extension of already-mandatory accessibility principles, not a comparison between accessibility levels.
**Final Decision:** All requirements above are official and mandatory for every interactive element, not an opt-in enhancement.
**Impact:** Governs every component in the future Component Library — accessibility requirements apply before, not after, component design.
**References:** `UX_SPECIFICATION.md` §9; `UI_FOUNDATION.md` §7.

---

### WD-051 — Responsive Interaction Philosophy

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** Interactions adapt across the four approved breakpoint tiers (`DECISIONS.md` WD-034) primarily through input-method awareness — hover exists only on Laptop/Desktop; Mobile/Tablet rely on tap as a single gesture — rather than through separate interaction designs per tier.
**Reason:** Mobile-first (Part 6 — Responsive Design) means the touch-based interaction model is the baseline, with hover added as an enhancement on larger, pointer-based devices, not the reverse.
**Alternatives Considered:** Not documented — follows directly from the already-approved mobile-first principle.
**Final Decision:** The input-method-aware adaptation model above is official.
**Impact:** Governs how every interactive component's states (WD-044) are implemented across breakpoints.
**References:** `UX_SPECIFICATION.md` §10.

---

### WD-052 — Conversion-Stage UX Responsibilities

**Category:** UX Specification
**Date:** 2026-07-16
**Status:** Approved
**Description:** A defined UX responsibility at each stage of the Visitor → Trust → Exploration → Confidence → Contact conversion path, mapped directly onto the Home page's approved section order (`DECISIONS.md` WD-040).
**Reason:** Operationalizes the Confidence Journey (Part 4) at the interaction level — each stage's UX job (instant orientation, smooth trust-building, inviting exploration, natural continuation, minimal-friction conversion) was previously implicit in the Constitution but not stated as an interaction requirement.
**Alternatives Considered:** Not documented — derived directly from the already-approved Confidence Journey and Home page order.
**Final Decision:** The five-stage UX responsibility model is official, with Contact explicitly required to be the lowest-friction interaction in the product.
**Impact:** Governs interaction-design priority across the entire Home page and the Contact experience specifically.
**References:** `UX_SPECIFICATION.md` §11.

---

## Design System

### WD-002 — Official Brand Color Palette

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Official brand color palette — Background `#0B0C0F`, Primary `#FFFFFF`, Secondary `#D4D4D8`, Accent `#71717A`.
**Reason:** To create a calm, premium, non-distracting visual atmosphere consistent with Weber's trust-first brand identity.
**Alternatives Considered:** Not documented in the Constitution.
**Final Decision:** These four colors are the only approved palette. Additional colors may only be introduced when they solve a real usability problem, never for decoration.
**Impact:** Governs all UI, design tokens, and the Design System (see `BRAND_GUIDELINES.md`, `UI_UX_GUIDELINES.md`, `ARCHITECTURE.md` §8).
**References:** `PROJECT_CONSTITUTION.md` Part 2 — Color Philosophy; Part 6 — Color System.

---

### WD-003 — Dark Theme as Primary Experience

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Dark theme is the primary and default product experience.
**Reason:** Dark mode is defined as core to Weber's visual identity and premium positioning.
**Alternatives Considered:** Not documented in the Constitution.
**Final Decision:** Dark mode is the primary experience. A light theme may be introduced in the future, but only if it respects the same design language — it must never be treated as an afterthought.
**Impact:** Affects every visual and component decision going forward.
**References:** `PROJECT_CONSTITUTION.md` Part 6 — Dark Theme Philosophy.

---

### WD-008 — Design Inspiration Principle

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Design inspiration is drawn from companies such as Stripe, Linear, Vercel, OpenAI, Notion, Framer, and Apple — specifically their clarity, spacing, hierarchy, motion, typography, and minimalism — never their layouts or branding directly.
**Reason:** To achieve a premium, trustworthy visual language without imitating or copying another brand's identity.
**Alternatives Considered:** Not documented in the Constitution.
**Final Decision:** Principles-only inspiration; no direct layout or branding imitation.
**Impact:** Governs design review for all future UI work (see `UI_UX_GUIDELINES.md` Design Review Checklist).
**References:** `PROJECT_CONSTITUTION.md` Part 2 — Design Inspiration.

---

### WD-053 — Component-Level Design Principles

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Eight design principles govern component design specifically: visual hierarchy, white space, alignment, balance, contrast, rhythm, consistency, and progressive disclosure.
**Reason:** Formalizes the Design System Workshop Phase 1 review — each principle already exists at the Constitution or Foundation level; this decision confirms how each applies when designing a component rather than a page.
**Alternatives Considered:** Not documented — the review formalized existing upstream principles rather than comparing alternatives.
**Final Decision:** All eight principles are official at the component level, applying the approved type scale (WD-027), spacing scale (WD-030), and color roles (WD-002, WD-036) consistently across every component.
**Impact:** Governs the Component Library phase's visual design work.
**References:** `DESIGN_SYSTEM.md` §2.

---

### WD-054 — Component Philosophy

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Components are reusable, built through composition, hold single responsibility, behave predictably, are accessible-first, and default to stateless/presentational unless a component's job genuinely requires local state.
**Reason:** Extends Part 5 — Component Philosophy and Part 6 — Component Consistency with a stateless-by-default preference, consistent with Content/Component Separation (`DECISIONS.md` WD-010) and local-first state (WD-022) applied at the component level.
**Alternatives Considered:** Stateful-by-default components — presented in the Phase 1 review and set aside as working against Content/Component Separation and local-first state principles already approved.
**Final Decision:** The component philosophy above is official.
**Impact:** Governs every component built in the future Component Library phase.
**References:** `DESIGN_SYSTEM.md` §3.

---

### WD-055 — Composition First Principle

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Components should be composed from smaller reusable building blocks whenever possible, instead of creating large monolithic components.
**Reason:** Approved directly by the Project Owner as an explicit addition during Design System Finalization. Reinforces and formalizes "composition over duplication," already identified in the Phase 1 review, and matches the composition pattern shadcn/ui itself is built on (`DECISIONS.md` WD-017).
**Alternatives Considered:** Not documented — stated directly as an approved principle to include, not compared against alternatives.
**Final Decision:** Composition First is official — a large component's design should be evaluated first for whether it can be assembled from smaller, independently reusable pieces before being built as one monolithic unit.
**Impact:** Directly governs the Component Library phase's component boundaries and API design at the architecture level (not implementation).
**References:** `DESIGN_SYSTEM.md` §3.

---

### WD-056 — Component Classification System

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Eight component categories: Layout, Navigation, Inputs, Feedback, Data Display, Surfaces, Marketing, Utilities.
**Reason:** Organizes the components already named in `INFORMATION_ARCHITECTURE.md` §15 into a logical system, rather than leaving them as an unstructured list — prepares the Component Library phase.
**Alternatives Considered:** A flatter, unclassified component list — presented implicitly as the prior state and set aside in favor of a structured system that scales better (Part 5 — Scalability).
**Final Decision:** The eight categories above are official.
**Impact:** Governs how the Component Library phase organizes and names components.
**References:** `DESIGN_SYSTEM.md` §4; `INFORMATION_ARCHITECTURE.md` §15.

---

### WD-057 — Variant Philosophy

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Size variants map to the approved type/spacing scale; visual variants map to the approved color roles; state variants are the nine canonical interaction states (WD-044), treated as orthogonal to visual variant.
**Reason:** Prevents variants from becoming a parallel, undisciplined value system alongside the approved tokens — directly extends Single Source of Truth (`DECISIONS.md` WD-010) to component variants.
**Alternatives Considered:** Component-specific ad hoc sizing/color values per variant — presented in the Phase 1 review and set aside as token drift.
**Final Decision:** The token-mapped variant philosophy above is official; the minimum variant set that serves approved product needs is preferred over a speculative catalog.
**Impact:** Governs variant design for every component in the Component Library phase.
**References:** `DESIGN_SYSTEM.md` §5.

---

### WD-058 — Cross-Surface Design Consistency Model

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Marketing pages, Portfolio, Blog, and the Interactive Showcase share one Design System by construction (same Shared Components layer and tokens). The future Client Dashboard and Learning Platform must extend this same system, never fork it.
**Reason:** Directly applies "architecturally prepared" (`DECISIONS.md` WD-038) to the Design System layer specifically — a future Dashboard's data-heavy components should be new Data Display entries (WD-056) using existing tokens, not a parallel design language.
**Alternatives Considered:** A separate design system for Version 2 surfaces — presented in the Phase 1 review as the risk to avoid, not a genuine alternative.
**Final Decision:** One Design System, extended rather than forked, across Version 1 and Version 2.
**Impact:** Binding constraint on all future Version 2 component work.
**References:** `DESIGN_SYSTEM.md` §6.

---

### WD-059 — Responsive Component Strategy

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** A single component adapts its own internal layout and density across breakpoint tiers (`DECISIONS.md` WD-034), rather than existing as separate mobile/desktop component variants.
**Reason:** Keeps the interaction model (the nine states, WD-044) identical across every size while presentation adapts, and keeps the component maintenance surface small (Part 10 — Simplicity Wins).
**Alternatives Considered:** Separate mobile and desktop component variants — presented in the Phase 1 review and set aside as unnecessary duplication.
**Final Decision:** The single-adaptive-component model is official.
**Impact:** Governs every component's responsive design in the Component Library phase.
**References:** `DESIGN_SYSTEM.md` §7.

---

### WD-060 — Component-Level Accessibility Requirements

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Every component ships with keyboard support, visible/logical focus, sufficient contrast, proper labels, screen-reader compatibility, and reduced-motion support by default — not as an opt-in.
**Reason:** Extends `UI_FOUNDATION.md` §7 and `UX_SPECIFICATION.md` §9 (WD-050) to the component level, explicitly guarding against accessibility being broken when composing on top of accessible Radix primitives (`DECISIONS.md` WD-017).
**Alternatives Considered:** Not documented — this is a direct extension of already-mandatory accessibility principles.
**Final Decision:** All requirements above are official and mandatory for every component built in the Component Library phase.
**Impact:** Accessibility is a build-time requirement for every component, not a post-hoc audit item.
**References:** `DESIGN_SYSTEM.md` §8.

---

### WD-061 — Component-Level Motion Philosophy

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** Component-level motion is restrained by default (micro-interactions, feedback animations, minimal page transitions), with richer motion reserved for genuinely meaningful moments — most notably the Interactive Showcase (`DECISIONS.md` WD-047).
**Reason:** Extends the approved motion tokens and philosophy (`DECISIONS.md` WD-033) to component-level application, preferring lightweight CSS transitions for simple component motion over Motion/Framer Motion (WD-018), which remains reserved for meaningful moments per its own decision.
**Alternatives Considered:** Uniform use of Motion/Framer Motion for all component-level animation — presented in the Phase 1 review and set aside as disproportionate performance cost for simple state changes.
**Final Decision:** The restrained, moment-proportional motion philosophy above is official at the component level.
**Impact:** Governs animation implementation choices in the Component Library phase.
**References:** `DESIGN_SYSTEM.md` §9.

---

### WD-062 — Design System Future Scalability Principles

**Category:** Design System
**Date:** 2026-07-16
**Status:** Approved
**Description:** The Design System must remain token-driven (never hardcoded values) and use logical CSS properties (start/end, not left/right) from the start, so a future second theme (`DECISIONS.md` WD-003) and RTL language support (WD-012, WD-023) are never retrofits.
**Reason:** Anticipates already-approved future directions (a future light theme; Arabic RTL support) at the component-architecture level, before any component is actually built, consistent with Long-Term Thinking (Part 9).
**Alternatives Considered:** Retrofitting theme/RTL support later — presented in the Phase 1 review and set aside as significantly more costly than building it in from the start.
**Final Decision:** Token-driven, logical-property component architecture is official.
**Impact:** Binding constraint on the Component Library phase's technical approach.
**References:** `DESIGN_SYSTEM.md` §10.

---

## Component Library

Approved via **Component Library Architecture Finalization**, following the Component Library Architecture Phase 1 review (published for review, creating no project file). The Project Owner approved the review in full plus three explicit additions — a Dependencies documentation field, a Documentation-Before-Implementation gate, and a clarified dependency layering rule.

### WD-063 — Component Library Documentation Structure

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** A ten-document structure at `docs/components/`: `01_FOUNDATIONS.md` (governing philosophy, links to `UI_FOUNDATION.md`/`DESIGN_TOKENS.md`/`DESIGN_SYSTEM.md`), `02_LAYOUT.md` through `09_UTILITIES.md` (one per the eight approved component categories, `DECISIONS.md` WD-056), and `10_MASTER_INDEX.md` (a single cross-category lookup).
**Reason:** A single monolithic component-library document would violate Single Responsibility and Composition First (WD-054, WD-055) at the documentation level; splitting by category keeps each document's blast radius small and matches how every other concern on this project already has its own file.
**Alternatives Considered:** One combined `COMPONENT_LIBRARY.md` — presented in the Phase 1 review and set aside as the anti-pattern this structure exists to avoid.
**Final Decision:** The ten-document structure above is official.
**Impact:** Establishes the physical home for all future component documentation.
**References:** `docs/components/01_FOUNDATIONS.md`.

---

### WD-064 — Component Documentation Standard

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Ten required fields for every component entry: Purpose, Responsibilities, Composition, Variants, States, Accessibility, Token Usage, Relationships, Dependencies, Future Extension.
**Reason:** The original nine fields were presented in the Phase 1 review; **Dependencies** was added directly by the Project Owner during finalization, documenting both what a component depends on and what depends on it — necessary to enforce the dependency layering rule (WD-068) in practice, not just in principle.
**Alternatives Considered:** Not documented for the original nine; the Dependencies field was a direct addition, not a comparison between alternatives.
**Final Decision:** All ten fields are mandatory for every future component entry. No component is documented against this template yet.
**Impact:** Governs every future component documentation entry across `02_LAYOUT.md`–`09_UTILITIES.md`.
**References:** `docs/components/01_FOUNDATIONS.md` §4.

---

### WD-065 — Component Lifecycle

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Six-stage lifecycle for every component: Proposal → Review → Approval → Documentation → Implementation → Maintenance.
**Reason:** Mirrors the Constitution's own Mandatory Workflow and Phase Lifecycle (Part 7, Part 9) at individual-component granularity — plan and approve before building, the same discipline already applied to every other layer of this project.
**Alternatives Considered:** Not documented — derived directly from the project's existing governance workflow rather than comparing alternative lifecycles.
**Final Decision:** The six-stage lifecycle above is official.
**Impact:** Governs how every future component moves from idea to shipped code.
**References:** `docs/components/01_FOUNDATIONS.md` §5.

---

### WD-066 — Documentation Before Implementation Gate

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** No component may be implemented before its documentation (per the ten-field standard, WD-064) has been reviewed and officially approved.
**Reason:** Approved directly by the Project Owner during finalization. Makes the Documentation stage of the Lifecycle (WD-065) a hard gate rather than a recommended step, closing the "documentation drifts from implementation" risk identified in the Phase 1 review by construction — there is no implementation to drift from until documentation exists.
**Alternatives Considered:** Documentation and implementation proceeding in parallel — the prior implicit assumption, explicitly rejected by this decision.
**Final Decision:** The gate is official and binding for every future component, without exception.
**Impact:** The single most consequential process rule for the upcoming Foundations Components and implementation phases — no component code may be written until its doc entry is approved.
**References:** `docs/components/01_FOUNDATIONS.md` §5.

---

### WD-067 — Component Naming Philosophy

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Component names must be clear, consistent, predictable, and never derived from the underlying implementation (e.g., never named after a specific Radix primitive).
**Reason:** Direct extension of the Constitution's Naming Standards (Part 5) to components; keeps the documented component concept independent of the current implementation choice (shadcn/ui on Radix, `DECISIONS.md` WD-017), consistent with the Component Library being a documentation layer, not an implementation layer.
**Alternatives Considered:** Implementation-derived naming — presented in the Phase 1 review and set aside.
**Final Decision:** The naming philosophy above is official. No actual component names are defined by this decision.
**Impact:** Governs naming for every future component across all eight categories.
**References:** `docs/components/01_FOUNDATIONS.md` §6.

---

### WD-068 — Component Dependency Layering Rule

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Higher-level components may compose lower-level components. Lower-level components must never depend on higher-level components. Layer order (foundational to most-composed): Utilities/Layout → Navigation/Inputs/Feedback → Data Display/Surfaces → Marketing.
**Reason:** Approved directly by the Project Owner as a clarification of the general layering principle from the Phase 1 review, making it an explicit, checkable rule rather than a loose convention — structurally prevents circular dependencies rather than relying on per-component discipline.
**Alternatives Considered:** Unrestricted cross-category dependencies — presented in the Phase 1 review and set aside as the source of the circular-dependency risk this rule exists to prevent.
**Final Decision:** The layering rule above is official and binding, enforced via the Dependencies field (WD-064) on every component entry.
**Impact:** Governs composition decisions for every future component; violations are a Review-stage (WD-065) rejection.
**References:** `docs/components/01_FOUNDATIONS.md` §7.

---

### WD-069 — Component Versioning Strategy

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Components evolve through additive, backward-compatible changes by default; incompatible changes require explicit deprecation with a documented migration path, never silent removal. The same component set must extend to Version 2 use cases (Client Dashboard, Learning Platform) by gaining new variants/states, not by changing Version 1 behavior.
**Reason:** Consistent with this project's existing decision-log discipline, where nothing has ever been silently rewritten, and with "architecturally prepared" (`DECISIONS.md` WD-038, WD-058) applied to component evolution specifically.
**Alternatives Considered:** Not documented — derived directly from already-approved project-wide principles.
**Final Decision:** The versioning strategy above is official.
**Impact:** Governs how components change over time without breaking pages already built on them.
**References:** `docs/components/01_FOUNDATIONS.md` §8.

---

### WD-070 — Foundation Components Categorization Clarification

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** "Foundation Components" is not a ninth component category. The official categories remain the eight approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056). The term refers only to the primitive building blocks documented within the existing Layout and Utilities categories.
**Reason:** Resolves the categorization question flagged in the Foundations Components Workshop Phase 1 review — the candidate components fit cleanly into Layout and Utilities, which are already the designated foundational layer in the dependency order (`DECISIONS.md` WD-068), so no new category was needed.
**Alternatives Considered:** A new ninth "Foundations" category — presented as the open question in the Phase 1 review and explicitly rejected by the Project Owner.
**Final Decision:** Foundation Components are documented within `docs/components/02_LAYOUT.md` and `docs/components/09_UTILITIES.md`. The eight-category classification (WD-056) is unchanged.
**Impact:** Resolves the categorization flag; confirms where all future Foundation-tier proposals are filed.
**References:** `docs/components/02_LAYOUT.md`; `docs/components/09_UTILITIES.md`.

---

### WD-071 — Approved Foundation Component Set

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Eleven Foundation Components are approved and documented: App Shell, Page, Container, Section, Stack, Grid, Cluster, Divider, Aspect Ratio (filed under Layout — WD-070), and Skip Link, Visually Hidden (filed under Utilities — WD-070).
**Reason:** Each component was individually justified against existing documentation in the Phase 1 review — e.g., Container against the already-approved container widths (WD-035), Section against Every Section Has One Job (Part 4) and the Home page order (WD-040), Skip Link and Visually Hidden against the mandatory accessibility requirements (WD-050, WD-060).
**Alternatives Considered:** Presented individually per component in the Phase 1 review; see `docs/components/02_LAYOUT.md` and `docs/components/09_UTILITIES.md` for each component's specific justification.
**Final Decision:** All eleven components are approved and have completed the Documentation stage of the Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5). None has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) still applies.
**Impact:** Populates `docs/components/02_LAYOUT.md`, `docs/components/09_UTILITIES.md`, and `docs/components/10_MASTER_INDEX.md` with the first real component entries in the Library.
**References:** `docs/components/02_LAYOUT.md`; `docs/components/09_UTILITIES.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-072 — Foundation Component Exclusions

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Spacer and Screen Reader Only are explicitly excluded from the Foundation Component set. A Live Region Announcer primitive is explicitly deferred, not rejected — it may be reconsidered in a future accessibility phase.
**Reason:** Spacer was judged redundant with Stack/Cluster's gap-based spacing (risking an escape hatch around the token system); Screen Reader Only was judged functionally redundant with Visually Hidden (risking component sprawl, `DESIGN_SYSTEM.md` §11). The Live Region Announcer was flagged in the Phase 1 review as justified by `DECISIONS.md` WD-050 but was not part of the original candidate list, so the Project Owner deferred it rather than approving or rejecting it now.
**Alternatives Considered:** Including all thirteen originally-listed candidates — presented in the Phase 1 review; two were set aside as redundant.
**Final Decision:** Spacer and Screen Reader Only are not part of the Foundation Component set and are not documented. Live Region Announcer status is "deferred" — distinct from "rejected" — and may be proposed again in a future accessibility-focused phase via the normal Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5).
**Impact:** Keeps the Foundation set to exactly the eleven components in WD-071 — no more, no fewer.
**References:** `docs/components/02_LAYOUT.md`; `docs/components/09_UTILITIES.md`.

---

### WD-073 — Foundation Components Documentation Corrections (Post-Audit Synchronization)

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Corrects four findings from Component Audit #1 in the already-approved Foundation Component documentation, without changing the approved set of eleven components (WD-071) or their exclusions (WD-072): (1) App Shell's documented dependency on Navigation/Footer is corrected to a slot-based composition model, resolving a WD-068 layering violation; (2) Grid and Aspect Ratio's missing token categories (column-count, aspect-ratio) are recorded as explicit future extension points, not treated as license to hardcode; (3) Page's documentation is clarified to distinguish it from Next.js's own `page` file convention, without renaming it; (4) an Icon wrapper component is explicitly not introduced — the Foundation set remains unchanged at eleven components.
**Reason:** Resolves the findings the Project Owner approved from Component Audit #1, restoring full compliance with the dependency layering rule (WD-068) and closing the gap between what Grid/Aspect Ratio's documentation already admitted and what it formally recorded.
**Alternatives Considered:** Not documented — this synchronizes findings already reviewed and approved in the audit, not a new comparison of alternatives.
**Final Decision:** App Shell's Composition, Relationships, Dependencies, and Future Extension fields are corrected in `docs/components/02_LAYOUT.md` to describe slot-based composition — App Shell depends only on Skip Link, never on Navigation or Footer. Grid's and Aspect Ratio's Variants, Token Usage, and Future Extension fields now explicitly name their missing token categories as future extension points. Page's Purpose field now includes an explicit clarification against Next.js's `page` file convention. No component was added, removed, or renamed.
**Impact:** `docs/components/02_LAYOUT.md` now fully complies with WD-068. No other document required correction — see cross-reference verification in the corresponding task report.
**References:** `docs/components/02_LAYOUT.md` (App Shell, Page, Grid, Aspect Ratio entries).

---

### WD-074 — Layout Category Confirmed Complete for Version 1

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** The nine Foundation Layout Components already documented (App Shell, Page, Container, Section, Stack, Grid, Cluster, Divider, Aspect Ratio — `DECISIONS.md` WD-071) constitute the complete Layout category for Version 1. No additional Layout Components are approved, and no aliases of existing components (e.g., "Header Layout," "Footer Layout," "Section Layout," "Content Wrapper," "Content Grid," "Two Column Layout," "Split Layout," "Center Layout," "Full Width Layout," "Narrow Content Layout," "Page Header," "Page Body," "Page Footer," "Main") are to be introduced.
**Reason:** The Layout Components Workshop Phase 1 review evaluated seventeen candidates and found sixteen redundant with an already-documented component under a new name, and one ("Sidebar Layout") premature ahead of Version 2 scoping. Formally confirming this — rather than leaving the question open — prevents future re-proposal of the same rejected names and protects against the component sprawl risk already named in `DESIGN_SYSTEM.md` §11.
**Alternatives Considered:** Adopting some or all of the seventeen candidates — presented and individually rejected in the Phase 1 review; see that review for per-candidate reasoning.
**Final Decision:** Layout is closed as a category for Version 1 absent a genuinely new, non-redundant, non-alias need justified by future approved documentation. `docs/components/02_LAYOUT.md`'s nine entries are final for V1.
**Impact:** Any future proposal for a Layout-category component must first demonstrate it is not one of the sixteen rejected aliases and is not achievable through composition or a token-mapped variant (WD-055, WD-057) of an existing entry.
**References:** `docs/components/02_LAYOUT.md`; `DESIGN_SYSTEM.md` §4.

---

### WD-075 — Empty State and Sidebar Layout Redirected

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** "Empty State" is redirected to a future Feedback or Data Display component-documentation phase — it is not a Layout component. "Sidebar Layout" (or any Client Dashboard-specific structural pattern) is deferred until the Client Dashboard itself is scoped (`DECISIONS.md` WD-038) — it is not documented now.
**Reason:** Empty is one of the nine canonical interaction states (`DECISIONS.md` WD-044), but the actual Empty State component (icon, message, CTA) is content-bearing and belongs in Feedback or Data Display, composed from Layout primitives rather than documented as one. Sidebar Layout would invent Version 2-specific structure before Version 2 has an approved scope, which this project's documentation discipline consistently avoids.
**Alternatives Considered:** Documenting both now under Layout — presented in the Phase 1 review and rejected for the reasons above.
**Final Decision:** Neither is part of the Layout category. Both remain open for proposal, through the normal Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5), once their correct prerequisite exists (a Feedback/Data Display documentation phase; an approved Client Dashboard scope, respectively).
**Impact:** Prevents both from being miscategorized or invented ahead of their prerequisites.
**References:** `docs/components/01_FOUNDATIONS.md` §5.

---

### WD-076 — Approved Navigation Component Set

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Eight Navigation Components are approved and documented: Header, Navigation Menu, Navigation Item, Brand Link, Mobile Navigation Toggle, CTA inside Navigation, Breadcrumb (optional), and Language Switcher (categorization resolved — see WD-078).
**Reason:** Each was individually justified against existing documentation in the Navigation Components Workshop Phase 1 review — e.g., Navigation Menu against the already-named "Primary Navigation" (`ROUTES.md` §4), Mobile Navigation Toggle against the mobile collapse requirement without violating the single-adaptive-component model (WD-059), Breadcrumb against its already-decided scope (WD-045).
**Alternatives Considered:** Presented individually per component in the Phase 1 review; see `docs/components/03_NAVIGATION.md` for each component's specific justification.
**Final Decision:** All eight components are approved and documented, completing the Documentation stage of the Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5). None has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. Breadcrumb is optional — justified in scope but not required before Version 1's Core Pages ship.
**Impact:** Populates `docs/components/03_NAVIGATION.md` and `docs/components/10_MASTER_INDEX.md` with the Navigation category's first entries.
**References:** `docs/components/03_NAVIGATION.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-077 — Navigation Component Rejections

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Five candidates are explicitly rejected and not documented: Navigation Bar, Mobile Navigation, Navigation Group, Logo Component (as a standalone Navigation entry), and Search Trigger.
**Reason:** Navigation Bar duplicates Header; Mobile Navigation would violate the single-adaptive-component model (WD-059) by fragmenting Navigation Menu's own responsibility to adapt; Navigation Group has no current use case given Weber's shallow Information Architecture; a standalone Logo Component is redundant with Brand Link, which already covers the navigation-relevant need; Search Trigger corresponds to an unapproved feature (site search, already flagged as pending in `INFORMATION_ARCHITECTURE.md` §4).
**Alternatives Considered:** Documenting all five — presented and individually rejected in the Phase 1 review.
**Final Decision:** None of the five is documented anywhere in the Component Library. **Note:** Theme Switcher was also recommended for rejection in the Phase 1 review (no light theme has been scheduled — WD-003) but was not explicitly listed in either the approved or rejected set communicated for this finalization. It is treated as **not approved** — consistent with "do not invent" — but this omission is flagged for explicit confirmation rather than assumed silently; see the corresponding task report.
**Impact:** Prevents re-proposal of these names without new justification, mirroring the rejected-alias record kept for Layout (WD-074).
**References:** `docs/components/03_NAVIGATION.md`.

---

### WD-078 — Language Switcher Classified as a Navigation Component

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Language Switcher is officially classified as a Navigation Component, resolving the categorization question flagged in the Phase 1 review. It was anticipated in `docs/components/09_UTILITIES.md`'s scope note when the Component Library Architecture was first reviewed, but that anticipation was never carried into `09_UTILITIES.md`'s final documented form (superseded during Foundations Components Finalization, which documented only Skip Link and Visually Hidden there) — so no correction to `09_UTILITIES.md` is required by this decision. It is also conceptually described as "Utility Navigation" in `ROUTES.md`/`UX_SPECIFICATION.md`, consistent with this classification.
**Reason:** Direct Project Owner decision, resolving the ambiguity the same way the Foundation Components categorization question (WD-070) was resolved — by explicit confirmation rather than a silent default.
**Alternatives Considered:** Classifying it as a Utilities component instead — the original anticipation, never finalized, superseded by this decision.
**Final Decision:** Language Switcher is documented in `docs/components/03_NAVIGATION.md`. It will not be documented in `09_UTILITIES.md`.
**Impact:** Resolves the categorization flag from the Phase 1 review. Verified `09_UTILITIES.md` currently contains no conflicting reference — no edit to that file was necessary.
**References:** `docs/components/03_NAVIGATION.md`.

---

### WD-079 — CTA-in-Navigation Depends on a Future Button Component

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** The CTA element inside Navigation is documented as depending on a future Button component (not yet documented) rather than inventing a new, one-off CTA primitive.
**Reason:** Direct Project Owner decision, resolving the "no reusable Button primitive exists anywhere" gap flagged in the Phase 1 review. Recording a forward dependency keeps the gap visible and traceable rather than working around it with a component that would need to be reconciled with the eventual Button component later.
**Alternatives Considered:** Documenting a Navigation-specific CTA primitive independently — explicitly rejected by the Project Owner in favor of the forward-dependency approach.
**Final Decision:** CTA-in-Navigation's Composition, Variants, States, Accessibility, and Token Usage fields in `docs/components/03_NAVIGATION.md` explicitly state they are inherited from the future Button component. This entry will be updated, not replaced, once Button is documented.
**Impact:** Establishes a precedent for recording forward dependencies on not-yet-documented components rather than duplicating primitives across categories.
**References:** `docs/components/03_NAVIGATION.md` — CTA inside Navigation.

---

### WD-080 — Theme Switcher Confirmed Not Approved for Version 1

**Category:** Component Library
**Date:** 2026-07-16
**Status:** Approved
**Description:** Theme Switcher is explicitly not approved for Version 1. Dark theme remains the only approved theme (`DECISIONS.md` WD-003); no light theme or theme-switching mechanism has been approved. This resolves the open flag recorded in WD-077.
**Reason:** Direct Project Owner decision, closing the gap WD-077 deliberately left flagged rather than assumed — consistent with this project's "do not invent, do not silently assume" discipline.
**Alternatives Considered:** Treating the Phase 1 review's rejection recommendation as sufficient without a separate explicit confirmation — rejected in favor of recording the decision directly.
**Final Decision:** Theme Switcher is deferred until a future theme-expansion phase, contingent on a light theme (or any additional theme) first being approved. It is not documented anywhere in the Component Library.
**Impact:** Resolves the last open flag from Navigation Components Finalization. The Navigation category (`DECISIONS.md` WD-076) now has no unresolved categorization or approval questions — see confirmation in the corresponding task report.
**References:** `docs/components/03_NAVIGATION.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-081 — Approved Inputs Component Set

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Nine Inputs Components are approved and documented: Button, Text Field, Select, Form, Form Field, Label, Helper Text, Error Message (field-scoped), and Required Indicator. Text Area is approved as a tenth, optional component.
**Reason:** Each was individually justified against existing documentation in the Inputs Components Workshop Phase 1 review — most directly, Button resolves the forward dependency Navigation's CTA element already recorded (`DECISIONS.md` WD-079); Text Field and Select trace to the Interactive Showcase's approved input (WD-005); Form Field, Label, Helper Text, Error Message, and Required Indicator trace to the approved Forms philosophy (WD-046).
**Alternatives Considered:** Presented individually per component in the Phase 1 review; see `docs/components/04_INPUTS.md` for each component's specific justification.
**Final Decision:** All ten components (nine required, one optional) are approved and documented, completing the Documentation stage of the Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5). None has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. Error Message here is explicitly distinct from the Feedback category's future system-level Error message type (`DECISIONS.md` WD-049) — field-scoped, not a duplicate.
**Impact:** Populates `docs/components/04_INPUTS.md` and `docs/components/10_MASTER_INDEX.md`; resolves the Button forward dependency recorded against Navigation (WD-079).
**References:** `docs/components/04_INPUTS.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-082 — Inputs Component Rejections

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Seventeen candidates are explicitly rejected and not documented: Icon Button, Link Button, Button Group, Email Field, Phone Field, Number Field, Combobox, Autocomplete, Checkbox, Checkbox Group, Radio, Radio Group, Slider, Range Slider, Date Picker, Time Picker, Date Range Picker.
**Reason:** Icon Button, Link Button, and Button Group are variants or groupings of Button, not separate primitives (Variant Philosophy, WD-057). Email Field, Phone Field, and Number Field are Text Field configurations via Zod validation (WD-021), not separate primitives. Combobox and Autocomplete introduce complexity with no approved justification (Weber's known selection lists are short — WD-037). Checkbox, Checkbox Group, Radio, and Radio Group have no approved use case (a consent checkbox would depend on an unapproved Support Pages/legal tier — `INFORMATION_ARCHITECTURE.md` §3). Slider, Range Slider, Date Picker, Time Picker, and Date Range Picker have no approved feature requiring them.
**Alternatives Considered:** Documenting each — presented and individually rejected in the Phase 1 review; see `docs/components/04_INPUTS.md` for per-candidate reasoning.
**Final Decision:** None of the seventeen is documented anywhere in the Component Library.
**Impact:** Prevents re-proposal of these names without new justification, consistent with the rejected-alias records kept for Layout (WD-074) and Navigation (WD-077).
**References:** `docs/components/04_INPUTS.md`.

---

### WD-083 — Inputs Components Deferred or Belonging to an Unapproved Feature

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Six candidates are deferred rather than rejected: Password Field, OTP Input, and PIN Input (Authentication, unscoped — Version 2); File Upload and Drag & Drop Upload (the File Upload Strategy itself is still `[PENDING PROJECT OWNER DECISION]`); and Switch. One candidate, Search Field, belongs to a feature (site search) that is not approved at all, rather than being miscategorized.
**Reason — Switch (clarified by Project Owner):** Switch is deferred solely because **no approved Version 1 feature currently requires a Switch control** — not because of the Theme Switcher rejection (`DECISIONS.md` WD-080), which is a separate, unrelated decision. Switch remains a valid future Inputs component whenever a real product feature justifies it (e.g., a Dashboard settings/preferences surface, Version 2).
**Alternatives Considered:** Rejecting Switch outright, alongside the seventeen in WD-082 — explicitly not chosen; Switch is deferred, not rejected, since a future justified need is plausible and anticipated, unlike the WD-082 set.
**Final Decision:** None of these six is documented now. Password Field, OTP Input, PIN Input, File Upload, and Drag & Drop Upload are tied to specific pending prerequisite decisions (Authentication, File Upload Strategy) and should be proposed again once those land. Switch has no tied prerequisite decision — it simply awaits a genuine Version 1 or Version 2 feature need. Search Field awaits the Search feature itself being approved, if ever.
**Impact:** Keeps six genuinely plausible future components visible and correctly reasoned, rather than merged into the permanent-rejection list (WD-082).
**References:** `docs/components/04_INPUTS.md`.

---

### WD-084 — Button Category Confirmed as Inputs

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Button is confirmed as an Inputs-category component, resolving the categorization note raised in the Phase 1 review (Button does not literally "collect data," the Inputs category's stated purpose in `DESIGN_SYSTEM.md` §4, but is the natural home for interactive action controls at its dependency tier).
**Reason:** Approved as part of Inputs Components Finalization, following the same explicit-confirmation discipline already applied to Language Switcher (WD-078) rather than leaving a category placement inferred.
**Alternatives Considered:** A separate "Actions" category or grouping — not proposed as a serious alternative in the Phase 1 review; Inputs was the working assumption throughout, now made explicit.
**Final Decision:** Button is documented in `docs/components/04_INPUTS.md`.
**Impact:** Closes the categorization question raised alongside the Button forward dependency (WD-079).
**References:** `docs/components/04_INPUTS.md` — Button.

---

### WD-085 — Approved Feedback Component Set

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Four Feedback Components are approved and documented: Alert (with Success, Warning, Error, and Informational variants — `DECISIONS.md` WD-049), Spinner, Skeleton (both `DECISIONS.md` WD-048), and Empty State (with a Default and an Error-flavored variant, the latter absorbing what would otherwise be a separate "Error State" component).
**Reason:** Each was individually justified against existing documentation in the Feedback Components Workshop Phase 1 review — Alert directly implements the already-approved four message types (WD-049); Spinner and Skeleton are directly named in WD-048; Empty State was explicitly redirected to this phase by WD-075 and is one of the nine canonical states (WD-044).
**Alternatives Considered:** Presented individually per component in the Phase 1 review; see `docs/components/05_FEEDBACK.md` for each component's specific justification.
**Final Decision:** All four components are approved and documented, completing the Documentation stage of the Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5). None has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. Alert's system-level Error variant remains explicitly distinct from Inputs' field-scoped Error Message (`DECISIONS.md` WD-081).
**Impact:** Populates `docs/components/05_FEEDBACK.md` and `docs/components/10_MASTER_INDEX.md`; resolves the Empty State redirect from WD-075.
**References:** `docs/components/05_FEEDBACK.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-086 — Feedback Component Rejections

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Fifteen candidates are explicitly rejected and not documented: Banner, Toast, Snackbar, Notification, Success Message, Warning Message, Error State (as a standalone component), Info Message, Loading Indicator, Progress Bar, Circular Progress, Inline Status, Validation Summary, Retry Panel, and Offline Indicator.
**Reason:** Banner, Toast, Snackbar, and Notification are redundant with Alert, which already serves both system- and page-level placement through composition within Section/Container. Success Message, Warning Message, and Info Message are Alert variants, not separate primitives (Variant Philosophy, WD-057). Error State is absorbed into Empty State's Error-flavored variant. Loading Indicator is an umbrella term, not a component — Spinner and Skeleton already cover it. Progress Bar and Circular Progress have no approved determinate-progress need. Inline Status is redundant with the deferred Status Badge. Validation Summary has no approved need given Weber's minimal-field form philosophy (WD-046). Retry Panel is a Button composed into Empty State's Error variant, not a separate primitive. Offline Indicator is speculative — no PWA/offline decision has ever been approved.
**Alternatives Considered:** Documenting each — presented and individually rejected in the Phase 1 review; see `docs/components/05_FEEDBACK.md` for per-candidate reasoning.
**Final Decision:** None of the fifteen is documented anywhere in the Component Library.
**Impact:** Prevents re-proposal of these names without new justification, consistent with the rejected-alias records kept for Layout (WD-074), Navigation (WD-077), and Inputs (WD-082).
**References:** `docs/components/05_FEEDBACK.md`.

---

### WD-087 — Modal and Confirmation Dialog Redirected; Status Badge Deferred

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Modal and Confirmation Dialog are redirected to the Surfaces category, not documented as Feedback — both are already conceptually anticipated there via the Overlay elevation level (`DECISIONS.md` WD-032). Status Badge is deferred to Version 2 — no Version 1 feature displays a visitor-facing status indicator.
**Reason:** Modal and Confirmation Dialog are elevated-container concerns (Surfaces' defining trait, `DESIGN_SYSTEM.md` §4), not feedback-message concerns. Status Badge's only plausible use (e.g., draft/published states) belongs to a future Dashboard/admin context, not any approved Version 1 page.
**Alternatives Considered:** Documenting Modal/Confirmation Dialog as Feedback components — presented in the Phase 1 review and rejected as a category mismatch, not a content rejection. Documenting Status Badge now — rejected as premature ahead of any Version 1 need.
**Final Decision:** Modal and Confirmation Dialog are not documented in this category; they remain open for proposal when Surfaces is reviewed. Status Badge is not documented now; it remains open for Version 2.
**Impact:** Keeps Feedback's scope limited to feedback messaging specifically; establishes the same kind of forward-looking placeholder already used for other cross-category redirects (WD-070, WD-078).
**References:** `docs/components/05_FEEDBACK.md`; `docs/components/07_SURFACES.md`.

---

### WD-088 — Live Region Announcer Classified as a Future Utilities Component

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Live Region Announcer is explicitly classified as a future **Utilities** component, not a Feedback component, resolving the flag raised in the Feedback Components Workshop Phase 1 review. It remains deferred — this decision confirms its eventual category without documenting it now.
**Reason:** Direct Project Owner decision. Live Region Announcer is an accessibility utility (a generic mechanism for announcing dynamic changes to assistive technology) usable by any category — Feedback (Alert, Empty State), Inputs (Form), and others — rather than a feedback-message primitive itself, consistent with Utilities' role as small, generic, non-content helpers (`DESIGN_SYSTEM.md` §4).
**Alternatives Considered:** Documenting it as a Feedback component now — presented in the Phase 1 review as a live flag, not a recommendation, and explicitly not chosen. Leaving its eventual category unspecified — rejected in favor of explicit confirmation, consistent with how Language Switcher's category (WD-078) and Button's category (WD-084) were both resolved rather than left inferred.
**Final Decision:** Live Region Announcer remains deferred (originally recorded in WD-072) and is now explicitly slated for the Utilities category whenever it is proposed. It is not documented in `docs/components/05_FEEDBACK.md` or anywhere else yet.
**Impact:** Updates the deferral record in `docs/components/09_UTILITIES.md` and `docs/components/10_MASTER_INDEX.md` to reflect the confirmed future category. Alert, Spinner, Empty State, and Form (`04_INPUTS.md`) all reference this same deferred dependency for their own dynamic-announcement needs.
**References:** `docs/components/09_UTILITIES.md`; `docs/components/05_FEEDBACK.md`; `docs/components/04_INPUTS.md` — Form.

---

### WD-089 — Approved Data Display Component Set

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Nine Data Display Components are approved and documented: Service Card, Portfolio Card, Blog Post Card, Testimonial Card, Tag, Timeline, Accordion, **Case Study Layout**, and **Article Layout**. Avatar and Key Value Pair are approved as two further, optional components.
**Reason:** Service Card, Portfolio Card, Blog Post Card, Testimonial Card, Timeline, and the Accordion pattern (for FAQ) are all directly named or implied in `INFORMATION_ARCHITECTURE.md` §15. Tag serves both "Technology Tag" and "Category label" as one component. Case Study Layout and Article Layout (originally referenced as "Project Detail view" and "Article layout" in §15) were flagged in the Phase 1 review as justified but absent from the task's candidate list, and approved directly by the Project Owner with their final names confirmed.
**Alternatives Considered:** Presented individually per component in the Phase 1 review; see `docs/components/06_DATA_DISPLAY.md` for each component's specific justification.
**Final Decision:** All eleven components (nine required, two optional) are approved and documented, completing the Documentation stage of the Component Lifecycle (`docs/components/01_FOUNDATIONS.md` §5). None has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. **Case Study Layout and Article Layout are explicitly confirmed as Data Display components, not Layout-category primitives** — the word "Layout" in their names describes their role (an expanded, single-item content presentation) within Data Display, and must not be confused with the closed Layout category (`DECISIONS.md` WD-074).
**Impact:** Populates `docs/components/06_DATA_DISPLAY.md` and `docs/components/10_MASTER_INDEX.md`.
**References:** `docs/components/06_DATA_DISPLAY.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-090 — Data Display Component Rejections

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Fifteen candidates are explicitly rejected and not documented: Feature Card, Statistic Card, Badge, Chip, Avatar Group, Icon + Text, List, Definition List, Table, Tabs, Code Block, Quote Block, Metric Display, Rating, and **Price Display**.
**Reason:** Feature Card is redundant with Service Card. Statistic Card and Metric Display have no approved feature displaying statistics. Badge overlaps Tag and the already-deferred Status Badge (WD-087). Chip is an alias of Tag. Avatar Group is speculative. Icon + Text is already served by Cluster (`02_LAYOUT.md`). List is redundant with Stack. Definition List has no approved need. Table has no approved Version 1 need. Tabs has no approved need given Weber's shallow IA. Code Block and Quote Block depend on Blog's still-pending content strategy (`INFORMATION_ARCHITECTURE.md` §9) and are also partly redundant with Testimonial Card. Rating has no approved need and sits in tension with Weber's non-hype brand voice (Part 2). **Price Display directly contradicts `DECISIONS.md` WD-006 (Consultation-First Pricing: "no fixed pricing tiers are displayed") — this is a conflict with an existing decision, not merely an unjustified addition.**
**Alternatives Considered:** Documenting each — presented and individually rejected in the Phase 1 review; see `docs/components/06_DATA_DISPLAY.md` for per-candidate reasoning.
**Final Decision:** None of the fifteen is documented anywhere in the Component Library. Price Display specifically may not be proposed again without first revisiting WD-006 itself.
**Impact:** Prevents re-proposal of these names without new justification, consistent with the rejected-alias records kept for every prior category.
**References:** `docs/components/06_DATA_DISPLAY.md`.

---

### WD-091 — Card Redirected to Surfaces; Data Table and Progress Metric Deferred

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** The generic Card primitive is redirected to the Surfaces category, not documented as Data Display — already conceptually anticipated there as an elevated container (`DESIGN_SYSTEM.md` §4). Every "X Card" component in Data Display (Service Card, Portfolio Card, Blog Post Card, Testimonial Card) composes this future Surfaces primitive rather than duplicating it. Data Table and Progress Metric are deferred to Version 2 — both are Dashboard-specific patterns with no approved Version 1 need.
**Reason:** Card is an elevated-container concern (Surfaces' defining trait), not a data-presentation concern — the same category-boundary discipline already applied to Modal/Confirmation Dialog (WD-087). Data Table and Progress Metric plausibly serve a future Client Dashboard (`DECISIONS.md` WD-038) but have no Version 1 justification.
**Alternatives Considered:** Documenting Card within Data Display — presented in the Phase 1 review and rejected as a category mismatch. Documenting Data Table/Progress Metric now — rejected as premature ahead of any Version 1 need.
**Final Decision:** Card is not documented here; it remains open for proposal when Surfaces is reviewed, and every Data Display card component now carries an explicit forward dependency on it, the same pattern as Navigation's earlier dependency on Button (WD-079, resolved by WD-084). Data Table and Progress Metric remain open for Version 2.
**Impact:** Establishes a new forward dependency (Data Display → Surfaces) to track until the Surfaces category is finalized.
**References:** `docs/components/06_DATA_DISPLAY.md`; `docs/components/07_SURFACES.md`.

---

### WD-092 — Approved Surfaces Component Set

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Two Surfaces components are approved and documented: **Card** (required, resolves the forward dependency recorded against Service Card, Portfolio Card, Blog Post Card, and Testimonial Card — `DECISIONS.md` WD-091) and **Tooltip** (approved as a core Surfaces primitive; optional for Version 1 usage, with no approved Version 1 feature currently instantiating it).
**Reason:** Card's need is already proven by four already-documented Data Display components naming it as a dependency. Tooltip has no current Version 1 consumer, but the Project Owner determined that documenting it now — while the Surfaces category is already open for review — avoids reopening the category later purely to add a component with no new architectural question attached, keeping the Design System's documented surface complete.
**Alternatives Considered:** Deferring Tooltip to Version 2 alongside the rest of the overlay/floating-content family — presented in the Phase 1 review and overridden by direct Project Owner decision; Tooltip's rationale for approval now (avoiding a later reopening) is explicitly distinct from Card's rationale (a proven dependency), and both are recorded as such rather than conflated.
**Final Decision:** Card and Tooltip are documented in `docs/components/07_SURFACES.md`, completing the Documentation stage of the Component Lifecycle for both (`01_FOUNDATIONS.md` §5). Neither has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. Tooltip's Version 1 usage remains optional; no route or section is required to adopt it.
**Impact:** Resolves the Card forward dependency for all four affected Data Display components (`docs/components/06_DATA_DISPLAY.md`). Populates `docs/components/07_SURFACES.md` and `docs/components/10_MASTER_INDEX.md`.
**References:** `docs/components/07_SURFACES.md`; `docs/components/06_DATA_DISPLAY.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-093 — Surfaces Component Rejections and Category Redirects

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Six candidates are explicitly rejected and not documented: Surface (a generic elevated-container primitive beneath Card), Panel, Overlay, Backdrop, Scroll Area, and Floating Action Surface. Three further candidates are confirmed to already belong to other, already-documented categories rather than Surfaces: Callout (Feedback — already exists as Alert, WD-085), Separator Surface (Layout — already exists as Divider, WD-071), and Sticky Container (Navigation — already owned by Header's existing sticky behavior).
**Reason:** Surface would be a second layer of abstraction beneath Card with no second consumer to justify splitting it out — premature per Simplicity Wins (Part 10) and Composition First (WD-055), which call for composing from need, not from anticipation. Panel is an alias of Card/Container with no distinct responsibility. Overlay names a token level (`elevation.3`, WD-032), not a component — documenting it would name an implementation detail, contrary to the Naming Philosophy (`01_FOUNDATIONS.md` §6). Backdrop has no purpose independent of the not-yet-approved Modal. Scroll Area has no Version 1 consumer that native scrolling doesn't already serve. Floating Action Surface matches no approved or plausible Version 1 or Version 2 feature. Callout, Separator Surface, and Sticky Container each duplicate an already-documented component's exact responsibility under a different name.
**Alternatives Considered:** Documenting Surface as a foundational primitive with Card composing it — presented in the Phase 1 review and rejected pending a genuine second consumer. Documenting each of the other seven — presented and individually rejected or redirected in the Phase 1 review.
**Final Decision:** None of the six rejected candidates is documented anywhere in the Component Library. Callout, Separator Surface, and Sticky Container are confirmed to require no new documentation — their existing entries in `05_FEEDBACK.md`, `02_LAYOUT.md`, and `03_NAVIGATION.md` respectively already cover them.
**Impact:** Prevents re-proposal of the six rejected names without new justification; confirms no cross-category documentation gap exists for the three redirected names.
**References:** `docs/components/07_SURFACES.md`.

---

### WD-094 — Surfaces Components Deferred to Version 2

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Eight candidates remain deferred to Version 2, not documented now: Modal (with Dialog treated as the same concept, not a second component), Confirmation Dialog (a future Modal content variant, not a separate component), Sheet, Drawer, and Bottom Sheet (one off-canvas overlay concept under three names), Popover and Hover Card (one floating-content concept under two names), and Side Panel.
**Reason:** None has an approved Version 1 use case — Weber's Version 1 has no destructive action, no account system, and no authenticated area, and the Interactive Showcase's Preview step is an explicit same-page reveal rather than an overlay (`UX_SPECIFICATION.md` §6). Each remains a plausible need once a Client Dashboard or other authenticated surface is scoped (`DECISIONS.md` WD-038). Side Panel specifically overlaps Sidebar Layout's existing deferral (`DECISIONS.md` WD-075) and should be resolved together with it, not independently, once the Dashboard is scoped.
**Alternatives Considered:** Documenting Modal/Dialog and Confirmation Dialog now, given WD-087's "conceptually anticipated" language — rejected because an elevation token anticipating a treatment is not the same as an approved feature requiring it. Deferring Tooltip alongside this group — overridden by direct Project Owner decision; see WD-092.
**Final Decision:** None of the eight is documented in `docs/components/07_SURFACES.md`. Each remains open for proposal, collectively, when Version 2's Client Dashboard scope is defined — to be reviewed as one connected pass rather than as separate re-proposals, so the alias consolidations recorded here (Dialog into Modal, Sheet/Drawer/Bottom Sheet into one, Popover/Hover Card into one) are not lost.
**Impact:** Surfaces ships Version 1 with two documented components (WD-092) while leaving a clearly scoped, non-fragmented reopening path for Version 2.
**References:** `docs/components/07_SURFACES.md`; `docs/components/02_LAYOUT.md` — Sidebar Layout (WD-075).

---

### WD-095 — Approved Marketing Component Set

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Four Marketing components are approved and documented: **Hero**, **CTA Banner**, **Feature List**, and **Preview Frame** — the last one identified during the Phase 1 review as a required addition, not on the original candidate list, but explicitly named in `INFORMATION_ARCHITECTURE.md` §15 for the Interactive Showcase. The established names CTA Banner (not "CTA Section") and Feature List (not "Feature Grid") are confirmed, matching `INFORMATION_ARCHITECTURE.md` §15's own terminology. **Hero Content and Hero Media are explicitly confirmed as internal compositional concerns of Hero — arranged via Stack and Aspect Ratio respectively — and are not independent Component Library entries.**
**Reason:** Hero, CTA Banner, and Feature List are directly named or clearly implied by `INFORMATION_ARCHITECTURE.md` §15's Component Mapping. Preview Frame is required by the same source for the Interactive Showcase, Weber's signature trust-building moment (`DECISIONS.md` WD-005). Hero Content and Hero Media were proposed as separate entries in the Phase 1 review candidate list but add no responsibility beyond what Stack and Aspect Ratio (`02_LAYOUT.md`) already provide inside Hero — documenting them separately would fragment one component into three with no new capability, contrary to Composition First (WD-055).
**Alternatives Considered:** Naming this component "CTA Section" and "Feature Grid" per the original candidate list — presented in the Phase 1 review and rejected in favor of the names already established in `INFORMATION_ARCHITECTURE.md` §15, per direct Project Owner confirmation. Documenting Hero Content and Hero Media as their own Component Library entries — rejected; they are internal composition, not components.
**Final Decision:** Hero, CTA Banner, Feature List, and Preview Frame are documented in `docs/components/08_MARKETING.md`, completing the Documentation stage of the Component Lifecycle for all four (`01_FOUNDATIONS.md` §5). None has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. Hero Content and Hero Media are documented as part of Hero's own Composition field, not as separate entries, and must not be re-proposed as independent components.
**Impact:** Populates `docs/components/08_MARKETING.md` and `docs/components/10_MASTER_INDEX.md`.
**References:** `docs/components/08_MARKETING.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-096 — Marketing Component Rejections and Category Redirects

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Seven candidates are rejected as redundant page-level compositions of already-documented primitives, requiring no new component: Service Showcase, Portfolio Showcase, Testimonial Showcase, FAQ Section, and Contact CTA. Seven further candidates are rejected outright for lacking any approved or plausible use case: Pricing Section, Logo Cloud, Newsletter Signup, Social Proof, Metrics Section, Video Showcase, and Comparison Section. Three candidates are confirmed to already belong to other, already-documented categories: Process Steps (Data Display — already exists as Timeline), Input Form (Inputs — already exists as Form), and Trust Signals (Navigation's Footer content, or already covered by Feature List for the Home page).
**Reason:** Service Showcase, Portfolio Showcase, Testimonial Showcase, and FAQ Section are each fully achievable as Section + Grid/Stack + the relevant already-documented Data Display component, composed directly — no new component adds a distinct responsibility. Contact CTA is the same CTA Banner (WD-095) reused for a different section, not a separate component, per Variant Philosophy (WD-057). Pricing Section directly contradicts Consultation-First Pricing (`DECISIONS.md` WD-006) — the same conflict already on record against Price Display (WD-090). Logo Cloud, Newsletter Signup, Social Proof, Metrics Section, Video Showcase, and Comparison Section have no approved content strategy anywhere in the documentation set and, unlike Surfaces' deferred overlay family, no named future hook (such as WD-038's Client Dashboard) to justify deferral rather than rejection.
**Alternatives Considered:** Documenting each — presented and individually rejected or redirected in the Phase 1 review; see `docs/components/08_MARKETING.md` for per-candidate reasoning. Deferring the no-grounding rejections to Version 2 — considered and rejected, since none has a plausible future hook comparable to those that justified Surfaces' deferrals (WD-094).
**Final Decision:** None of the fourteen rejected or redirected candidates is documented as a new component in the Component Library.
**Impact:** Prevents re-proposal of the eleven flatly rejected names without new justification; confirms no cross-category documentation gap exists for the three redirected names.
**References:** `docs/components/08_MARKETING.md`.

---

### WD-097 — Blog Preview Documented as a Composition Pattern, Not a Component

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Blog Preview is documented in `docs/components/08_MARKETING.md` as a named **composition pattern** — Section + Container + Grid (Layout) + Blog Post Card ×N (Data Display) + CTA Banner (Marketing) — rather than as a standalone primitive component with its own Component Lifecycle entry. It carries no approved Version 1 placement; the Home section order (`DECISIONS.md` WD-040) has no Blog section.
**Reason:** The Phase 1 review initially recommended rejecting Blog Preview outright, on the grounds that no approved Home section calls for it. The Project Owner clarified that the underlying concept is valid and should remain discoverable and named — as a recipe for composing already-documented primitives — without implying it is itself a new primitive requiring full ten-field documentation and its own lifecycle status. This distinguishes it from an ordinary rejection: the composition is worth naming for reuse, even though nothing today instantiates it.
**Alternatives Considered:** Rejecting Blog Preview outright as originally reviewed — overridden by direct Project Owner decision. Documenting it as a full standalone component — rejected, since it adds no capability beyond composing Blog Post Card, Grid, and CTA Banner directly; doing so would misrepresent it as a primitive on par with genuinely new components.
**Final Decision:** `docs/components/08_MARKETING.md` includes a distinct "Composition Patterns" section, separate from the category's documented-component Index, naming Blog Preview and what it composes. This does not commit any Version 1 route to using it.
**Impact:** Establishes "composition pattern" as a documentation concept distinct from "component" — a named, reusable recipe with no independent Lifecycle status of its own, available if a future route or section needs it, without inventing a new primitive ahead of need.
**References:** `docs/components/08_MARKETING.md`.

---

### WD-098 — Approved Utilities Component Set: Icon and Live Region Announcer

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Two Utilities components are approved and documented: **Icon** and **Live Region Announcer**. Both resolve forward dependencies already recorded against multiple, already-documented components. **Screen Reader Announcer is confirmed as an alias of Live Region Announcer, not a separate component.**
**Reason:** Icon is named as an undocumented forward dependency by Mobile Navigation Toggle (`03_NAVIGATION.md`), Button's Icon Button/Link Button future variants (`04_INPUTS.md`), Empty State's optional icon (`05_FEEDBACK.md`), and Feature List (`08_MARKETING.md`). Live Region Announcer is named as an undocumented forward dependency by Alert, Spinner, and Empty State (`05_FEEDBACK.md`), Form (`04_INPUTS.md`), and Preview Frame (`08_MARKETING.md`), and was already confirmed as a future Utilities component in `DECISIONS.md` WD-088. Both are the most-evidenced recommendations of any category workshop to date — each has multiple already-documented, already-approved consumers waiting on it, not a speculative or anticipated need.
**Alternatives Considered:** Documenting Screen Reader Announcer as a separate component alongside Live Region Announcer — presented in the Phase 1 review and rejected as an alias, per Variant Philosophy (WD-057).
**Final Decision:** Icon and Live Region Announcer are documented in `docs/components/09_UTILITIES.md`, completing the Documentation stage of the Component Lifecycle for both (`01_FOUNDATIONS.md` §5). Neither has entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. Every component that named either as a forward dependency (Mobile Navigation Toggle, Button, Empty State, Feature List, Alert, Spinner, Form, Preview Frame) is updated to reference the now-documented primitive instead.
**Impact:** Resolves nine open forward dependencies across five already-finalized documents (`03_NAVIGATION.md`, `04_INPUTS.md`, `05_FEEDBACK.md`, `08_MARKETING.md`). Populates `docs/components/09_UTILITIES.md` and `docs/components/10_MASTER_INDEX.md`.
**References:** `docs/components/09_UTILITIES.md`; `docs/components/03_NAVIGATION.md`; `docs/components/04_INPUTS.md`; `docs/components/05_FEEDBACK.md`; `docs/components/08_MARKETING.md`; `docs/components/10_MASTER_INDEX.md`.

---

### WD-099 — Utilities Component Rejections; Footer Confirmed as Navigation

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Ten candidates are rejected as framework-specific implementation mechanisms or ideas with no approved grounding: Theme Provider, Theme Switcher helper, Keyboard Shortcut Helper, Copy to Clipboard, External Link Indicator, Loading Boundary, Error Boundary, Client Only, No SSR Wrapper, and Portal. Footer is confirmed to belong to the Navigation category, not Utilities, and is not documented here.
**Reason:** Theme Provider and Theme Switcher helper have no consumer, since Theme Switcher itself isn't approved for Version 1 (`DECISIONS.md` WD-080). Keyboard Shortcut Helper, Copy to Clipboard, and External Link Indicator have no approved feature grounding anywhere in the documentation set. Loading Boundary and Error Boundary are rendering mechanisms whose actual visible output already exists as Spinner/Skeleton and Empty State/Alert (Feedback, WD-085). Client Only, No SSR Wrapper, and Portal are framework-specific rendering/hydration mechanisms, not documentable UI primitives with their own visual or accessibility contract — consistent with the same reasoning that already rejected Overlay and Backdrop in Surfaces (WD-093). Footer is already scoped under Navigation in `DESIGN_SYSTEM.md` §4 ("Primary Navigation, Footer, breadcrumbs") and described in Navigation terms throughout `UX_SPECIFICATION.md` and `DECISIONS.md` (the sticky-header decision) — it is persistent chrome parallel to Header, not a small generic helper.
**Alternatives Considered:** Documenting Footer here as a Utilities component to close the long-standing gap — presented in the Phase 1 review and rejected as a category mismatch; the gap remains open but correctly scoped to a future Navigation documentation pass, not Utilities Finalization.
**Final Decision:** None of the ten rejected candidates is documented anywhere in the Component Library. Footer remains undocumented, explicitly scoped to Navigation for a future documentation pass — this Finalization does not resolve that gap.
**Impact:** Prevents re-proposal of the ten rejected names without new justification; confirms Footer's eventual category without documenting it now.
**References:** `docs/components/09_UTILITIES.md`.

---

### WD-100 — Focus Trap Deferred to Version 2

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Focus Trap remains deferred to Version 2, tied directly to the already-deferred Surfaces overlay family — Modal, Confirmation Dialog, Sheet, Drawer, Bottom Sheet, Popover, Hover Card, Side Panel (`DECISIONS.md` WD-094).
**Reason:** Focus Trap's only plausible consumers are exactly that deferred overlay family. No Version 1 component needs it — Mobile Navigation Toggle's collapsed menu is already documented as requiring standard keyboard reachability only, not focus containment (`03_NAVIGATION.md`).
**Alternatives Considered:** Documenting Focus Trap now, ahead of any approved consumer — presented in the Phase 1 review and rejected as documentation ahead of need, contrary to this project's consistent discipline (e.g., Card and Icon were both held until a proven consumer existed).
**Final Decision:** Focus Trap is not documented in `docs/components/09_UTILITIES.md`. It remains open for proposal in the same connected Version 2 review already scoped for the Surfaces overlay family (WD-094), not as an independent future addition.
**Impact:** Keeps Focus Trap bundled with its actual consumers rather than documented in isolation ahead of them.
**References:** `docs/components/09_UTILITIES.md`; `docs/components/07_SURFACES.md`.

---

### WD-110 — Footer Approved as Official Navigation Component

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Footer is documented as Navigation's ninth component (`docs/components/03_NAVIGATION.md`), closing the gap flagged since Marketing Components Finalization (WD-096) and formally scoped to a future Navigation pass in WD-099. Footer is a composition-only component, following the same Composition First philosophy already applied to Header — it fills App Shell's Footer slot through composition alone, introducing no new primitive and no dependency violation. Footer has exactly one global variant for the entire product, with no page-specific or route-specific variants. Footer is non-sticky and appears exactly once per page, consistent with the behavior already established in WD-045.
**Reason:** Footer's category was already settled twice (`DESIGN_SYSTEM.md` §4; `DECISIONS.md` WD-099) before this review began. Its architecture is a direct structural parallel to the already-approved Header: a landmark region filling a defined App Shell slot, composed from outside App Shell's own definition (the same slot-based non-dependency pattern corrected for Header in Component Audit #1, WD-073), with no distinct primitive of its own. One global variant and non-sticky/once-per-page behavior both restate already-approved decisions (Brand Consistency, Part 2/6; WD-045) rather than introducing new ones.
**Alternatives Considered:** Treating Footer as a Layout component, given its App Shell slot — presented in the Phase 1 review and rejected, since App Shell's slot is a Layout concern already documented, while what fills it (Footer itself) is a Navigation concern, exactly as Header already demonstrates. Documenting Footer with route-specific variants (e.g., a different footer for second-level content) — rejected as unsupported by any approved content or IA decision and contrary to Brand Consistency.
**Final Decision:** Footer is documented in `docs/components/03_NAVIGATION.md`, completing the Documentation stage of the Component Lifecycle (`01_FOUNDATIONS.md` §5). It has not entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. **No Footer content — links, trust signals, Support Pages tier items, legal pages, or any future section — is approved by this decision.** Every such item remains explicitly `[PENDING PROJECT OWNER DECISION]`, tracked in `INFORMATION_ARCHITECTURE.md` §4 and `ROUTES.md` §4, and must not be inferred from Footer's architecture being approved.
**Impact:** Resolves the one piece of global chrome — touching all six Version 1 routes via App Shell's Footer slot — that previously had no documented component. Updates `docs/components/02_LAYOUT.md` (App Shell's Relationships field), `docs/components/09_UTILITIES.md` (WD-099 cross-reference), `docs/components/10_MASTER_INDEX.md`, and `docs/IMPLEMENTATION_BLUEPRINT.md` (Critical Path step 3 and the Implementation Readiness Checklist).
**References:** `docs/components/03_NAVIGATION.md` — Footer; `docs/components/02_LAYOUT.md` — App Shell; `DECISIONS.md` WD-045, WD-073, WD-096, WD-099.

---

### WD-111 — Footer Composition: Brand Link Reused, Language Switcher Excluded by Default

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Footer composes Brand Link (`docs/components/03_NAVIGATION.md`, same tier) as an existing, reused Navigation component, rather than duplicating the logo-to-Home link. Language Switcher is explicitly **not** embedded in Footer by default — its placement remains independent of Footer's own composition.
**Reason:** Brand Link already exists, carries no variant, and is the single source of truth for the logo-as-link pattern (`DECISIONS.md` WD-004) — reusing it in Footer is direct Composition First (WD-055) and Variant Philosophy (WD-057) discipline, avoiding a duplicate brand-link implementation. Language Switcher is deliberately kept independent so its placement can evolve (e.g., alongside future localization-routing decisions, `ARCHITECTURE.md` §6) without coupling Footer's own contract to language strategy — a direct Project Owner decision, resolving the one open composition question flagged in the Phase 1 review.
**Alternatives Considered:** Also composing Language Switcher into Footer by default (a common footer pattern) — presented in the Phase 1 review as an open question and explicitly declined by the Project Owner, to keep Footer's contract independent of language strategy. Introducing a new "Footer Brand Mark" primitive instead of reusing Brand Link — rejected as unnecessary duplication.
**Final Decision:** Footer's Composition and Dependencies fields in `docs/components/03_NAVIGATION.md` name Brand Link as a same-tier dependency. Language Switcher is not named as a Footer dependency; its existing placement inside Header (`DECISIONS.md` WD-078) is unchanged by this decision.
**Impact:** Resolves the sole open composition question from the Phase 1 review without introducing any new primitive.
**References:** `docs/components/03_NAVIGATION.md` — Footer, Brand Link, Language Switcher.

---

### WD-112 — Service Detail Layout Approved as Official Data Display Component

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Service Detail Layout is documented as Data Display's tenth component (`docs/components/06_DATA_DISPLAY.md`), closing the last component-level documentation gap flagged during Implementation Blueprint Finalization. It follows exactly the same architectural philosophy already established for Article Layout and Case Study Layout: composition only, no new primitives, no implementation details, documented via the ten-field standard. It composes only Section, Container, and Stack (Layout, tier 1) — existing, approved, lower-tier components — maintaining full compliance with WD-068. **CTA Banner is explicitly excluded as a dependency** — it is a page-level composition handled by the route, exactly as already practiced (without being separately decided until now) by Article Layout and Case Study Layout, both of which appear alongside CTA Banner in `INFORMATION_ARCHITECTURE.md` §15 without composing it directly. **Cross-links to Portfolio, also named in `INFORMATION_ARCHITECTURE.md` §15, are documented as an optional content area owned by the page composition, not as a dependency of Service Detail Layout itself.**
**Reason:** `INFORMATION_ARCHITECTURE.md` §15 names Service Detail layout directly for individual Service pages; Service Card's own Responsibilities field already anticipated this split ("does not own the full service detail content — a route-level concern"). Its content shape — no tags, no structured facts — is closer to Article Layout's simplicity than Case Study Layout's fact-grid shape, since `INFORMATION_ARCHITECTURE.md` §6 describes no comparable tag or structured-fact concept for Services. The CTA Banner exclusion prevents a real WD-068 violation: Data Display (tier 3) may never depend on Marketing (tier 4) — the correct reading of IA §15's per-section component lists is "everything present on the page," not "everything nested inside one component," the same reading Case Study Layout and Article Layout already relied on.
**Alternatives Considered:** Composing CTA Banner directly into Service Detail Layout, following a literal reading of IA §15's row — presented in the Phase 1 review and rejected as a direct WD-068 violation. Composing a structured cross-links element (e.g., Portfolio Card instances) directly into Service Detail Layout — rejected as inventing content structure ahead of any approved decision; left as an optional, page-owned content area instead. Mirroring Case Study Layout's richer composition (Grid, Tag, Key Value Pair) — rejected as unsupported by `INFORMATION_ARCHITECTURE.md` §6, which describes no comparable tag/fact concept for Services.
**Final Decision:** Service Detail Layout is documented in `docs/components/06_DATA_DISPLAY.md`, completing the Documentation stage of the Component Lifecycle (`01_FOUNDATIONS.md` §5). It has not entered Implementation — the Documentation Before Implementation Gate (`DECISIONS.md` WD-066) applies. No service-detail content, metadata, or cross-link structure is approved by this decision — all remain `[PENDING PROJECT OWNER DECISION]` where not already covered by `INFORMATION_ARCHITECTURE.md` §6.
**Impact:** Resolves the last component-level documentation gap identified during Implementation Blueprint Finalization. Updates `docs/components/10_MASTER_INDEX.md`, `docs/DESIGN_SYSTEM.md`, and `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `docs/components/06_DATA_DISPLAY.md` — Service Detail Layout; `DECISIONS.md` WD-068, WD-089.

---

### WD-113 — Service Card Citation Correction (§8 → §6)

**Category:** Component Library
**Date:** 2026-07-17
**Status:** Approved
**Description:** Service Card's Responsibilities and Relationships fields (`docs/components/06_DATA_DISPLAY.md`) previously cited `INFORMATION_ARCHITECTURE.md` §8 for Services-related content. §8 is the Portfolio Architecture section; Services is documented in §6. Both citations are corrected to §6.
**Reason:** A pre-existing citation error identified during the Service Detail Layout Phase 1 review, unrelated to whether Service Detail Layout should exist but directly concerning the same content relationship this Finalization documents. Left uncorrected, it would misdirect any future reader toward Portfolio's information architecture instead of Services'.
**Alternatives Considered:** None — a factual correction, not a decision between alternatives.
**Final Decision:** Both citations in Service Card's entry now read `INFORMATION_ARCHITECTURE.md` §6.
**Impact:** No architectural or compositional change to Service Card itself — citation accuracy only.
**References:** `docs/components/06_DATA_DISPLAY.md` — Service Card; `INFORMATION_ARCHITECTURE.md` §6.

---

### WD-136 — Button Official Version 1 Visual Variant Set: Primary / Secondary / Accent

**Category:** Component Library
**Date:** 2026-07-18
**Status:** Approved
**Description:** Weber's official Version 1 Button visual variant set is **Primary / Secondary / Accent**, filled-only, with **Primary** as the default. Completes the Button entry's Variants field (`docs/components/04_INPUTS.md`), resolving the gap `DESIGN_SYSTEM.md` explicitly left open ("exact variant sets per component... not enumerated here").
**Reason:** Reached via the Button Visual Variants Workshop, which evaluated eleven candidates individually against WD-057 (Variant Philosophy) and Weber's documented Version 1 scope, not by direct enumeration. Primary/Secondary/Accent are the only three variants named together, by word, in Button's own pre-existing Variants field and in WD-002. Destructive, Success, and Warning were found unsupported — no Version 1 route (`INFORMATION_ARCHITECTURE.md`'s six routes: Home, Services, Interactive Showcase, Portfolio, Contact, Blog) contains a destructive action or a documented need for a button whose resting color communicates an outcome before it is pressed, the same "no genuine need" standard already applied to `store/` (WD-119), the Surface primitive (WD-092/WD-094), and CVA (WD-135). Ghost and Outline were found contradicted outright — WD-057 defines visual variants as color-role mappings and states "never a color outside those roles"; fill-style treatments are not color roles at all. Link was found explicitly deferred to a future version by Button's own documentation, which names it as an "anticipated future variant," not Version 1 scope. Filled-only is the necessary consequence of excluding Ghost/Outline with no alternative rendering technique documented anywhere. Primary is the default because it is the only variant whose documented purpose (`UI_FOUNDATION.md` §5: "attracts attention — used for what the visitor should notice first") describes what an unqualified, unlabeled Button should do, and it is listed first in every enumeration of the three (WD-002; Button's own Variants field).
**Alternatives Considered:** Presented and evaluated individually in the Phase 1 review: Destructive, Success, Warning (each rejected — no documented Version 1 need); Ghost, Outline (each rejected — not color roles, contradicts WD-057's explicit scope); Link (rejected for Version 1 — Button's own documentation defers it to a future variant); a semantic-first philosophy (rejected — inverts Button's documented generic-action purpose against WD-036's outcome-communication roles); a larger, shadcn-style catalog (rejected — contradicts `DESIGN_SYSTEM.md` §5's "not a speculative catalog" and the Constitution's Simplicity Wins).
**Final Decision:** Button's official Version 1 visual variant set is `primary` | `secondary` | `accent`, filled-only. Default variant is `primary`. Destructive, Success, Warning, Ghost, Outline, and Link are explicitly not part of Version 1 — each remains open for a future decision if a genuine need is later documented. Variant prop/value naming beyond these three words, and any other component-level TypeScript/props convention, remains covered by `CODING_STANDARDS.md`'s existing placeholder, not resolved here.
**Impact:** Resolves the sole remaining architectural blocker preventing Button implementation. Updates `docs/components/04_INPUTS.md` (Button — Variants field), `DESIGN_SYSTEM.md` (Pending Decisions Summary), `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `DECISIONS.md` WD-002, WD-036, WD-057, WD-068, WD-082, WD-084, WD-092, WD-094, WD-098, WD-119, WD-130, WD-135; `docs/components/04_INPUTS.md` — Button; `DESIGN_SYSTEM.md` §5.

---

### WD-137 — Grid Confirmed as a Value-Agnostic Layout Mechanism

**Category:** Component Library
**Date:** 2026-07-18
**Status:** Approved
**Description:** Grid is confirmed as a value-agnostic layout mechanism. It provides responsive column-arrangement infrastructure — built on WD-034's already-approved breakpoint tiers and WD-030's already-approved gutter scale — but supplies no default or built-in column-count values of its own. Responsive column counts belong to each consuming component (Service Card, Portfolio Card, Blog Post Card, and any future grid-shaped component, e.g. a Dashboard grid), decided individually when that component is implemented — not to Grid itself.
**Reason:** Reached via the Grid Column Count Workshop, evaluating five candidate strategies against seven criteria (architectural consequences, responsiveness, accessibility, component reuse, future scalability, consistency, complexity), grounded only in already-approved documentation. This strategy is close to a direct restatement of Grid's own pre-existing Composition field (`docs/components/02_LAYOUT.md`): *"rhythm shared with whatever layout grid the surrounding Page/Section establishes, not an independent scale."* A fixed universal column count was rejected as directly contradicting WD-034's mobile-first responsive mandate. Grid internally hardcoding its own per-breakpoint column scale was rejected as explicitly forbidden by Grid's own pre-existing documentation ("this gap is not license to hardcode column-count values"). CSS `auto-fit`/`minmax` was found technically sound but rejected as the only responsive mechanism in Weber not built on WD-034's discrete tier model — an unprecedented second responsive paradigm. A new Design Tokens grid-column category was rejected as premature: Grid's own text already frames this as a future evaluation once real per-consumer usage exists to generalize from, and disproportionate under Simplicity Wins (Part 10) relative to this simpler mechanism-only approach.
**Alternatives Considered:** Fixed universal column count — rejected, contradicts WD-034. Grid-internal hardcoded per-breakpoint scale — rejected, explicitly forbidden by Grid's own documentation. CSS `auto-fit`/`minmax` with a minimum item width — rejected, technically sound but introduces a responsive paradigm inconsistent with WD-034's tier model used everywhere else in the system. A formal Design Tokens grid-column scale — rejected as premature and disproportionate, explicitly framed by Grid's own text as a later evaluation, not a prerequisite.
**Final Decision:** Grid is officially a value-agnostic responsive layout mechanism. It exposes a responsive column-count control keyed to WD-034's four breakpoint tiers (Mobile/Tablet/Laptop/Desktop) and uses WD-030's spacing scale for gutters, but defines no default or built-in column-count values. Each consuming component decides its own column counts, per breakpoint, at the time that component is implemented. This entry resolves only the mechanism — it does not resolve Service Card's, Portfolio Card's, or Blog Post Card's actual column counts, which remain open, separate decisions properly scoped to their own implementation tasks. Full compatibility with WD-030, WD-034, WD-057, and WD-068 is preserved — nothing in this decision changes any of them.
**Impact:** Unblocks Grid's own implementation, previously blocked since "exact counts remain an open, undecided question rather than an implementation-determined one." By extension, unblocks Case Study Layout, which structurally composes Grid. Does not, on its own, unblock Service Card, Portfolio Card, or Blog Post Card's full implementation — each still needs its own column-count decision made at its own implementation time, now correctly scoped as a small, contained, per-component choice rather than a Grid-level prerequisite. Updates `docs/components/02_LAYOUT.md` (Grid — Variants field), `ARCHITECTURE.md` §5, `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `DECISIONS.md` WD-030, WD-034, WD-057, WD-068; `docs/components/02_LAYOUT.md` — Grid.

---

### WD-138 — Aspect Ratio Confirmed as a Value-Agnostic Layout Mechanism

**Category:** Component Library
**Date:** 2026-07-18
**Status:** Approved
**Description:** Aspect Ratio is confirmed as a value-agnostic layout mechanism, mirroring Grid's resolution (WD-137). It reserves space for a content region at a caller-supplied ratio, preventing layout shift before that content loads, but defines no built-in ratio values, no ratio enum, and no default ratio of its own. No Design Tokens aspect-ratio category is introduced. Every consumer — Portfolio Card, Blog Post Card, Hero, Preview Frame, and any future image-heavy component (e.g. a Dashboard or Learning Platform surface) — supplies its own ratio explicitly, according to its own documented needs, decided individually when that component is implemented.
**Reason:** Reached via the Aspect Ratio Workshop, evaluating six candidate strategies (fixed enum, free numeric API, token-based system, consumer-defined ratio, CSS-only approach, responsive/per-breakpoint API) against eight governing-principle criteria (simplicity, consistency, reusability, future maintenance, design-system integrity, documentation consistency, implementation complexity, risk of misuse), grounded only in already-approved documentation. A fixed enum was rejected because Variant Philosophy (WD-057) requires variants to map to approved tokens, and no approved ratio token values exist to map to — an enum would be exactly the "component-specific ad hoc... values" WD-057's own Alternatives Considered rejects as token drift. A new Design Tokens aspect-ratio category was rejected as premature, explicitly framed by Aspect Ratio's own pre-existing documentation as a future evaluation "once real per-consumer usage exists to generalize from" — the same reasoning WD-137 already applied to Grid's column-count tokens. A CSS-only approach with no component was rejected as out of scope: Aspect Ratio is already an approved Foundation Component (WD-071), and revoking it isn't this Workshop's purpose; it would also fragment the same space-reservation discipline across four independent call sites. A responsive/per-breakpoint ratio API was rejected as solving an undocumented problem — unlike Grid's column count, which WD-034's mobile-first mandate makes a known per-breakpoint need, no document anywhere indicates any Aspect Ratio consumer needs to change ratio across breakpoints. The consumer analysis found Portfolio Card, Blog Post Card, Hero, and Preview Frame each need exactly one ratio for themselves, but plausibly different values from each other (thumbnail vs. hero banner vs. generated-preview shapes) — a pattern a free, per-consumer-recorded mechanism fits and a fixed enum or token scale does not. Preview Frame's specific ratio may not even be resolvable until the Interactive Showcase generation mechanism (Critical Path step 7) is itself decided, reinforcing that no value should be imposed at the mechanism level now.
**Alternatives Considered:** Fixed enum of approved ratios — rejected, contradicts WD-057 and Aspect Ratio's own pre-existing documentation. Token-based ratio system — rejected as premature, mirroring WD-137's identical rejection for Grid's column-count tokens. CSS-only approach with no component — rejected as out of scope; would silently revoke an already-approved Foundation Component (WD-071) without a decision to do so. Responsive/per-breakpoint ratio API — rejected as unrequested complexity with no documented need, unlike Grid's breakpoint-tied column count.
**Final Decision:** Aspect Ratio is officially a value-agnostic space-reservation mechanism. It exposes a ratio control with no default and no built-in value; each consuming component decides its own ratio, per its own content needs, at the time that component is implemented — the same delegation pattern WD-137 established for Grid's column counts. This entry resolves only the mechanism — it does not resolve Portfolio Card's, Blog Post Card's, Hero's, or Preview Frame's actual ratio values, which remain open, separate decisions properly scoped to their own implementation tasks. Full compatibility with WD-057, WD-068, WD-071, and WD-073 is preserved — nothing in this decision changes any of them.
**Impact:** Unblocks Aspect Ratio's own implementation — the sole remaining gap in the eleven-component Foundation set (WD-071). By extension, clears the architectural blocker on Portfolio Card and Blog Post Card's dependency chain, though neither is implementable until Aspect Ratio itself is coded, and each still needs its own ratio-value decision at its own implementation time — the same "small, per-component choice" pattern WD-137 established for Grid's consumers. Does not unblock Preview Frame's full implementation, since its content shape depends on the still-unresolved Interactive Showcase generation mechanism. Updates `docs/components/02_LAYOUT.md` (Aspect Ratio — Purpose, Variants, Token Usage, Relationships, Dependencies, Future Extension fields), `docs/components/10_MASTER_INDEX.md`, `docs/IMPLEMENTATION_BLUEPRINT.md`.
**References:** `DECISIONS.md` WD-057, WD-068, WD-071, WD-073, WD-137; `docs/components/02_LAYOUT.md` — Aspect Ratio; `docs/components/08_MARKETING.md` — Hero, Preview Frame.

---

### WD-139 — Contact Form Version 1 Field List: Name, Company, Email, Message

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Weber's Version 1 Contact Form field list is Name, Company, Email, and Message — all four required, no optional fields. Resolves the "Contact lead-collection field list" gap `INFORMATION_ARCHITECTURE.md` §10 and `DECISIONS.md`'s own Pending Decisions Summary left open.
**Reason:** Reached via the Contact Form Field Definition Workshop, evaluating six candidate strategies (Minimal Lead Form, Standard Agency Form, Qualification Form, Multi-step Form, Service-first Form, Custom Proposal Form) against eight governing principles (Version 1 scope, simplicity, UX, accessibility, future extensibility, maintenance, business value, consistency with Weber), grounded only in already-approved documentation. Name and Email are the functional minimum for "start a consultation" (`INFORMATION_ARCHITECTURE.md` §10) to mean anything at all. Message traces directly to WD-007's own approved CTA copy ("Tell us about your business"). Company is justified as required — not speculative — because every route in `ROUTES.md` states the identical Primary Audience, "Businesses seeking a professional digital presence," with no individual-consumer segment approved anywhere in the system; Weber is explicitly a B2B product throughout the documentation. Phone, Service, Project Type, Timeline, and Website were found to have no explicit documented requirement, only weak or speculative inference, each risking the "long forms"/"reduce typing" friction Part 4 warns against if added without genuine grounding. Budget was rejected as directly contradicting Consultation-First Pricing (WD-006 — "consultation before quotation"), the same failure mode already rejected elsewhere for Price Display (WD-090). Attachment was rejected as depending on the still-undecided File Upload Strategy, which `SECURITY_POLICY.md` confirms "no Version 1 feature currently uses." Country and Preferred Contact Method were found entirely unsupported — the latter misreads `INFORMATION_ARCHITECTURE.md` §10's three parallel contact channels (Form/WhatsApp/Email) as a single form field, which they are not. Service is confirmed as a possible future pre-fill value (e.g., arriving from a Services-page referral) but not a Contact field itself, since requiring it would risk pre-empting the consultation the form exists to start.
**Alternatives Considered:** Standard Agency Form (adds Phone, Service) — rejected; each field carries only weak documented grounding and adds friction beyond the documented minimum. Qualification Form (adds Budget, Timeline, Project Type) — rejected; Budget directly contradicts WD-006, and the others resemble "a full project brief," which `INFORMATION_ARCHITECTURE.md` §10 explicitly says the Contact form is not. Multi-step Form — rejected; WD-020 already reserves multi-step/React-Hook-Form architecture for forms with "meaningful client-side interactivity or multi-step state," naming the Interactive Showcase, not Contact, and WD-052 requires Contact to be "the lowest-friction interaction in the product." Service-first Form — rejected as the organizing structure for Contact itself, though the underlying idea (pre-filling Service from a Services-page referral) is preserved as a possible future page-level enhancement, not a Contact field. Custom Proposal Form — rejected outright, contradicting both WD-006 (Budget) and the active File Upload Strategy blocker (Attachment).
**Final Decision:** The Version 1 Contact Form field list is Name, Company, Email, Message — all four required, no optional fields. Phone, Budget, Timeline, Project Type, Attachment, Website, Country, and Preferred Contact Method are explicitly not part of Version 1. Service is confirmed as a possible future pre-fill value in a later flow (e.g., a Services-page referral) but is not a Contact form field. This entry resolves only the field list — it does not resolve exact field ordering, placement, copy/microcopy, validation messages, or the form's underlying submission mechanism (Server Actions vs. Route Handler), which remain implementation-level concerns already governed by existing decisions (WD-020, WD-021, WD-026, WD-046).
**Impact:** Unblocks Contact route assembly (`IMPLEMENTATION_BLUEPRINT.md` Critical Path step 6), previously blocked on this exact field list. Resolves the "Contact lead-collection field list" entry in `DECISIONS.md`'s own Pending Decisions Summary. Updates `docs/INFORMATION_ARCHITECTURE.md` §10, `docs/IMPLEMENTATION_BLUEPRINT.md`, `docs/CHANGELOG.md`.
**References:** `DECISIONS.md` WD-006, WD-007, WD-020, WD-046, WD-052, WD-090; `INFORMATION_ARCHITECTURE.md` §10; `SECURITY_POLICY.md`; `ROUTES.md` §2.

---

### WD-140 — Home Hero CTA: "Explore Our Services" → /services

**Category:** UX
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Home Hero's implicit call-to-action is a Button reading "Explore Our Services," linking to `/services`. This is the canonical Version 1 Hero CTA.
**Reason:** Resolves the gap flagged during Home Hero Section implementation: Hero's own documentation says it "leads toward Services and Interactive Showcase," but `ROUTES.md` §6 classifies WD-007's three approved CTA phrases as tied specifically to Contact ("Consultation invitation... Leads To: Contact"), and separately marks the "Navigate to Services" functional role's exact label as "not decided." Directing the Hero CTA to Contact this early would contradict Progressive Trust ("Do not ask users to contact Weber immediately... Trust before conversion, always," `PROJECT_CONSTITUTION.md` Part 4). "Explore Our Services" instead supports Progressive Trust by inviting exploration rather than commitment, aligns with Consultation-First Pricing (WD-006) by not front-loading a consultation ask, and gives visitors a natural next step — understanding Weber's services — before any contact invitation appears later in the Confidence Journey (Home section order, WD-040).
**Alternatives Considered:** Reusing one of WD-007's three approved phrases ("Let's discuss your project," "Request your website," "Tell us about your business") — not used, since `ROUTES.md` §6 explicitly classifies all three as Contact-directed language; applying them to a Services destination would misrepresent approved-for-Contact copy as approved-for-Services. Leaving Hero without a CTA (the implementation's prior state) — superseded by this explicit approval. A CTA Banner instead of a Button — Hero's own Composition field allows either; a plain Button was chosen as the simpler of the two approved options for a single implicit action with no separate banner-style message needed.
**Final Decision:** The Home Hero's CTA is a Button with the text "Explore Our Services," linking to `/services`. This is the canonical Version 1 Hero CTA. It does not decide CTA copy for any other "Navigate to Services" or "Navigate to Interactive Showcase" instance elsewhere in the product (e.g., within the Services section itself, or a CTA Banner reused elsewhere) — each remains its own separate, still-open decision unless and until explicitly extended.
**Impact:** Resolves the CTA gap flagged in the Home Hero Section implementation. Updates `docs/ROUTES.md` §6 (CTA Architecture table and its following note) and Pending Decisions Summary. Unblocks completing the Home Hero's implementation (adding this Button to the existing `src/app/page.tsx` Hero composition) — implementation itself is not performed by this entry.
**References:** `DECISIONS.md` WD-005, WD-006, WD-007, WD-040; `ROUTES.md` §6; `PROJECT_CONSTITUTION.md` Part 4 — Progressive Trust.

---

### WD-141 — Portfolio Home Treatment Before Case Studies Exist

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Portfolio section on the Home page will initially use a teaser presentation — Section, Container, Stack, a heading, supporting copy, and a Contact-oriented CTA — instead of a project card grid, deferring the Grid-of-Portfolio-Card treatment until real case studies exist.
**Reason:** Portfolio's purpose is to provide evidence of delivered work (`ROUTES.md` §2; `INFORMATION_ARCHITECTURE.md` §2 — "provide evidence, not just claims"). Real case studies and project data do not exist anywhere in the project's documentation — `INFORMATION_ARCHITECTURE.md` §8 itself is explicit that it is "kept at the philosophy/strategy level — no specific filter values or category names are invented." Fabricated projects or placeholder content must not be used, consistent with the standing prohibition on inventing business content (`PROJECT_CONSTITUTION.md` Part 1 — Non-Negotiable Rules: "invent business requirements," "assume missing information"). This directly resolves the central finding of the Portfolio Workshop Phase 1 review: `PortfolioCard` and `Grid` are both already implemented and architecturally sufficient, but there is no actual content anywhere to populate them with.
**Alternatives Considered:** Presented in the Portfolio Workshop Phase 1 review. A real Grid of Portfolio Cards — the correct eventual strategy, but currently blocked on non-existent content, not an architectural gap. An Empty State treatment explicitly announcing no projects yet — rejected, since a section whose entire purpose is supplying evidence announcing it has none risks undercutting trust rather than building it. Omitting the section from Home entirely — rejected, since it would silently break the approved nine-section Home order (WD-040) without a decision to do so.
**Final Decision:** The Portfolio Home section uses a teaser — Section, Container, Stack, a heading, supporting copy, and a Contact-oriented CTA — the same composition pattern already used for the Interactive Showcase Home section. Once sufficient real projects and case studies exist, Portfolio may evolve into a project card grid without changing its position in the Home information architecture (WD-040 is unaffected). This entry does not supply the teaser's actual heading, body copy, or CTA wording — that content remains a separate implementation-time step.
**Impact:** Resolves the Portfolio Workshop's central open question and unblocks a teaser-only implementation of this Home section. Does not unblock or invent the underlying portfolio content itself, which remains a separate, still-open gap outside this decision's scope. Documentation synchronization (`IMPLEMENTATION_BLUEPRINT.md`, `INFORMATION_ARCHITECTURE.md` §8) is not performed by this Finalization.
**References:** `DECISIONS.md` WD-040, WD-005; `INFORMATION_ARCHITECTURE.md` §8; `PROJECT_CONSTITUTION.md` Part 1 — Non-Negotiable Rules.

---

### WD-142 — Process Section Strategy Approved

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Process section on the Home page will present Weber's workflow through a complete four-step process timeline.
**Reason:** The Process section exists to explain how Weber transforms an idea into a delivered digital experience, reducing uncertainty and building client confidence.
**Alternatives Considered:** Simple teaser section — rejected because Process is considered an important trust-building section. Full detailed process page only — rejected because Home should provide enough clarity before asking users to take action. Multiple CTA-driven process sections — rejected because conversion actions are already handled by Hero and Final CTA sections.
**Final Decision:** The Home Process section uses a full process presentation across four stages — 01 Discovery, 02 Design, 03 Development, 04 Launch — in a Timeline visual layout. Each stage includes a number, title, short description, and brief bullet points. No CTA appears inside the Process section. Language and style are professional but simple, understandable for non-technical clients.
**Impact:** Creates a clear client journey and improves trust by explaining Weber's working method. Resolves the implementation-detail gap WD-042 explicitly left open ("its specific steps, visual treatment, and content are not decided by this entry").
**References:** `DECISIONS.md` WD-040 (Home Section Order), WD-042 (Process section approved for the Home page); related UX and Information Architecture documentation.

---

### WD-143 — Testimonials Version 1 Treatment Approved

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Defines the launch treatment of the Testimonials section on Weber's Home page before real customer testimonials are available.
**Reason:** Testimonials exist to provide external validation and credibility. Displaying fabricated testimonials would conflict with Weber's evidence-first approach.
**Alternatives Considered:** Create placeholder testimonials — rejected because fictional social proof damages trust. Display an empty Testimonials section — rejected because an empty trust section weakens the premium experience. Remove Testimonials permanently — rejected because real customer validation remains valuable for future growth.
**Final Decision:** For Version 1, the Testimonials section will not be implemented on the Home page. Only real customer testimonials will ever be displayed — no fictional testimonials, names, companies, ratings, or results will be created. Testimonials remains part of the approved future information architecture and will be introduced only once real customer testimonials are available; its position in the Home section order (WD-040) is unaffected.
**Impact:** Keeps the website authentic and prevents unsupported claims while preserving future scalability. Does not itself decide FAQ's Version 1 treatment — FAQ is not addressed by this entry and remains governed by its own existing approval (WD-040) unless separately revisited.
**References:** `DECISIONS.md` WD-040 (Home Section Order); `INFORMATION_ARCHITECTURE.md`; trust-building strategy (`PROJECT_CONSTITUTION.md` Part 4 — Trust Signals).

---

### WD-144 — Final CTA Strategy Approved

**Category:** UX
**Date:** 2026-07-18
**Status:** Approved
**Description:** Defines the strategy and role of the Final CTA section on Weber's Home page.
**Reason:** The Final CTA section exists to convert interested visitors into potential clients by providing a clear next step after they understand Weber's services, approach, and capabilities.
**Alternatives Considered:** Multiple CTA options — rejected because multiple actions create unnecessary decision friction at the end of the page. Direct sales-focused CTA — rejected because Weber follows a consultation-first approach rather than immediate pricing or purchase pressure. Large visual CTA section with additional content — rejected because the Home page already contains multiple content-heavy sections and the final action should remain focused.
**Final Decision:** The Final CTA section uses a simple CTA Banner layout: a heading, a supporting message, and one primary CTA button — text "Discuss Your Idea," destination the Contact page. Tone is professional and collaborative. No pricing display, no secondary CTA, and no additional information blocks.
**Impact:** Creates a clear final conversion point while maintaining Weber's consultation-first positioning and keeping the user journey simple. Resolves the content strategy for the Home order's closing "Contact CTA" section (WD-040).
**References:** `DECISIONS.md` WD-040 (Home Section Order), WD-006 (Consultation-First Pricing), WD-007 (Partnership-Toned Calls to Action); `ROUTES.md` — Contact.

---

### WD-145 — FAQ Version 1 Treatment Approved

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Defines the launch treatment of the FAQ section on Weber's Home page before appropriate FAQ content is available.
**Reason:** FAQ exists to answer real customer questions and remove purchase friction. Creating generic or invented questions and answers without understanding real customer concerns would reduce usefulness and weaken trust. This closes the gap identified in the Home Page Final Integration Review: FAQ is named in WD-040's approved Home section order but had no explicit Version 1 treatment decision, unlike Testimonials (WD-143).
**Alternatives Considered:** Create placeholder FAQ questions and answers — rejected because fictional customer concerns and answers may not represent real user needs. Display an empty FAQ section — rejected because an incomplete FAQ section reduces the premium experience. Remove FAQ permanently — rejected because FAQ can become valuable as Weber gains real customer insights.
**Final Decision:** For Version 1, FAQ will not be implemented on the Home page. No placeholder questions or answers will be created, and no FAQ component or data structure will be introduced. FAQ remains part of the approved future information architecture and will be introduced once real customer questions and useful answers are identified; its position in the Home section order (WD-040) is unaffected.
**Impact:** Keeps the Home page focused, authentic, and aligned with Weber's evidence-first approach while preserving future scalability. Closes the documentation/implementation gap the Home Page Final Integration Review flagged — WD-040's approved order now has an explicit, matching Version 1 treatment for every section that isn't built.
**References:** `DECISIONS.md` WD-040 (Home Section Order), WD-143 (Testimonials Version 1 Treatment Approved); Home Page Final Integration Review.

---

### WD-146 — Services Page Strategy Approved

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Defines the Version 1 implementation strategy for the standalone `/services` route, resolving the gap identified in the Services Page Workshop Phase 1 Review — specifically, what Service Card's "Learn more" action should do on a page where no individual Service Detail routes exist yet.
**Reason:** `ServiceCard`'s documented contract links its entry point to "this service's Service Detail Layout route" (`docs/components/06_DATA_DISPLAY.md` — Service Card), but no individual Service Detail routes are approved or built in Version 1. Rendering that action on the Services page itself would either self-link back to `/services` (a dead-end, non-functional interaction directly on the page a visitor is already viewing) or require inventing a destination that isn't approved. Consultation-first pricing (`DECISIONS.md` WD-006) already establishes that the product favors a single consultation path over multiple parallel purchase-style entry points, supporting one clear page-level CTA over four redundant per-card ones.
**Alternatives Considered:** Build individual Service Detail routes now, using the existing `ServiceDetailLayout` component (WD-112) — rejected because no long-form per-service content is approved anywhere in documentation, and inventing it would violate the Content/Component Separation Rule (`PROJECT_CONSTITUTION.md` Part 11, Amendment 1) and the Assumption Policy (Part 7). Leave Service Card's "Learn more" action rendered and link it to `/services` itself — rejected as a self-referential, non-functional link on the very page the visitor is already on. Point each Service Card's action at Contact or Interactive Showcase individually — rejected as a redundant restatement of the page's own bottom CTA, adding four near-duplicate conversion paths where the Constitution calls for minimal, non-competing choices (Part 4 — Decision Fatigue).
**Final Decision:** Version 1 `/services` is a single listing page, not a set of individual service routes. It presents the four approved Version 1 services only (`DECISIONS.md` WD-037: Website Development, Mobile Applications, Desktop Applications, Templates). It reuses the existing `ServiceCard` component for each service, but Service Card's internal "Learn more" action is not rendered on this page, preventing a self-link back to `/services`. Navigation forward continues through a single, page-level, consultation-focused CTA at the bottom of the page, using the approved partnership-toned language (`DECISIONS.md` WD-007). No Service Detail pages are part of Version 1. The existing Service Detail architecture and components (`ServiceDetailLayout`, `DECISIONS.md` WD-112) are not removed and remain reserved for a future phase once individual service content and a URL scheme are approved.
**Impact:** Unblocks implementation of the `/services` route. Requires `ServiceCard` to support omitting its action (a small, additive change to an existing component's API — not a new component), to be handled at implementation time, not by this decision. Confirms `ServiceDetailLayout` stays in the codebase as approved, unused architecture pending a future decision, rather than being treated as dead code.
**References:** `DECISIONS.md` WD-006 (Consultation-First Pricing), WD-007 (Partnership-Toned CTAs), WD-010 (Content/Component Separation Rule), WD-037 (Version 1 Official Services), WD-112 (Service Detail Layout Approved); `docs/components/06_DATA_DISPLAY.md` — Service Card, Service Detail Layout; `ROUTES.md` §2 — Services; Services Page Workshop Phase 1 Review.

---

### WD-147 — Portfolio Page Version 1 Strategy Approved

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Defines the Version 1 implementation strategy for the standalone `/portfolio` route, resolving the gap identified in the Portfolio Page Workshop Phase 1 Review — specifically, what `/portfolio` should render given that no real projects or case studies exist yet.
**Reason:** `INFORMATION_ARCHITECTURE.md` §8 and `DECISIONS.md` WD-141 prohibit fabricated projects and placeholder content, and only resolved this question for the Home page's Portfolio *section* (teaser treatment), not for the standalone `/portfolio` *route* — which `ROUTES.md` §2 and `INFORMATION_ARCHITECTURE.md` §3 already name as one of the five Core Version 1 routes. Leaving the route undecided risks either an unbuilt, documented-but-missing destination, or an implementation that invents projects/thumbnails to avoid looking empty. `EmptyState`'s own documented Relationships field already states it is "used by Portfolio and Blog before content exists or when a collection is empty" (`docs/components/05_FEEDBACK.md`), directly grounding this decision in already-approved architecture rather than a new pattern.
**Alternatives Considered:** Defer the `/portfolio` route entirely, keeping Portfolio confined to its existing Home teaser section (mirroring Testimonials/FAQ, WD-143/WD-145) — rejected because, unlike Testimonials/FAQ, Portfolio is explicitly named as one of the five Core Version 1 routes, and leaving it unbuilt with no authorizing decision would contradict `ROUTES.md`. Populate `PortfolioCard` with fictional or placeholder projects and thumbnails to avoid an empty page — rejected outright as a direct violation of `INFORMATION_ARCHITECTURE.md` §8 and the Constitution's prohibition on inventing business content. Build a teaser page reusing the Home Portfolio section's exact copy — rejected as a weaker documentation match than `EmptyState` (which names this exact scenario directly) and as a risk of near-duplicate content across two destinations serving different roles.
**Final Decision:** `/portfolio` is an approved Version 1 route. For Version 1, it uses the existing `EmptyState` component — no `PortfolioCard` grid is rendered, no fake projects, no placeholder thumbnails, and no fictional case studies are created. The page carries exactly one CTA: "Explore the Interactive Showcase," linking to `/interactive-showcase` — the already-approved, already-implemented Interactive Showcase route (per the live Home page). The page is intentionally structured (Page → Section → Container → Stack) so that real `PortfolioCard` instances arranged in a Grid can replace the `EmptyState` in a future phase without changing the page's architecture. The existing `PortfolioCard` and `CaseStudyLayout` components remain fully preserved, implemented, and unused, reserved for that future phase.
**Impact:** Unblocks implementation of the `/portfolio` route. Resolves the route-level gap left open by WD-141 and `INFORMATION_ARCHITECTURE.md` §8. Confirms `PortfolioCard` and `CaseStudyLayout` stay in the codebase as approved, unused architecture pending real project content, rather than being treated as dead code — mirroring how WD-146 treated `ServiceDetailLayout`. This entry originally referenced `/showcase` as the CTA destination; corrected during documentation synchronization to `/interactive-showcase` to align with the already-approved, already-implemented project route, so documentation remains internally consistent.
**References:** `DECISIONS.md` WD-005 (Interactive Showcase as a Distinct, Coexisting Feature), WD-141 (Portfolio Home Treatment Before Case Studies Exist), WD-146 (Services Page Strategy Approved); `docs/components/05_FEEDBACK.md` — Empty State; `docs/components/06_DATA_DISPLAY.md` — Portfolio Card, Case Study Layout; `ROUTES.md` §2 — Portfolio; `INFORMATION_ARCHITECTURE.md` §8; Portfolio Page Workshop Phase 1 Review.

---

### WD-150 — Business Type Taxonomy Strategy

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Version 1 of the Interactive Showcase will use a curated, predefined `Select` containing approximately 10–15 business types. The taxonomy is intentionally medium-sized, balancing visitor coverage against interface simplicity. The `Select` remains the standard, non-searchable `Select` component already documented for this exact purpose — no Combobox, Autocomplete, or free-form input is permitted in Version 1. Business Type is an independent taxonomy from Services' categories (`DECISIONS.md` WD-037) and any future Portfolio categories (`INFORMATION_ARCHITECTURE.md` §8) — neither is required to align with or mirror it. This decision defines the taxonomy strategy and size only; the actual business-type values are intentionally deferred to a separate decision.
**Reason:** A medium-sized taxonomy was chosen over the alternatives because it remains fully compatible with WD-149's deterministic, React-rendered content-mapping model (each business type requires its own authored mapping, and 10–15 entries stays a bounded, one-time authoring cost rather than an unbounded one) while meaningfully improving real-world visitor coverage over a smaller list. A plain `Select` at this size does not introduce the kind of sprawling choice the Constitution's Decision Fatigue principle warns against, and Combobox/Autocomplete-level complexity remains unnecessary at this scale, consistent with `DECISIONS.md` WD-082 ("not recommended until a real need justifies it"). The approach remains consistent with Simplicity First — a well-organized, moderately-sized list stays obvious and easy to use, which is what Simplicity First actually requires, not the smallest mathematically possible item count.
**Alternatives Considered:** Small taxonomy (~4–8 business types) — the original recommendation; reconsidered and rejected as too thin in coverage for a professional agency whose approved audience spans many distinct business sectors, risking visitors not seeing their own business represented, which itself undermines trust (Reduce Uncertainty, `PROJECT_CONSTITUTION.md` Part 4). Large taxonomy (20+ business types) — rejected because it risks genuine Decision Fatigue, would likely require UI complexity (grouping, search) not currently documented or approved anywhere, and would disproportionately burden WD-149's manual, deterministic content-mapping model. Free-form input — rejected outright as architecturally incompatible with WD-149's Final Decision ("Deterministic Content Mapping"), with `Select`'s own documented purpose as a "categorical-choice control," and with WD-082's caution against Combobox-level complexity.
**Final Decision:** Version 1's Business Type input is a curated, predefined `Select` with approximately 10–15 entries. No Combobox, Autocomplete, or free-form text input is used. The specific list of business-type values is not decided by this entry and remains a separate, still-open decision.
**Impact:** Confirms the taxonomy strategy and size needed before the Business Type `Select` can be implemented; unblocks a future, narrower decision confirming the actual business-type values. Confirms Business Type, Services categories, and future Portfolio categories remain three independent taxonomies with no required alignment between them.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-082 (Combobox/Autocomplete Deferred), WD-037 (Version 1 Official Services); `docs/components/04_INPUTS.md` — Select; `PROJECT_CONSTITUTION.md` Part 4 — Decision Fatigue, Simplicity First; Part 11 — Amendment 1 (Performance Trade-off Rule); `INFORMATION_ARCHITECTURE.md` §8; Business Type Taxonomy Workshop; Business Type Taxonomy Refinement Analysis.

---

### WD-151 — E-commerce Approved as a Version 1 Business Type

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** "E-commerce" is approved as one of the Version 1 Business Type values for the Interactive Showcase's medium curated taxonomy (`DECISIONS.md` WD-150, ~10–15 values). This is an explicit Project Owner business decision describing Weber's intended market positioning — not an inference drawn from `SECURITY_POLICY.md`, `DECISIONS.md` WD-006, or any other existing documentation, none of which is reinterpreted or altered by this entry.
**Reason:** Direct Project Owner instruction. Business Type describes the visitor's own business sector — a self-declared input used solely to select which deterministic content mapping the Interactive Showcase's Preview Frame renders (`DECISIONS.md` WD-149) — and is not a statement about, or expansion of, Weber's own approved service taxonomy (`DECISIONS.md` WD-037). Including "E-commerce" as a sector label a visitor may select is therefore a market-positioning decision distinct from any decision about which technical capabilities Weber's services include.
**Alternatives Considered:** Not documented — this is a direct Project Owner business decision, not a comparison between alternatives arrived at through this project's usual documentation-analysis process.
**Final Decision:** Version 1 uses a medium curated Business Type taxonomy (`DECISIONS.md` WD-150). "E-commerce" is explicitly included among its approved values. Business Types describe the visitor's business sector only; they do not describe, modify, or expand Weber's own service taxonomy (`DECISIONS.md` WD-037), which remains exactly as approved: Website Development, Mobile Applications, Desktop Applications, Templates. This decision introduces no AI, external service, or other change to the React-rendered, deterministic generation mechanism already approved in `DECISIONS.md` WD-149. This decision defines only that "E-commerce" is an allowed Business Type value for the Interactive Showcase — it does not itself finalize the complete list of remaining Version 1 Business Type values, which remains a separate, still-open item.
**Impact:** Confirms one specific Business Type value ahead of the complete list being finalized. Does not require any change to `DECISIONS.md` WD-006, WD-037, WD-149, or WD-150, and does not require any change to `SECURITY_POLICY.md`. No application code is affected, since no Business Type implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-150 (Business Type Taxonomy Strategy), WD-037 (Version 1 Official Services); `PROJECT_CONSTITUTION.md` Part 7 — Decision Authority, Decision Hierarchy (Business Decision → Project Owner).

---

### WD-152 — Business Type Values Approved (Version 1 Final List)

**Category:** Information Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The complete Version 1 Business Type taxonomy for the Interactive Showcase is approved as a fixed list of fourteen values: Restaurants & Cafés, Retail & Shops, Professional Services, Health & Wellness, Beauty & Personal Care, Home & Trade Services, Real Estate, Education & Training, Hospitality & Events, Technology & Software, Automotive, Nonprofit & Community Organizations, E-commerce, and Other.
**Reason:** The list follows WD-150's Medium Curated taxonomy strategy (~10–15 categories), landing at thirteen named sectors plus Other. Business Types describe the visitor's own business sector only and do not modify, expand, or otherwise touch Weber's own approved Services taxonomy (`DECISIONS.md` WD-037). E-commerce is included specifically because of the explicit Project Owner approval already recorded in `DECISIONS.md` WD-151. The list is designed so that every value is realistically supportable by the deterministic, React-rendered content-mapping model already approved in `DECISIONS.md` WD-149; categories that would have required unsupported product capabilities or excessive presentation complexity were intentionally excluded, per the analysis in the Business Type Values Approval Workshop (Phase 2).
**Alternatives Considered:** Manufacturing & Industrial, Financial Services, and a separate Creative & Media/Marketing Agencies category — all considered and excluded from Version 1, either for requiring presentation patterns genuinely different from Weber's existing component set (Manufacturing & Industrial), for risking unsupported compliance/regulatory-style claims a generic deterministic preview can't responsibly produce (Financial Services), or as reasonably absorbed into existing categories for Version 1 pending real demand (Creative & Media/Marketing Agencies). Freelancer was also considered and excluded, remaining an unconfirmed audience segment (`ROUTES.md` §5) with no equivalent to WD-151's explicit approval for E-commerce. A larger taxonomy incorporating some or all of the above was considered and rejected as inconsistent with WD-150's approved Medium Curated sizing.
**Final Decision:** The fourteen values listed in the Description are the complete, approved Version 1 Business Type taxonomy. This decision defines the list of allowed values only. It does not define the deterministic preview/content mapping for any value, does not define "Other"'s fallback behavior, and does not approve Freelancer or any other rejected category — each remains a separate, still-open future decision.
**Impact:** Finalizes the taxonomy question opened by `DECISIONS.md` WD-150 and partially resolved by WD-151. Unblocks future implementation-level decisions (per-value content mapping, "Other" fallback content) without itself performing them. No application code is affected, since no Business Type implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-150 (Business Type Taxonomy Strategy), WD-151 (E-commerce Approved as a Version 1 Business Type), WD-037 (Version 1 Official Services), WD-038 (Learning Platform Confirmed as Version 2); `ROUTES.md` §5 — User Journey (Freelancer, E-commerce Client); Business Type Taxonomy Workshop; Business Type Taxonomy Refinement Analysis; Business Type Values Workshop (Phase 1 and Phase 2); Business Type Values — Final Consistency Check.

---

### WD-168 — Why Weber Trust Claims Wording Alignment Approved

**Category:** Information Architecture
**Date:** 2026-07-19
**Status:** Approved
**Description:** Three of the six Home page "Why Weber" items (`DECISIONS.md` WD-041) are reworded to remove implied concrete commitments not backed by any documented policy, while preserving WD-041's approved six themes (Guarantees, Quality, Performance, Maintenance, Professionalism, Long-term support) exactly as approved:
1. "Clear guarantees on every project" → "Clear expectations on every project"
2. "Ongoing maintenance included" → "Continued support after launch"
3. "Fast, reliable performance" → "Built with performance in mind"
The remaining three items — "Consistent, professional quality," "A transparent, professional process," and "Long-term support after launch" — are unchanged.
**Reason:** WD-041 approved the section's six themes but explicitly left "visual design and exact copy... not decided by this entry." A documentation search across the entire project confirms no guarantee policy, no maintenance scope/duration/cost policy, and no performance budget or target exists anywhere (`PERFORMANCE_GUIDE.md` explicitly states none has been chosen). "Guarantees" and "included" are concrete, checkable claims a client could reasonably expect specific, enforceable terms behind; "Ongoing maintenance included" also runs ahead of `DECISIONS.md` WD-006's consultation-first pricing model by pre-declaring a bundled inclusion before any consultation occurs. "Fast, reliable performance" states an already-achieved, measurable outcome the project has no defined way to verify. Each replacement shifts the wording into the same safe general or aspirational register already used successfully elsewhere on the same page ("Consistent, professional quality," "A transparent, professional process"), preserving the trust-building intent WD-041 approved without implying a specific, undocumented commitment. Full analysis recorded in the Why Weber Trust Claims Workshop (Phase 1).
**Alternatives Considered:** Leaving the wording unchanged — rejected, since it leaves three claims without documented backing indefinitely. Defining actual guarantee, maintenance, and performance policies to support the original wording — rejected as out of scope for a wording-alignment decision; would require separate, larger pricing/scope/performance decisions not requested here. Rewording all six items — rejected; the other three items were already independently assessed as safe general or aspirational statements requiring no change.
**Final Decision:** The three replacements listed in the Description are approved and reflected in `src/app/page.tsx`. This decision changes Home page copy only. It does not modify WD-041, does not create any guarantee policy, maintenance policy, pricing model, package, or service definition, and does not alter any architecture, component, or styling.
**Impact:** Resolves the three concrete-commitment findings from the Why Weber Trust Claims Workshop (Phase 1) without altering WD-041's approved scope or introducing any new business commitment. `src/app/page.tsx` updated accordingly.
**References:** `DECISIONS.md` WD-041 ("Why Weber" Section Approved), WD-006 (Consultation-First Pricing); `PERFORMANCE_GUIDE.md` §2; Why Weber Trust Claims Workshop (Phase 1).

---

### WD-169 — Why Weber Post-Launch Messaging Refinement Approved

**Category:** Information Architecture
**Date:** 2026-07-19
**Status:** Approved
**Description:** The Home page "Why Weber" item introduced by `DECISIONS.md` WD-168, "Continued support after launch," is replaced with "A lasting partnership." All other Why Weber items, including "Long-term support after launch," are unchanged.
**Reason:** "Continued support after launch" and "Long-term support after launch" both use the identical noun ("support") and identical qualifying phrase ("after launch"), differing only in modifier — a distinction visitors are unlikely to perceive as two different benefits rather than one repeated statement. This collapses two of WD-041's six approved themes (Maintenance and Long-term support) into what reads as a single idea, working against WD-041's own intent of six distinct trust messages. "A lasting partnership" restores that distinctness: it communicates an ongoing client relationship rather than a specific service promise, implies no maintenance, no bundled or free services, no defined duration, no pricing, and no warranty — preserving WD-168's removal of undefined maintenance and guarantee commitments exactly as approved. Full analysis recorded in the Why Weber Post-Launch Messaging Workshop (Phase 1).
**Alternatives Considered:** Leaving both items unchanged — rejected, per the semantic-overlap and visitor-interpretation analysis in the Post-Launch Messaging Workshop. Revising "Long-term support after launch" instead — rejected in favor of revising the newer WD-168 item, since "Long-term support" is WD-041's own literal theme name and the more natural item to preserve exactly as originally worded; the overlap was introduced by WD-168's replacement, not by the original item, so the replacement is the more appropriate one to refine further.
**Final Decision:** "Continued support after launch" is replaced with "A lasting partnership" in `src/app/page.tsx`. This decision refines wording only. It does not modify WD-041, does not modify or invalidate any part of WD-168 beyond this single string, and does not create any maintenance policy, support policy, pricing model, warranty, guarantee, or service commitment.
**Impact:** Restores six distinct Why Weber trust themes as WD-041 intended, closing the redundancy identified in the Post-Launch Messaging Workshop. `src/app/page.tsx` updated accordingly.
**References:** `DECISIONS.md` WD-041 ("Why Weber" Section Approved), WD-168 (Why Weber Trust Claims Wording Alignment Approved); Why Weber Post-Launch Messaging Workshop (Phase 1).

---

### WD-170 — Desktop Applications Service Copy Refinement Approved

**Category:** Information Architecture
**Date:** 2026-07-19
**Status:** Approved
**Description:** The Home page Desktop Applications Service Card description is replaced. This is a wording refinement only.
Before: "Desktop-native software built for internal tools and desktop-first workflows."
After: "A practical option that gives your business a smoother way to get things done."
**Reason:** The prior wording was the only one of the four Service Card descriptions written in technical/implementation register ("Desktop-native," "internal tools," "desktop-first workflows") and framed around what Weber builds rather than what the client gains, breaking tone consistency with Website Development, Mobile Applications, and Templates. The replacement expresses the already-approved business-outcome positioning ("smoother operations") using the same sentence rhythm, grammatical structure, and plain vocabulary already established by the other three cards, so all four now read as though written by the same author under the same design philosophy. Full analysis recorded across the Desktop Applications Service Copy Alignment Workshop (Phase 1), its Phase 2 candidate comparison, the Business Outcome Workshop (Final Strategy Phase), and the Desktop Applications Final Copy Workshop.
**Alternatives Considered:** Nine other candidate sentences and multiple alternative positioning angles (internal efficiency, operational control, productivity, organization, and others) were generated and critically compared across the referenced workshops; each was found weaker on at least one of consistency, clarity, memorability, expectation risk, or brand-voice alignment. Full comparative reasoning is recorded in those workshops rather than repeated here.
**Final Decision:** The replacement description above is approved for the Desktop Applications Service Card in `src/app/page.tsx`. This decision changes wording only. It does not change the Services architecture, the four approved services (`DECISIONS.md` WD-037), layouts, styling, components, or navigation, and does not introduce any new promise, measurable claim, or technical terminology. No other Service Card is affected.
**Impact:** Restores tonal and structural consistency across all four Home page Service Card descriptions. `src/app/page.tsx` updated accordingly.
**References:** `DECISIONS.md` WD-037 (Version 1 Official Services), WD-168 (Why Weber Trust Claims Wording Alignment Approved), WD-169 (Why Weber Post-Launch Messaging Refinement Approved); Desktop Applications Service Copy Alignment Workshop (Phase 1); Desktop Applications Service Copy Refinement Workshop (Phase 2); Desktop Applications Messaging Strategy Workshop (Phase 1); Desktop Applications Business Outcome Workshop (Final Strategy Phase); Desktop Applications Final Copy Workshop.

---

### WD-171 — Services Navigation CTA Alignment Approved

**Category:** Information Architecture
**Date:** 2026-07-19
**Status:** Approved
**Description:** The entry-point wording on each of the four Home page Service Cards is replaced. This is a wording refinement only.
Visible text — Before: "Learn more." After: "View all services."
Accessible name — Before: "Learn more about {service name}." After: "View all services, including {service name}."
**Reason:** Every Service Card's entry point pointed to `/services` while its accessible name promised service-specific information ("Learn more about Mobile Applications") that the shared Version 1 listing page (`DECISIONS.md` WD-146) does not deliver — a real, demonstrated expectation mismatch between what the link promised and what its destination contained, confirmed by tracing the actual visitor journey rather than by assumption. "View all services" accurately and literally describes the shared listing destination, follows established navigation-labeling convention (a link's accessible name should describe its destination or action, clear even out of context), and does not imply a dedicated page for any single service. Retaining a per-card accessible-name suffix ("including {service name}") preserves each card's required accessible-name uniqueness (`docs/components/06_DATA_DISPLAY.md` — Service Card's own documented accessibility requirement) without reintroducing the original overpromise, since "including" — unlike an "other services" framing considered and rejected during analysis — correctly and unambiguously includes the current card's own service rather than contradicting it. Full analysis recorded across the Services Navigation & Learn More Strategy Workshop (Phase 1 and Phase 2), the Services Navigation Wording Workshop (Final Copy Phase), and the Services Navigation CTA Validation Workshop and Confirmation.
**Alternatives Considered:** Leaving the wording unchanged — rejected per the confirmed mismatch. Activating Service Detail Layout (`DECISIONS.md` WD-112) to give each card a genuinely dedicated destination — rejected as out of Version 1 scope, per `DECISIONS.md` WD-146. Removing the entry point entirely — considered and rejected in favor of keeping a working, accurately-worded link. "See what else we offer" and several other candidates — generated, compared, and set aside in favor of "View all services" for more precisely matching the actual destination and following standard navigation-labeling convention more directly; full comparative reasoning recorded in the referenced workshops rather than repeated here.
**Final Decision:** The wording changes described above are approved for all four Service Card entry points in `src/components/data-display/service-card.tsx`. This decision changes wording only. It does not change `/services`, Service Card's or Service Detail Layout's architecture, routing, component structure, styling, spacing, animations, icons, card layout, or typography, and does not introduce any new promise, measurable claim, or technical terminology.
**Impact:** Resolves the navigation-expectation mismatch identified in the Services Navigation & Learn More Strategy Workshop, Phase 1, without altering any approved architecture. `src/components/data-display/service-card.tsx` updated accordingly.
**References:** `DECISIONS.md` WD-037 (Version 1 Official Services), WD-112 (Service Detail Layout Approved), WD-146 (Services Page Strategy Approved); `docs/components/06_DATA_DISPLAY.md` — Service Card; Services Navigation & Learn More Strategy Workshop (Phase 1, Phase 2); Services Navigation Wording Workshop (Final Copy Phase); Services Navigation CTA Validation Workshop; Services Navigation CTA Confirmation.

---

### WD-153 — Interactive Showcase Preview Architecture: Hybrid Pattern System

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Version 1 of the Interactive Showcase's Preview architecture uses a Hybrid Pattern System. The Preview is built from a small, reusable set of Design System-based patterns, assembled entirely from Weber's existing component library. Business Types do not each receive a separate, custom-built page, and the Preview does not use one single, identical universal layout with only text replaced. Each of the fourteen approved Business Types (`DECISIONS.md` WD-152) maps deterministically to one reusable pattern plus its own content configuration.
**Reason:** A fully custom layout per Business Type was rejected as directly contradicting "Build Systems, Not Pages" (`PROJECT_CONSTITUTION.md` Part 9) — it would mean building fourteen independent, one-off pages rather than one coherent system — and creates an unbounded, linearly-growing maintenance burden inconsistent with the bounded, one-time content-mapping cost `DECISIONS.md` WD-149 was designed around. A single universal layout with only content changes was rejected as risking a generic, undifferentiated preview that undercuts the elevated design priority `DECISIONS.md` WD-047 and `PROJECT_CONSTITUTION.md`'s Interactive Showcase Philosophy already place on the Preview step specifically — the requirement that a visitor "can actually imagine my business looking like this." A small, shared, reusable set of patterns preserves genuine differentiation between Business Types while keeping the system bounded, maintainable, and structurally consistent, directly serving Build Systems, Not Pages, Simplicity First, and the Constitution's caution against over-engineering. Full comparative analysis recorded in the Interactive Showcase Preview Content Mapping Workshop (Phase 1).
**Alternatives Considered:** Fully custom layout per Business Type (Strategy A) — rejected per Reason above. One universal layout with content-only variation (Strategy B) — rejected per Reason above.
**Final Decision:** The Preview architecture is a Hybrid Pattern System: a small, shared, reusable set of Design System-based patterns, with each Business Type deterministically assigned to one pattern plus its own content. This decision approves the architecture only. It explicitly leaves unresolved: the number of Preview Patterns, the Business Type → Pattern mapping, the exact preview content for any Business Type, and component implementation details — each remains a separate, still-open future decision.
**Impact:** Establishes the structural approach the Preview Frame (`docs/components/08_MARKETING.md`) will be implemented against, consistent with the deterministic, React-rendered generation mechanism already approved in `DECISIONS.md` WD-149. Unblocks a future decision defining the specific patterns and the Business Type → Pattern mapping, without itself performing that work. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-150 (Business Type Taxonomy Strategy), WD-152 (Business Type Values Approved), WD-047 (Interactive Showcase Interaction Journey); `PROJECT_CONSTITUTION.md` Part 3 — Interactive Showcase Philosophy, Part 9 — Build Systems Not Pages; `docs/components/08_MARKETING.md` — Preview Frame; Interactive Showcase Preview Content Mapping Workshop (Phase 1).

---

### WD-154 — Interactive Showcase Preview Pattern System: Four Patterns Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** Version 1 of the Interactive Showcase's Hybrid Pattern System (`DECISIONS.md` WD-153) consists of exactly four reusable Preview Patterns:
1. **Visual/Grid Pattern** — for businesses where visual browsing is central; uses reusable Design System elements such as Card, Grid, and Aspect Ratio.
2. **Trust/Credibility Pattern** — for businesses where expertise, trust, care, or credibility drives conversion; uses Hero, Features, Benefits, and CTA structures.
3. **Offering-Forward Pattern** — for businesses centered around a primary experience, service, or offering; uses a Hero-led presentation with supporting sections.
4. **Neutral/Fallback Pattern** — reserved for the Other category and any unsupported cases; ensures a deterministic output exists for every approved Business Type (`DECISIONS.md` WD-152).
**Reason:** Four patterns give each naturally distinct "shopping mode" a genuinely differentiated presentation without drifting toward a one-off page per Business Type, and without collapsing into a single generic layout. This count sits at the bounded, extensible end of what WD-153 approved — enough differentiation to serve visitor confidence, while keeping Version 1's build effort proportionate and leaving room to add or refine patterns later without restructuring. Every pattern is built entirely from Weber's existing Design System components; none introduces a new component. Full comparative analysis recorded in the Interactive Showcase Preview Pattern Mapping Workshop (Phase 1).
**Alternatives Considered:** A pattern per Business Type (fourteen patterns) — rejected, already excluded by `DECISIONS.md` WD-153. A single universal pattern — rejected, already excluded by `DECISIONS.md` WD-153. A larger pattern library (five to six or more patterns) — considered and set aside for Version 1 as disproportionate to current need, consistent with Simplicity First and avoiding over-engineering; may be reconsidered later if real Business Type coverage shows a genuine gap none of the four patterns fit.
**Final Decision:** The four Preview Patterns described above are approved for Version 1. This decision defines the patterns themselves only. It explicitly leaves unresolved: the Business Type → Pattern mapping, the exact preview content for any Business Type or pattern, and component implementation details — each remains a separate, still-open future decision.
**Impact:** Completes the pattern-count and pattern-category question `DECISIONS.md` WD-153 left open. Unblocks a future decision assigning each of the fourteen approved Business Types (`DECISIONS.md` WD-152) to one of these four patterns, without itself performing that assignment. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-152 (Business Type Values Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System); `PROJECT_CONSTITUTION.md` Part 9 — Build Systems, Not Pages; `docs/components/08_MARKETING.md` — Preview Frame; Interactive Showcase Preview Pattern Mapping Workshop (Phase 1).

---

### WD-155 — Business Type → Preview Pattern Mapping Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The deterministic Version 1 mapping between each of the fourteen approved Business Types (`DECISIONS.md` WD-152) and the four approved Preview Patterns (`DECISIONS.md` WD-154) is approved as follows:
- **Visual/Grid Pattern:** Retail & Shops, Real Estate, Hospitality & Events, Automotive, E-commerce.
- **Trust/Credibility Pattern:** Professional Services, Health & Wellness, Beauty & Personal Care, Home & Trade Services, Education & Training, Nonprofit & Community Organizations.
- **Offering-Forward Pattern:** Restaurants & Cafés, Technology & Software.
- **Neutral/Fallback Pattern:** Other.
**Reason:** The mapping is based on visitor expectation and each sector's natural conversion presentation style. Retail & Shops, Real Estate, Hospitality & Events, Automotive, and E-commerce all sell on browsing multiple visually distinct items (products, listings, venues, vehicles), matching Visual/Grid. Professional Services, Health & Wellness, Beauty & Personal Care, Home & Trade Services, Education & Training, and Nonprofit & Community Organizations all convert primarily on confidence in the provider — expertise, care, or mission — matching Trust/Credibility; Education & Training specifically remains Trust/Credibility because confidence and expertise are primary for Weber's target businesses. Restaurants & Cafés and Technology & Software both center on one primary experience or offering rather than a browsable collection or a general trust pitch, matching Offering-Forward; Technology & Software specifically remains Offering-Forward because product-focused presentation aligns with how software/product websites are conventionally presented. Automotive remains Visual/Grid because inventory browsing is the primary sector expectation, notwithstanding that the label could also describe a repair/service-led business. Hospitality & Events is included in Visual/Grid on the same reasoning as Real Estate — venues, rooms, and event spaces are naturally presented as a browsable visual collection — resolving a gap identified during finalization, where this Business Type was initially omitted from all four groups before being confirmed for Visual/Grid. Full comparative analysis recorded in the Interactive Showcase Business Type → Preview Pattern Mapping Workshop.
**Alternatives Considered:** Automotive as Trust/Credibility (repair/service framing) — considered, set aside in favor of the more common visual/inventory association with the sector label. Education & Training as Visual/Grid (course-catalog framing) — considered, set aside in favor of a trust-led framing more consistent with small/local training businesses. Technology & Software as Trust/Credibility (proof/case-study framing) — considered, set aside in favor of the Hero-led, product-focused framing conventional for software marketing sites. Hospitality & Events as Trust/Credibility or Offering-Forward — considered during finalization; set aside in favor of Visual/Grid, consistent with Real Estate's reasoning.
**Final Decision:** The mapping above is approved and complete — all fourteen Business Types are assigned to exactly one Preview Pattern, with no Business Type left unmapped. This decision defines the mapping only. It explicitly leaves unresolved: the exact preview content for any Business Type or pattern, preview copy, component implementation details, and the Other/Neutral-Fallback pattern's actual fallback content — each remains a separate, still-open future decision.
**Impact:** Completes the deterministic Business Type → Pattern assignment `DECISIONS.md` WD-153 and WD-154 left open, satisfying WD-149's requirement that every approved Business Type resolve to a deterministic output. Unblocks future implementation-level decisions (per-pattern and per-type content, component implementation) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-152 (Business Type Values Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved); Interactive Showcase Business Type → Preview Pattern Mapping Workshop.

---

### WD-156 — Visual/Grid Preview Content Strategy Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** This decision approves the content strategy for the Visual/Grid Preview Pattern (`DECISIONS.md` WD-154), mapped to Retail & Shops, Real Estate, Hospitality & Events, Automotive, and E-commerce (`DECISIONS.md` WD-155). The approved strategy is concept-only placeholder cards inside the Visual/Grid pattern's Card + Grid + Aspect Ratio composition. Cards must be clearly presented as examples/concepts, not real business data — no real products, listings, properties, projects, customers, results, testimonials, or fabricated business information of any kind. Placeholder content must be generic and reusable across all five Visual/Grid Business Types, using neutral labels such as "Sample Item" or equivalent, and generic imagery/icons/placeholders only. No fake product names, prices, locations, ratings, reviews, availability, or specifications are created. The grid's purpose is to demonstrate layout and experience, not to represent actual inventory.
**Reason:** Aligns with the honesty principles already established in `DECISIONS.md` WD-141 and WD-147 — real absence of content is handled transparently rather than fabricated. Preserves WD-154's approved Card + Grid + Aspect Ratio structure for this pattern rather than reworking it. Supports the "I can imagine my business looking like this" goal behind WD-153's Hybrid Pattern System by keeping the grid's visual rhythm intact, rather than removing it. Avoids Portfolio confusion by keeping the Preview clearly distinct from real completed work. Maintains WD-149's deterministic rendering model, since one small, generic, reusable placeholder set serves all five mapped Business Types rather than requiring per-type fabricated content. Full comparative analysis recorded in the Interactive Showcase Visual/Grid Content Strategy Workshop.
**Alternatives Considered:** Fully abstract generic visual blocks with no item framing at all — considered and set aside as more conservative than the WD-141/WD-147 precedent requires, and as weaker support for "Transform imagination into confidence" given the resulting grid could read as unfinished. Removing the Card/Grid/Aspect Ratio composition entirely and redesigning the pattern without cards — considered and set aside, since it would contradict WD-154's already-approved Final Decision rather than resolve a content question within it; treated as out of scope for a content-strategy decision.
**Final Decision:** The Visual/Grid Preview Pattern uses concept-only placeholder cards, clearly labeled as examples, built from generic, reusable content shared across all five mapped Business Types. This decision approves the content strategy only. It explicitly does not decide: exact card copy, exact placeholder labels, visual assets, component implementation details, or the content strategy for the Trust/Credibility, Offering-Forward, or Neutral/Fallback patterns — each remains a separate, still-open future decision.
**Impact:** Resolves the Visual/Grid content gap identified during the Preview Content Specification Workshop. Unblocks future implementation-level decisions (exact placeholder copy, visual assets) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-141 (Portfolio Home Treatment Before Case Studies Exist), WD-147 (Portfolio Page Version 1 Strategy Approved), WD-149 (Interactive Showcase Generation Strategy Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved); Interactive Showcase Visual/Grid Content Strategy Workshop.

---

### WD-157 — Trust/Credibility, Offering-Forward, and Neutral/Fallback Content Strategies Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** This decision approves the content strategy for the remaining three Interactive Showcase Preview Patterns (`DECISIONS.md` WD-154), completing the set WD-156 began with Visual/Grid:
- **Trust/Credibility Pattern** (Professional Services, Health & Wellness, Beauty & Personal Care, Home & Trade Services, Education & Training, Nonprofit & Community Organizations — `DECISIONS.md` WD-155): generic, aspirational, lightly sector-flavored value-proposition statements, mirroring the register Weber's own "Why Choose Weber" Home section already uses (e.g., "Reliable expertise," "Personalized care") — never specific, unverifiable credentials or metrics (e.g., years of experience, client counts, certifications).
- **Offering-Forward Pattern** (Restaurants & Cafés, Technology & Software — `DECISIONS.md` WD-155): one generic, aspirational, single-offering Hero headline plus a short supporting line per Business Type — never a specific invented menu item, dish, feature, or technical claim.
- **Neutral/Fallback Pattern** (Other — `DECISIONS.md` WD-155): a single, maximally generic, sector-agnostic content set built around Weber's core Website Development value proposition, with no sector-specific flavoring of any kind.

All four Preview Patterns (Visual/Grid per WD-156, plus the three above) share one cross-pattern requirement: every rendered Preview must display an explicit "Concept Preview" label (or equivalent wording), identifying the content as an illustrative concept rather than a real, completed project or a real analysis of the visitor's business.
**Reason:** Extends the same generic-only, no-fabrication content boundary already approved for Visual/Grid (`DECISIONS.md` WD-156) to the remaining three patterns, keeping the full content strategy internally consistent rather than solving each pattern in isolation. The Trust/Credibility register is directly grounded in an existing, already-approved precedent (Weber's own "Why Choose Weber" section), rather than an invented new tone. The Concept Preview label is added because generic, non-fabricated content alone does not fully address two narrower risks identified in the Interactive Showcase Preview Content Specification Workshop (Phase 2): a visitor could still reasonably infer that a polished, personalized-feeling preview reflects real analysis of their business, when `DECISIONS.md` WD-149 explicitly uses no AI or external analysis; and a sufficiently polished preview could otherwise be mistaken for real completed work, which `DECISIONS.md` WD-005 requires the Interactive Showcase to remain clearly distinct from at all times. A single, shared, reusable label closes both gaps at minimal cost across all four patterns rather than per-pattern.
**Alternatives Considered:** Specific, invented credentials, metrics, menu items, or product features for Trust/Credibility and Offering-Forward — rejected outright as fabricated business content, inconsistent with `DECISIONS.md` WD-141, WD-147, and WD-156. Sector-flavored content for the Neutral/Fallback pattern — rejected, since "Other" carries no known sector and flavoring it would misrepresent an unknown business. Relying on generic content boundaries alone, without an explicit Concept Preview label — considered and rejected, since it leaves the mechanism-honesty and Portfolio-confusion risks identified in the Phase 2 workshop unaddressed.
**Final Decision:** The three content strategies described above are approved for the Trust/Credibility, Offering-Forward, and Neutral/Fallback patterns, respectively, completing the content-strategy set alongside `DECISIONS.md` WD-156's Visual/Grid approval. An explicit "Concept Preview" label is approved as a shared, cross-pattern requirement applying to all four patterns. This decision approves content strategy and the disclaimer requirement only. It explicitly leaves open: exact copy for any pattern or Business Type, the exact wording and placement of the Concept Preview label, any visual assets, and component implementation details — each remains a separate, still-open future decision.
**Impact:** Completes the Version 1 Preview content-strategy question across all four patterns (`DECISIONS.md` WD-153, WD-154, WD-155, WD-156). Establishes the Concept Preview label as a binding cross-pattern requirement for future implementation. Unblocks future implementation-level decisions (exact copy, label wording, visual assets) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-005 (Interactive Showcase as a Distinct, Coexisting Feature), WD-141 (Portfolio Home Treatment Before Case Studies Exist), WD-147 (Portfolio Page Version 1 Strategy Approved), WD-149 (Interactive Showcase Generation Strategy Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-156 (Visual/Grid Preview Content Strategy Approved); Interactive Showcase Preview Content Specification Workshop (Phase 2).

---

### WD-159 — Interactive Showcase Preview Data Model: Pattern-Centric Architecture

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase Preview data model is approved as pattern-centric. Business Type records provide content values only. Pattern records own structure — schema shape, section order, and component selection. Content is static and pre-authored, never generated at runtime. Company Name is the only personalization value supplied by user input; Business Type selection functions only as a lookup key. The "Concept Preview" label (`DECISIONS.md` WD-157) is owned by the Global Showcase UI, not by any individual pattern or Business Type. CTA ownership — structural presence and placement — belongs to the Pattern layer. Visual assets are shared Design System assets, referenced by Pattern configuration rather than owned by Business Type data.
**Reason:** A pattern-centric model is the most direct, faithful data-layer continuation of the architecture already approved in `DECISIONS.md` WD-153 (Hybrid Pattern System), WD-154 (four Preview Patterns), and WD-155 (Business Type → Pattern mapping) — it structurally enforces the same reuse and consistency those decisions already established at the component level, rather than merely hoping the data layer follows suit. Confining Business Type records to content values only, with no structural authority, prevents the data model from silently reintroducing a one-page-per-Business-Type outcome even after WD-153 already rejected that approach architecturally. Keeping content static and pre-authored, with Company Name as the sole dynamic personalization input, preserves WD-149's deterministic rendering requirement exactly. Global ownership of the Concept Preview label and shared ownership of assets both extend the honesty and consistency principles already established in `DECISIONS.md` WD-141, WD-147, WD-156, and WD-157 — per-type asset or label ownership would risk exactly the misleading-personalization and Portfolio-confusion risks those decisions were written to prevent. Full comparative analysis recorded in the Interactive Showcase Preview Data Model Workshop (Phase 2).
**Alternatives Considered:** Separate data objects per Business Type — rejected as structurally weaker on maintainability, future scalability, and design consistency, and as failing to express the shared-pattern reuse WD-153 already approved. A fully configurable component/page-builder-style model — rejected as disproportionate to Version 1's bounded need, in tension with Simplicity First and the Performance Trade-off Rule, and as reopening flexibility WD-153/WD-154 already deliberately closed off. Per-Business-Type asset ownership — rejected per WD-156's own requirement that Visual/Grid assets remain generic and reusable across types. Business-Type-level CTA copy variation — rejected as ungrounded in any existing decision; WD-007's partnership-toned CTA language already applies universally.
**Final Decision:** The Interactive Showcase Preview data model is pattern-centric, with layer responsibilities as described in the Description above. This decision approves the data model architecture only. It explicitly leaves unresolved: exact schema field names and types, component implementation details, the Company Name sanitization/validation mechanism, technical sourcing of the shared asset library, and any future rules for CTA copy variation by pattern — each remains a separate, still-open future decision.
**Impact:** Establishes the structural approach the Preview Frame's data layer will be implemented against, consistent with `DECISIONS.md` WD-149's deterministic rendering requirement and WD-153's Hybrid Pattern System. Unblocks future implementation-level decisions (schema definition, sanitization mechanism, asset sourcing) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-005 (Interactive Showcase as a Distinct, Coexisting Feature), WD-006 (Consultation-First Pricing), WD-007 (Partnership-Toned Calls to Action), WD-010 (Content/Component Separation Rule), WD-141 (Portfolio Home Treatment Before Case Studies Exist), WD-147 (Portfolio Page Version 1 Strategy Approved), WD-149 (Interactive Showcase Generation Strategy Approved), WD-152 (Business Type Values Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-156 (Visual/Grid Preview Content Strategy Approved), WD-157 (Trust/Credibility, Offering-Forward, and Neutral/Fallback Content Strategies Approved); Interactive Showcase Preview Data Model Workshop (Phase 2).

---

### WD-160 — Interactive Showcase Preview Schema Structure Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase Preview schema structure is approved following the Pattern/Global ownership approach (Approach 2) identified in the Interactive Showcase Preview Schema Specification Workshop (Phase 1). Schema ownership is pattern-centric: Business Type records supply only the specific content variations each pattern's schema calls for, never structure. Concretely:
- **Visual/Grid:** cards are Pattern-owned, shared, generic placeholders — not supplied or varied per Business Type.
- **Trust/Credibility:** value propositions (`valueProps`) are Business-Type-supplied content variations.
- **Offering-Forward:** headline and supporting-line content are Business-Type-supplied.
- **Neutral/Fallback:** entirely Pattern-owned; the "Other" Business Type requires no content payload beyond its Pattern reference.
- **Concept Preview label:** owned by the Global Showcase UI, not any pattern or Business Type.
- **CTA:** a single shared Global reference, not pattern- or Business-Type-specific.
- **Company Name handling:** a shared mechanism used identically across all four patterns.
- **Assets:** shared Design System references, not owned by Business Type data.
**Reason:** Approach 2 was selected over separately supplying every field per Business Type (Approach 1) and over allowing per-Business-Type overrides of shared elements (Approach 3), per the comparison in the Schema Specification Workshop. It is the most direct, literal formalization of what `DECISIONS.md` WD-156, WD-157, and WD-159 already approved — it introduces no new tradeoff, only makes explicit which fields are genuinely Business-Type-varying (`valueProps`, Offering-Forward's headline/supporting line) versus genuinely shared/fixed (Visual/Grid's cards, the Concept Preview label, the CTA, Neutral/Fallback's content). Keeping shared elements Pattern- or Global-owned rather than Business-Type-supplied prevents exactly the drift and re-fragmentation risk WD-159's pattern-centric architecture was approved to close.
**Alternatives Considered:** Approach 1 (maximal Business Type ownership, including cards and CTA) — rejected as directly risking re-fragmentation of WD-156's "generic and reusable across all Visual/Grid types" requirement, since independently-authored card sets could drift apart over time. Approach 3 (hybrid ownership with optional per-Business-Type overrides of shared elements) — rejected as reopening the one-off-page-per-type risk WD-153/WD-159 were written to close, and as unjustified complexity relative to Simplicity First.
**Final Decision:** The schema structure described above is approved for Version 1. This decision approves schema ownership and structure only. It explicitly leaves unresolved: exact field names and types, the number of Visual/Grid placeholder cards, exact CTA wording, the asset identifier scheme, and the Company Name templating implementation — each remains a separate, still-open future decision.
**Impact:** Completes the schema-ownership question left open by `DECISIONS.md` WD-159, formalizing which fields are Business-Type-supplied versus Pattern/Global-owned across all four Preview Patterns. Unblocks future implementation-level decisions (exact field definitions, card count, CTA copy, asset scheme) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-156 (Visual/Grid Preview Content Strategy Approved), WD-157 (Trust/Credibility, Offering-Forward, and Neutral/Fallback Content Strategies Approved), WD-159 (Interactive Showcase Preview Data Model: Pattern-Centric Architecture); Interactive Showcase Preview Schema Specification Workshop (Phase 1).

---

### WD-161 — Interactive Showcase Preview Copy Specification Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase Preview copy specification is approved, resolving the open items left by `DECISIONS.md` WD-160:
1. **Concept Preview label:** the global Showcase label is officially "Concept Preview," owned by the Global Preview UI layer, not by any Pattern or Business Type.
2. **Visual/Grid Pattern:** placeholder card count is fixed at 3 cards, built from shared, Pattern-owned placeholder content representing examples only — never real products, listings, projects, or inventory. Each Visual/Grid card must include an "Example" tag using the existing `Tag` component as an additional, item-level signal that its content is illustrative.
3. **Trust/Credibility Pattern:** each preview uses exactly 3 value propositions — generic, aspirational, and layout-focused, never claiming real business achievements, metrics, certifications, clients, or experience.
4. **CTA:** the shared CTA phrase is "Let's discuss your project," targeting `/contact`. The CTA is globally shared, not Pattern- or Business-Type-specific.
5. **Copy principles:** Preview copy must describe what a website concept could present, never claim or imply AI analysis, research, or personalization beyond literal Company Name insertion, and must never claim knowledge of the visitor's actual business. Company Name is inserted literally into approved templates. No fake projects, testimonials, customer claims, results, statistics, or business facts are permitted anywhere in Preview copy.
**Reason:** These choices complete the specification work carried out across the Interactive Showcase Preview Copy Specification Workshop (Phase 1) and its follow-up confirmation. "Concept Preview" was chosen over alternative wordings because it reuses `DECISIONS.md` WD-157's own term rather than introducing a new synonym requiring separate approval. Three Visual/Grid cards and three Trust/Credibility value propositions were chosen as the smallest count that still feels substantive in a compact preview, minimizing content-authoring and maintenance burden per `DECISIONS.md` WD-149's deterministic model. The per-card "Example" tag was added because the page-level Concept Preview label alone does not fully prevent an individual card from being mistaken for real inventory. "Let's discuss your project" was selected from `DECISIONS.md` WD-007's three approved phrases as the best match for the Conversion step's "continuing an already-started conversation" framing (`INFORMATION_ARCHITECTURE.md` §7, WD-047). The copy principles directly extend the honesty and non-fabrication requirements already established in `DECISIONS.md` WD-141, WD-147, WD-156, and WD-157 to the specific risk of implying real analysis or knowledge of the visitor's business, which `DECISIONS.md` WD-149's no-AI, deterministic mechanism makes categorically false if implied.
**Alternatives Considered:** Alternative Concept Preview wordings ("Website Concept," "Example Preview") — set aside in favor of reusing WD-157's existing term. A larger or smaller Visual/Grid card count and Trust/Credibility value-proposition count — evaluated in the Copy Specification Workshop and set aside in favor of 3 in each case, balancing substance against compact-preview scanability and content-authoring burden. The other two WD-007 CTA phrases ("Request your website," "Tell us about your business") — set aside as weaker fits for the Conversion step's specific continuing-the-conversation framing. Omitting per-card "Example" tags and relying on the page-level label alone — set aside as insufficient defense against item-level confusion with real content.
**Final Decision:** The five specification items described above are approved for Version 1. This decision approves copy specification and structural counts only. It explicitly leaves open: exact final copy for each of the fourteen Business Types, exact schema field names/types, asset identifiers, and technical implementation details — each remains a separate, still-open future decision.
**Impact:** Completes the copy-specification and structural-count questions left open by `DECISIONS.md` WD-156, WD-157, and WD-160. Establishes binding constraints (card/value-proposition counts, CTA phrase and destination, the Concept Preview label, and the copy-honesty principles) that all future per-Business-Type copy must comply with. Unblocks the future decision(s) authoring exact copy for each Business Type, without itself performing that authoring. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-005 (Interactive Showcase as a Distinct, Coexisting Feature), WD-007 (Partnership-Toned Calls to Action), WD-047 (Interactive Showcase Interaction Journey), WD-141 (Portfolio Home Treatment Before Case Studies Exist), WD-147 (Portfolio Page Version 1 Strategy Approved), WD-149 (Interactive Showcase Generation Strategy Approved), WD-152 (Business Type Values Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-156 (Visual/Grid Preview Content Strategy Approved), WD-157 (Trust/Credibility, Offering-Forward, and Neutral/Fallback Content Strategies Approved), WD-159 (Interactive Showcase Preview Data Model: Pattern-Centric Architecture), WD-160 (Interactive Showcase Preview Schema Structure Approved); `docs/components/06_DATA_DISPLAY.md` — Tag; `INFORMATION_ARCHITECTURE.md` §7; Interactive Showcase Preview Copy Specification Workshop (Phase 1).

---

### WD-162 — Interactive Showcase Preview Data Schema Finalized

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase Preview data schema is finalized, consolidating `DECISIONS.md` WD-159, WD-160, and WD-161 into one final conceptual structure:
1. **Closed Pattern Set:** the Preview system uses exactly four patterns — Visual/Grid, Trust/Credibility, Offering-Forward, Neutral/Fallback. No fifth value is valid.
2. **Business Type data ownership:** Business Types provide only the approved content values assigned to their mapped pattern (`DECISIONS.md` WD-155). They do not own layout, components, section structure, or shared content.
3. **Pattern ownership:** Patterns own schema structure, section order, component selection, and any pattern-specific fixed content.
4. **Global ownership:** the Global Showcase layer owns the "Concept Preview" label, the shared CTA record ("Let's discuss your project" → `/contact`), and the Company Name insertion mechanism.
5. **Approved pattern content requirements:**
   - **Visual/Grid:** required — `headline`; optional — `supportingText`; Pattern-owned — 3 placeholder cards, "Example" tags, shared assets.
   - **Trust/Credibility:** required — `headline`, exactly 3 `valueProps`.
   - **Offering-Forward:** required — `headline`, `supportingLine`.
   - **Neutral/Fallback:** no Business-Type-supplied content; the entire content set is Pattern-owned.
6. **Validation boundaries:** Business Type validity (membership in the fourteen approved values, `DECISIONS.md` WD-152), Pattern validity (membership in the four approved patterns), schema completeness (a Business Type's supplied values match its pattern's required shape and counts exactly), content-boundary compliance (an editorial responsibility verifying no fabricated claims per `DECISIONS.md` WD-156/WD-157/WD-161, distinct from structural validation), Company Name input handling (sanitization/escaping before rendering), and Global singleton consistency (exactly one CTA record and one Concept Preview label exist and render consistently across all four patterns).
**Reason:** This decision performs no new architectural analysis — it consolidates and formally finalizes what WD-159, WD-160, and WD-161 already approved across three separate decisions into one authoritative schema reference, so future implementation work has a single, complete source rather than needing to cross-reference three documents. Explicitly separating content-boundary compliance from schema completeness in the validation boundaries reflects that the former is an editorial/review responsibility (verifying copy doesn't fabricate claims) while the latter is a structural/shape check (verifying required fields and counts are present) — two different kinds of responsibility that shouldn't be conflated under one mechanism.
**Alternatives Considered:** Not documented — this decision finalizes and consolidates prior approvals (WD-159, WD-160, WD-161) rather than choosing between new alternatives.
**Final Decision:** The schema described above is the final, approved Version 1 Interactive Showcase Preview data schema. This decision finalizes schema structure, ownership, and validation boundaries only. It explicitly leaves open: exact field names and types, the asset identifier scheme, the Company Name sanitization implementation, technical rendering details, final per-Business-Type copy, and "Example" tag placement details — each remains a separate, still-open future decision.
**Impact:** Serves as the authoritative, consolidated schema reference for implementing the Interactive Showcase Preview Frame's data layer, superseding the need to cross-reference WD-159/WD-160/WD-161 individually for schema questions (all three remain valid and unchanged; this decision consolidates, not replaces, them). No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-149 (Interactive Showcase Generation Strategy Approved), WD-152 (Business Type Values Approved), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-156 (Visual/Grid Preview Content Strategy Approved), WD-157 (Trust/Credibility, Offering-Forward, and Neutral/Fallback Content Strategies Approved), WD-159 (Interactive Showcase Preview Data Model: Pattern-Centric Architecture), WD-160 (Interactive Showcase Preview Schema Structure Approved), WD-161 (Interactive Showcase Preview Copy Specification Approved); Interactive Showcase Preview Data Schema Finalization Workshop (Phase 1).

---

### WD-163 — Interactive Showcase Asset Strategy Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase Preview asset strategy is approved:
1. **Asset ownership:** all Preview assets are shared Design System resources referenced by Patterns. Business Types never own assets, consistent with `DECISIONS.md` WD-160/WD-162.
2. **Visual/Grid assets:** use icons/illustrations only — never photography or realistic placeholder imagery. Icons are drawn from Weber's existing Icon utility / `lucide-react` approach (`DECISIONS.md` WD-098), not a new asset pipeline. The approved 3 cards, "Example" tags, and generic labels from `DECISIONS.md` WD-161 remain unchanged.
3. **Trust/Credibility:** no visual assets in Version 1 — text-only presentation.
4. **Offering-Forward:** no visual assets in Version 1 — text-only, Hero-based presentation.
5. **Neutral/Fallback:** no visual assets — remains fully generic.
6. **Portfolio boundary:** Preview assets must remain visually distinct from any future real Portfolio assets. Realistic imagery that could imply real projects is avoided entirely, reinforcing the honesty boundary already established for Preview copy.
**Reason:** Restricting Visual/Grid to icons/illustrations rather than photography closes a gap left open by `DECISIONS.md` WD-156's original "imagery/icons/placeholders" phrasing, which technically permitted photo-style imagery — icons read unambiguously as abstraction, while a generic photograph risks being mistaken for a real product or listing photo even when it's placeholder content. Reusing Weber's existing Icon/`lucide-react` system, already in production use on Home's "Why Choose Weber" section, avoids introducing any new asset pipeline or dependency, directly serving `DECISIONS.md` WD-153's "assembled entirely from Weber's own Design System" principle. Trust/Credibility and Offering-Forward remaining text-only mirrors Weber's own existing `Hero` component, which already treats media as optional and is not currently used with imagery anywhere in production — this is not a new stylistic choice but a direct continuation of an existing, live precedent. Keeping Preview assets in a visually distinct register (illustrative/iconographic) from whatever real photography Portfolio eventually uses reinforces `DECISIONS.md` WD-005's Showcase/Portfolio separation at the asset level, not only at the copy/label level already established by `DECISIONS.md` WD-161. Full analysis recorded in the Interactive Showcase Asset Strategy Workshop (Phase 1).
**Alternatives Considered:** Generic stock photography for Visual/Grid cards — rejected as insufficiently distinct from real product/listing photography, weakening the "cannot be mistaken for real" requirement in `DECISIONS.md` WD-156. Commissioning custom illustration assets — rejected in favor of reusing the existing, already-approved Icon/`lucide-react` system, avoiding an unnecessary new asset pipeline. Adding Hero imagery to Trust/Credibility or Offering-Forward — rejected as disproportionate to Version 1's need and inconsistent with the text-only precedent already set by Weber's own production Hero usage.
**Final Decision:** The asset strategy described above is approved for Version 1. This decision approves asset strategy and sourcing approach only. It explicitly leaves open: exact icon selection per Visual/Grid card, whether icon glyphs vary by Business Type, asset identifier implementation, and rendering implementation details — each remains a separate, still-open future decision.
**Impact:** Resolves the asset-sourcing question left open by `DECISIONS.md` WD-160/WD-162, establishing that Visual/Grid draws from Weber's existing Icon system and that the other three patterns require no visual assets in Version 1. Unblocks a future decision selecting specific icons, without itself performing that selection. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-005 (Interactive Showcase as a Distinct, Coexisting Feature), WD-098 (Icon and Live Region Announcer), WD-141 (Portfolio Home Treatment Before Case Studies Exist), WD-147 (Portfolio Page Version 1 Strategy Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-156 (Visual/Grid Preview Content Strategy Approved), WD-160 (Interactive Showcase Preview Schema Structure Approved), WD-161 (Interactive Showcase Preview Copy Specification Approved), WD-162 (Interactive Showcase Preview Data Schema Finalized); `docs/components/09_UTILITIES.md` — Icon; `docs/components/08_MARKETING.md` — Hero; Interactive Showcase Asset Strategy Workshop (Phase 1).

---

### WD-164 — Interactive Showcase Rendering Architecture Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase Preview rendering architecture is approved as a Pattern-based rendering system, mirroring the data-layer structure already approved in `DECISIONS.md` WD-153/WD-159/WD-160/WD-162:
1. **Flow:** User Input → Showcase Resolver → Business Type Configuration → Pattern Selection → Pattern Component → Preview Render.
2. **Component structure:** exactly four Pattern components — Visual/Grid, Trust/Credibility, Offering-Forward, Neutral/Fallback (`DECISIONS.md` WD-154). No Business-Type-specific components are permitted.
3. **Global layer responsibilities:** input handling, Business Type resolution, "Concept Preview" label rendering, shared CTA value handling, and the Company Name insertion mechanism.
4. **Pattern layer responsibilities:** owning section order and component composition, rendering only its own approved schema fields (`DECISIONS.md` WD-160/WD-162), rendering its own Pattern-owned fixed content, and providing the CTA's structural placement slot.
5. **Configuration layer:** Business Types exist only as data records — Pattern reference, approved content values, and identity information — never as components.
6. **Rejected architectures:** one component per Business Type, and one universal conditional component, are both rejected.
**Reason:** This decision performs no new architectural analysis — it confirms that the rendering/component layer must mirror the structure already approved at the data layer (WD-153's Hybrid Pattern System, WD-159's pattern-centric data model, WD-162's finalized schema), rather than allowing the component tree to drift from a shape already settled. Requiring Business Types to remain data-only, never components, closes off the possibility of Strategy A (one-off pages per type) re-entering the system through the rendering layer even after being rejected at the architecture and data layers. Requiring exactly four Pattern components, each Business-Type-agnostic and consuming only its own schema's shape, is what makes each Pattern component genuinely reusable across every Business Type mapped to it (`DECISIONS.md` WD-155), directly implementing "Build Systems, Not Pages" at the component level. Full comparative analysis recorded in the Interactive Showcase Rendering Architecture Workshop (Phase 1).
**Alternatives Considered:** One component per Business Type (fourteen components) — rejected as directly contradicting `DECISIONS.md` WD-153's already-approved rejection of fully custom layouts, and as structurally inconsistent with a data model already organized around four patterns. One universal preview component with internal conditional branching — rejected as reintroducing the "one universal layout" risk `DECISIONS.md` WD-153 already rejected, relocated into one component's conditional logic, and as contradicting WD-159's "Pattern owns structure" ruling.
**Final Decision:** The Pattern-based rendering system described above is approved for Version 1. This decision approves rendering architecture and layer responsibilities only. It explicitly leaves open: exact component interfaces, folder organization, the resolution implementation, the Company Name injection mechanism, Server/Client component decisions, the CTA value-passing mechanism, and testing strategy — each remains a separate, still-open future decision.
**Impact:** Establishes the component-level architecture the Preview Frame will be implemented against, consistent with `DECISIONS.md` WD-153 through WD-163. Unblocks future implementation-level decisions (component interfaces, resolution mechanism, folder organization) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-014 (Next.js App Router as Frontend Meta-Framework), WD-149 (Interactive Showcase Generation Strategy Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-159 (Interactive Showcase Preview Data Model: Pattern-Centric Architecture), WD-160 (Interactive Showcase Preview Schema Structure Approved), WD-162 (Interactive Showcase Preview Data Schema Finalized), WD-163 (Interactive Showcase Asset Strategy Approved); Interactive Showcase Rendering Architecture Workshop (Phase 1).

---

### WD-165 — Interactive Showcase Content Registry Architecture Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase content registry organization is approved as three separate registries:
1. **Global layer registry:** owns the "Concept Preview" label, the shared CTA value and destination (`DECISIONS.md` WD-161), and the Company Name insertion configuration.
2. **Pattern definitions registry:** owns the four approved patterns (`DECISIONS.md` WD-154), their structure, section ordering, and any Pattern-owned fixed content.
3. **Business Type content registry:** owns Business Type identity, each record's Pattern reference (`DECISIONS.md` WD-155), and approved content values only.
**Reason:** A three-registry split is the direct, literal continuation of the ownership boundaries already approved in `DECISIONS.md` WD-159, WD-160, and WD-162 — separating registries organizationally, not just conceptually, reinforces the Pattern/Business-Type/Global distinction rather than leaving it to be inferred from each record's shape. This directly serves "Build Systems, Not Pages" and the pattern-centric architecture (`DECISIONS.md` WD-153) by ensuring structural changes (Pattern registry) and content changes (Business Type registry) can never accidentally cross boundaries, and by giving the Global layer (`DECISIONS.md` WD-159's explicit third layer) its own distinct home rather than folding it into either of the other two. Full comparative analysis recorded in the Interactive Showcase Content Registry Architecture Workshop (Phase 1).
**Alternatives Considered:** A single mixed registry containing all Business Type configurations (and, implicitly, Pattern definitions) — rejected because it weakens the ownership boundaries `DECISIONS.md` WD-159/WD-160/WD-162 already established; a monolithic registry doesn't structurally prevent a content field from drifting into what should be Pattern-owned structure, or vice versa. An external/CMS-driven content system — rejected as exceeding Version 1 scope: it would introduce a new operational dependency (authoring UI, fetch/caching, uptime) for fourteen small, static, already decision-gated records, in tension with `DECISIONS.md` WD-159's "static and pre-authored" content model, the Constitution's Dependencies principle, and the Performance Trade-off Rule; it would also mean adopting a new, unapproved technology outside this workshop's authority, separate from the already-unresolved Blog CMS question (`DECISIONS.md` WD-039).
**Final Decision:** The three-registry architecture described above is approved for Version 1. This decision approves registry organization and ownership boundaries only. It explicitly leaves open: file organization, data format, the lookup mechanism linking Business Type records to Pattern definitions, type validation implementation, and runtime validation tooling — each remains a separate, still-open future decision.
**Impact:** Establishes the content-organization architecture the Preview Frame's data will be authored and stored against, consistent with `DECISIONS.md` WD-159 through WD-164. Unblocks future implementation-level decisions (file structure, data format, validation tooling) without itself performing them. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-039 (Blog Approved as a Version 1 Feature), WD-149 (Interactive Showcase Generation Strategy Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-159 (Interactive Showcase Preview Data Model: Pattern-Centric Architecture), WD-160 (Interactive Showcase Preview Schema Structure Approved), WD-161 (Interactive Showcase Preview Copy Specification Approved), WD-162 (Interactive Showcase Preview Data Schema Finalized), WD-164 (Interactive Showcase Rendering Architecture Approved); Interactive Showcase Content Registry Architecture Workshop (Phase 1).

---

### WD-166 — Interactive Showcase Implementation Contracts Approved

**Category:** Architecture
**Date:** 2026-07-18
**Status:** Approved
**Description:** The Version 1 Interactive Showcase implementation contract is approved, based on the Interactive Showcase Implementation Contract Workshop (Phase 1):
1. **Registry contracts:** the Global registry is a singleton holding the "Concept Preview" label, the shared CTA record, and the Company Name placeholder configuration. The Pattern registry is a fixed collection of exactly four entries (`DECISIONS.md` WD-154), each declaring its `patternId`, required/optional content fields, and any Pattern-owned fixed content. The Business Type registry is a fixed collection of exactly fourteen entries (`DECISIONS.md` WD-152), each declaring its identity, a `patternId` reference matching `DECISIONS.md` WD-155's approved mapping, and a `content` record whose shape must exactly match its referenced Pattern's declared fields.
2. **Resolver as the only cross-registry composition layer:** the Resolver is the sole module permitted to read from all three registries and combine them into a single resolved payload (`patternId`, resolved content fields, sanitized Company Name, and the Global CTA record). No Pattern component, and no other module, reads the Business Type registry directly.
3. **Pattern component input contracts:** each of the four components receives only fully-resolved, already-substituted values — never a `businessTypeId` or any business-type-identifying prop. Visual/Grid receives `headline`, optional `supportingText`, its three fixed `cards`, and `cta`. Trust/Credibility receives `headline`, exactly three `valueProps`, and `cta`. Offering-Forward receives required `headline` and `supportingLine`, and `cta`. Neutral/Fallback receives its fixed `headline` and `supportingText` (sourced entirely from Pattern-owned content, never Business Type data) and `cta`.
4. **Component count:** exactly four Pattern components exist. No Business-Type-specific component may be created.
5. **Dependency direction rules:** the Business Type registry may reference the Pattern registry by `patternId`; the Pattern registry must never reference or import from the Business Type registry. This one-way dependency is enforced structurally, not by convention alone.
6. **Registry/UI separation rules:** all three registries contain data only — no functions, no conditionals, no behavior, and no imports of React or any Design System component. Rendering and resolution logic live exclusively in the Resolver and the Pattern components, never in the registries themselves.
**Reason:** This decision performs no new architectural analysis — it formalizes the concrete type/interface and dependency boundaries already reasoned through in the Implementation Contract Workshop, which itself only makes explicit what `DECISIONS.md` WD-159 through WD-165 already approved. Restricting Pattern component props to fully-resolved values with no business-type identifier is the concrete, checkable expression of "Business-Type-agnostic" components (`DECISIONS.md` WD-164) — a component contract that included a business-type identifier would be a structural violation, not a style question. The one-way registry dependency (Business Type → Pattern, never the reverse) and the registry/UI separation rule both directly protect the ownership boundaries `DECISIONS.md` WD-165 established, preventing Pattern logic from leaking into data and preventing rendering logic from leaking into what must remain pure, static, pre-authored content, consistent with `DECISIONS.md` WD-010's Content/Component Separation Rule and WD-149's deterministic-rendering requirement.
**Alternatives Considered:** Not documented — this decision formalizes contracts already reasoned through in the Implementation Contract Workshop rather than choosing between new alternatives.
**Final Decision:** The registry contracts, resolver responsibility, Pattern component input contracts, component count, dependency direction rules, and registry/UI separation rules described above are approved for Version 1. This decision approves conceptual contracts and boundaries only — no type syntax, code, or file structure is authored by this decision.
**Impact:** Establishes the binding implementation contract the Interactive Showcase's registries, resolver, and Pattern components must be built against, consolidating `DECISIONS.md` WD-159 through WD-165 into enforceable boundaries. Unblocks actual implementation (registry authoring, resolver logic, Pattern component construction) without itself writing any of it. No application code is affected, since no Preview Frame implementation exists yet.
**References:** `DECISIONS.md` WD-010 (Content/Component Separation Rule), WD-149 (Interactive Showcase Generation Strategy Approved), WD-152 (Business Type Values Approved), WD-153 (Interactive Showcase Preview Architecture: Hybrid Pattern System), WD-154 (Interactive Showcase Preview Pattern System: Four Patterns Approved), WD-155 (Business Type → Preview Pattern Mapping Approved), WD-159 (Interactive Showcase Preview Data Model: Pattern-Centric Architecture), WD-160 (Interactive Showcase Preview Schema Structure Approved), WD-161 (Interactive Showcase Preview Copy Specification Approved), WD-162 (Interactive Showcase Preview Data Schema Finalized), WD-164 (Interactive Showcase Rendering Architecture Approved), WD-165 (Interactive Showcase Content Registry Architecture Approved); Interactive Showcase Implementation Contract Workshop (Phase 1).

---

## Brand

### WD-004 — Logo as Single Source of Truth

**Category:** Brand
**Date:** 2026-07-16
**Status:** Approved
**Description:** The existing Weber logo file (`weber logo.png`, located in the project root) is the single source of truth for brand identity and must never be redesigned without explicit Project Owner approval.
**Reason:** Brand consistency and long-term recognizability.
**Alternatives Considered:** Not documented in the Constitution.
**Final Decision:** Logo stands as-is. The subtle snake integrated into the "W" symbolizes wisdom, not aggression, and must never become a literal mascot or illustration elsewhere on the site.
**Impact:** Any future logo usage, favicon, or brand asset work must reference this file and this symbolism rule.
**References:** `PROJECT_CONSTITUTION.md` Part 2 — Logo Philosophy, Snake Philosophy.

---

## Security

### WD-010 (AI Security Decision Authority Rule) — cross-reference

**Rules:** "Security is a requirement, not a feature." / "AI may generate code, but it may never decide security."
**Final Decision:** The AI may write and implement security-related code, but may never independently choose the underlying security approach — authentication method, encryption strategy, authorization model, or session strategy. Those choices require an explicit proposal with trade-offs and Project Owner approval.
**Full entry:** See WD-010 in the Governance section above for date, status, rationale, and alternatives.
**References:** `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1, Rule 3; `ARCHITECTURE.md` §9.

---

### WD-101 — SECURITY_POLICY.md Adopted: Approved Security Principles

**Category:** Security
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/SECURITY_POLICY.md` is created as the official home for detailed security specifications, previously only referenced by `ARCHITECTURE.md` §9 and `CODING_STANDARDS.md`. Nine topics are documented as approved principles (§3 of the new document): security is a requirement, input validation (Zod + React Hook Form), SQL injection prevention (via Prisma's parameterized queries), secrets management, environment variables, dependency management, third-party packages, and error handling (including a new synthesis: user-facing errors must never leak internal system details).
**Reason:** Every principle documented is a direct restatement of already-approved Constitution text, `DECISIONS.md` entries (WD-006, WD-014, WD-020, WD-021, WD-025, WD-049), or engineering standards (`CODING_STANDARDS.md`) — consolidating scattered security-relevant text into one authoritative document rather than inventing new policy. The error-handling leak-prevention statement is a direct synthesis of two already-approved rules (never expose secrets; errors explain problem/cause/fix), not a new one.
**Alternatives Considered:** Leaving security principles scattered across `PROJECT_CONSTITUTION.md`, `ARCHITECTURE.md`, and `CODING_STANDARDS.md` without consolidation — rejected, since `ARCHITECTURE.md` §9 and `CODING_STANDARDS.md` §9 both already anticipated and deferred to a dedicated `SECURITY_POLICY.md` that never existed.
**Final Decision:** `docs/SECURITY_POLICY.md` is official. Its nine approved-principle topics require no further decision to be considered settled documentation.
**Impact:** Resolves the "referenced but not-yet-created" gap for `SECURITY_POLICY.md` flagged in `ARCHITECTURE.md` §12 and `DECISIONS.md`'s own Pending Decisions list. `PERFORMANCE_GUIDE.md` remains unresolved.
**References:** `docs/SECURITY_POLICY.md` §3; `ARCHITECTURE.md` §9, §12; `CODING_STANDARDS.md` §9.

---

### WD-102 — Security Decision Boundaries Established

**Category:** Security
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/SECURITY_POLICY.md` §2 ("Security Decision Boundaries") explicitly states that the document does NOT define or imply an authentication mechanism, authorization model, session strategy, or encryption approach, until each is separately proposed and approved by the Project Owner.
**Reason:** Direct Project Owner requirement, reinforcing WD-010 (AI Security Decision Authority Rule) as a named, unambiguous section rather than leaving the boundary implicit. Weber's Version 1 scope has no authenticated area at all (no accounts, no login, no Client Dashboard — that's Version 2, WD-038), so there is no current feature need forcing any of these four decisions; documenting them prematurely would risk exactly the unilateral security decision WD-010 was written to prevent.
**Alternatives Considered:** Relying on WD-010's existing cross-reference alone, without a dedicated section in `SECURITY_POLICY.md` itself — presented in the Phase 1 review and superseded by direct Project Owner instruction requiring an explicit, named section.
**Final Decision:** Section 2 of `docs/SECURITY_POLICY.md` is the authoritative statement of this boundary. No default, convention, or implied choice for any of the four reserved topics may be inferred from `SECURITY_POLICY.md`, `ARCHITECTURE.md`, or any other approved documentation.
**Impact:** Establishes "Security Decision Boundaries" as a required, named section any future revision of `SECURITY_POLICY.md` must preserve.
**References:** `docs/SECURITY_POLICY.md` §2; `DECISIONS.md` WD-010.

---

### WD-103 — Security Topics Pending Decision and Out of Scope

**Category:** Security
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/SECURITY_POLICY.md` §4 records eleven topics as pending an explicit Project Owner decision (the four Decision Boundary topics plus output encoding/XSS, CSRF, security headers, Content Security Policy, rate limiting, logging/monitoring/error-tracking, and file upload security). §5 records four topics as out of scope for this document entirely: infrastructure-level controls, email provider security, CMS/content-editor access control, and payment/billing security.
**Reason:** None of the eleven pending topics has an approved mechanism anywhere in the documentation set — several (headers, CSP, CSRF, rate limiting) have zero grounding at all, and file upload security is moot until the File Upload Strategy itself is decided (`DECISIONS.md` WD-083). The four out-of-scope topics are each downstream of a separately undecided choice (hosting, email provider, CMS) or structurally inapplicable given an existing decision — payment/billing security specifically, since Consultation-First Pricing (`DECISIONS.md` WD-006) means no payment flow exists in the product at all.
**Alternatives Considered:** Proposing a specific mechanism for any pending topic ahead of Project Owner approval — rejected as a direct violation of WD-010. Documenting the out-of-scope topics as pending rather than out of scope — rejected, since each is genuinely blocked by a separate, already-identified undecided decision rather than being itself the open question.
**Final Decision:** `docs/SECURITY_POLICY.md` §4 and §5 stand as written. Each pending topic moves to §3 (Approved Security Principles) only after its own explicit proposal-and-approval cycle, logged as a new Decision ID at that time.
**Impact:** Gives every open security topic a single, traceable home, preventing silent assumption or re-litigation of topics already correctly identified as open.
**References:** `docs/SECURITY_POLICY.md` §4, §5.

---

## Performance

### WD-010 (Performance Trade-off Rule) — cross-reference

**Rules:** "Performance is part of the user experience." / "No feature may be added if it noticeably degrades performance without delivering equivalent user value."
**Final Decision:** Performance cost is an explicit gate on feature approval, evaluated during planning and the Performance Review step of the Architect Review Mindset — not discovered after the fact.
**Full entry:** See WD-010 in the Governance section above for date, status, rationale, and alternatives.
**References:** `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1, Rule 4; `ARCHITECTURE.md` §10.

---

### WD-104 — PERFORMANCE_GUIDE.md Adopted: Approved Performance Principles

**Category:** Performance
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/PERFORMANCE_GUIDE.md` is created as the official home for detailed performance specifications, previously only referenced by `ARCHITECTURE.md` §10 and `CODING_STANDARDS.md`. Seven areas are documented as approved principles (§3 of the new document): performance philosophy, optimization targets (images, fonts, bundle size, network requests — target approved, technique not), loading strategy, rendering strategy, code splitting, animation performance, and the resolved (non-conflicting) relationship between accessibility and performance.
**Reason:** Every principle documented is a direct restatement of already-approved Constitution text (Parts 4, 5, 8 §6), `DECISIONS.md` entries (WD-014, WD-033, WD-048, WD-061), or engineering standards (`CODING_STANDARDS.md`, `DEVELOPMENT_GUIDE.md`) — consolidating scattered performance-relevant text into one authoritative document rather than inventing new policy. Naming an optimization target (§3.2) is explicitly distinguished from approving a technique for it, so the document cannot be read as settling more than was actually decided.
**Alternatives Considered:** Leaving performance principles scattered across `PROJECT_CONSTITUTION.md`, `ARCHITECTURE.md`, `CODING_STANDARDS.md`, and `DEVELOPMENT_GUIDE.md` without consolidation — rejected, since `ARCHITECTURE.md` §10 already anticipated and deferred to a dedicated `PERFORMANCE_GUIDE.md` that never existed.
**Final Decision:** `docs/PERFORMANCE_GUIDE.md` is official. Its seven approved-principle areas require no further decision to be considered settled documentation.
**Impact:** Resolves the last "referenced but not-yet-created" gap flagged in `ARCHITECTURE.md` §12 and `DECISIONS.md`'s own Pending Decisions list — both `SECURITY_POLICY.md` (WD-101–WD-103) and `PERFORMANCE_GUIDE.md` now exist.
**References:** `docs/PERFORMANCE_GUIDE.md` §3; `ARCHITECTURE.md` §10, §12; `CODING_STANDARDS.md` §10.

---

### WD-105 — Performance Decision Boundaries Established

**Category:** Performance
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/PERFORMANCE_GUIDE.md` §2 ("Performance Decision Boundaries") explicitly states that the document does NOT define or imply performance budgets, Core Web Vitals targets, caching strategy, monitoring tooling, database optimization strategy, or API optimization strategy, until each is separately proposed and approved by the Project Owner.
**Reason:** Direct Project Owner requirement, mirroring the Security Decision Boundaries pattern (`DECISIONS.md` WD-102) as a named, unambiguous section rather than leaving the boundary implicit. `ARCHITECTURE.md` §10 already states directly that "no performance budgets, targets, or monitoring tooling have been chosen" — documenting any of the six reserved topics here prematurely would mean an AI-authored draft quietly settling a decision that was never actually approved, the same risk WD-102 was written to prevent for security.
**Alternatives Considered:** Relying on the Performance Trade-off Rule (WD-010) alone, without a dedicated section in `PERFORMANCE_GUIDE.md` itself — presented in the Phase 1 review as a risk (unlike Security, no existing rule specifically blocks performance specifics from drifting in by default) and superseded by direct Project Owner instruction requiring an explicit, named section.
**Final Decision:** Section 2 of `docs/PERFORMANCE_GUIDE.md` is the authoritative statement of this boundary. No default, convention, or implied choice for any of the six reserved topics may be inferred from `PERFORMANCE_GUIDE.md`, `ARCHITECTURE.md`, or any other approved documentation. Naming an optimization target (§3.2) is explicitly not the same as approving a budget, technique, or tool for it.
**Impact:** Establishes "Performance Decision Boundaries" as a required, named section any future revision of `PERFORMANCE_GUIDE.md` must preserve.
**References:** `docs/PERFORMANCE_GUIDE.md` §2; `DECISIONS.md` WD-010, WD-102.

---

### WD-106 — Performance Topics Pending Decision, Out of Scope, and Version 2

**Category:** Performance
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/PERFORMANCE_GUIDE.md` §4 records ten topics as pending an explicit Project Owner decision (the six Decision Boundary topics plus prefetching, third-party script policy, concrete technique for the four approved optimization targets, and performance measurement tooling/methodology). §5 records two topics as out of scope entirely: hosting-specific performance features and CMS-specific content-delivery performance. §6 records Client Dashboard/Learning Platform performance needs as Version 2, not to be pre-solved now.
**Reason:** None of the ten pending topics has an approved mechanism anywhere in the documentation set — several (Core Web Vitals, caching, prefetching, monitoring) have zero grounding at all. The two out-of-scope topics are each downstream of a separately undecided choice (hosting, CMS). Client Dashboard/Learning Platform performance is tied to features that are themselves unscoped (`DECISIONS.md` WD-038), consistent with the project's standing Scalability principle of architectural preparation without premature design (`ARCHITECTURE.md` §1).
**Alternatives Considered:** Proposing a specific budget, target, or tool for any pending topic ahead of Project Owner approval — rejected as inconsistent with the Performance Decision Boundaries just established (WD-105). Treating Client Dashboard/Learning Platform performance as merely "pending" rather than "Version 2" — rejected, since the blocking factor is an entire unscoped feature, not a narrower open question.
**Final Decision:** `docs/PERFORMANCE_GUIDE.md` §4, §5, and §6 stand as written. Each pending topic moves to §3 (Approved Performance Principles) only after its own explicit proposal-and-approval cycle, logged as a new Decision ID at that time.
**Impact:** Gives every open performance topic a single, traceable home, preventing silent assumption or re-litigation of topics already correctly identified as open.
**References:** `docs/PERFORMANCE_GUIDE.md` §4, §5, §6.

---

## Engineering Workflow

Beyond what the Constitution itself already establishes directly (Part 7 — Mandatory Workflow; Part 9 — Phase Lifecycle), the decisions below govern engineering process. Branch strategy, CI/CD specifics, and testing tooling remain open — see Pending Decisions.

---

### WD-107 — IMPLEMENTATION_BLUEPRINT.md Adopted: Critical Path and Build Order

**Category:** Engineering Workflow
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/IMPLEMENTATION_BLUEPRINT.md` is created as the official execution sequence converting the fifty-two documented components and every approved architecture/policy document into a build order. It establishes a nine-step Critical Path (resolving color hex and font family; Tier 1 with Icon/Live Region Announcer prioritized; closing the Footer documentation gap; Button early; Surfaces' Card before Data Display's cards; Contact as the first complete route; resolving the Interactive Showcase generation mechanism; Home last; Blog's content gated on the CMS decision), a full Build Order by Area table (fourteen areas), parallel-implementation opportunities, and a list of components/pages to delay.
**Reason:** The sequence is the direct engineering consequence of already-approved decisions — primarily WD-068's four-tier dependency layering — not a new architectural choice. The Phase 1 review identified two previously unflagged documentation gaps during synthesis: Footer (Navigation) had been noted before (Marketing Components Finalization, WD-096) but never formally tied to its blast radius across every route; Service Detail Layout (named in `INFORMATION_ARCHITECTURE.md` §15) was identified for the first time as never having been proposed in any Component Library workshop, unlike its Portfolio and Blog counterparts.
**Alternatives Considered:** Sequencing by route/page first, components second — presented in the Phase 1 review and set aside, since component tier dependencies (WD-068) are stricter and more foundational than route-level groupings, which themselves depend on component readiness.
**Final Decision:** `docs/IMPLEMENTATION_BLUEPRINT.md` §3–§7 stand as written. No code is generated by this decision; it sequences future implementation work only.
**Impact:** Gives every future implementation task a single, traceable reference for build order, superseding ad hoc sequencing decisions.
**References:** `docs/IMPLEMENTATION_BLUEPRINT.md` §3–§7; `DECISIONS.md` WD-068.

---

### WD-108 — Recommended Implementation Strategy: Milestone/Phase-Based

**Category:** Engineering Workflow
**Date:** 2026-07-17
**Status:** Approved
**Description:** Weber's implementation strategy is confirmed as Milestone/Phase-based, per the Constitution's existing Phase Execution Framework (`PROJECT_CONSTITUTION.md` Part 9), with Feature-based code organization (already approved, `ARCHITECTURE.md` §5) applied within each milestone. Sprint-based is explicitly not adopted.
**Reason:** This is not a new strategy choice — Part 9's Phase Execution Framework (Phase Planning → Architecture Review → Project Owner Approval → Implementation → Internal Validation → Quality Assurance → Documentation → Project Owner Review → Acceptance → Next Phase) already governs project-level work, and `PROJECT_ROADMAP.md`'s own Milestones section confirms milestones are added "as each Phase Planning report is approved." Sprint-based would require inventing a fixed cadence, team velocity, or iteration length that has never been approved anywhere; `PROJECT_ROADMAP.md` itself marks target dates as `[PLACEHOLDER]`.
**Alternatives Considered:** Sprint-based — presented in the Phase 1 review and rejected as unsupported by any approved documentation. Feature-based as a standalone project-sequencing strategy — clarified as a code-organization principle that operates within Milestone-based delivery, not a competing strategy.
**Final Decision:** Milestone/Phase-based is confirmed as the implementation strategy, documented in `docs/IMPLEMENTATION_BLUEPRINT.md` §8.
**Impact:** Confirms no new process needs to be introduced or approved separately — the existing Phase Execution Framework is sufficient and now explicitly tied to component-tier milestones.
**References:** `docs/IMPLEMENTATION_BLUEPRINT.md` §8; `PROJECT_CONSTITUTION.md` Part 9; `PROJECT_ROADMAP.md`.

---

### WD-109 — Implementation Readiness Checklist Established

**Category:** Engineering Workflow
**Date:** 2026-07-17
**Status:** Approved
**Description:** `docs/IMPLEMENTATION_BLUEPRINT.md` §2 ("Implementation Readiness Checklist") records the project's actual readiness to begin writing code across seven areas: required documentation, forward dependencies, Component Library completeness, critical decisions approved, remaining open decisions, known implementation blockers, and bootstrap readiness.
**Reason:** Direct Project Owner requirement for a dedicated, named section summarizing readiness before implementation begins, distinct from the Critical Path (which sequences work) and the Build Order (which details it). The checklist's overall reading is that Weber is ready to begin Tier 1 implementation now, but not ready for full page assembly, launch, or deployment — each gated on specific, named decisions rather than remaining documentation or sequencing work.
**Alternatives Considered:** Folding readiness status into the Executive Summary alone, without a dedicated checklist — presented in the Phase 1 review and superseded by direct Project Owner instruction requiring a named, standalone section.
**Final Decision:** Section 2 of `docs/IMPLEMENTATION_BLUEPRINT.md` is the authoritative summary of implementation readiness as of this Finalization. It must be re-verified, not assumed current, whenever a listed blocker is resolved.
**Impact:** Gives the Project Owner a single at-a-glance readiness reference without needing to cross-reference every underlying document individually.
**References:** `docs/IMPLEMENTATION_BLUEPRINT.md` §2.

---

### WD-172 — Implementation Quality Requirements Adopted as Permanent Engineering Policy

**Category:** Engineering Workflow
**Date:** 2026-07-19
**Status:** Approved
**Description:** A mandatory, permanent quality policy applies to every future implementation task on Weber, without requiring the Project Owner to restate it per task. Before implementing any feature or modification: search the entire codebase for existing implementations of the same behavior; search for existing utilities, hooks, components, motion primitives, content registries, validators, types, and design tokens that can be reused; and briefly explain what was found and why the chosen implementation is the correct extension point — writing new code may never begin before this investigation is complete. If an existing implementation can be extended safely, extending it is always preferred over creating a parallel implementation; creating duplicate architecture requires an explicit justification in the implementation report. After implementation, perform a complete quality review covering (1) a duplicated code/logic search, (2) confirmation that no existing component, utility, helper, hook, or motion primitive already solves the same problem, (3) conformance with existing Weber architecture and all approved decisions, (4) a bug review (race conditions, stale state, hydration mismatches, memory leaks, missing cleanup, incorrect dependency arrays, accessibility regressions, keyboard navigation issues, focus management issues, animation conflicts, layout shift), (5) a security review (XSS, unsafe URL handling, unsafe external links, unsanitized user input, accidental exposure of sensitive information), (6) TypeScript correctness without `any`, `@ts-ignore`, or unsafe assertions unless absolutely justified, (7) no unnecessary Client Components, (8) no negative effect on performance, bundle size, or static prerendering, and (9) Mandatory Regression Verification. Mandatory Regression Verification requires confirming: existing behavior has not changed unintentionally; existing routes still work correctly; existing reusable components continue to behave the same unless intentionally modified; accessibility behavior has not regressed; motion behavior has not regressed; responsive layouts remain correct; SEO metadata and structured data (if affected) remain correct; no new console errors or hydration issues were introduced; and no unnecessary dependencies or bundle-size increases were introduced — summarized in a short "Regression Review" section in the final report. The Code Quality Gate requires `pnpm run typecheck` (TypeScript), `pnpm run lint` (ESLint), and `pnpm run build` (Production Build) to all pass; if any fails, the implementation is considered incomplete regardless of feature completeness, and must be fixed before the work is considered complete. Every implementation report must include: files created, files modified, files removed, existing components/utilities reused, architecture decisions respected, validation results, duplication review, security review, performance review, accessibility review, and Regression Review.
**Reason:** Direct, explicit Project Owner instruction, given as a standing policy rather than a one-off task requirement: "From this point forward, every implementation you perform must automatically follow these quality requirements without me needing to repeat them... Do not ask me to repeat these requirements in future tasks." This formalizes the lighter-weight Code Review Checklist already in `CODING_STANDARDS.md` (itself sourced from `PROJECT_CONSTITUTION.md` Parts 5 and 8) into a stricter, explicitly mandatory, more exhaustive checklist, and ties it to a permanent process obligation rather than a per-task reminder. Amended twice the same day by direct Project Owner follow-up: first, sharpening the pre-implementation search into an explicit, reportable investigation step (search codebase for existing behavior and reusable utilities/hooks/components/motion primitives/content registries/validators/types/design tokens; explain findings before coding; extend over duplicate; justify any duplicate architecture in the report); second, naming and expanding the regression review into "Mandatory Regression Verification" with nine concrete checks and a required report section, and naming the existing typecheck/lint/build requirement the "Code Quality Gate," explicit that a failure makes the implementation incomplete regardless of feature completeness.
**Alternatives Considered:** None — the Project Owner supplied the complete, final requirement set directly; no trade-offs were presented for evaluation, consistent with how process/governance instructions are adopted verbatim elsewhere in this log (e.g., WD-001, WD-107–WD-109).
**Final Decision:** The Implementation Quality Requirements, including the pre-implementation investigation rule, Mandatory Regression Verification, and the Code Quality Gate, are binding on every future implementation task on Weber, effective immediately, until the Project Owner explicitly changes this policy. Recorded in full in `docs/CODING_STANDARDS.md` under "Implementation Quality Requirements (Mandatory)".
**Impact:** Existing sections of `CODING_STANDARDS.md` — the lighter Code Review Checklist, and the Component/TypeScript/Security/Performance/Accessibility Rules — remain valid and are not replaced, but this policy is now the binding, mandatory, complete gate for every implementation, superseding case-by-case restatement of quality expectations. Every future implementation report must document the pre-implementation search findings, include a dedicated Regression Review section covering all nine named checks, and confirm the Code Quality Gate passed — a report is not complete without all three. A parallel/duplicate implementation is no longer a matter of reviewer judgment alone — it now requires an explicit, stated justification in the report itself. A failing typecheck/lint/build is no longer a fixable footnote — the task itself is incomplete until it passes.
**References:** `docs/CODING_STANDARDS.md` — Implementation Quality Requirements (Mandatory); `PROJECT_CONSTITUTION.md` Parts 5 and 8 (existing Code Review baseline this policy extends).

---

## Pending Decisions

The following require explicit Project Owner input before they can be logged here. They are **not** decided and must not be assumed. Items resolved by Technology Stack Finalization — Phase 2 (WD-014–WD-026) have been removed from this list; everything below is still genuinely open.

- Hosting/deployment platform.
- Authentication method, encryption approach, authorization model (explicitly excluded from Phase 2's approval).
- Email provider.
- Analytics tooling.
- Monitoring tooling.
- Logging/log-aggregation tooling.
- Error tracking tooling.
- File upload strategy/service.
- Content management: CMS vs. Git-based content, and if a CMS, which one (applies to both the Blog, WD-039, and general site content).
- Whether "Freelancer" and "E-commerce Client" are approved target audience segments (raised in `ROUTES.md` §5).
- Physical folder structure for the application source tree (the logical six-layer/six-category model is decided — WD-013 — and the technologies that implement it are decided — WD-014–WD-026 — but the physical directory layout is not).
- Component conventions beyond the library itself (file extensions, directory layout, props typing patterns).
- Exact URL scheme, slugs, and framework-level routing conventions (multi-route architecture itself is decided — WD-043).
- Content storage/authoring technology (MDX, structured files, or CMS-backed — tied to the Content Management decision above).
- Portfolio filter taxonomy, Blog content category list, and a Support Pages tier (e.g. legal/privacy) — all documented at a philosophy level in `INFORMATION_ARCHITECTURE.md`, with specific values still open (§8, §9, §3 respectively). Contact's lead-collection field list (§10) is resolved — see WD-139.
- Localization implementation specifics: translation-file format, locale-routing scheme, launch-language sequencing (the library itself — next-intl — is decided; see WD-023).
- A server-state library (e.g., for future dashboard data fetching) — Zustand (WD-022) covers client state only.
- Formal API design and versioning (REST vs. tRPC, versioning scheme) — the mechanism (Route Handlers/Server Actions) is decided (WD-026); a formal API layer is not yet needed or decided.
- Semantic color hex values (roles approved — `DECISIONS.md` WD-036 — values still open).
- Testing framework and CI test gates.
- Performance budgets and targets.
- Branch strategy and CI/CD pipeline specifics.
- Version 1 feature scope, milestones, and release dates.
- Technical integration plan for Version 2, the educational platform, the Client Dashboard, and additional future services.
- `SECURITY_POLICY.md` and `PERFORMANCE_GUIDE.md` were created via WD-101–WD-103 and WD-104–WD-106 respectively; both referenced-but-not-yet-created gaps flagged in `ARCHITECTURE.md` §12 are now resolved.

---

## How This Log Is Maintained

Every new architectural or product decision must be added here at the time it is approved, using the same structure (ID, Title, Category, Date, Status, Description, Reason, Alternatives Considered, Final Decision, Impact, References), per the Documentation Policy in `PROJECT_CONSTITUTION.md` (Part 7). IDs are never renumbered or reused. A decision touching more than one category (like WD-010) keeps one full entry in its primary category and is cross-referenced, not duplicated, elsewhere.
