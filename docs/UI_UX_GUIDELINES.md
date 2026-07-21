# Weber — UI/UX Guidelines

> Consolidated from the UX Constitution (Part 4) and Design System Constitution (Part 6) of `PROJECT_CONSTITUTION.md`. This document is a reference summary — the Constitution remains the authoritative source if any conflict arises.

---

## Design Principles

Every UI element must be simple, intentional, consistent, predictable, accessible, elegant, and minimal. Decoration is avoided; design communicates purpose. The Design System is treated as a language, not a component library — every page must "speak" it the same way.

Design is driven by tokens (color, spacing, typography, radius, elevation, animation, breakpoints) rather than hardcoded values, so future changes happen at the token level, not by editing individual components.

**Trust before beauty:** if a beautiful design reduces clarity, choose clarity. If an animation slows the experience, remove it. If decoration distracts, remove it.

---

## Component Philosophy

- Components solve one problem each: buttons trigger actions, cards group information, dialogs request attention, badges communicate status, inputs collect information.
- Avoid multi-purpose components.
- Identical-purpose components must always look and behave identically — users should never have to relearn the interface.
- Every interactive element must clearly communicate its state: default, hover, focus, pressed, disabled, loading, success, error.

---

## Interaction Philosophy

> For the official, detailed interaction specification (states, navigation behavior, forms, loading, feedback, accessibility) see `UX_SPECIFICATION.md`. This section remains the high-level summary.

- Every click must feel intentional; every interaction must reduce uncertainty, not add to it.
- Remove friction: minimize extra clicks, long forms, confusing labels, unexpected behavior, and visual overload. Anything that needs explaining is probably too complicated.
- Navigation requires zero learning — it must be natural, predictable, consistent, and minimal.
- Decision fatigue is avoided by presenting only the most important actions at any given time and hiding unnecessary complexity.
- Error prevention beats error messages: validate early, guide clearly, never blame the user.
- Forms request only necessary information, explain why it's needed, and make confirmation feel reassuring.

---

## Spacing Philosophy

- Spacing follows a consistent mathematical scale — no random margins or arbitrary padding.
- Whitespace is intentional and is itself a design element, not empty space to be filled.
- Layouts should breathe: content width stays comfortable for reading, and large screens are never stretched just because the space exists.

---

## Typography Philosophy

- Typography communicates confidence: readable, modern, clean, well-spaced, consistent.
- Hierarchy must be immediately obvious — large headings, comfortable body text, generous line-height.
- One H1 per page; subheadings follow a logical, never-skipped structure.
- Decorative fonts are avoided; readability is prioritized over aesthetics.

---

## Animation Philosophy

- Motion communicates meaning — state changes, continuity, feedback, hierarchy. It never exists purely for decoration.
- Every animation must answer: "What information does this communicate?" If the honest answer is "it just looks cool," remove it.
- Animations are smooth, short, natural, and predictable; they respect `prefers-reduced-motion` and never delay interaction.

---

## Accessibility Guidelines

Accessibility is mandatory, built in from the start, never bolted on later:

- Full keyboard navigation and visible focus indicators.
- Proper color contrast at all times.
- Readable, accessible font sizes and spacing.
- Touch-friendly target sizes.
- Screen reader compatibility via semantic HTML, with ARIA used only when necessary.
- Accessible, clearly-labeled forms with immediate, understandable validation.

---

## Responsive Philosophy

- Design mobile-first, then enhance progressively for tablet, laptop, desktop, and large displays.
- Usability is never sacrificed for aesthetics at any breakpoint.
- Layouts remain stable during loading — no sudden content shifts.

---

## The Confidence Journey (governs page and section design)

Every page should move the visitor through one continuous emotional progression:

```
Curiosity → Interest → Understanding → Trust → Confidence → Excitement → Action
```

Every section on a page has exactly one job. The Constitution names seven directly (Hero introduces, Services explain the problem solved, Portfolio builds credibility, Interactive Showcase helps visitors visualize success, Testimonials reduce uncertainty, FAQ removes objections, Contact converts confidence into action). The Home page's official composition now extends this to nine sections, in order (`DECISIONS.md` WD-040): Hero, Services, Interactive Showcase, **Why Weber** (builds trust via guarantees, quality, performance, maintenance, professionalism, long-term support — WD-041), Portfolio, **Process** (demonstrates Weber's professional workflow — WD-042), Testimonials, FAQ, Contact CTA. No section should interrupt this progression or attempt multiple unrelated objectives.

---

## UX Quality Checklist

Before approving any page, per the Constitution:

- [ ] Is the purpose immediately clear?
- [ ] Does it increase trust?
- [ ] Is navigation effortless?
- [ ] Is information easy to scan?
- [ ] Is the layout calm?
- [ ] Does every section have exactly one purpose?
- [ ] Is the interface accessible?
- [ ] Is performance optimized?
- [ ] Does the user know what to do next?

If any answer is "No," the experience is not complete.
