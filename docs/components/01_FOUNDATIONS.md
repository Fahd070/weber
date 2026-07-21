# Weber Component Library — Foundations

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and is the official governing document for Weber's Component Library. Every statement below either restates an approved Constitution principle or restates a decision logged in `DECISIONS.md` (WD-063–WD-069). It does not restate `UI_FOUNDATION.md`, `DESIGN_TOKENS.md`, or `DESIGN_SYSTEM.md` — it links to them and builds on top.
>
> **Status:** Official. This document, and the nine documents alongside it in `docs/components/`, supersede the Component Library Architecture Phase 1 review as the source of record.

---

## 0. This Folder

```
docs/components/
├── 01_FOUNDATIONS.md      ← you are here — philosophy, standard, lifecycle, rules
├── 02_LAYOUT.md
├── 03_NAVIGATION.md
├── 04_INPUTS.md
├── 05_FEEDBACK.md
├── 06_DATA_DISPLAY.md
├── 07_SURFACES.md
├── 08_MARKETING.md
├── 09_UTILITIES.md
└── 10_MASTER_INDEX.md     ← cross-category lookup, currently empty
```

Categories 02–09 correspond exactly to the eight categories approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056). **No individual component is documented anywhere in this folder yet** — every category document currently states only its scope and awaits its first Proposal (§5).

---

## 1. Purpose

The Component Library is where `DESIGN_SYSTEM.md`'s component classification gets populated with real, named, documented components — each one a reviewable contract, not code.

- **Relationship to `DESIGN_SYSTEM.md`.** Supplies the eight-category classification (WD-056), variant philosophy (WD-057), and Composition First (WD-055) that every entry here must follow.
- **Relationship to `DESIGN_TOKENS.md`.** Supplies the values every component references — made explicit and auditable via the mandatory Token Usage field (§4).
- **Relationship to `UX_SPECIFICATION.md`.** Supplies the nine canonical interaction states (WD-044) and behavioral patterns every component must implement correctly.
- **Relationship to `INFORMATION_ARCHITECTURE.md`.** Supplies the initial component inventory (§15) this Library formalizes into full specifications.

**Why a documentation layer, not an implementation layer:** consistent with every prior phase of this project, the plan is approved before it's built (Part 7 — Mandatory Workflow; Part 9 — Phase Lifecycle). This is now binding, not just a norm — see the Documentation Before Implementation Gate (§5).

---

## 2. Organization Philosophy

- **Scalability.** Accommodates Version 2's Dashboard and Learning Platform components without restructuring (`DECISIONS.md` WD-058, WD-062).
- **Discoverability.** Findable through the eight-category classification (WD-056) — one obvious place to look.
- **Reusability.** A component's documented Relationships and Dependencies (§4) make existing components visible before a duplicate is proposed.
- **Maintainability.** Small, single-purpose documents — editing one category never risks another.
- **Composition First (WD-055).** Documentation makes a component's composition explicit, so reuse is the obvious default.
- **Single Responsibility (WD-054).** The documentation standard (§4) makes it impossible to document a component without one clear purpose.
- **Token-driven design.** The mandatory Token Usage field (§4) is the actual enforcement mechanism against token drift.

---

## 3. Library Structure

Ten documents, official per `DECISIONS.md` WD-063: this Foundations document, one per approved component category (`02_LAYOUT.md`–`09_UTILITIES.md`), and a Master Index (`10_MASTER_INDEX.md`).

**Why split rather than one file:** a single monolithic component-library document would violate Single Responsibility and Composition First (WD-054, WD-055) at the documentation level — the same principles just approved for components themselves, applied one level up. It also matches how every other concern on this project already has its own file rather than one combined document.

---

## 4. Component Documentation Standard

Official, per `DECISIONS.md` WD-064. **Ten** required fields for every future component entry:

| Field | What it captures |
|---|---|
| **Purpose** | The one job this component does (Single Responsibility, WD-054). |
| **Responsibilities** | What it owns vs. explicitly does not own. |
| **Composition** | What smaller components/primitives it's built from (Composition First, WD-055). |
| **Variants** | Size/visual/state variants, mapped to tokens (WD-057) — never invented ad hoc. |
| **States** | Which of the nine canonical states (WD-044) apply, and how. |
| **Accessibility** | Component-specific requirements beyond the universal baseline (WD-060). |
| **Token Usage** | Explicit list of which `DESIGN_TOKENS.md` values it consumes. |
| **Relationships** | What composes it, what it composes into, which pages use it (`INFORMATION_ARCHITECTURE.md` §15). |
| **Dependencies** | **Components this component depends on**, and **components that depend on it** — both directions, required to enforce the layering rule (§7). |
| **Future Extension** | How it's expected to grow for Version 2 without a redesign (WD-058, WD-062). |

No component is documented against this template anywhere in this folder yet.

---

## 5. Component Lifecycle

Official, per `DECISIONS.md` WD-065:

```
Proposal → Review → Approval → Documentation → Implementation → Maintenance
```

- **Proposal.** Grounded in an actual need from `INFORMATION_ARCHITECTURE.md` or `UX_SPECIFICATION.md` — never speculative.
- **Review.** Checked against `DESIGN_SYSTEM.md` — does it fit an existing category (§3)? Could Composition First (WD-055) satisfy the need using existing components instead? Does it respect the dependency layering rule (§7)?
- **Approval.** Project Owner sign-off; architecturally significant components get a `DECISIONS.md` entry.
- **Documentation.** The ten-field standard (§4) is completed.
- **Implementation.** Code — outside this Library's own scope (§1).
- **Maintenance.** The doc is a living record, re-verified whenever its tokens or states change upstream.

### Documentation Before Implementation Gate

**Official, per `DECISIONS.md` WD-066.** No component may be implemented before its documentation has been reviewed and officially approved. This makes the Documentation stage above a hard gate, not a recommended step — there is no implementation for documentation to drift from until the documentation exists and is approved first. This applies without exception to every future component.

---

## 6. Naming Philosophy

Official, per `DECISIONS.md` WD-067.

- **Clarity.** A name describes what a component *is*, not how it's built (Part 5 — Naming Standards).
- **Consistency.** One naming pattern across the whole library.
- **Predictability.** A contributor should be able to guess a component's name from its purpose alone.
- **Avoiding implementation names.** Never named after the underlying library or primitive (e.g., not "RadixDialog") — the documented component concept must stay independent of the current implementation choice (shadcn/ui on Radix, `DECISIONS.md` WD-017).

No actual component names are defined by this document.

---

## 7. Dependency Philosophy

Official, per `DECISIONS.md` WD-068.

**Layer order** (foundational to most-composed):

```
Utilities, Layout
        ↓
Navigation, Inputs, Feedback
        ↓
Data Display, Surfaces
        ↓
Marketing
```

**The rule:** Higher-level components may compose lower-level components. **Lower-level components must never depend on higher-level components.**

- **Composition.** A component may compose others from its own layer or below.
- **Layering.** Dependencies flow downward only.
- **Avoiding circular dependencies.** Structurally prevented by the rule above, not left to per-component discipline — enforced via the mandatory Dependencies field (§4) on every entry.
- **Reuse.** Before proposing a new component, the Master Index (`10_MASTER_INDEX.md`) is checked for an existing one that already serves the need.

---

## 8. Versioning Strategy

Official, per `DECISIONS.md` WD-069.

- **Backward compatibility.** Changing a component's documented contract never silently breaks a page already built on it — new capability is additive by default.
- **Deprecation.** An incompatible change is marked deprecated with a documented migration path, never silently removed.
- **Extension.** Preferred over replacement — add a new variant rather than redefine an existing one's meaning.
- **Version 2 readiness.** The same components extend to Client Dashboard and Learning Platform use cases (`DECISIONS.md` WD-058) by gaining new variants/states, without changing Version 1 behavior.

---

## 9. Risks and Mitigations

Carried forward from the Phase 1 review:

| Risk | Mitigation |
|---|---|
| Documentation drifts from implementation | Documentation Before Implementation Gate (§5) — there's nothing to drift from until docs exist and are approved. |
| Category misclassification creates duplicate components | `10_MASTER_INDEX.md` checked before proposing anything new. |
| A single category document becomes unwieldy | Category documents may be split further by sub-heading (and later by file) without changing the taxonomy. |
| Naming inconsistency over time | Naming Philosophy (§6) enforced at the Review lifecycle stage. |
| Premature component creation | Proposal stage (§5) requires a grounded need from IA or UX Spec. |
| Circular dependencies | Structurally prevented by the layering rule (§7), enforced via the Dependencies field. |

---

## How This Document Is Maintained

Every principle above traces to `PROJECT_CONSTITUTION.md` or a `DECISIONS.md` entry (WD-063–WD-069). Any change to the documentation standard, lifecycle, naming philosophy, or dependency rule requires a new decision, logged the same way.
