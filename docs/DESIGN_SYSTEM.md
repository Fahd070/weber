# Weber — Design System

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and is the official Design System specification for Weber Version 1. Every statement below either restates an approved Constitution principle or restates a decision logged in `DECISIONS.md` (through WD-062). Nothing here is invented.
>
> **Status:** Official. This document supersedes the Design System Workshop Phase 1 review as the source of record.

---

## 0. Where This Sits

```
UI_FOUNDATION.md        Why — visual philosophy
DESIGN_TOKENS.md        What — concrete values
UX_SPECIFICATION.md     How it behaves — states, journeys
DESIGN_SYSTEM.md        The synthesis — reusable components built from all three
```

This document is the first point where Weber's philosophy, tokens, and interaction spec combine into a coherent methodology for building reusable components. It does not itself design any component — see Non-Goals.

---

## 1. Design System Philosophy

Every principle below governs component design specifically, building on the three foundational documents:

- **Consistency.** Identical-purpose components look and behave identically everywhere (Part 6 — Component Consistency) — this document is the mechanism that makes this true by construction, not discipline alone.
- **Scalability.** Built on the six-layer model (`DECISIONS.md` WD-013) so new components extend the system rather than forking it (§6, §10).
- **Accessibility.** Inherited from Radix UI primitives (WD-017) and preserved — not accidentally broken — as components are composed (§8).
- **Performance.** Token-driven Tailwind styling (WD-016) and a restrained weight/motion palette (WD-028, WD-033) mean components carry no unnecessary runtime cost.
- **Trust.** Every component is a repeated opportunity to reinforce "premium means invisible" (Part 10) — inconsistency at the component level is trust damage at scale.
- **Simplicity.** The smallest component and variant set that fully serves approved product needs (Part 10 — Simplicity Wins), not a speculative catalog.
- **Reusability.** Built once in the Shared Components layer (`PROJECT_STRUCTURE.md` §3), reused everywhere.
- **Maintainability.** "Future changes should require modifying tokens, not components" (Part 6) — this document is where that promise is kept.

---

## 2. Design Principles

Official, per `DECISIONS.md` WD-053. No exact values — every principle is already established upstream; this section states how each governs component design.

- **Visual hierarchy.** Every component applies the approved type-scale roles (`DESIGN_TOKENS.md` §1) consistently — a Card's Title is always the Title role, never an ad hoc size.
- **White space.** Components use the approved spacing scale (`DECISIONS.md` WD-030) for internal and external spacing — generous by default (Part 6 — Color Usage: "whitespace is more valuable than additional colors").
- **Alignment.** Components align to the same grid rhythm everywhere (Part 6 — Grid System).
- **Balance.** Visual weight is distributed intentionally — Accent is used sparingly (WD-002), so no component introduces a second competing focal point per view.
- **Contrast.** Used for meaning and hierarchy, never decoration (`UI_FOUNDATION.md` §7).
- **Rhythm.** Repeated component instances (a list of Service Cards, a Testimonial row) maintain consistent spacing between instances, not just within one.
- **Consistency.** The most load-bearing principle in this document — what a Design System exists to guarantee.
- **Progressive disclosure.** Already established for forms (`UX_SPECIFICATION.md` §5); extended to components generally — an FAQ accordion or a Portfolio case study reveals depth only on request.

---

## 3. Component Philosophy

Official, per `DECISIONS.md` WD-054.

- **Reusability.** Built once in the Shared Components layer, consumed by every Feature that needs it (`PROJECT_STRUCTURE.md` §3).
- **Single responsibility.** One component, one job (Part 6 — Component Philosophy).
- **Predictable behavior.** Identical props and patterns behave the same way in every context.
- **Accessibility-first.** Inherited from Radix UI at the primitive level (WD-017) — the discipline required is not breaking it when composing higher-level components.
- **Stateless vs. stateful readiness.** Components default to stateless/presentational (pure props in, UI out) wherever possible, consistent with Content/Component Separation (`DECISIONS.md` WD-010) and local-first state (WD-022) extended to the component level. Local state is introduced only where a component's job genuinely requires it.

### Composition First

**Official, per `DECISIONS.md` WD-055.** Components should be composed from smaller reusable building blocks whenever possible, instead of creating large monolithic components.

A component's design should first be evaluated for whether it can be assembled from smaller, independently reusable pieces before being built as one large unit. This is the same pattern shadcn/ui itself is built on (`DECISIONS.md` WD-017), and it directly serves Reusability and Maintainability (§1): a monolithic component duplicates logic that composition would have shared, and is harder to change safely later.

---

## 4. Component Classification

Official, per `DECISIONS.md` WD-056. Eight categories, organizing the components already named in `INFORMATION_ARCHITECTURE.md` §15:

| Category | Purpose | Examples (already approved in `INFORMATION_ARCHITECTURE.md` §15) |
|---|---|---|
| **Layout** | Structural wrappers | Container variants (WD-035), section/grid wrappers |
| **Navigation** | Wayfinding | Primary Navigation, Footer, breadcrumbs (scope — WD-045) |
| **Inputs** | Data collection | Contact Form fields, Interactive Showcase input |
| **Feedback** | System communication | Success/Warning/Error/Informational messages (WD-049), Loading states (WD-048) |
| **Data Display** | Presenting content instances | Service Card, Portfolio Card, Testimonial Card, Blog Post Card, FAQ, Timeline |
| **Surfaces** | Elevated containers | Cards, dialogs — using Elevation levels (WD-032) |
| **Marketing** | Persuasion-purpose components | Hero, CTA Banner |
| **Utilities** | Small non-content helpers | Language switcher, icon wrapper, screen-reader-only text |

No individual component is designed here — this classification is the organizing structure the Component Library phase will populate.

---

## 5. Variant Philosophy

Official, per `DECISIONS.md` WD-057.

- **Size variants** map directly to the approved type/spacing scale (WD-027, WD-030) — never a parallel, component-specific sizing system.
- **Visual variants** map to the approved color roles (Primary/Secondary/Accent — WD-002; semantic roles — WD-036) — never a color outside those roles.
- **State variants** are the nine canonical interaction states (`DECISIONS.md` WD-044), treated as orthogonal to visual variant — a "secondary, disabled, loading" combination composes cleanly rather than requiring a dedicated one-off component.

Variants are the minimum set that serves real, already-approved product needs — not a speculative catalog (Part 10 — Simplicity Wins).

---

## 6. Design Consistency Across Surfaces

Official, per `DECISIONS.md` WD-058.

**Marketing pages, Portfolio, Blog, Interactive Showcase** — all Version 1, all built from the same Shared Components layer and token set (`PROJECT_STRUCTURE.md` §3) — consistent by construction.

**Future Client Dashboard, future Learning Platform** — must inherit the same Design System, never a parallel one. This is "architecturally prepared" (`DECISIONS.md` WD-038) applied to the component layer specifically: a Dashboard's data-heavy needs (tables, charts) become new Data Display entries (§4) using existing tokens, not a forked design language.

---

## 7. Responsive Component Strategy

Official, per `DECISIONS.md` WD-059. No breakpoints redefined here — see `DECISIONS.md` WD-034.

A single component adapts its own internal layout and density across breakpoint tiers rather than existing as separate mobile/desktop variants:

- **Mobile.** The baseline every component must work for first (mobile-first, WD-034).
- **Tablet.** Transitional — typically inherits the mobile touch-first interaction model with more layout room.
- **Laptop / Desktop.** More information density becomes viable; hover states become available (`UX_SPECIFICATION.md` §10).

This keeps the interaction model (§5; `DECISIONS.md` WD-044) identical across every size even as presentation adapts, and keeps the component maintenance surface small.

---

## 8. Accessibility Philosophy

Official, per `DECISIONS.md` WD-060 — mandatory for every component, not an opt-in.

- **Keyboard support.** Fully operable without a pointer.
- **Focus.** Visible, logical, never lost when a component's state changes.
- **Contrast.** Uses approved token colors at sufficient contrast in every variant.
- **Labels.** Never placeholder-only (`DECISIONS.md` WD-046).
- **Screen readers.** Semantic HTML plus Radix primitives (WD-017); dynamic components announce state changes via live regions (WD-050).
- **Reduced motion.** Every animated component respects `prefers-reduced-motion` without exception (WD-033).

---

## 9. Motion Philosophy

Official, per `DECISIONS.md` WD-061. No durations redefined here — see `DECISIONS.md` WD-033.

- **Micro-interactions.** Hover/press feedback — the lightest, most frequent motion in the system.
- **Feedback animations.** State transitions (loading → success/error, WD-048) animate meaningfully rather than snapping.
- **Page transitions.** Kept minimal given multi-route architecture (WD-043) — a heavy full-page transition would slow perceived navigation.
- **Motion restraint.** Richer motion is reserved for genuinely meaningful moments — most notably the Interactive Showcase's preview reveal (WD-047).
- **Performance considerations.** Simple component-level motion prefers lightweight CSS transitions; Motion/Framer Motion (WD-018) remains reserved for the meaningful moments its own decision already scopes it to.

---

## 10. Future Scalability

Official, per `DECISIONS.md` WD-062.

- **Version 2 / Dashboard / Learning Platform.** New components extend the classification (§4) and token set rather than forking them.
- **New services.** The existing Service Card component scales to more entries without a new component being designed.
- **Additional themes.** A future light theme is already anticipated ("must respect the same design language," WD-003) — every component must be token-driven, never hardcoding a color, so a second theme never requires touching every component individually.
- **Additional languages.** Arabic/English and RTL/LTR readiness are already approved (WD-012, WD-023) — components use logical CSS properties (start/end, not left/right) from the start, so right-to-left support is never a retrofit.

---

## 11. Risks and Mitigations

Carried forward from the Phase 1 review, now adopted as ongoing implementation discipline:

| Risk | Mitigation |
|---|---|
| Component sprawl (near-duplicate components) | Classification system (§4) and Composition First (§3) discipline. |
| Token drift (hardcoded values) | Already a review-blocking issue in `CODING_STANDARDS.md` — enforced, not just stated. |
| Accessibility erosion when composing | Accessibility is a build-time requirement (§8), not an inherited-and-forgotten property. |
| Inconsistent state handling | Uniform application of the nine-state model (§5; WD-044). |
| Version 2 forking the system | "Architecturally prepared" (WD-038) binding on the Design System specifically (§6, §10). |
| Motion creep | Motion restraint (§9) is an ongoing constraint, not a one-time decision. |

---

## Non-Goals

This document intentionally does **not** define:

- No individual component designs (props, visual mockups, code).
- No new design tokens (see `DESIGN_TOKENS.md`).
- No new interaction states or journeys (see `UX_SPECIFICATION.md`).
- No new pages or content structure (see `INFORMATION_ARCHITECTURE.md`).
- No implementation code of any kind.

---

## Pending Decisions Summary

- Individual component design — the Component Library's documentation structure, standard, and governance rules are official (`docs/components/`, `DECISIONS.md` WD-063–WD-069). All eight `DESIGN_SYSTEM.md` §4 categories are now documented, fifty-four components total, none yet implemented (Documentation Before Implementation Gate, WD-066). **Layout** is complete for Version 1 with nine components (`DECISIONS.md` WD-074). **Utilities** is documented with four components — Skip Link, Visually Hidden, Icon, Live Region Announcer (WD-098) — the latter two resolving forward dependencies across Navigation, Inputs, Feedback, and Marketing; Focus Trap remains deferred to Version 2 alongside the Surfaces overlay family (WD-100). **Navigation** is complete for Version 1 with nine components and no open blockers (WD-076, WD-110), including one optional (Breadcrumb); CTA inside Navigation's dependency on Button is resolved, and Footer is now documented as a composition-only component reusing Brand Link, with Language Switcher explicitly excluded by default (WD-110, WD-111) — no Footer content is approved. **Inputs** is documented with ten components, nine required and one optional (WD-081), including Button. **Feedback** is documented with four components (WD-085) — Alert, Spinner, Skeleton, Empty State — with Modal/Confirmation Dialog redirected to Surfaces and Live Region Announcer confirmed as Utilities (WD-088). **Data Display** is documented with twelve components, ten required and two optional (WD-089, WD-112), with Card redirected to Surfaces and Data Table/Progress Metric deferred to Version 2 (WD-091); Case Study Layout, Article Layout, and Service Detail Layout are Data Display components, not Layout primitives, despite their names; Service Detail Layout explicitly excludes CTA Banner as a dependency to preserve WD-068 compliance (WD-112). **Surfaces** is documented with two components, Card and Tooltip (WD-092) — Card resolves the Data Display forward dependency; Modal, Confirmation Dialog, Sheet/Drawer/Bottom Sheet, Popover/Hover Card, and Side Panel remain deferred to Version 2 (WD-094). **Marketing** is documented with four components — Hero, CTA Banner, Feature List, Preview Frame (WD-095); Hero Content and Hero Media are internal compositions of Hero, not independent entries, and Blog Preview is a named composition pattern, not a component (WD-097).
- Exact variant sets per component — governed by §5's philosophy, not enumerated here. Button's Version 1 set is now resolved (`primary`/`secondary`/`accent`, filled-only, default `primary` — `DECISIONS.md` WD-136); every other component's variant set remains open.
- Breadcrumb component behavior — scope was decided (`DECISIONS.md` WD-045); design is not.
- Theme-switching mechanism (light theme remains unscheduled — WD-003).

---

## How This Document Is Maintained

Every principle above traces to `PROJECT_CONSTITUTION.md` or a `DECISIONS.md` entry (through WD-062). Any change to component philosophy, classification, or variant approach requires a new decision, logged the same way.
