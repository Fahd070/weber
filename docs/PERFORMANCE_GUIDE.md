# Weber — Performance Guide

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and must remain consistent with `DECISIONS.md` (the record of what has actually been approved). Every statement below either (a) restates an approved Constitution principle, (b) restates a logged decision from `DECISIONS.md`, or (c) is explicitly marked `[PENDING PROJECT OWNER DECISION]`. Nothing here is invented. Referenced as the intended home for detailed performance specifications by `ARCHITECTURE.md` §10 and `CODING_STANDARDS.md` §10 (`DECISIONS.md` WD-104–WD-106).

**Status:** Approved performance principles are finalized below. Every budget, target, and tooling decision remains open and is marked accordingly. See **Performance Decision Boundaries** (§2) before reading any further section.

---

## 1. Governing Rule

**The Performance Trade-off Rule (`DECISIONS.md` WD-010, `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1, Rule 4):**

> "Performance is part of the user experience."
> "No feature may be added if it noticeably degrades performance without delivering equivalent user value."

This is a hard gate on every future feature, evaluated during Phase Planning and the Performance Review step of the Architect Review Mindset (`PROJECT_CONSTITUTION.md` Part 8 §6) — never discovered after the fact. Performance is also part of engineering quality directly, independent of any single feature decision (Part 5 — Performance): optimization is never premature, and is always measured before it happens.

This rule governs this document as much as it governs implementation. Section 2 exists to make its boundary explicit and unambiguous.

---

## 2. Performance Decision Boundaries

**This document intentionally does NOT define or imply any of the following, until each is explicitly proposed and approved by the Project Owner:**

- **Performance budgets** — specific size, weight, or timing limits for any part of the product.
- **Core Web Vitals targets** — specific LCP, CLS, INP, or other numeric goals.
- **Caching strategy** — how, where, and for how long content or data is cached.
- **Monitoring tooling** — what tool or service observes performance in production.
- **Database optimization strategy** — indexing, query optimization, or connection-pooling approach.
- **API optimization strategy** — response caching, pagination, or performance policy for Route Handlers and Server Actions.

No default, convention, or implied choice for any of the six items above should be inferred from anything else in this document, in `ARCHITECTURE.md`, or in any other approved documentation. Naming a target as something that must be optimized (images, fonts, bundles, network requests — §3.2) is not the same as approving a budget, technique, or tool for it. Where a Version 1 or Version 2 need eventually requires one of these six decisions, it must go through the same path: an explicit proposal with trade-offs, reviewed and approved by the Project Owner, and logged in `DECISIONS.md` before implementation.

This boundary exists for the same reason as `SECURITY_POLICY.md`'s Security Decision Boundaries (`DECISIONS.md` WD-102): `ARCHITECTURE.md` §10 already states directly that "no performance budgets, targets, or monitoring tooling have been chosen," and documenting any of the six items here prematurely would mean an AI-authored draft quietly settling a decision that was never actually approved.

---

## 3. Approved Performance Principles

Every principle below is a direct restatement of already-approved Constitution text, `DECISIONS.md` entries, or engineering standards — not a new policy.

### 3.1 Performance Philosophy

- "A fast website feels trustworthy. A slow website feels unreliable." (`PROJECT_CONSTITUTION.md` Part 4 — Performance Equals UX.)
- "Performance is part of engineering quality... Do not optimize prematurely. Measure before optimizing." (Part 5 — Performance.)
- No feature may be added if it noticeably degrades performance without delivering equivalent user value (§1, WD-010) — evaluated during planning, not discovered after the fact.

### 3.2 Optimization Targets (Approved as Targets — Technique Not Approved)

The following are explicitly named as things that must be optimized (Part 4, Part 5, Part 8 §6 — Performance Review). **Naming a target here is not the same as approving a specific technique, format, or budget for it** — none of the following has an approved implementation approach:

- Images.
- Fonts — the font family is now chosen (Geist Sans/Mono, `DECISIONS.md` WD-131, self-hosted via `next/font`), but a specific loading strategy/technique for it is not approved by that decision and remains open here.
- Bundle size / JavaScript bundles.
- Network requests.

### 3.3 Loading Strategy

Four patterns are approved, applied per the "appropriate when" criteria already defined in `UX_SPECIFICATION.md` §7 (`DECISIONS.md` WD-048):

- **Skeletons** — where the eventual layout is known in advance (e.g., Portfolio grid, Blog listing).
- **Spinners** — where duration and layout are both unknown (e.g., Interactive Showcase generation, form submission).
- **Progressive loading** — for image-heavy views.
- **Lazy loading** — for offscreen/below-the-fold content, directly serving the Performance Trade-off Rule (§1).

Already implemented as Skeleton and Spinner (`docs/components/05_FEEDBACK.md`, `DECISIONS.md` WD-085).

### 3.4 Rendering Strategy

Server Components are the default; a component is only marked as a Client Component when it genuinely needs interactivity, browser APIs, or client-side state (`CODING_STANDARDS.md`) — a direct consequence of the approved Next.js App Router adoption (`DECISIONS.md` WD-014), not a new decision.

### 3.5 Code Splitting

Named explicitly as an optimization target (Part 4 — "Optimize: ... Code splitting."). Route-level code splitting is a structural consequence of the already-approved Next.js App Router (`DECISIONS.md` WD-014).

### 3.6 Animation Performance

The most thoroughly settled topic in this document:

- `prefers-reduced-motion` is respected without exception (`DECISIONS.md` WD-033).
- Animation must never delay interaction (`DEVELOPMENT_GUIDE.md` Performance Rules).
- Component-level motion is restrained by default, with richer motion reserved for genuinely meaningful moments (`DECISIONS.md` WD-061).
- Lightweight CSS transitions are explicitly preferred over Motion/Framer Motion for simple component-level state changes — uniform use of the animation library for all component motion was judged "disproportionate performance cost" (`DECISIONS.md` WD-061).

### 3.7 Accessibility and Performance Are Not in Tension

Nowhere in the approved documentation is performance chosen over an accessibility requirement. Reduced-motion support is unconditional (§3.6) regardless of any performance argument for a richer default animation, and the lightweight-CSS-transitions preference that serves performance (WD-061) also keeps interaction responsive, serving accessibility at the same time. Where the two intersect, both are already satisfied by the same decisions.

---

## 4. Performance Topics Pending Decision

Each item below requires an explicit Project Owner proposal-and-approval cycle before it can move into §3. None should be assumed, defaulted, or invented ahead of that decision. The first six restate the Performance Decision Boundaries in §2 for tracking purposes; the remainder have no approved mechanism of any kind yet.

- **Performance budgets** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Core Web Vitals targets** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Caching strategy** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Monitoring tooling** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Database optimization strategy** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **API optimization strategy** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Prefetching** — no strategy has been proposed anywhere. `[PENDING PROJECT OWNER DECISION]`
- **Third-party script policy** — no dedicated policy exists; the general "every dependency increases maintenance cost" principle (Part 5) applies by extension, but Analytics and Monitoring tooling — the most likely source of third-party scripts — are themselves undecided (`ARCHITECTURE.md` §0). `[PENDING PROJECT OWNER DECISION]`
- **Concrete technique for the four §3.2 optimization targets** (images, fonts, bundle optimization, network optimization) — the obligation to optimize is approved; the method is not. `[PENDING PROJECT OWNER DECISION]`
- **Performance measurement tooling/methodology** — "measure before optimizing" is an approved principle (§3.1); the specific tooling used to measure (e.g., Lighthouse, RUM) is not decided. `[PENDING PROJECT OWNER DECISION]`

---

## 5. Out of Scope for This Document

- **Hosting-specific performance features** (edge caching, CDN configuration, image-optimization services) — properties of a specific hosting platform, which is itself `[PENDING PROJECT OWNER DECISION]` (`ARCHITECTURE.md` Pending Decisions Summary). Cannot be specified without inventing a hosting choice.
- **CMS-specific content-delivery performance** — the Content Management/CMS strategy itself is undecided; nothing to specify until it exists.

---

## 6. Version 2

**Client Dashboard / Learning Platform performance needs** — real-time data rendering, large data tables, and authenticated-route performance are all plausible future concerns (`DECISIONS.md` WD-038), but neither feature is scoped yet. Consistent with this project's Scalability principle (`ARCHITECTURE.md` §1) — architecturally anticipated, not designed for ahead of the feature itself being scoped. This document does not attempt to pre-solve these now.

---

## How This Document Is Maintained

Each `[PENDING PROJECT OWNER DECISION]` marker in §4 is replaced with a concrete, approved statement — moved into §3 — only after that decision is proposed, reviewed, and approved by the Project Owner, and logged in `DECISIONS.md`. This document must never contain an invented budget, metric, or technique, and the Performance Decision Boundaries in §2 must never be narrowed or worked around by adding implementation detail elsewhere in this file. This document must be re-checked against `PROJECT_CONSTITUTION.md` and `DECISIONS.md` for consistency whenever either changes.
