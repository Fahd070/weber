# Weber — UX Specification

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and is the official interaction and experience specification for Weber Version 1. Every statement below either restates an approved Constitution principle or restates a decision logged in `DECISIONS.md` (through WD-052). Nothing here is invented.
>
> **Status:** Official. This document supersedes the UX Specification Workshop Phase 1 review as the source of record.

---

## 1. Purpose and Relationship to Other Documents

This document defines **how Weber behaves** — interaction states, navigation behavior, forms, loading, feedback, and accessibility — building on documents that define *what exists* and *how it looks*:

- **`PROJECT_CONSTITUTION.md`** — the source of every UX principle applied here (Part 4 — UX Constitution; Part 6 — Design System Constitution).
- **`DECISIONS.md`** — the record of every approved decision this document formalizes (WD-044–WD-052, plus earlier decisions it depends on).
- **`INFORMATION_ARCHITECTURE.md`** — defines *what* exists (pages, sections, journeys); this document defines how a visitor *experiences* moving through it.
- **`UI_FOUNDATION.md`** — the visual philosophy this document's behaviors will eventually be dressed in; this document stays upstream of visual styling.
- **`DESIGN_TOKENS.md`** — the numeric values (motion durations, spacing) some behaviors below reference; this document uses them by name, never redefines them.

No visual styling, component implementation, or code is defined here — see Non-Goals.

---

## 2. UX Philosophy → Interaction Design

Weber's approved UX philosophy translates into interaction design as follows:

- **Trust-first.** No interaction pressures or misleads — no fake urgency, no dark patterns; every confirmation reads as reassuring, never alarming (Part 4 — Emotional Design).
- **Calm.** Nothing pops in abruptly or demands attention aggressively; transitions ease in and out using the approved Motion Tokens (`DECISIONS.md` WD-033).
- **Minimal friction.** Fewest steps to any goal; forms request only what's needed (Part 4 — Forms).
- **Professional workflow.** Interactions behave predictably and consistently everywhere, echoing the Process section's promise of a considered workflow (`DECISIONS.md` WD-042).
- **Accessibility.** Every interaction has a keyboard-operable, screen-reader-compatible equivalent by default (`UI_FOUNDATION.md` §7).
- **Performance-first.** Interactions respond within a duration that reads as instant wherever possible, using the Micro motion tier (`DECISIONS.md` WD-033); nothing waits on the network silently (§7).
- **Confidence building.** Interactions progressively reveal more as trust builds through the Confidence Journey (Part 4), most visibly in the Interactive Showcase (§6).

---

## 3. Global Interaction States

Official, per `DECISIONS.md` WD-044. Nine states apply to every interactive element in the product:

| State | Purpose |
|---|---|
| Default | The resting state most visitors see — sets the first impression. |
| Hover | Signals "this is interactive" before commitment. Exists only on Laptop/Desktop (§10). |
| Active / Pressed | Confirms an action is being registered at the moment of contact. |
| Focus | For keyboard and assistive-technology users — mandatory, never optional (§9). |
| Disabled | Communicates "not available right now" without hiding the option or shifting layout. |
| Loading | Confirms work is happening — prevents a visitor from assuming failure and retrying or double-submitting. |
| Success | Confirms correct completion — calm reassurance, not celebration (semantic role, `DECISIONS.md` WD-036). |
| Error | Communicates a problem without blaming the visitor (Part 6 — Error States). |
| Empty | Explains why there's nothing here yet and guides toward the next action (Part 6 — Empty States). |

No visual treatment for any state is defined here — see Non-Goals.

---

## 4. Navigation Behavior

Official, per `DECISIONS.md` WD-045.

- **Header.** Persistent, slim sticky header — recognizable across every route (multi-route architecture, `DECISIONS.md` WD-043), reinforcing Brand Consistency (Part 2, Part 6).
- **Mobile navigation.** A single collapsed menu (`INFORMATION_ARCHITECTURE.md` §4), with the Contact CTA reachable without opening it.
- **Sticky navigation.** Confirmed as default behavior — slim, not space-dominant, keeping every core destination reachable within a small number of interactions (Remove Friction, Part 4) without working against Minimal (`UI_FOUNDATION.md` §1).
- **Breadcrumb readiness.** Scoped to second-level content only — individual Services, Portfolio case studies, Blog posts (`INFORMATION_ARCHITECTURE.md` §6, §8, §9) — not required for the shallow five-destination core (Navigation Philosophy: "zero learning," Part 4).
- **Scroll behavior.** Smooth scroll for in-page anchors (e.g., jumping to FAQ within Home's section order — `DECISIONS.md` WD-040), using the Standard motion duration tier, collapsing to an instant jump when reduced motion is preferred (§9).
- **Footer behavior.** Non-sticky, appearing once per page — carries supporting trust signals and utility links, never core navigation (`INFORMATION_ARCHITECTURE.md` §4).

---

## 5. Forms Experience

Official, per `DECISIONS.md` WD-046.

- **Input behavior.** Labels remain visible at all times — never placeholder-only (Part 6 — Forms: "labels remain visible").
- **Validation timing.** Validate on blur or submit by default; once a field has shown an error, that field switches to real-time validation so correcting it gives immediate positive feedback (Part 6: "validation is immediate"; Part 4 — Error Prevention: "validate early").
- **Required vs. optional.** Required fields are the default and minimized to what's genuinely needed (Part 4 — Forms). Optional fields are rare and explicitly marked when present.
- **Error messaging.** States the problem and the fix, never blames the visitor (Part 5 — Error Handling; Part 6 — Error States).
- **Success confirmation.** Calm and reassuring, consistent with the Success semantic role (`DECISIONS.md` WD-036).
- **Progressive disclosure.** Additional complexity is revealed only as needed — the Interactive Showcase's two-field input (§6) is the model this extends from.

---

## 6. Interactive Showcase Experience

Official seven-step journey, per `DECISIONS.md` WD-047. **Processing, Preview, Retry, and Error receive elevated design priority** over equivalent states elsewhere in the product, given the Showcase's unique role.

1. **Empty.** Invites action clearly rather than reading as a blank or broken form (Part 6 — Empty States).
2. **Typing.** Business type and company name only (`DECISIONS.md` WD-005) — light validation without nagging.
3. **Processing.** The generation step is a critical trust moment — its Loading treatment (§7) should feel considered and premium, not a bare spinner.
4. **Preview.** The payoff — a Moderate-duration reveal (`DECISIONS.md` WD-033), never an abrupt pop-in.
5. **Retry.** Effortless — trying a different business type never requires re-entering everything (Remove Friction, Part 4).
6. **Error.** If generation fails, messaging stays calm and solution-oriented, never a raw technical error.
7. **Conversion.** The CTA continues the same conversation rather than switching context (`ROUTES.md` §5).

**Relationship with Portfolio:** the Showcase shows what *could* be built; Portfolio shows what *has* been built — distinct and mutually reinforcing (`DECISIONS.md` WD-005). **Relationship with Contact:** the Showcase's natural exit carries the personalization forward rather than resetting into a generic inquiry.

**Trust-building:** this is the only interaction in the product where Weber shows rather than tells — every micro-interaction here either reinforces or undermines that trust, which is why it receives more design care than any other interaction in Version 1.

---

## 7. Loading Experience

Official, per `DECISIONS.md` WD-048.

| Pattern | Appropriate when |
|---|---|
| Skeletons | The eventual layout is known in advance (Portfolio grid, Blog listing) — preserves layout stability (Part 6 — Loading States: "avoid sudden content shifts"). |
| Spinners | Duration and layout are both unknown (Interactive Showcase generation, form submission). Used sparingly — communicates less than a skeleton. |
| Progressive loading | Image-heavy views (Portfolio) — content becomes usable as it arrives. |
| Lazy loading | Offscreen/below-the-fold content — deferred until needed, serving the Performance Trade-off Rule (`DECISIONS.md` WD-010, Amendment 1 Rule 4). |

---

## 8. Feedback System

Official, per `DECISIONS.md` WD-049. Four message types, one shared tone.

- **Success.** Calm, brief, confirms what happened — no celebration (`DECISIONS.md` WD-036).
- **Warning.** Flags something before it becomes a problem — caution, not alarm.
- **Error.** Explains the problem, the cause, and the fix — never blame (Part 5 — Error Handling).
- **Informational.** Neutral, non-urgent, easy to set aside if not relevant.

**Tone:** every message type shares the same calm, professional, non-alarmist voice (Part 2 — Brand Voice) — even an error should read as composed, not panicked.

---

## 9. Accessibility Experience

Official, per `DECISIONS.md` WD-050 — mandatory for every interactive element, not an opt-in enhancement.

- **Keyboard navigation.** Every interactive element is fully operable by keyboard alone.
- **Focus management.** Focus moves logically to newly revealed content and returns predictably when dismissed — never lost or stranded.
- **Screen reader considerations.** Dynamic feedback (loading, success, error — §8) is announced via live regions, so a screen reader user isn't left waiting silently during, for example, the Showcase's Processing step (§6).
- **Motion reduction.** `prefers-reduced-motion` respected without exception across every animated interaction in this document (`DECISIONS.md` WD-033).
- **Touch interactions.** No interaction depends on hover alone; touch targets follow the approved spacing tokens (`DESIGN_TOKENS.md` §4).

---

## 10. Responsive UX

Official, per `DECISIONS.md` WD-051. Interactions adapt across the four approved breakpoint tiers (`DECISIONS.md` WD-034) primarily through **input-method awareness**, not separate designs per tier:

- **Mobile / Tablet.** Touch is the baseline — hover states don't exist; tap replaces hover-then-click as a single gesture. Navigation collapses (§4).
- **Laptop / Desktop.** Hover becomes available as a genuine pre-commitment signal (§3), added as an enhancement on pointer-based devices.
- **Across all sizes.** Forms use the most appropriate native input experience for the visitor's device — stated here as a principle; the technical mechanism is implementation, out of scope.

---

## 11. Conversion Experience

Official, per `DECISIONS.md` WD-052. UX responsibility at each stage, mapped onto the Home page's approved section order (`DECISIONS.md` WD-040):

| Stage | Home Sections | UX Responsibility |
|---|---|---|
| Visitor | Hero | Orient instantly — nothing blocks first paint. |
| Trust | Why Weber, Process | Load smoothly, without jarring reveals that undercut the calm register. |
| Exploration | Interactive Showcase, Portfolio | Invite rather than demand — no forced modal, no gate. |
| Confidence | Testimonials, FAQ | Feel like a natural continuation, not a new context. |
| Contact | Contact CTA | The lowest-friction interaction in the entire product — everything before it exists to earn this moment. |

---

## 12. Risks and Mitigations

Carried forward from the Phase 1 review, now adopted as ongoing implementation discipline rather than open questions:

| Risk | Mitigation |
|---|---|
| Overusing motion/loading undercuts "calm" | Moderate/Deliberate motion tiers (`DECISIONS.md` WD-033) reserved for genuinely meaningful moments only. |
| Inconsistent interaction states across components | The nine-state model (§3) is canonical — no component invents its own. |
| Heavy sticky navigation feels cluttered on mobile | Kept slim and minimal by default (§4). |
| Interactive Showcase failure is the highest-damage trust moment | Elevated design priority on Processing/Preview/Retry/Error (§6). |
| Accessibility retrofitting | Accessibility (§9) is input to every other section's design, not an afterthought. |
| Progressive disclosure hides needed content | Reserved for genuinely secondary detail only, never core content. |

---

## Non-Goals

This document intentionally does **not** define:

- No visual styling (color, spacing, typography values — see `DESIGN_TOKENS.md`).
- No component implementation (props, code structure).
- No specific copy/microcopy for messages, labels, or errors.
- No animation easing curves or exact durations beyond the named token tiers (`DESIGN_TOKENS.md` §7).
- No backend or form-submission implementation.
- No code of any kind.

---

## Pending Decisions Summary

- Detailed breadcrumb component behavior once second-level content (Services detail, Portfolio case studies, Blog posts) is built.
- Exact required/optional field lists for any form beyond Contact and the Interactive Showcase.
- Site search — not an approved feature (`INFORMATION_ARCHITECTURE.md` §4); nothing here forecloses it, nothing here builds it.
- Component-level implementation of every state, pattern, and journey named here — reserved for the Design System / Component Library phase.

---

## How This Document Is Maintained

Every behavior above traces to `PROJECT_CONSTITUTION.md` or a `DECISIONS.md` entry (through WD-052). Any change to an interaction state, navigation behavior, or journey requires a new decision, logged the same way.
