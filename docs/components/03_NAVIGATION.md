# Component Category — Navigation

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Wayfinding.

**Layer position:** Second tier (with Inputs, Feedback) — may compose Layout and Utilities (tier 1) only, never the reverse (`01_FOUNDATIONS.md` §7; `DECISIONS.md` WD-068).

**Category status: Complete, no open blockers.** Nine components approved and documented — eight via `DECISIONS.md` WD-076, plus Footer via WD-110. Six candidates were explicitly rejected — Navigation Bar, Mobile Navigation, Navigation Group, a standalone Logo Component, Search Trigger (`DECISIONS.md` WD-077), and Theme Switcher (`DECISIONS.md` WD-080, confirmed not approved for Version 1 — dark theme remains the only approved theme, WD-003; deferred until a future theme-expansion phase) — none may be re-proposed without new justification. The one forward dependency (CTA inside Navigation → Button) recorded per WD-079 is now resolved — Button is documented in `04_INPUTS.md` (`DECISIONS.md` WD-081, WD-084).

**Footer note (`DECISIONS.md` WD-110, WD-111):** Footer is a composition-only component, structurally parallel to Header — it introduces no new primitive and reuses Brand Link rather than duplicating it. Language Switcher is explicitly not composed into Footer by default, keeping its placement independent of Footer's own contract. **No Footer content (links, trust signals, Support Pages tier items, legal pages) is approved** — see the Footer entry's own notes below.

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. All nine components completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Header

| Field | Detail |
|---|---|
| **Purpose** | The landmark region that fills App Shell's Navigation slot — composes Brand Link, Navigation Menu, the CTA element, and Mobile Navigation Toggle into one persistent, recognizable unit. |
| **Responsibilities** | Owns composition and arrangement of its children into one landmark region. Does not own Navigation Menu's link-list logic, Mobile Navigation Toggle's own open/closed state, or App Shell's slot definition itself. |
| **Composition** | Composes Brand Link, Navigation Menu, CTA inside Navigation, and Mobile Navigation Toggle, arranged via Cluster inside a Container (`02_LAYOUT.md` — Layout, tier 1). |
| **Variants** | None — one Header for the entire product, consistent with Brand Consistency (Part 2, Part 6). |
| **States** | Non-interactive itself — N/A. States belong to its children. |
| **Accessibility** | Should map to a navigation landmark region. Does not duplicate App Shell's own landmark/Skip Link responsibility (`09_UTILITIES.md`). |
| **Token Usage** | Spacing scale (`DECISIONS.md` WD-030) via Cluster and Container; no direct token consumption of its own. |
| **Relationships** | Composed into App Shell's Navigation slot (`02_LAYOUT.md`) from outside App Shell's own definition — slot-based composition, not a hard dependency in either direction (Component Audit #1 correction). |
| **Dependencies** | Depends on: Brand Link, Navigation Menu, CTA inside Navigation, Mobile Navigation Toggle (same tier); Cluster, Container (Layout, tier 1, downward — compliant with WD-068). Depended on by: nothing structurally — composed into App Shell's slot, not depended upon by it. |
| **Future Extension** | For Version 2 authenticated routes, Header composes a future User Menu alongside or instead of the CTA, without Header's own contract changing (`DECISIONS.md` WD-058). |

---

## Footer

| Field | Detail |
|---|---|
| **Purpose** | The landmark region that fills App Shell's Footer slot — the closing counterpart to Header, carrying supporting trust signals and utility links (`INFORMATION_ARCHITECTURE.md` §4). |
| **Responsibilities** | Owns composition and arrangement of its content into one landmark region. Does not own individual link destinations, Support Pages content, or App Shell's slot definition itself — all remain `[PENDING PROJECT OWNER DECISION]` (`INFORMATION_ARCHITECTURE.md` §4, `ROUTES.md` §4). |
| **Composition** | Composes Container and Stack or Cluster (`02_LAYOUT.md` — Layout, tier 1) for its arrangement, and Brand Link (same tier, reused rather than duplicated — `DECISIONS.md` WD-111). Language Switcher is explicitly **not** composed into Footer by default (`DECISIONS.md` WD-111) — its placement remains independent of Footer's own contract. |
| **Variants** | None — one Footer for the entire product, no page-specific or route-specific variants, consistent with Brand Consistency (Part 2, Part 6) and confirmed directly (`DECISIONS.md` WD-110). |
| **States** | Non-interactive itself — N/A. States belong to whatever interactive links it composes. |
| **Accessibility** | Should map to a landmark region, the closing counterpart to Header's navigation landmark. Does not duplicate App Shell's own Skip Link responsibility (`09_UTILITIES.md`). Every composed link inherits the standard keyboard/focus/screen-reader baseline (Part 6). |
| **Token Usage** | Spacing scale (`DECISIONS.md` WD-030) via Container and Stack/Cluster; no direct token consumption of its own — the same pattern as Header. |
| **Relationships** | Composed into App Shell's Footer slot (`02_LAYOUT.md`) from outside App Shell's own definition — slot-based composition, not a hard dependency in either direction, the same pattern already established for Header. Used on every route (multi-route architecture, `DECISIONS.md` WD-043). Non-sticky, appears exactly once per page (`DECISIONS.md` WD-045). |
| **Dependencies** | Depends on: Container, Stack or Cluster (Layout, tier 1, downward); Brand Link (Navigation, same tier). Depended on by: nothing structurally — composed into App Shell's slot, not depended upon by it. |
| **Future Extension** | Absorbs the currently-empty Support Pages tier (`INFORMATION_ARCHITECTURE.md` §4) and future Client Dashboard/Learning Platform links without its own contract changing — content grows, composition shape does not, the same "Future Extension" shape already used for Header's Version 2 User Menu. |

---

## Navigation Menu

| Field | Detail |
|---|---|
| **Purpose** | Surfaces the Core Pages in a predictable, minimal set — the direct implementation of "Primary Navigation" (`ROUTES.md` §4; `INFORMATION_ARCHITECTURE.md` §4). |
| **Responsibilities** | Owns rendering the list of destinations and adapting across breakpoints (single-adaptive-component model, `DECISIONS.md` WD-059). Does not own each link's own destination/active-state logic (Navigation Item's job) or the mobile toggle's state (Mobile Navigation Toggle's job). |
| **Composition** | Composed of Navigation Item instances, arranged via Cluster or Stack. |
| **Variants** | None beyond its own responsive adaptation — collapsed (Mobile/Tablet) vs. expanded (Laptop/Desktop), governed by breakpoint tiers (WD-034). This is the same component adapting, not a chosen visual variant in the WD-057 sense. |
| **States** | Default, Focus, Active/Pressed — largely delegated to Navigation Item. Navigation Menu itself carries a collapsed/expanded state tied to Mobile Navigation Toggle. |
| **Accessibility** | Must preserve a logical reading/focus order regardless of collapsed/expanded state; the current route must be communicated as such, not only shown visually. |
| **Token Usage** | Spacing scale (WD-030) for item spacing; breakpoint tiers (WD-034) for responsive collapse. |
| **Relationships** | Composed inside Header; composed of Navigation Items; each item links to a Core or Content Page (`INFORMATION_ARCHITECTURE.md` §3). |
| **Dependencies** | Depends on: Navigation Item (same tier); Cluster or Stack (Layout, tier 1, downward). Depended on by: Header. |
| **Future Extension** | New Navigation Items are added as Version 2 routes (Learning Platform, Client Dashboard) are scoped — composition, not redesign (`DECISIONS.md` WD-058). |

---

## Navigation Item

| Field | Detail |
|---|---|
| **Purpose** | A single link within Navigation Menu, representing one destination. |
| **Responsibilities** | Owns its own destination link and active/current-route state. Does not own the list's overall arrangement (Navigation Menu's job). |
| **Composition** | A primitive within the Navigation category. Distinct from the CTA element — a link, not a button, so it does not carry the Button dependency (`04_INPUTS.md`) that CTA inside Navigation does. |
| **Variants** | None — one visual treatment, differentiated only by state. |
| **States** | Default, Hover (desktop only), Focus, Active/Pressed, and **Current** — indicating the active route. Current is a Navigation-specific addition beyond the nine canonical states (`DECISIONS.md` WD-044), since none of the nine directly names "this is where the visitor currently is." |
| **Accessibility** | The Current state must be communicated to assistive technology, not only visually distinguished (`DECISIONS.md` WD-050, WD-060). |
| **Token Usage** | Typography (Body-adjacent role, WD-027); color tokens for default vs. current state — semantic values approved (`DECISIONS.md` WD-036, WD-130). |
| **Relationships** | Rendered by Navigation Menu; links to one of the Core or Content Pages. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Navigation Menu. |
| **Future Extension** | The same pattern extends to Version 2 routes without a new component. |

---

## Brand Link

| Field | Detail |
|---|---|
| **Purpose** | The logo, wrapped in a link back to Home — Weber's persistent, universally expected brand anchor. |
| **Responsibilities** | Owns the link-to-Home action and display of the approved logo asset. Does not own the logo asset's own visual definition or Header's overall arrangement. |
| **Composition** | A primitive — wraps the official Weber logo (`DECISIONS.md` WD-004) in a link. |
| **Variants** | None — one Brand Link, consistent with the logo being the single source of truth for brand identity (WD-004) and never redesigned without approval. |
| **States** | Default, Hover (desktop only), Focus, Active/Pressed. |
| **Accessibility** | Must carry an accessible name/label describing its destination (Home), not rely on the logo image alone. |
| **Token Usage** | Spacing scale (WD-030) for its clickable target size, consistent with touch-target requirements (`UI_FOUNDATION.md` §7). |
| **Relationships** | Composed inside Header; links to Home (`INFORMATION_ARCHITECTURE.md` §3). |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Header. |
| **Future Extension** | Unchanged by Version 2 — every future route inherits it automatically via Header/App Shell. |

---

## Mobile Navigation Toggle

| Field | Detail |
|---|---|
| **Purpose** | Triggers Navigation Menu's collapsed state open or closed on smaller viewports. |
| **Responsibilities** | Owns its own open/closed state and the act of triggering Navigation Menu's visibility. Does not own Navigation Menu's own list content. |
| **Composition** | A primitive. Composes Icon (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved) for its icon content. |
| **Variants** | None — one toggle, two states. |
| **States** | Default, Focus, Active/Pressed, and **Open/Closed** — a toggle-specific state pair, a Navigation-specific addition beyond the nine canonical states, the same way Navigation Item's Current state is. |
| **Accessibility** | Its expanded/collapsed state must be communicated to assistive technology (`DECISIONS.md` WD-050, WD-060); must be reachable and operable by keyboard alone. |
| **Token Usage** | Spacing scale (WD-030) for its touch target size; motion tokens (WD-033) for Navigation Menu's reveal/hide transition it triggers. |
| **Relationships** | Composed inside Header; controls Navigation Menu's visibility on Mobile/Tablet (`DECISIONS.md` WD-034). |
| **Dependencies** | Depends on: Icon (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved). Depended on by: Header. |
| **Future Extension** | Unchanged by Version 2 — the same collapse/expand pattern applies to any future Navigation Menu content. |

---

## CTA inside Navigation

| Field | Detail |
|---|---|
| **Purpose** | Keeps a partnership-toned invitation to Contact persistently reachable from every route (`DECISIONS.md` WD-045), without being buried inside the collapsed mobile menu. |
| **Responsibilities** | Owns its own placement within Header and its link to Contact. Does not own its own visual/interactive definition — see Dependencies. |
| **Composition** | Composed of Button (`04_INPUTS.md`, documented — `DECISIONS.md` WD-081) with Contact-directed link behavior and the approved partnership-toned copy (`DECISIONS.md` WD-007). |
| **Variants** | Inherits Button's variants — visual variants mapped to approved color roles, size variants mapped to the type/spacing scale (`04_INPUTS.md` — Button; `DECISIONS.md` WD-057). |
| **States** | Inherits Button's state model — all nine canonical states apply (`DECISIONS.md` WD-044), most directly Default, Hover, Focus, Active/Pressed, Disabled, Loading. |
| **Accessibility** | Inherits Button's accessibility contract (`04_INPUTS.md`); must remain reachable within Header regardless of Navigation Menu's collapsed/expanded state (WD-045). |
| **Token Usage** | Inherits Button's token usage (`04_INPUTS.md` — typography, spacing, color, radius, motion tokens); no independent token consumption. |
| **Relationships** | Composed inside Header; links to Contact (`INFORMATION_ARCHITECTURE.md` §3); carries the approved CTA copy (`DECISIONS.md` WD-007). |
| **Dependencies** | **Depends on: Button (`04_INPUTS.md`, Inputs — same tier, `DECISIONS.md` WD-068 compliant).** This forward dependency, originally recorded per direct Project Owner decision (`DECISIONS.md` WD-079), is now resolved — Button is documented. Depended on by: Header. |
| **Future Extension** | Once Button is documented, this entry is updated to reference its final variant/state contract — no redesign of the CTA's own placement or purpose. |

---

## Breadcrumb *(Optional)*

| Field | Detail |
|---|---|
| **Purpose** | Orients a visitor who has landed mid-hierarchy — on second-level content (an individual Service, a Portfolio case study, a Blog post) — back toward the shallow core structure. |
| **Responsibilities** | Owns rendering the path from Home to the current second-level page. Does not own the core five-destination Primary Navigation (Navigation Menu's job) — never used for the shallow core itself (`DECISIONS.md` WD-045). |
| **Composition** | Composed of link primitives similar to Navigation Item, arranged via Cluster — a distinct list from Navigation Menu, scoped to a different purpose. |
| **Variants** | None currently defined. |
| **States** | Default, Hover (desktop only), Focus — per link. |
| **Accessibility** | Should be marked as its own distinct landmark/region so it is not confused with Primary Navigation by assistive technology. |
| **Token Usage** | Typography (Caption role, WD-027); spacing scale (WD-030). |
| **Relationships** | Used only on second-level content pages (individual Services, Portfolio case studies, Blog posts — `INFORMATION_ARCHITECTURE.md` §6, §8, §9) — never on the five Core Pages. |
| **Dependencies** | Depends on: nothing structurally beyond generic link primitives. Depended on by: second-level content pages (Data Display, not yet documented). |
| **Future Extension** | Extends naturally to future second-level content (e.g., Learning Platform course detail pages) without a new component. |

---

## Language Switcher

| Field | Detail |
|---|---|
| **Purpose** | Lets a visitor switch between Weber's approved languages, Arabic and English (`DECISIONS.md` WD-012), using the approved internationalization library (next-intl, WD-023). |
| **Responsibilities** | Owns the language-selection action only. Does not own the translation/content-loading mechanism (implementation, out of scope) or RTL/LTR layout adaptation itself (a cross-cutting concern belonging to the components being displayed). |
| **Composition** | A primitive — not composed of other Navigation components. |
| **Variants** | None — two languages currently approved; no variant system needed for a two-option switch. |
| **States** | Default, Hover (desktop only), Focus, Active/Pressed, and a Current-language indicator state. |
| **Accessibility** | Must announce the current language and the action's effect to assistive technology; must remain keyboard-operable. |
| **Token Usage** | Typography and spacing scale (WD-030); no color/motion beyond standard interactive states. |
| **Relationships** | Composed inside Header, alongside the CTA element and Mobile Navigation Toggle, as Utility Navigation content (`ROUTES.md` §4). Categorization as a Navigation Component (rather than Utilities) is a direct Project Owner decision (`DECISIONS.md` WD-078). |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Header. |
| **Future Extension** | Extends to additional languages if Weber ever approves more, without changing its own contract — only its option list grows. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Header | Documented | Above |
| Footer | Documented (content pending — `DECISIONS.md` WD-110) | Above |
| Navigation Menu | Documented | Above |
| Navigation Item | Documented | Above |
| Brand Link | Documented | Above |
| Mobile Navigation Toggle | Documented | Above |
| CTA inside Navigation | Documented (depends on Button, `04_INPUTS.md` — resolved) | Above |
| Breadcrumb | Documented (optional) | Above |
| Language Switcher | Documented | Above |

**Not included:** Navigation Bar, Mobile Navigation, Navigation Group, standalone Logo Component, Search Trigger (`DECISIONS.md` WD-077); Theme Switcher (`DECISIONS.md` WD-080 — confirmed not approved for Version 1, deferred until a future theme-expansion phase).
