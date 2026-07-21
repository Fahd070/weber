# Weber — UI Foundation

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and must remain consistent with `DECISIONS.md`. It is **not** the Design System — it is the philosophical foundation the Design System will be built on. It precedes Design Tokens in the project's design pipeline (see §9).
>
> **Relationship to existing documents:** `UI_UX_GUIDELINES.md` already summarizes the Constitution's UX and Design System parts as practitioner-facing guidelines, and `ARCHITECTURE.md` §8 covers Design System architecture at a technical level. This document does not replace either — it sits one layer beneath both, stating the *business rationale* for Weber's visual direction (why these principles, not just what they are) and establishing the scope boundary between philosophy and the concrete token/component decisions that come after it. Where content would otherwise duplicate those documents, this one cross-references them instead of restating them.

---

## 1. Design Philosophy

Weber's product is trust, not websites (`PROJECT_CONSTITUTION.md` Part 1 — Core Philosophy: "Weber does not sell websites. Weber builds digital trust"). Every visual trait below is chosen because it serves that single outcome, not because it is fashionable.

- **Premium.** A premium interface signals that the *client's own business* is credible and established — the website exists to make the client "look as professional as the quality of their work" (Part 3 — Value Proposition). If Weber's own interface doesn't feel premium, it cannot credibly make that promise to a client.
- **Modern.** The brand must "remain modern today and still feel relevant many years from now" (Part 2 — Brand Identity), directly supporting the Customer Perception goal that visitors leave thinking "this company will probably still be here years from now" (Part 2).
- **Minimal.** "Beauty should emerge from simplicity. Not decoration" (Part 2 — Simplicity Rules). A minimal interface reads as confident rather than as trying to impress — consistent with a brand personality that is "never arrogant, never loud, never exaggerated" (Part 2 — Brand Personality).
- **Trust.** Not one trait among others — the literal product (Part 1: "Trust is the product"). Customer Trust is named as Weber's Primary Success Metric (Part 1); every other trait on this list is instrumental to it.
- **Professional.** Named directly as one of the four things a customer is actually purchasing, alongside credibility, confidence, and business growth (Part 1 — Core Philosophy).
- **Calm.** Visitors should experience "calmness, confidence, professionalism, clarity" and never "stress, pressure, confusion" (Part 4 — Emotional Design). Trust is earned gradually (Part 4 — Progressive Trust); a calm interface is what makes that gradual pace possible instead of forcing urgency.
- **Elegant.** Named directly in the required visual language: "the visual language must communicate... elegance" (Part 2 — Visual Identity).
- **Functional.** "Design should communicate purpose" (Part 6 — Design Principles); "premium means invisible... users should not notice the architecture... they should simply feel this website feels right" (Part 10). For Weber specifically, restraint *is* the premium signal, not an omission of one.
- **Accessible.** A product requirement, not an enhancement (Part 4, Part 6 — Accessibility). An inaccessible interface directly contradicts the Customer Perception goal that "these people know what they are doing" (Part 2) — carelessness in accessibility reads as carelessness in general.

---

## 2. Visual Identity Principles

- **Visual consistency.** "Every page must feel like it belongs to the same company" (Part 2 — Brand Consistency); components with identical purposes must always look and behave identically (Part 6 — Component Consistency).
- **Clarity first.** "The website must feel obvious... confusion is a design failure" (Part 4 — Simplicity First).
- **Simplicity over decoration.** "If decoration distracts users, remove the decoration" (Part 2 — Trust Before Beauty). Complexity should never be visible to the customer, whatever complexity exists behind the scenes (Part 3 — Product Simplicity).
- **Strong hierarchy.** Large ideas first, supporting information second, technical detail last — users should never be overwhelmed immediately (Part 4 — Information Hierarchy); heading levels are never skipped (Part 6 — Typography Hierarchy).
- **White space philosophy.** "Whitespace is a design element. Not empty space" (Part 4 — Visual Rhythm); "whitespace is more valuable than additional colors" (Part 6 — Color Usage).
- **Content-first design.** Visual design serves the message, not the reverse — content is architecturally separated from UI components so it can lead independently of how it happens to be rendered (Amendment 1 — Content/Component Separation Rule, `DECISIONS.md` WD-010). Customers buy outcomes communicated through content, not visual deliverables (Part 3).
- **Motion supports UX.** Motion communicates state, feedback, continuity, and hierarchy — never decoration (Part 6 — Motion System). Full treatment in §6.
- **Every element must have a purpose.** "Every visual element must have a purpose. Remove anything that does not improve understanding, navigation, trust, accessibility, performance" (Part 2 — Simplicity Rules).

---

## 3. Layout Philosophy

High-level only — no pixel values, consistent with this document's Non-Goals (§10).

- **Maximum content width.** "Content width should remain comfortable for reading. Large screens should not stretch content unnecessarily" (Part 6 — Layout Principles). The specific measure is a Design Token decision, not a philosophy decision.
- **Vertical rhythm.** Spacing follows a consistent, deliberate scale rather than arbitrary values (Part 6 — Spacing System) — the scale itself is a future Design Token.
- **Section spacing.** Since every section has exactly one job (Part 4 — Every Section Has One Job), spacing must visually reinforce where one section's purpose ends and the next begins — ambiguous section boundaries undermine that principle regardless of what values eventually express it.
- **Grid philosophy.** Layouts align predictably; content never appears randomly positioned (Part 6 — Grid System).
- **Reading comfort.** Content width and spacing work together to keep reading effortless — this is a layout concern as much as a typographic one (Part 6 — Layout Principles, Typography System).
- **Responsive-first thinking.** Designed mobile-first, enhanced progressively — usability is never sacrificed for aesthetics at any size (Part 6 — Responsive Design). Full treatment in §8.

---

## 4. Typography Philosophy

No typeface and no type scale are chosen here — see Non-Goals (§10).

- **Readability.** Readability is optimized before aesthetics, at every step (Part 6 — Typography System).
- **Visual hierarchy.** Each page has exactly one H1; subheadings follow a logical structure; heading levels are never skipped (Part 6 — Typography Hierarchy).
- **Heading philosophy.** Headings establish what a section is about immediately and confidently — large enough to anchor the hierarchy in §2, never decorative for its own sake.
- **Body text philosophy.** Body text stays comfortable for long reading sessions, with generous line-height (Part 6 — Typography System). Captions support content; they never replace it (Part 6 — Typography Hierarchy).
- **Line length.** Text measure should stay within a comfortable reading range — long enough to feel substantial, short enough that the eye doesn't lose its place — as a direct extension of the Constitution's readability-first requirement. No specific character count is defined here.
- **Accessibility.** Text remains legible at the sizes and contrast levels required in §7 — typography and accessibility are not separate concerns for Weber.

---

## 5. Color Philosophy

This section explains **how** the approved palette is used — it does not redefine it. The official values (`DECISIONS.md` WD-002) live in `BRAND_GUIDELINES.md` and `PROJECT_CONSTITUTION.md` Part 2 — Color Philosophy / Part 6 — Color System, and are not repeated here.

**Approved roles:**

- **Background.** Dominates the interface (Part 6 — Color Usage). Dark mode is the primary, default experience (`DECISIONS.md` WD-003).
- **Primary.** Attracts attention — used for what the visitor should notice first (Part 6 — Color Usage).
- **Secondary.** Supports content without competing with Primary (Part 6 — Color Usage).
- **Accent.** Used sparingly — never becomes the dominant visual note (Part 6 — Color Usage).

**Roles and values approved (`DECISIONS.md` WD-036, WD-130):** `Success`, `Warning`, `Danger`, `Information`, and `Neutral` are approved as semantic roles, distinct from the primary palette (`DECISIONS.md` WD-002 — Background/Primary/Secondary/Accent). They exist because the Constitution's own Interactive States, Error States, and Forms sections (Part 6) require the interface to visually distinguish these states — this section documents the *role* each plays; hex values are recorded in `DESIGN_TOKENS.md` §10:

- **Success** confirms a completed, correct action calmly — reassurance, not celebration, consistent with a brand that is "never loud" (Part 2 — Brand Personality).
- **Warning** flags something that needs attention before it becomes a problem — caution, not alarm.
- **Danger** communicates an error clearly and "never blames the user" (Part 6 — Error States).
- **Information** provides neutral, non-urgent context.
- **Neutral** supports structure — borders, disabled states, tertiary text — without competing with Primary, Secondary, or Accent.

Per Part 6 — Color System, any of these may only be introduced "when they solve a real usability problem," staying desaturated and functional rather than decorative, exactly like the four already-approved colors. Hex values are now approved (`DECISIONS.md` WD-130) — see `DESIGN_TOKENS.md` §10.

---

## 6. Motion Philosophy

- **When motion is allowed.** When it communicates a state change, gives feedback, creates continuity, or clarifies hierarchy (Part 6 — Motion System).
- **When motion should be avoided.** When it exists only because "it looks cool" — if an animation has no informational purpose, it is removed (Part 6 — Motion System). Motion never delays interaction (Part 6 — Animation Principles).
- **Motion must support UX.** Motion guides attention; it never exists to decorate (Part 4 — Motion Philosophy, Part 6 — Motion System).
- **Performance before animation.** Per Amendment 1 (`DECISIONS.md` WD-010), no feature — including an animation — may be added if it noticeably degrades performance without delivering equivalent user value. Motion is implemented via Motion/Framer Motion (`DECISIONS.md` WD-018) reserved for meaningful transitions, with simple state changes handled in lighter-weight CSS.
- **Respect reduced-motion.** `prefers-reduced-motion` is respected without exception (Part 6 — Animation Principles).

---

## 7. Accessibility Philosophy

Mandatory, built in from the start, not added later (Part 4, Part 6 — Accessibility):

- **Keyboard navigation.** Every interactive element is fully operable by keyboard.
- **Contrast.** Sufficient color contrast is maintained at all times.
- **Screen readers.** Semantic HTML and structure make the interface compatible with assistive technology.
- **Focus visibility.** Every interactive element has a visible focus state.
- **Semantic HTML.** Structure communicates meaning; ARIA is used only when semantic HTML is insufficient (Part 5 — Accessibility).
- **Reduced motion.** See §6 — respected without exception.
- **Touch targets.** Interactive elements remain touch-friendly in size.
- **Readable interfaces.** Font sizes, spacing, and contrast together keep the interface legible for everyone, not just the default case.

---

## 8. Responsive Philosophy

No breakpoints are defined here — see Non-Goals (§10).

Weber is designed mobile-first and enhanced progressively (Part 6 — Responsive Design), meaning the smallest, most constrained experience is the baseline the design must work for, not an afterthought fitted around a desktop-first design.

- **Desktop / Laptop.** More available space is used for comfortable reading width and layout (§3) — not stretched simply because room exists (Part 6 — Layout Principles).
- **Tablet.** Layout adapts to the available space while preserving the same hierarchy and section purposes (§2) — nothing about *what* a section communicates changes, only how it's arranged.
- **Mobile.** The most constrained case receives the same design discipline as the largest — usability is never sacrificed for aesthetics at any size (Part 6 — Responsive Design), and navigation remains as effortless as on any other size (Part 4 — Navigation Philosophy).

Across all sizes, the same visual identity principles (§2), typography philosophy (§4), and accessibility requirements (§7) apply without exception — responsiveness changes arrangement, not principle.

---

## 9. Future Design System Relationship

This document sits at the top of a five-stage pipeline. Each stage only becomes decidable once the stage above it is settled:

```
UI Foundation  (this document — philosophy: why, and what each element must serve)
     ↓
Design Tokens  (concrete values: color roles extended with hex, a spacing scale, type
                scale, radius scale, elevation, and motion timing — approved in full,
                see DESIGN_TOKENS.md and DECISIONS.md WD-027–WD-036, WD-129–WD-134)
     ↓
Design System  (token application rules, component states, and the practitioner-facing
                guidelines already captured in UI_UX_GUIDELINES.md and
                PROJECT_CONSTITUTION.md Part 6)
     ↓
Components     (shadcn/ui on Radix UI, DECISIONS.md WD-017, following the conventions
                in CODING_STANDARDS.md)
     ↓
Pages          (the destinations documented in ROUTES.md, composed per the Pages layer
                in PROJECT_STRUCTURE.md §3)
```

Design Tokens cannot be meaningfully chosen without this Foundation fixing *why* Weber looks the way it does — a spacing scale or type scale decided without this document would have no philosophy to be correct or incorrect against. This document is the input to that next decision, not a substitute for it.

---

## 10. Non-Goals

This document intentionally does **not** define:

- No colors — no hex values, no new palette entries (see §5).
- No spacing values or scale.
- No typography scale or typeface choice.
- No shadow/elevation values.
- No border-radius values.
- No components.
- No buttons, cards, or any other concrete UI element.
- No breakpoints.
- No implementation code of any kind.

Everything above is deferred to the Design Tokens phase and beyond (§9). Anything that looks like one of these items appearing in this document is a mistake, not an intended decision.

---

## How This Document Is Maintained

This document changes only when Weber's underlying visual philosophy changes — a far rarer event than a token or component update. Design Tokens, the Design System, components, and pages are all expected to be re-derived from this document rather than the reverse; if a future token or component decision seems to require changing this document's philosophy, that conflict should be raised explicitly rather than resolved by quietly editing this file.
