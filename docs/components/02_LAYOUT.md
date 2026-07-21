# Component Category — Layout

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Structural wrappers — grids, sections, containers.

**Layer position:** Foundational (with Utilities) — depends on nothing else in the library (`01_FOUNDATIONS.md` §7).

**Foundation Components note:** the nine components below are Weber's approved Layout-category Foundation Components (`DECISIONS.md` WD-070, WD-071) — primitive, generic, implementation-independent building blocks. "Foundation Components" is a role, not a separate category; these entries live in Layout because that's what they structurally are.

**Category status: Complete for Version 1 (`DECISIONS.md` WD-074).** The Layout Components Workshop reviewed seventeen additional candidates and confirmed all nine components below already constitute the full Layout category — no further Layout components are expected absent a genuinely new, non-redundant, non-alias need justified by future approved documentation. The following names were considered and explicitly rejected as redundant aliases of the entries below — **do not re-propose them without new justification**: Main, Header Layout, Footer Layout, Hero Layout, Section Layout, Content Wrapper, Content Grid, Two Column Layout, Split Layout, Center Layout, Full Width Layout, Narrow Content Layout, Page Header, Page Body, Page Footer. Two additional candidates were redirected rather than rejected (`DECISIONS.md` WD-075): **Empty State** belongs in a future Feedback or Data Display phase, not Layout; **Sidebar Layout** is deferred until the Client Dashboard (Version 2) is scoped.

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. All eleven Foundation Components (this file's nine plus two in `09_UTILITIES.md`) completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Grid has since entered Implementation (`src/components/layout/grid.tsx`, `DECISIONS.md` WD-137). Aspect Ratio's own value-agnostic mechanism is now resolved (`DECISIONS.md` WD-138) but not yet implemented in code. Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## App Shell

| Field | Detail |
|---|---|
| **Purpose** | The persistent outer wrapper present on every route — provides structural slots for persistent chrome around a per-route content slot. |
| **Responsibilities** | Owns the definition and placement of its structural slots (a Navigation slot, a Footer slot, a content slot) and the Skip Link's position as the first focusable element. Does not own what fills the Navigation or Footer slots — that composition happens at a higher level, not inside App Shell — and does not own page-specific content (Page's job) or metadata. |
| **Composition** | Composes the Skip Link (`09_UTILITIES.md`) directly, and defines a Navigation slot, a Footer slot, and a content slot that renders a Page. App Shell does not compose Navigation-category components itself — see Dependencies. |
| **Variants** | None — one App Shell for the entire product, consistent with Brand Consistency (Part 2, Part 6). |
| **States** | Non-interactive itself — N/A. States belong to whatever is composed into its slots. |
| **Accessibility** | Provides the landmark structure a screen reader relies on; hosts the Skip Link as the first interactive element so keyboard users can bypass whatever occupies the Navigation slot immediately (`DECISIONS.md` WD-050, WD-060). |
| **Token Usage** | None directly — spacing and color are owned by whatever is composed into its slots. |
| **Relationships** | Wraps every Page; provides the slots that Header and Footer (`03_NAVIGATION.md`, both documented) are composed into by whatever assembles the app — App Shell does not reach up to select or import them itself. Used on every route (multi-route architecture, `DECISIONS.md` WD-043). |
| **Dependencies** | Depends on: Skip Link only — same foundational tier, fully compliant with `DECISIONS.md` WD-068. Navigation and Footer are **not** a dependency of App Shell; they are composed into its slots from outside App Shell's own definition, so dependency direction never runs from Layout up into Navigation. This is Composition First (WD-055) applied at the slot boundary: App Shell defines *where* things go, not *what* goes there. Depended on by: Page. |
| **Future Extension** | Wraps future Client Dashboard and Learning Platform routes (WD-038, WD-058) unchanged — an authenticated V2 route composes a different Navigation into the same slot, but the Shell contract and its slot-based dependency direction don't change. |

---

## Page

| Field | Detail |
|---|---|
| **Purpose** | The per-route content wrapper inside App Shell — the consistent frame every route's unique content renders into. **Clarification:** "Page" here names a logical composition concept — the frame a route's content renders into — not any framework-specific routing file or convention (e.g., Next.js's own `page` file convention, `DECISIONS.md` WD-014). The component's contract is independent of how routing is implemented, consistent with the Naming Philosophy (WD-067). |
| **Responsibilities** | Owns per-route layout consistency (spacing before the first / after the last Section). Does not own persistent chrome (App Shell), routing/URL resolution (implementation, out of scope), or SEO metadata (implementation, out of scope). |
| **Composition** | Composed of one or more Section components, arranged via Stack. |
| **Variants** | None currently justified — every Version 1 route uses the same Page contract. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Ensures heading hierarchy starts correctly beneath App Shell's landmarks (Part 6 — Typography Hierarchy: "never skip heading levels"). |
| **Token Usage** | Spacing scale (`DECISIONS.md` WD-030) for rhythm between its top-level Sections. |
| **Relationships** | Rendered inside App Shell's content slot; composed of Sections; used by every Version 1 route (`INFORMATION_ARCHITECTURE.md` §3). |
| **Dependencies** | Depends on: App Shell, Section, Stack. Depended on by: every route. |
| **Future Extension** | V2 routes (Dashboard, Learning Platform) reuse the same Page contract (WD-058) — a Dashboard "page" is this same wrapper around different Section content. |

---

## Container

| Field | Detail |
|---|---|
| **Purpose** | Constrains and centers content to one of three approved widths. |
| **Responsibilities** | Owns horizontal max-width and centering. Does not own vertical spacing (Stack) or background treatment (a Section's full-bleed background may extend beyond it, `UI_FOUNDATION.md` §3). |
| **Composition** | A primitive — not composed of other Foundation Components. |
| **Variants** | Three, directly from `DECISIONS.md` WD-035 — Reading (~720px), Standard (~1152px), Wide (~1320px). No other widths exist. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | None component-specific — purely structural; must not interfere with reading order. |
| **Token Usage** | Container width tokens (WD-035) exclusively. |
| **Relationships** | Used inside Section to constrain content; Marketing and Data Display components are typically rendered inside a Container. |
| **Dependencies** | Depends on: nothing. Depended on by: Section, most Data Display and Marketing components. |
| **Future Extension** | The same three widths serve V2 surfaces without adding a fourth unless a genuine new need is justified (Simplicity Wins, Part 10). |

---

## Section

| Field | Detail |
|---|---|
| **Purpose** | A block with exactly one job (Part 4 — Every Section Has One Job) — the direct implementation of Weber's most repeated Constitution principle. |
| **Responsibilities** | Owns its own vertical spacing boundary and, optionally, a full-bleed background distinct from its Container-constrained content. Does not own what's inside it. |
| **Composition** | Typically composes a Container wrapping a Stack or Grid of other components. |
| **Variants** | None token-defined yet — full-bleed vs. contained background treatment is a future question, not decided here. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Should map to a clear landmark/heading boundary so screen reader users can navigate section-by-section. |
| **Token Usage** | Spacing scale (WD-030) for the boundary between one Section and the next. |
| **Relationships** | Direct implementation of the nine approved Home page sections (`DECISIONS.md` WD-040) — Hero, Services, Interactive Showcase, Why Weber, Portfolio, Process, Testimonials, FAQ, Contact CTA are each expected to be one Section instance. |
| **Dependencies** | Depends on: Container, Stack or Grid. Depended on by: Page, and indirectly every Marketing/Data Display component arranged within one. |
| **Future Extension** | New Home sections or entirely new pages (V2) reuse the same Section contract — never a new page-level primitive. |

---

## Stack

| Field | Detail |
|---|---|
| **Purpose** | Arranges children in a single-axis rhythm with consistent spacing between them. |
| **Responsibilities** | Owns spacing between its direct children only. Does not own children's internal spacing or horizontal alignment logic. |
| **Composition** | A primitive — not composed of other Foundation Components. |
| **Variants** | Spacing variants map directly to the approved spacing scale (WD-030) — e.g., a "comfortable" Stack at `space.5` (24px), a "compact" Stack at `space.3` (12px). No value outside the approved scale. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Must not alter the reading/DOM order implied by its children — spacing only, never a reordering mechanism. |
| **Token Usage** | Spacing scale (WD-030) exclusively. |
| **Relationships** | Used inside Section, Page, and Container, and by most Data Display/Marketing components needing consistent vertical rhythm (e.g., Testimonials, FAQ). |
| **Dependencies** | Depends on: nothing. Depended on by: Page, Section, and most higher-layer components. |
| **Future Extension** | The same token-mapped spacing variants apply to any future component (Dashboard rows, Learning Platform lesson lists) without a new spacing system. |

---

## Grid

| Field | Detail |
|---|---|
| **Purpose** | Arranges children in a two-dimensional, token-driven rhythm — the primitive behind every card grid in the product. |
| **Responsibilities** | Owns column/row rhythm for its direct children. Does not own the visual design of the children themselves (Data Display's job). |
| **Composition** | A primitive — not composed of other Foundation Components. Its rhythm is shared with whatever layout grid the surrounding Page/Section establishes, not an independent scale. |
| **Variants** | Grid is a value-agnostic layout mechanism (`DECISIONS.md` WD-137) — it provides responsive column-arrangement infrastructure, keyed to breakpoint tier (`DECISIONS.md` WD-034), but defines no default or built-in column-count values of its own. Responsive column counts belong to each consuming component (Service Card, Portfolio Card, Blog Post Card, a future Dashboard grid), decided individually at that component's own implementation time — not to Grid itself. **Future Extension Point:** `DESIGN_TOKENS.md` does not currently define a grid-column token category; whether one is ever needed remains a future evaluation once real per-consumer usage exists to generalize from (WD-137). |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Must preserve a logical reading order for screen readers regardless of visual column arrangement. |
| **Token Usage** | Spacing scale (WD-030) for gutters; breakpoint tiers (WD-034) for responsive column adaptation. Column-count itself is deliberately not token-driven — it is a per-consumer value, not a Grid-owned one (WD-137). |
| **Relationships** | Used by Portfolio (case study grid), Services (service card grid), Blog (post listing) — all named in `INFORMATION_ARCHITECTURE.md` §15. |
| **Dependencies** | Depends on: nothing. Depended on by: Data Display components arranged in a grid (Portfolio Card, Service Card, Blog Post Card). |
| **Future Extension** | A future Dashboard's data-table-like grids reuse the same Grid primitive and gutter tokens (WD-058) rather than a separate grid system, supplying their own column counts the same way Version 1 consumers do (WD-137). Column-count tokenization (see Variants) remains a future evaluation, not decided now. |

---

## Cluster

| Field | Detail |
|---|---|
| **Purpose** | Arranges children in a wrapped, horizontal grouping — for content that doesn't need Stack's strict single-axis rhythm or Grid's two-dimensional structure. |
| **Responsibilities** | Owns horizontal spacing and wrapping behavior between direct children. Does not own vertical rhythm between wrapped rows (falls back to the spacing scale, same as Stack). |
| **Composition** | A primitive — not composed of other Foundation Components. |
| **Variants** | Spacing variants map to the approved spacing scale (WD-030), same discipline as Stack. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Must not alter the reading/DOM order of its children. |
| **Token Usage** | Spacing scale (WD-030) exclusively. |
| **Relationships** | Anticipated for Portfolio Technology Tags (`INFORMATION_ARCHITECTURE.md` §8) and icon+label pairing across the product — flagged in the Phase 1 review as an inferred rather than explicitly documented need. |
| **Dependencies** | Depends on: nothing. Depended on by: Data Display components with tag-like or wrapped-inline content (Portfolio Card's technology tags). |
| **Future Extension** | Serves any future tag/pill-heavy V2 surface (e.g., a Dashboard's status labels) without a new primitive. |

---

## Divider

| Field | Detail |
|---|---|
| **Purpose** | A structural separator between content, communicating a boundary without a full Section break. |
| **Responsibilities** | Owns the visual separation line only. Does not own the spacing around it (Stack's job). |
| **Composition** | A primitive — not composed of other Foundation Components. |
| **Variants** | None beyond the "None" radius level already named for it in `DESIGN_TOKENS.md` §5 — deliberately plain, consistent with "structural elements that should feel serious rather than soft" (`DECISIONS.md` WD-031). |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Purely decorative/structural — hidden from screen readers unless it also carries genuine semantic meaning (an implementation decision, out of scope here). |
| **Token Usage** | Border radius token `radius.none` (WD-031); color drawn from the Neutral semantic role once its value is decided (WD-036). |
| **Relationships** | Used between FAQ items and within Section boundaries where a full spacing gap isn't warranted. |
| **Dependencies** | Depends on: nothing. Depended on by: FAQ (Data Display, not yet documented), Section. |
| **Future Extension** | No anticipated change for V2 — one of the simplest, most stable Foundation Components. |

---

## Aspect Ratio

| Field | Detail |
|---|---|
| **Purpose** | Locks a content region (typically an image) to a caller-supplied width-to-height ratio, reserving its space before the content loads. |
| **Responsibilities** | Owns space reservation only. Does not own the image/media itself, its loading strategy (`UX_SPECIFICATION.md` §7; `DECISIONS.md` WD-048), or the specific ratio value it reserves — that is supplied by the caller (`DECISIONS.md` WD-138). |
| **Composition** | A primitive — not composed of other Foundation Components; typically wraps a Data Display or Marketing component's media region. |
| **Variants** | Aspect Ratio is a value-agnostic layout mechanism (`DECISIONS.md` WD-138) — it reserves space at a caller-supplied ratio but defines no built-in ratio values, no ratio enum, and no default ratio of its own. Each consuming component (Portfolio Card, Blog Post Card, Hero, Preview Frame, a future Dashboard/Learning Platform surface) supplies its own ratio, decided individually at that component's own implementation time — not to Aspect Ratio itself. **Future Extension Point:** `DESIGN_TOKENS.md` does not currently define an aspect-ratio token category, and none is introduced by WD-138; whether one is ever needed remains a future evaluation once real per-consumer usage exists to generalize from. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Prevents layout shift, directly serving "avoid sudden content shifts" (Part 6 — Loading States) — a usability and accessibility benefit, not only visual. |
| **Token Usage** | None — ratio values are deliberately not token-driven; each is a per-consumer value, not an Aspect-Ratio-owned one (`DECISIONS.md` WD-138). |
| **Relationships** | Used within Portfolio Card and Blog Post Card wherever a thumbnail image is displayed (`INFORMATION_ARCHITECTURE.md` §8, §9), and within Hero (optionally, for hero media) and Preview Frame (for the Interactive Showcase preview area) (`08_MARKETING.md`). |
| **Dependencies** | Depends on: nothing. Depended on by: Portfolio Card, Blog Post Card (Data Display); Hero (Marketing, optional), Preview Frame (Marketing). |
| **Future Extension** | Directly reusable for any future image-heavy V2 surface (e.g., Learning Platform course thumbnails), which supplies its own ratio the same way Version 1 consumers do (WD-138). Ratio tokenization (see Variants) remains a future evaluation, not decided now. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| App Shell | Documented | Above |
| Page | Documented | Above |
| Container | Documented | Above |
| Section | Documented | Above |
| Stack | Documented | Above |
| Grid | Documented | Above |
| Cluster | Documented | Above |
| Divider | Documented | Above |
| Aspect Ratio | Documented | Above |

**Not included (`DECISIONS.md` WD-072):** Spacer (redundant with Stack/Cluster gap-based spacing).

**Category closed for Version 1 (`DECISIONS.md` WD-074):** this is the complete Layout component set — see the Category status note above for the full list of rejected aliases.
