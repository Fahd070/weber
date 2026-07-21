# Component Category — Surfaces

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Elevated containers.

**Layer position:** Third tier (with Data Display) — may depend on Layout, Utilities, Navigation, Inputs, and Feedback (`01_FOUNDATIONS.md` §7; `DECISIONS.md` WD-068). Same-tier dependencies with Data Display are allowed under WD-068.

**Category status:** Two components approved and documented — Card (required) and Tooltip (approved as a core primitive, optional for Version 1 usage) — `DECISIONS.md` WD-092. Six candidates were explicitly rejected (`DECISIONS.md` WD-093) and must not be re-proposed without new justification. Three further candidates were confirmed to already belong to other, already-documented categories (WD-093). Eight candidates remain deferred to Version 2 (`DECISIONS.md` WD-094).

**Resolved dependency:** Card resolves the forward dependency previously recorded against Service Card, Portfolio Card, Blog Post Card, and Testimonial Card (`docs/components/06_DATA_DISPLAY.md`, `DECISIONS.md` WD-091) — the same pattern by which Inputs' Button previously resolved Navigation's CTA dependency (WD-079 → WD-081/WD-084).

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. Both components completed the Documentation stage of the Component Lifecycle before either entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Card has since entered Implementation (`src/components/surfaces/card.tsx`). Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Card

| Field | Detail |
|---|---|
| **Purpose** | An elevated container — background surface, border/shadow treatment from the elevation scale, and radius. The primitive underlying every "X Card" component in Data Display. |
| **Responsibilities** | Owns the elevated container box only — background, elevation, and radius. Does not own what's inside it (Data Display's job) or the box's internal spacing rhythm (a Stack composed inside it, where needed). |
| **Composition** | A primitive — not composed of other components. Whatever it wraps (an image, text, tags, a Button) is composed into it from outside its own definition. |
| **Variants** | Elevation variants mapped directly to `elevation.0` (Flat, default) and `elevation.1` (Resting, e.g. a Portfolio card) per `DECISIONS.md` WD-032 — no variant outside the approved scale. |
| **States** | Stateless by default (`DECISIONS.md` WD-054) — Card itself carries no interactive state. Hover/focus affordance, when present, belongs to whatever interactive element (a Button, a link wrapper) is composed inside it, not to Card itself. |
| **Accessibility** | No semantics of its own — purely a visual container. Whatever is composed inside it must carry its own correct semantics (heading levels, link/button roles, alt text). |
| **Token Usage** | Elevation tokens `elevation.0`/`elevation.1` (WD-032), border radius (WD-031), semantic color roles for its background (WD-036, WD-130 — hex values approved). |
| **Relationships** | Composed by Service Card, Portfolio Card, Blog Post Card, and Testimonial Card (`06_DATA_DISPLAY.md`) — resolving each of their forward dependencies (`DECISIONS.md` WD-091). |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Service Card, Portfolio Card, Blog Post Card, Testimonial Card (Data Display, same tier). |
| **Future Extension** | Reused for any future card-shaped elevated content (a Dashboard summary card, a Learning Platform course card) without a new component. If a future Modal (Version 2) needs a structurally different elevated-container shape than Card provides, Card's own definition is revisited at that point with a genuine second consumer driving the change — not anticipated now. |

---

## Tooltip

| Field | Detail |
|---|---|
| **Purpose** | Supplies brief supplementary context for a control or piece of content without requiring a separate, always-visible label. Approved as a core Surfaces primitive for Design System completeness; optional for Version 1 usage — no approved Version 1 feature currently instantiates it (`DECISIONS.md` WD-092). |
| **Responsibilities** | Owns rendering a small, transient piece of contextual text anchored to a trigger element. Does not own the trigger element's own accessible name — Visually Hidden (`09_UTILITIES.md`) remains the mechanism for that; Tooltip supplements an accessible name, never replaces it. |
| **Composition** | A primitive — not composed of other components; anchors to whatever trigger element composes it. |
| **Variants** | None currently justified — a single presentation, consistent with Variant Philosophy (`DECISIONS.md` WD-057). |
| **States** | Hidden (default) and visible (triggered). Visibility must never depend on hover alone — hover is a Laptop/Desktop-only enhancement (`UX_SPECIFICATION.md` §3, §10: "no interaction depends on hover alone") — so a keyboard-focus trigger (and an explicit tap-triggered path on touch) must always be available alongside any hover enhancement. |
| **Accessibility** | Must be triggerable by keyboard focus, not hover alone; must be dismissible (e.g., via Escape) without moving focus away from the trigger; must never obscure the trigger it describes; its content must be announced to assistive technology when shown. |
| **Token Usage** | Typography (Caption role, WD-027), spacing scale (WD-030), border radius (WD-031), elevation token `elevation.2` (Raised — the Design Tokens table already names "popovers" as an `elevation.2` example, `DESIGN_TOKENS.md` §6), semantic color roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | No Version 1 consumer at present — documented ahead of need per direct Project Owner decision (`DECISIONS.md` WD-092), to avoid reopening the Surfaces category later for a component with no new architectural question attached. |
| **Dependencies** | Depends on: nothing structurally (primitive); anchors to whatever trigger element composes it, wherever adopted. Depended on by: none in Version 1; anticipated for a future data-dense Dashboard context (e.g., truncated values, chart legends — Version 2, `DECISIONS.md` WD-038). |
| **Future Extension** | Available immediately to any future feature needing supplementary contextual text without a new component being proposed — the reason it was documented now rather than deferred. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Card | Documented | Above |
| Tooltip | Documented (optional for Version 1 usage) | Above |

**Not included — rejected (`DECISIONS.md` WD-093):** Surface (generic elevated-container primitive beneath Card), Panel, Overlay, Backdrop, Scroll Area, Floating Action Surface.

**Belongs to another category, already documented (`DECISIONS.md` WD-093):** Callout — Feedback (already exists as Alert, WD-085). Separator Surface — Layout (already exists as Divider, WD-071). Sticky Container — Navigation (already owned by Header's existing sticky behavior).

**Deferred to Version 2 (`DECISIONS.md` WD-094):** Modal (Dialog treated as the same concept), Confirmation Dialog (a future Modal content variant, not separate), Sheet, Drawer, Bottom Sheet (one off-canvas concept), Popover, Hover Card (one floating-content concept), Side Panel (tied to Sidebar Layout's existing deferral, `DECISIONS.md` WD-075).
