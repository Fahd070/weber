# Component Category — Marketing

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Persuasion-purpose components.

**Layer position:** Most composed (Tier 4) — may depend on any lower layer (Layout, Utilities, Navigation, Inputs, Feedback, Data Display, Surfaces), per `01_FOUNDATIONS.md` §7, `DECISIONS.md` WD-068. No other category may depend on Marketing.

**Category status:** Four components approved and documented — Hero, CTA Banner, Feature List, Preview Frame — `DECISIONS.md` WD-095. Fourteen candidates were rejected as redundant compositions, unjustified, or redirected to already-documented categories (`DECISIONS.md` WD-096) and must not be re-proposed without new justification. Blog Preview is documented separately below as a named **composition pattern**, not a standalone component (`DECISIONS.md` WD-097).

**Naming clarification (`DECISIONS.md` WD-095):** CTA Banner and Feature List use the names already established in `INFORMATION_ARCHITECTURE.md` §15, confirmed over the alternate names "CTA Section" and "Feature Grid" considered during the Phase 1 review.

**Hero Content and Hero Media clarification (`DECISIONS.md` WD-095):** these are internal compositional concerns of Hero — arranged via Stack and Aspect Ratio respectively — **not independent Component Library entries.** They must not be re-proposed as separate components.

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. All four components completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Hero

| Field | Detail |
|---|---|
| **Purpose** | Introduces Weber and establishes a premium first impression, opening the Confidence Journey (`INFORMATION_ARCHITECTURE.md` §5) — the first section in the approved Home order (`DECISIONS.md` WD-040). |
| **Responsibilities** | Owns the first-impression arrangement of headline, supporting copy, optional media, and an implicit path toward Services/Interactive Showcase. Does not own the Services or Interactive Showcase content it leads toward. |
| **Composition** | Composes Section, Container, Stack (`02_LAYOUT.md`, tier 1) for its headline/copy/CTA rhythm, and optionally an Aspect Ratio (`02_LAYOUT.md`) for hero media, plus a CTA Banner (Marketing, same tier) or Button (`04_INPUTS.md`, tier 2) for its implicit call to action. **Hero Content (the headline/subhead/CTA rhythm) and Hero Media (the media area) are internal uses of Stack and Aspect Ratio within this composition — not separate components** (`DECISIONS.md` WD-095). |
| **Variants** | None currently justified — one Hero presentation, consistent with Variant Philosophy (`DECISIONS.md` WD-057); with-media and without-media are a content decision, not a component variant. |
| **States** | Non-interactive itself; its composed CTA carries its own interactive state model. |
| **Accessibility** | Must contain the page's primary `h1` and correct heading hierarchy beneath it (Part 6 — Typography Hierarchy). |
| **Token Usage** | Typography (Heading/Body roles, WD-027), spacing scale (WD-030) via Stack, semantic color roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | The first Home section (`INFORMATION_ARCHITECTURE.md` §5, WD-040); leads toward Services and Interactive Showcase. |
| **Dependencies** | Depends on: Section, Container, Stack, optionally Aspect Ratio (Layout, tier 1, downward); optionally CTA Banner (Marketing, same tier) or Button (Inputs, tier 2, downward). Depended on by: the Home page. |
| **Future Extension** | The same Hero contract extends to any future landing-page need (e.g., a Version 2 campaign page) without a new component. |

---

## CTA Banner

| Field | Detail |
|---|---|
| **Purpose** | A reusable message-plus-action banner converting attention into the next step — the most-reused Marketing component in the approved IA, named for six different sections (`INFORMATION_ARCHITECTURE.md` §15: Hero, Services, Interactive Showcase, Portfolio, Contact CTA, individual Service pages). |
| **Responsibilities** | Owns presenting one message and one primary action consistently. Does not own the content or context around it — that's the composing section's job. |
| **Composition** | Composes Stack (`02_LAYOUT.md`) for message/action rhythm and a Button (`04_INPUTS.md`) as its action. |
| **Variants** | None beyond content — one CTA Banner presentation reused across every section that needs it, consistent with Variant Philosophy (`DECISIONS.md` WD-057); this is also why Contact CTA is not a separate component (see Not Included below). |
| **States** | Non-interactive itself; its composed Button carries its own full state model (`04_INPUTS.md`, WD-044). |
| **Accessibility** | Its action must have a clear, specific accessible name (never a generic "Click here"), consistent with the approved partnership-toned CTA language (`DECISIONS.md` WD-007). |
| **Token Usage** | Typography (Body/Heading roles, WD-027), spacing scale (WD-030) via Stack, semantic color roles (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used by Hero, Services, Interactive Showcase, Portfolio, Contact CTA, and individual Service pages (`INFORMATION_ARCHITECTURE.md` §15). |
| **Dependencies** | Depends on: Stack (Layout, tier 1, downward); Button (Inputs, tier 2, downward). Depended on by: Hero, Services, Interactive Showcase, Portfolio, Contact CTA, Service pages. |
| **Future Extension** | Reused for any future conversion moment (a Version 2 Dashboard upsell, a Learning Platform enrollment prompt) without a new component. |

---

## Feature List

| Field | Detail |
|---|---|
| **Purpose** | Presents Weber's Guarantees, Quality, Performance, Maintenance, Professionalism, and Long-term support claims as one consistent, repeatable list — required for the Why Weber section (`INFORMATION_ARCHITECTURE.md` §15, `DECISIONS.md` WD-041). |
| **Responsibilities** | Owns arranging a set of icon-plus-label feature items consistently. Does not own the trust-building copy itself (a content concern) or the Why Weber section's overall placement (Section's job). |
| **Composition** | Composes Stack or Grid (`02_LAYOUT.md`, tier 1) for item arrangement, with each item pairing an Icon (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved) and a label. |
| **Variants** | None currently justified — one presentation shared by every feature/guarantee item, consistent with Variant Philosophy (`DECISIONS.md` WD-057). |
| **States** | Non-interactive — a static presentation. |
| **Accessibility** | Each item's icon must not be the sole carrier of meaning — the label must always be present and readable to assistive technology. |
| **Token Usage** | Typography (Body/Caption roles, WD-027), spacing scale (WD-030) via Stack/Grid. |
| **Relationships** | Used exclusively by the Home Why Weber section (`INFORMATION_ARCHITECTURE.md` §15, WD-041). |
| **Dependencies** | Depends on: Stack or Grid (Layout, tier 1, downward); Icon (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved). Depended on by: Home Why Weber section. |
| **Future Extension** | Reused for any future feature/benefit listing (a Version 2 Dashboard's plan comparison, minus pricing per WD-006) without a new component. |

---

## Preview Frame

| Field | Detail |
|---|---|
| **Purpose** | Displays the personalized website concept generated during the Interactive Showcase — Weber's signature, highest-trust moment (`DECISIONS.md` WD-005; `INFORMATION_ARCHITECTURE.md` §7: "transforms imagination into confidence"). Required by `INFORMATION_ARCHITECTURE.md` §15 but not on the original Phase 1 candidate list — identified as a necessary addition during the review. |
| **Responsibilities** | Owns presenting the generated preview and its Processing/Retry/Error states during generation. Does not own the generation logic itself (implementation, out of scope) or the Input Form collecting business type/company name (Inputs' Form, already documented). |
| **Composition** | Composes Container, Aspect Ratio (`02_LAYOUT.md`, tier 1) for the preview area, Card (`07_SURFACES.md`, tier 3, same-tier) as its elevated frame, and Spinner or Skeleton (`05_FEEDBACK.md`, tier 2, downward) for its Processing state, plus Empty State (`05_FEEDBACK.md`) for its pre-generation and Error states — directly implementing the seven-step Interactive Showcase journey's Empty, Processing, Preview, Retry, and Error states (`UX_SPECIFICATION.md` §6, `DECISIONS.md` WD-047). |
| **Variants** | None beyond its own state model (see States) — one Preview Frame presentation, consistent with Variant Philosophy (`DECISIONS.md` WD-057). |
| **States** | Empty (invites input), Processing (generation in progress — elevated design priority per `UX_SPECIFICATION.md` §6), Preview (payoff, Moderate-duration reveal per `DECISIONS.md` WD-033), Retry, Error. |
| **Accessibility** | State changes (Processing → Preview, or → Error) must be announced to assistive technology — uses Live Region Announcer (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved), the same mechanism already used by Alert, Spinner, and Empty State. |
| **Token Usage** | Elevation (`elevation.1`, WD-032) via Card, motion tokens (WD-033) for its Moderate-duration reveal, spacing scale (WD-030), semantic color roles for its Error state (WD-036, WD-130 — hex values approved). |
| **Relationships** | Used exclusively by the Interactive Showcase (`INFORMATION_ARCHITECTURE.md` §7, §15). |
| **Dependencies** | Depends on: Container, Aspect Ratio (Layout, tier 1, downward); Card (Surfaces, tier 3, same-tier); Spinner, Skeleton, Empty State (Feedback, tier 2, downward); Live Region Announcer (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved). Depended on by: the Interactive Showcase page. |
| **Future Extension** | No anticipated Version 1 reuse beyond the Interactive Showcase; a future generative-preview feature (Version 2) would be evaluated against this component before a new one is proposed. |

---

## Composition Patterns

Unlike the four components above, entries in this section are **not independent primitives** with their own Component Lifecycle status — they are named, reusable recipes composed entirely from already-documented components in other categories. They exist so a recognizable pattern isn't reinvented or renamed differently each time it's needed, without claiming to be a new building block (`DECISIONS.md` WD-097).

### Blog Preview

A named composition of **Section + Container + Grid** (`02_LAYOUT.md`, tier 1) **+ Blog Post Card ×N** (`06_DATA_DISPLAY.md`, tier 3) **+ CTA Banner** (Marketing, same tier, above) — presenting a set of recent blog posts within any Marketing context. No Version 1 route uses it: the approved Home section order (`DECISIONS.md` WD-040) has no Blog section, and Blog's own listing page already uses Blog Post Card directly. Documented here as a ready-to-use pattern rather than rejected outright, so that if a future Home revision or another Marketing page needs a blog preview, it is composed the same way every time rather than re-derived or re-named.

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Hero | Documented | Above |
| CTA Banner | Documented | Above |
| Feature List | Documented | Above |
| Preview Frame | Documented | Above |

**Composition patterns (not components — `DECISIONS.md` WD-097):** Blog Preview.

**Not included — internal composition of Hero, not independent entries (`DECISIONS.md` WD-095):** Hero Content, Hero Media.

**Not included — rejected as redundant compositions (`DECISIONS.md` WD-096):** Service Showcase, Portfolio Showcase, Testimonial Showcase, FAQ Section, Contact CTA (each fully achievable by composing already-documented primitives directly; Contact CTA specifically is CTA Banner reused, not a separate component).

**Not included — rejected, no approved or plausible use case (`DECISIONS.md` WD-096):** Pricing Section (contradicts `DECISIONS.md` WD-006 — Consultation-First Pricing), Logo Cloud, Newsletter Signup, Social Proof, Metrics Section, Video Showcase, Comparison Section.

**Belongs to another category, already documented (`DECISIONS.md` WD-096):** Process Steps — Data Display (already exists as Timeline). Input Form — Inputs (already exists as Form). Trust Signals — Navigation's Footer content, or already covered by Feature List for the Home page.
