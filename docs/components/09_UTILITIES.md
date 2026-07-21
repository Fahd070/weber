# Component Category — Utilities

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Small non-content helpers.

**Layer position:** Foundational (with Layout) — depends on nothing else in the library (`01_FOUNDATIONS.md` §7).

**Foundation Components note:** Skip Link and Visually Hidden below are Weber's approved Utilities-category Foundation Components (`DECISIONS.md` WD-070, WD-071). "Foundation Components" is a role, not a separate category; these entries live in Utilities because that's what they structurally are.

**Category status:** Four components documented — Skip Link, Visually Hidden, Icon, and Live Region Announcer (`DECISIONS.md` WD-098). Icon and Live Region Announcer resolve forward dependencies previously recorded against Mobile Navigation Toggle (`03_NAVIGATION.md`), Button (`04_INPUTS.md`), Alert, Spinner, Empty State (`05_FEEDBACK.md`), Form (`04_INPUTS.md`), and Feature List, Preview Frame (`08_MARKETING.md`). Ten candidates were rejected (`DECISIONS.md` WD-099); Screen Reader Announcer is confirmed as an alias of Live Region Announcer, not a separate component. Footer is confirmed to belong to Navigation, not Utilities, and remains undocumented pending a future Navigation documentation pass (WD-099). Focus Trap remains deferred to Version 2, tied to the Surfaces overlay family (`DECISIONS.md` WD-100, WD-094).

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation, only the contract. All four components completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Skip Link

| Field | Detail |
|---|---|
| **Purpose** | Lets a keyboard user jump directly to a page's main content, bypassing repeated Navigation. |
| **Responsibilities** | Owns one action — moving focus to the main content region. Does not own the Navigation it skips. |
| **Composition** | A primitive — not composed of other Foundation Components. |
| **Variants** | None — a single, consistent Skip Link across every route, consistent with Brand Consistency and "zero learning" Navigation Philosophy (Part 4). |
| **States** | Default (visually hidden), Focus (revealed — the entire point of this component is becoming visible on keyboard focus), Active/Pressed. |
| **Accessibility** | This component's entire purpose is accessibility — the first focusable element in App Shell (`DECISIONS.md` WD-050, WD-060; `UI_FOUNDATION.md` §7 — Keyboard Navigation). |
| **Token Usage** | Typography (Button-adjacent role) and color tokens once revealed on focus; motion tokens (WD-033) for its reveal transition, if any. |
| **Relationships** | Lives inside App Shell (`02_LAYOUT.md`), positioned before Navigation in reading/focus order. |
| **Dependencies** | Depends on: nothing. Depended on by: App Shell. |
| **Future Extension** | Unchanged by V2 — every future route inherits it automatically via App Shell. |

---

## Visually Hidden

| Field | Detail |
|---|---|
| **Purpose** | Makes content available to screen readers while remaining visually invisible — e.g., labeling an icon-only control. |
| **Responsibilities** | Owns visual-hiding-while-remaining-accessible only. Does not own the content's meaning or the control it labels. |
| **Composition** | A primitive — not composed of other Foundation Components. |
| **Variants** | None. |
| **States** | N/A — not an interactive component; a content-wrapping utility. |
| **Accessibility** | Exists solely to serve screen reader accessibility (`DECISIONS.md` WD-050, WD-060) — the accessibility requirement made concrete as a reusable primitive rather than restated ad hoc per component. |
| **Token Usage** | None — deliberately has no visual footprint. |
| **Relationships** | Used inside any component needing a screen-reader-only label — icon-only buttons, dynamic status changes, form field hints. |
| **Dependencies** | Depends on: nothing. Depended on by: potentially every other category (Navigation, Inputs, Feedback, Data Display, Marketing) wherever an icon-only or visually-implicit control needs a text alternative. |
| **Future Extension** | Unchanged by V2 — remains a universal, reusable primitive for any future component needing this pattern. |

---

## Icon

| Field | Detail |
|---|---|
| **Purpose** | Renders a single icon glyph consistently — resolves the forward dependency previously recorded against Mobile Navigation Toggle, Button, Empty State, and Feature List. |
| **Responsibilities** | Owns rendering one glyph at a token-driven size and color. Does not own the meaning conveyed to assistive technology when used icon-only (Visually Hidden's job, paired alongside it) or the interactive behavior of whatever composes it. |
| **Composition** | A primitive — not composed of other components. Draws from the approved icon family (Lucide React, `DECISIONS.md` WD-019) at the conceptual level only; no specific icon set membership is fixed by this documentation (Naming Philosophy, `01_FOUNDATIONS.md` §6 — independent of implementation choice). |
| **Variants** | Size variants mapped to the type/spacing scale (WD-027, WD-030); no other variant currently justified, consistent with Variant Philosophy (`DECISIONS.md` WD-057). |
| **States** | Non-interactive — N/A. Whatever composes it (a Button, a toggle) carries its own state model. |
| **Accessibility** | Never the sole carrier of meaning — must be paired with Visually Hidden (above) when used without a visible label, or sit beside a visible label (as in Feature List) otherwise; purely decorative uses must be hidden from assistive technology. |
| **Token Usage** | Type/spacing scale (WD-027, WD-030) for sizing; semantic color roles (WD-036, WD-130 — hex values approved) for color. |
| **Relationships** | Composed by Mobile Navigation Toggle (`03_NAVIGATION.md`), Button's Icon Button/Link Button presentations (`04_INPUTS.md`), Empty State (`05_FEEDBACK.md`), and Feature List (`08_MARKETING.md`) — all four resolved by this entry. |
| **Dependencies** | Depends on: nothing (primitive, foundational tier). Depended on by: Mobile Navigation Toggle, Button, Empty State, Feature List, and any future component needing a glyph. |
| **Future Extension** | Available immediately to any future component needing an icon (a Version 2 Dashboard's status glyphs, a Learning Platform's course icons) without a new primitive. |

---

## Live Region Announcer

| Field | Detail |
|---|---|
| **Purpose** | A generic mechanism for announcing dynamic content changes to assistive technology without a page navigation — resolves the forward dependency previously recorded against Alert, Spinner, Empty State, Form, and Preview Frame. Already confirmed as a future Utilities component in `DECISIONS.md` WD-088; documented in full here. |
| **Responsibilities** | Owns announcing a message to assistive technology when invoked. Does not own the visual message itself (Alert's, Empty State's, or Form's job) or when a component decides to announce (each caller's own responsibility). |
| **Composition** | A primitive — not composed of other components. Any component may push a message into it. |
| **Variants** | None — a single, consistent announcement mechanism, consistent with Variant Philosophy (`DECISIONS.md` WD-057). |
| **States** | Non-interactive — N/A. Visually hidden at all times, the same treatment as Visually Hidden (above), but serving live updates rather than static labeling. |
| **Accessibility** | Its entire purpose is accessibility — directly implements the mandatory accessibility requirement (`DECISIONS.md` WD-050, WD-060) for dynamic content that appears without a page navigation. Must use an appropriately polite or assertive announcement level depending on urgency (e.g., a Success confirmation vs. an Error). |
| **Token Usage** | None — no visual footprint, the same as Visually Hidden. |
| **Relationships** | Used by Alert, Spinner, Empty State (`05_FEEDBACK.md`), Form (`04_INPUTS.md`), and Preview Frame (`08_MARKETING.md`) — all five resolved by this entry. |
| **Dependencies** | Depends on: nothing (primitive, foundational tier). Depended on by: Alert, Spinner, Empty State, Form, Preview Frame, and any future component announcing a dynamic state change. |
| **Future Extension** | Available immediately to any future component needing to announce a dynamic change (a Version 2 Dashboard's live data update) without a new mechanism. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Skip Link | Documented | Above |
| Visually Hidden | Documented | Above |
| Icon | Documented | Above |
| Live Region Announcer | Documented | Above |

**Not included — rejected (`DECISIONS.md` WD-072, WD-099):** Screen Reader Only (redundant with Visually Hidden); Theme Provider, Theme Switcher helper, Keyboard Shortcut Helper, Copy to Clipboard, External Link Indicator, Loading Boundary, Error Boundary, Client Only, No SSR Wrapper, Portal.

**Alias, not a separate component (`DECISIONS.md` WD-098):** Screen Reader Announcer — the same concept as Live Region Announcer.

**Belongs to another category (`DECISIONS.md` WD-099, resolved by WD-110):** Footer — Navigation (`DESIGN_SYSTEM.md` §4); now documented in `03_NAVIGATION.md`.

**Deferred to Version 2 (`DECISIONS.md` WD-100):** Focus Trap — tied to the deferred Surfaces overlay family (Modal, Confirmation Dialog, Sheet, Drawer, Bottom Sheet, Popover, Hover Card, Side Panel — `DECISIONS.md` WD-094), to be reviewed together, not independently.
