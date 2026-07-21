# Component Category — Feedback

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** System communication.

**Layer position:** Second tier (with Navigation, Inputs) — may compose Layout and Utilities (tier 1) only, never the reverse (`01_FOUNDATIONS.md` §7; `DECISIONS.md` WD-068).

**Category status:** Four components approved and documented — `DECISIONS.md` WD-085. Fifteen candidates were explicitly rejected as aliases, variants, or unjustified complexity (`DECISIONS.md` WD-086) and must not be re-proposed without new justification. Modal and Confirmation Dialog were redirected to Surfaces, and Status Badge deferred to Version 2 (`DECISIONS.md` WD-087). **Live Region Announcer is explicitly classified as a Utilities component, not Feedback** (`DECISIONS.md` WD-088) — now documented in `09_UTILITIES.md` (WD-098) and used by Alert, Spinner, and Empty State below.

**Field/system/page-level distinction:** Field-level feedback is fully owned by Inputs (Error Message, Helper Text — `04_INPUTS.md`, `DECISIONS.md` WD-081) and is not revisited here. System-level feedback (Alert, Spinner, Skeleton) responds to a specific action or operation within a feature. Page-level feedback (Empty State) responds to a whole content region having nothing to show.

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. All four components completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Alert

| Field | Detail |
|---|---|
| **Purpose** | Communicates a system-level message to the visitor — the direct implementation of the four approved feedback message types (Success, Warning, Error, Informational — `DECISIONS.md` WD-049). |
| **Responsibilities** | Owns rendering one of its four message types with the approved calm, non-alarmist tone (WD-049). Does not own field-level validation messaging (Error Message's job, `04_INPUTS.md` — WD-081) or page-level "nothing to show" states (Empty State's job). |
| **Composition** | A primitive — composed within a Section or Container (`02_LAYOUT.md` — Layout, tier 1) wherever needed. This compositional flexibility (system-level placement near an action, or page-level placement spanning more of the page) is why a separate Banner component was not documented. |
| **Variants** | Four, directly mapped to WD-049's message types: Success, Warning, Error, Informational — each using the approved semantic color roles and hex values (`DECISIONS.md` WD-036, WD-130). |
| **States** | Non-interactive by default (a static message); may include a dismiss action (Button, `04_INPUTS.md`) in some contexts. |
| **Accessibility** | Must be announced to assistive technology when it appears dynamically — uses Live Region Announcer (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved). Color alone must never be the only signal distinguishing its four types. |
| **Token Usage** | Typography (Body/Caption roles, WD-027), spacing scale (WD-030), radius (WD-031), color from the four semantic roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by Form (`04_INPUTS.md`) for whole-form Success/Error states; used by the Interactive Showcase for generation Success/Error (`DECISIONS.md` WD-047); composed within Section/Container. |
| **Dependencies** | Depends on: Container or Section (Layout, tier 1, downward); Live Region Announcer (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved); optionally Button (Inputs, same tier) for a dismiss action. Depended on by: Form and any future feature needing system-level messaging. |
| **Future Extension** | The same four-variant Alert serves any future Dashboard or Learning Platform system messaging without a new component. |

---

## Spinner

| Field | Detail |
|---|---|
| **Purpose** | Communicates that an operation of unknown duration and layout is in progress — directly scoped in `DECISIONS.md` WD-048. |
| **Responsibilities** | Owns indicating indeterminate progress only. Does not own the operation's own logic or Skeleton's layout-aware loading role. |
| **Composition** | A primitive. |
| **Variants** | Size variants mapped to the type/spacing scale (WD-027, WD-030); no color variant beyond standard neutral/interactive tokens. |
| **States** | A single ongoing "in progress" state — non-interactive. |
| **Accessibility** | Must be announced to assistive technology when it appears — uses Live Region Announcer (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved). Must respect `prefers-reduced-motion` (WD-033) — a static or reduced-motion-safe treatment substitutes for continuous spin when requested. |
| **Token Usage** | Spacing scale (WD-030) for sizing; motion tokens (WD-033) for its animation, always respecting reduced motion. |
| **Relationships** | Used by the Interactive Showcase's Processing step (`DECISIONS.md` WD-047) and Form's Submitting state (`04_INPUTS.md`). |
| **Dependencies** | Depends on: Live Region Announcer (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved). Depended on by: Form, Interactive Showcase, and any future indeterminate-duration operation. |
| **Future Extension** | Reused for any future loading need (e.g., Dashboard data fetches) without a new component. |

---

## Skeleton

| Field | Detail |
|---|---|
| **Purpose** | Reserves the known layout of eventual content while it loads — directly scoped in `DECISIONS.md` WD-048. |
| **Responsibilities** | Owns previewing layout shape only, never actual content. Does not own the eventual content's own rendering. |
| **Composition** | A primitive, shaped to match whatever layout (Grid, Stack — Layout, tier 1) it stands in for. |
| **Variants** | Shape variants matching common content patterns (e.g., a card-shaped skeleton, a text-line skeleton) — the exact variant set is an implementation detail, not enumerated here. |
| **States** | A single "loading" state — non-interactive. |
| **Accessibility** | Must be clearly communicated to assistive technology as a loading placeholder, never mistaken for actual content; any shimmer/pulse animation must respect reduced motion. |
| **Token Usage** | Spacing scale (WD-030), radius (WD-031) to match the shape of the content it previews; motion tokens (WD-033) for any shimmer animation, reduced-motion-safe. |
| **Relationships** | Used by Portfolio (case study grid) and Blog (post listing) while content loads (`INFORMATION_ARCHITECTURE.md` §8, §9, §15). |
| **Dependencies** | Depends on: nothing structurally (primitive), though its shape typically mirrors a Grid or Stack arrangement. Depended on by: Portfolio Card, Blog Post Card (`06_DATA_DISPLAY.md`). |
| **Future Extension** | Reused for any future known-layout loading need (e.g., a Dashboard table) without a new component. |

---

## Empty State

| Field | Detail |
|---|---|
| **Purpose** | Communicates that a content region has nothing to show — either because content doesn't exist yet (Default variant) or because it failed to load (Error variant, absorbing what would otherwise be a separate "Error State" component). |
| **Responsibilities** | Owns explaining why a region is empty and guiding toward a next action (Part 6 — Empty States). Does not own field-level or system-level messaging (Inputs' Error Message and Alert's job, respectively). |
| **Composition** | Composes a message (text), optionally an Icon (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved), and optionally a Button (`04_INPUTS.md`) for its next-action guidance or retry — this absorbs the rejected "Retry Panel" candidate directly. |
| **Variants** | Two — **Default** ("nothing here yet") and **Error** ("something failed to load, here's how to retry") — sharing the same composition shape (message + optional icon + optional action), differentiated by tone and semantic color role (Neutral vs. Danger, `DECISIONS.md` WD-036). |
| **States** | Non-interactive itself; its composed Button, when present, carries its own full state model (`04_INPUTS.md`, WD-044). |
| **Accessibility** | Must be announced to assistive technology when it appears in response to a dynamic state change (e.g., a failed Interactive Showcase generation) — uses Live Region Announcer (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved), the same mechanism used by Alert and Spinner. |
| **Token Usage** | Typography (Body role, WD-027), spacing scale (WD-030) via Stack for its message/icon/action arrangement, color from Neutral or Danger semantic roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by the Interactive Showcase's Error step (`DECISIONS.md` WD-047 — the Error variant); used by Portfolio and Blog before content exists or when a collection is empty. |
| **Dependencies** | Depends on: Stack (Layout, tier 1, downward); Icon, Live Region Announcer (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved); optionally Button (Inputs, same tier). Depended on by: Interactive Showcase, Portfolio, Blog. |
| **Future Extension** | Reused for any future empty-collection need (a Dashboard with no data yet, a Learning Platform with no enrolled courses) without a new component. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Alert | Documented (4 variants: Success, Warning, Error, Informational) | Above |
| Spinner | Documented | Above |
| Skeleton | Documented | Above |
| Empty State | Documented (Default + Error variants) | Above |

**Not included — rejected (`DECISIONS.md` WD-086):** Banner, Toast, Snackbar, Notification, Success Message, Warning Message, Error State (standalone), Info Message, Loading Indicator, Progress Bar, Circular Progress, Inline Status, Validation Summary, Retry Panel, Offline Indicator.

**Belongs to another category (`DECISIONS.md` WD-087):** Modal, Confirmation Dialog — Surfaces.

**Deferred to Version 2 (`DECISIONS.md` WD-087):** Status Badge.

**Deferred, reclassified (`DECISIONS.md` WD-088, resolved by WD-098):** Live Region Announcer — a Utilities component, not Feedback, now documented in `09_UTILITIES.md` and used by Alert, Spinner, and Empty State above.
