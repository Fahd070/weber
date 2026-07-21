# Component Category — Data Display

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Presenting content instances.

**Layer position:** Third tier (with Surfaces) — may depend on Layout, Utilities, Navigation, Inputs, and Feedback (`01_FOUNDATIONS.md` §7; `DECISIONS.md` WD-068). Same-tier dependencies on Surfaces are allowed under WD-068.

**Category status:** Ten required components plus two optional components approved and documented — `DECISIONS.md` WD-089, WD-112. Fifteen candidates were explicitly rejected as aliases, redundant, or unjustified (`DECISIONS.md` WD-090) — **Price Display** specifically contradicts the Consultation-First Pricing decision (`DECISIONS.md` WD-006) and may not be re-proposed without first revisiting WD-006 itself. Card was redirected to the Surfaces category and is now documented there; Data Table and Progress Metric are deferred to Version 2 (`DECISIONS.md` WD-091).

**Naming clarification (`DECISIONS.md` WD-089, extended by WD-112):** Case Study Layout, Article Layout, and Service Detail Layout are Data Display content components — a single-item, expanded content presentation — **not** Layout-category primitives. The word "Layout" in their names describes their role within Data Display and must never be confused with the closed Layout category (`02_LAYOUT.md`, `DECISIONS.md` WD-074).

**Resolved dependency:** Service Card, Portfolio Card, Blog Post Card, and Testimonial Card each compose the Surfaces Card primitive, now documented in `07_SURFACES.md` (`DECISIONS.md` WD-092). This is the same forward-dependency pattern previously used for Navigation's CTA element pending Button (WD-079, resolved by WD-081/WD-084) — now resolved.

**Service Detail Layout note (`DECISIONS.md` WD-112):** composes only Section, Container, and Stack (Layout, tier 1) — no Grid, Tag, or Key Value Pair, since `INFORMATION_ARCHITECTURE.md` §6 describes no comparable tag or structured-fact concept for Services. CTA Banner (Marketing) is explicitly **not** a dependency — it is a page-level composition, the same relationship Case Study Layout and Article Layout already have with CTA Banner, now made explicit to preserve WD-068 compliance. Cross-links to Portfolio are an optional, page-owned content area, not a component dependency. No service-detail content is approved.

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. All twelve components completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Case Study Layout and Service Card have since entered Implementation (`src/components/data-display/case-study-layout.tsx`, `service-card.tsx`) — Case Study Layout unblocked by Grid (`DECISIONS.md` WD-137). Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Service Card

| Field | Detail |
|---|---|
| **Purpose** | Presents one of Weber's four Version 1 services in a scannable, grid-arranged summary (`DECISIONS.md` WD-037). |
| **Responsibilities** | Owns presenting a single service's name, short description, and an optional entry point to learn more — the entry point is not rendered when there is no Service Detail route for it to link to, e.g. on the Services listing page itself, to avoid a self-link (`DECISIONS.md` WD-146). Does not own the full service detail content (Service Detail Layout's job, `INFORMATION_ARCHITECTURE.md` §6) or the grid arrangement itself (Grid's job). |
| **Composition** | Composes the Surfaces Card primitive (`07_SURFACES.md`, `DECISIONS.md` WD-092) plus, when rendered, a Button (`04_INPUTS.md`) as its entry point. Arranged within a Grid (`02_LAYOUT.md`). Support for omitting the entry point is approved (`DECISIONS.md` WD-146) as a small, additive prop on the existing component — not yet implemented. |
| **Variants** | None beyond Card's own elevation variant — Service Card itself has one presentation, consistent with Variant Philosophy (WD-057). Omitting the entry point is a usage/prop choice, not a new visual variant. |
| **States** | Default and hover/focus when its entry point is rendered (inherits interactive affordance from the composed Button/link); non-interactive when the entry point is omitted (`DECISIONS.md` WD-146) or otherwise. |
| **Accessibility** | When rendered, the entire card or its explicit entry point must be keyboard reachable and clearly labeled with the service name, not a generic "Learn more." |
| **Token Usage** | Typography (Heading/Body roles, WD-027), spacing scale (WD-030), radius (WD-031) via the composed Card, semantic color roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by the Home Services section (entry point rendered, linking onward to `/services`) and the Version 1 Services listing page (entry point not rendered — `DECISIONS.md` WD-146). Links to Service Detail Layout only apply to a future phase, once individual Service Detail routes exist. |
| **Dependencies** | Depends on: Card (Surfaces, same tier — `DECISIONS.md` WD-092, resolved); Grid (Layout, tier 1, downward); Button (Inputs, tier 2, downward, when the entry point is rendered). Depended on by: Home Services section, Services page. |
| **Future Extension** | The same card contract extends to any future service added post-Version 1 without a new component. |

---

## Portfolio Card

| Field | Detail |
|---|---|
| **Purpose** | Presents one portfolio project as a scannable grid entry, linking to its full Case Study Layout. |
| **Responsibilities** | Owns presenting a project's thumbnail, name, and technology tags at listing scale. Does not own the full case study content (Case Study Layout's job). |
| **Composition** | Composes the Surfaces Card primitive (`07_SURFACES.md`, WD-092), an Aspect Ratio (`02_LAYOUT.md`) for its thumbnail, one or more Tag instances for its technologies, arranged within a Grid (`02_LAYOUT.md`). |
| **Variants** | None beyond Card's own elevation variant, consistent with Variant Philosophy (WD-057). |
| **States** | Default and hover/focus (the whole card is typically the link target to its Case Study Layout); non-interactive otherwise. |
| **Accessibility** | The card's link target must have an accessible name matching the project name, not a generic "View project." |
| **Token Usage** | Typography (Heading/Caption roles, WD-027), spacing scale (WD-030), radius (WD-031) via the composed Card, semantic color roles for its Tags (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by the Home Portfolio section and the Portfolio listing (`INFORMATION_ARCHITECTURE.md` §8, WD-040); links to Case Study Layout. |
| **Dependencies** | Depends on: Card (Surfaces, same tier — WD-092, resolved); Aspect Ratio, Grid (Layout, tier 1, downward); Tag (Data Display, same tier). Depended on by: Home Portfolio section, Portfolio listing. |
| **Future Extension** | Extends to any future portfolio project without a new component. |

---

## Blog Post Card

| Field | Detail |
|---|---|
| **Purpose** | Presents one blog post as a scannable listing entry, linking to its full Article Layout. |
| **Responsibilities** | Owns presenting a post's thumbnail, title, category, and excerpt at listing scale. Does not own the full article content (Article Layout's job). |
| **Composition** | Composes the Surfaces Card primitive (`07_SURFACES.md`, WD-092), an Aspect Ratio for its thumbnail, a Tag for its category label, and a Stack for internal rhythm (all `02_LAYOUT.md` where applicable), arranged within a Grid. |
| **Variants** | None beyond Card's own elevation variant, consistent with Variant Philosophy (WD-057). |
| **States** | Default and hover/focus (the whole card is typically the link target to its Article Layout); non-interactive otherwise. |
| **Accessibility** | The card's link target must have an accessible name matching the post title, not a generic "Read more." |
| **Token Usage** | Typography (Heading/Body/Caption roles, WD-027), spacing scale (WD-030) via Stack, radius (WD-031) via the composed Card, semantic color for its Tag (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by the Blog listing (`INFORMATION_ARCHITECTURE.md` §9, WD-039); links to Article Layout. |
| **Dependencies** | Depends on: Card (Surfaces, same tier — WD-092, resolved); Aspect Ratio, Grid, Stack (Layout, tier 1, downward); Tag (Data Display, same tier). Depended on by: Blog listing. |
| **Future Extension** | Extends to any future blog post without a new component. |

---

## Testimonial Card

| Field | Detail |
|---|---|
| **Purpose** | Presents one client testimonial — quote, author, and optionally their role/company — within the Testimonials Home section (`DECISIONS.md` WD-040). |
| **Responsibilities** | Owns presenting a single testimonial's quote and attribution. Does not own the section's overall arrangement (Section/Grid or Stack's job). |
| **Composition** | Composes the Surfaces Card primitive (`07_SURFACES.md`, WD-092) and, optionally, an Avatar for the author's photo. |
| **Variants** | None beyond Card's own elevation variant, consistent with Variant Philosophy (WD-057). |
| **States** | Non-interactive — a static presentation. |
| **Accessibility** | The quote must be marked up so assistive technology identifies it as a quotation with clear attribution. |
| **Token Usage** | Typography (Body/Caption roles, WD-027), spacing scale (WD-030), radius (WD-031) via the composed Card, semantic color roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used exclusively by the Home Testimonials section (`INFORMATION_ARCHITECTURE.md` §8, WD-040). |
| **Dependencies** | Depends on: Card (Surfaces, same tier — WD-092, resolved); optionally Avatar (Data Display, same tier). Depended on by: Home Testimonials section. |
| **Future Extension** | Extends to any future testimonial without a new component; a future review-source integration (e.g., a rating) would be evaluated against Variant Philosophy (WD-057) before considering a new component. |

---

## Tag

| Field | Detail |
|---|---|
| **Purpose** | A small labeled marker identifying a category or attribute of the content it's attached to. |
| **Responsibilities** | Owns rendering a single short label with a consistent visual treatment. Does not own the logic of what labels apply to what content (a data/content concern, out of scope per Constitution — content never lives in components). |
| **Composition** | A primitive — not composed of other Data Display components. |
| **Variants** | None beyond what its two approved uses require — technology identification on Portfolio Card, and category labeling on Blog Post Card — both served by the same single component rather than two separate ones, consistent with Variant Philosophy (WD-057). |
| **States** | Non-interactive by default; may be a link in listing/filtering contexts (out of scope for Version 1 — no approved filtering feature exists). |
| **Accessibility** | Must remain readable as plain text to assistive technology, not conveyed by color alone. |
| **Token Usage** | Typography (Caption role, WD-027), spacing scale (WD-030), radius (WD-031), semantic color roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by Portfolio Card (as Technology Tag) and Blog Post Card (as Category label) — both named in `INFORMATION_ARCHITECTURE.md` §15. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Portfolio Card, Blog Post Card, Case Study Layout, Article Layout. |
| **Future Extension** | Reused for any future tag-like labeling need (e.g., a Dashboard status label) without a new component, subject to Variant Philosophy (WD-057). |

---

## Timeline

| Field | Detail |
|---|---|
| **Purpose** | Presents Weber's process as an ordered sequence of steps — the direct implementation of the Home Process section (`DECISIONS.md` WD-040, WD-042). |
| **Responsibilities** | Owns the ordered, step-by-step presentation of the process content. Does not own the process content itself (a content concern). |
| **Composition** | Composes a Stack (`02_LAYOUT.md`) for its step rhythm. |
| **Variants** | None currently justified — one process, one presentation, consistent with Variant Philosophy (WD-057). |
| **States** | Non-interactive — a static, ordered presentation. |
| **Accessibility** | Must convey its ordered/sequential nature to assistive technology (e.g., an ordered list semantic), not rely on visual position alone. |
| **Token Usage** | Typography (Heading/Body roles, WD-027), spacing scale (WD-030) via Stack, semantic color roles for step markers (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used exclusively by the Home Process section (`INFORMATION_ARCHITECTURE.md` §8, WD-042). |
| **Dependencies** | Depends on: Stack (Layout, tier 1, downward). Depended on by: Home Process section. |
| **Future Extension** | No anticipated Version 1 reuse beyond Process; a future feature requiring a different ordered sequence would be evaluated against this same component before a new one is proposed. |

---

## Accordion

| Field | Detail |
|---|---|
| **Purpose** | Presents a list of expandable/collapsible items — the direct implementation of the FAQ section's accordion-style interaction (`INFORMATION_ARCHITECTURE.md` §15, `DECISIONS.md` WD-040). |
| **Responsibilities** | Owns the expand/collapse interaction and state for its items. Does not own the FAQ content itself. |
| **Composition** | Composes a Stack (`02_LAYOUT.md`) for its item rhythm and a Divider (`02_LAYOUT.md`) between items. |
| **Variants** | Single-expand vs. multi-expand behavior — both map to the same component's interaction model, not separate components, consistent with Variant Philosophy (WD-057). |
| **States** | Each item: collapsed (default) and expanded; plus standard interactive states (hover, focus) on its toggle control. |
| **Accessibility** | Toggle controls must be keyboard operable and expose expanded/collapsed state to assistive technology (e.g., `aria-expanded`); focus must not be lost on toggle. |
| **Token Usage** | Typography (Body role, WD-027), spacing scale (WD-030) via Stack, motion tokens (WD-033) for the expand/collapse transition, reduced-motion-safe. |
| **Relationships** | Used exclusively by the Home FAQ section (`INFORMATION_ARCHITECTURE.md` §15, WD-040). |
| **Dependencies** | Depends on: Stack, Divider (Layout, tier 1, downward). Depended on by: Home FAQ section. |
| **Future Extension** | Reused for any future expandable-list need (e.g., a Dashboard help section) without a new component. |

---

## Case Study Layout

| Field | Detail |
|---|---|
| **Purpose** | Presents one portfolio project's full case study content on its own route. **A Data Display content component, not a Layout-category primitive** — the name describes an expanded, single-item content presentation, not a structural wrapper (`DECISIONS.md` WD-089). |
| **Responsibilities** | Owns arranging a single case study's full content (overview, technologies, outcome, imagery) into a coherent reading experience. Does not own the page-level structural wrapping (Page/Section/Container — Layout's job) or the grid-listing presentation (Portfolio Card's job). |
| **Composition** | Composes Section, Container, Stack, Grid (`02_LAYOUT.md`, tier 1) for its internal structure, plus one or more Tag instances and, optionally, Key Value Pair for structured project facts (e.g., client, timeline, technologies used). |
| **Variants** | None currently justified — one case study content shape, consistent with Variant Philosophy (WD-057). |
| **States** | Non-interactive — a static content presentation. |
| **Accessibility** | Must maintain correct heading hierarchy for its content sections (Part 6 — Typography Hierarchy). |
| **Token Usage** | Typography (Heading/Body roles, WD-027), spacing scale (WD-030) via Stack/Grid, semantic color roles for its Tags (WD-036, WD-130 — hex values approved). |
| **Relationships** | Rendered on the individual portfolio project route, linked from Portfolio Card (`INFORMATION_ARCHITECTURE.md` §8). |
| **Dependencies** | Depends on: Section, Container, Stack, Grid (Layout, tier 1, downward); Tag (Data Display, same tier); optionally Key Value Pair (Data Display, same tier). Depended on by: the individual portfolio project route. |
| **Future Extension** | Extends to any future portfolio project without a new component; a structurally different future content type would be evaluated against this component before a new one is proposed. |

---

## Article Layout

| Field | Detail |
|---|---|
| **Purpose** | Presents one blog post's full article content on its own route. **A Data Display content component, not a Layout-category primitive** — the name describes an expanded, single-item content presentation, not a structural wrapper (`DECISIONS.md` WD-089). |
| **Responsibilities** | Owns arranging a single article's full content (title, category, body, author) into a coherent reading experience. Does not own the page-level structural wrapping (Page/Section/Container — Layout's job) or the listing presentation (Blog Post Card's job). |
| **Composition** | Composes Section, Container, Stack (`02_LAYOUT.md`, tier 1) for its internal structure, plus a Tag for its category label. |
| **Variants** | None currently justified — one article content shape, consistent with Variant Philosophy (WD-057). |
| **States** | Non-interactive — a static content presentation. |
| **Accessibility** | Must maintain correct heading hierarchy for its content (Part 6 — Typography Hierarchy); reading width should favor the Reading container (`DECISIONS.md` WD-035). |
| **Token Usage** | Typography (Heading/Body roles, WD-027), spacing scale (WD-030) via Stack, semantic color role for its Tag (WD-036, WD-130 — hex values approved). |
| **Relationships** | Rendered on the individual blog post route, linked from Blog Post Card (`INFORMATION_ARCHITECTURE.md` §9). |
| **Dependencies** | Depends on: Section, Container, Stack (Layout, tier 1, downward); Tag (Data Display, same tier). Depended on by: the individual blog post route. |
| **Future Extension** | Extends to any future blog post without a new component. |

---

## Service Detail Layout

| Field | Detail |
|---|---|
| **Purpose** | Presents one of the four Version 1 services' full detail content on its own route. This route is not part of Version 1 — the component is approved and implemented ahead of its route, which remains a future phase (`DECISIONS.md` WD-146). **A Data Display content component, not a Layout-category primitive** — the name describes an expanded, single-item content presentation, not a structural wrapper (`DECISIONS.md` WD-089, WD-112). |
| **Responsibilities** | Owns arranging a single service's full content into a coherent reading experience. Does not own the page-level structural wrapping (Page/Section/Container — Layout's job), the grid-listing presentation (Service Card's job), or its conversion action (CTA Banner — composed alongside it at the page level, never inside it, `DECISIONS.md` WD-112). |
| **Composition** | Composes Section, Container, Stack (`02_LAYOUT.md`, tier 1) for its internal structure. **Cross-links to Portfolio** (named in `INFORMATION_ARCHITECTURE.md` §15) are an optional content area owned by the page composition — not composed inside Service Detail Layout itself (`DECISIONS.md` WD-112). |
| **Variants** | None currently justified — one service-detail content shape, consistent with Variant Philosophy (WD-057). Templates' distinct positioning (`INFORMATION_ARCHITECTURE.md` §6 — "should be presented distinctly, not as a peer category") is a content decision, not grounds for a structural variant. |
| **States** | Non-interactive — a static content presentation. |
| **Accessibility** | Must maintain correct heading hierarchy for its content (Part 6 — Typography Hierarchy). |
| **Token Usage** | Typography (Heading/Body roles, WD-027), spacing scale (WD-030) via Stack. |
| **Relationships** | Will be rendered on the individual Service route once that future-phase route is built, linked from Service Card (`INFORMATION_ARCHITECTURE.md` §6, §15; `DECISIONS.md` WD-146). CTA Banner (Marketing) and Breadcrumb (Navigation) would appear on the same route as page-level co-compositions, never as Service Detail Layout dependencies. |
| **Dependencies** | Depends on: Section, Container, Stack (Layout, tier 1, downward). Depended on by: the individual Service route (future phase, not Version 1 — `DECISIONS.md` WD-146). |
| **Future Extension** | Extends to any future service added post-Version 1 without a new component. |

---

## Avatar (Optional)

| Field | Detail |
|---|---|
| **Purpose** | Presents a small, circular (or otherwise token-defined shape) representation of a person — typically a photo — for attribution contexts. |
| **Responsibilities** | Owns rendering a single person's image at a fixed small size. Does not own the surrounding attribution text (Testimonial Card's job). |
| **Composition** | A primitive — not composed of other Data Display components. |
| **Variants** | Size variants mapped to the spacing scale (WD-030); no other variant currently justified. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Must include appropriate alternative text identifying the person, or be marked decorative when redundant with adjacent visible text. |
| **Token Usage** | Spacing scale (WD-030) for sizing, radius (WD-031) for its shape. |
| **Relationships** | Optionally composed into Testimonial Card for author photos. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Testimonial Card (optional). |
| **Future Extension** | Reused for any future person-representation need (e.g., a Dashboard user profile) without a new component. |

---

## Key Value Pair (Optional)

| Field | Detail |
|---|---|
| **Purpose** | Presents one label/value fact pair — e.g., "Client: Acme Co." — for structured project or content facts. |
| **Responsibilities** | Owns rendering a single label/value pair consistently. Does not own the arrangement of multiple pairs (Stack or Grid's job). |
| **Composition** | A primitive — not composed of other Data Display components. |
| **Variants** | None currently justified — one label/value presentation, consistent with Variant Philosophy (WD-057). |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Must convey the label/value relationship semantically to assistive technology, not through visual proximity alone. |
| **Token Usage** | Typography (Caption/Body roles, WD-027), spacing scale (WD-030). |
| **Relationships** | Optionally composed into Case Study Layout for structured project facts. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Case Study Layout (optional). |
| **Future Extension** | Reused for any future structured-fact presentation (e.g., a Dashboard summary panel) without a new component. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Service Card | Documented | Above |
| Portfolio Card | Documented | Above |
| Blog Post Card | Documented | Above |
| Testimonial Card | Documented | Above |
| Tag | Documented | Above |
| Timeline | Documented | Above |
| Accordion | Documented | Above |
| Case Study Layout | Documented (Data Display, not Layout — WD-089) | Above |
| Article Layout | Documented (Data Display, not Layout — WD-089) | Above |
| Service Detail Layout | Documented (Data Display, not Layout — WD-112) | Above |
| Avatar | Documented (optional) | Above |
| Key Value Pair | Documented (optional) | Above |

**Not included — rejected (`DECISIONS.md` WD-090):** Feature Card, Statistic Card, Badge, Chip, Avatar Group, Icon + Text, List, Definition List, Table, Tabs, Code Block, Quote Block, Metric Display, Rating, Price Display (contradicts `DECISIONS.md` WD-006 — Consultation-First Pricing).

**Belongs to another category (`DECISIONS.md` WD-091, resolved by WD-092):** Card — Surfaces, now documented in `07_SURFACES.md`; every "X Card" component above depends on it.

**Deferred to Version 2 (`DECISIONS.md` WD-091):** Data Table, Progress Metric.
