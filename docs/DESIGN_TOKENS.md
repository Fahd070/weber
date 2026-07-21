# Weber — Design Tokens

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` and `UI_FOUNDATION.md`, and records decisions approved and logged in `DECISIONS.md` (WD-027–WD-036). It is the first document in the pipeline described in `UI_FOUNDATION.md` §9 to define **concrete values** — every number below was reviewed (Design Tokens Decision Workshop, Phases 1 and 2) before approval, and none was invented after the fact.
>
> **Status:** Approved and official in full, following the Design Foundation Finalization (`DECISIONS.md` WD-129–WD-134), which resolved the one item this document previously left open (semantic color hex values, §10) plus five further gaps identified in that review (neutral scale, shadow rendering, z-index, and the CSS Variables/Tailwind mapping). Token *names* below are a first proposal for referring to these values consistently in code and documentation; they are not tied to any specific framework's configuration syntax and may be adapted during implementation without requiring a new decision, as long as the underlying values stay the ones approved here. The concrete Tailwind v4 mapping is recorded in full in `DECISIONS.md` WD-134.

---

## 1. Typography Scale

Strategy: hybrid modular + hand-tuned, rem-based, 16px (1rem) floor for Body at every viewport (`DECISIONS.md` WD-027).

| Token | Role | Desktop | Mobile | Weight (default) | Line-height |
|---|---|---|---|---|---|
| `typography.display` | Display | 3.5rem / 56px | 2.25rem / 36px | Semibold (600) | tight (1.1) |
| `typography.h1` | H1 | 2.5rem / 40px | 1.875rem / 30px | Semibold (600) | tight (1.1) |
| `typography.h2` | H2 | 1.875rem / 30px | 1.875rem / 30px | Semibold (600) | snug (1.25) |
| `typography.h3` | H3 | 1.5rem / 24px | 1.5rem / 24px | Semibold (600) | snug (1.25) |
| `typography.title` | Title | 1.25rem / 20px | 1.25rem / 20px | Semibold (600) | snug (1.25) |
| `typography.subtitle` | Subtitle | 1.125rem / 18px | 1.125rem / 18px | Medium (500) | snug (1.25) |
| `typography.body` | Body | 1rem / 16px | 1rem / 16px | Regular (400) | body (1.6) |
| `typography.caption` | Caption | 0.8125rem / 13px | 0.8125rem / 13px | Regular (400) | compact (1.45) |
| `typography.button` | Button | 1rem / 16px | 1rem / 16px | Medium (500) | compact (1.45) |
| `typography.code` | Code (monospace) | 0.875rem / 14px | 0.875rem / 14px | Regular (400) | compact (1.45) |

Only Display and H1 scale down on mobile — every other role stays constant across viewports (see rationale in `DECISIONS.md` WD-027).

---

## 2. Font Weights

`DECISIONS.md` WD-028.

| Token | Value | Usage |
|---|---|---|
| `weight.regular` | 400 | Body, Caption, Code, long-form reading text |
| `weight.medium` | 500 | Button, Subtitle, UI labels, emphasis within body copy |
| `weight.semibold` | 600 | Display, H1–H3, Title |
| `weight.bold` | 700 | **Restricted** — high-emphasis headings only. Not used for body text, buttons, or general UI labels. |

---

## 3. Line-Height

`DECISIONS.md` WD-029. Values are unitless multipliers.

| Token | Value | Applies to |
|---|---|---|
| `lineHeight.tight` | 1.1 | Display, H1 |
| `lineHeight.snug` | 1.25 | H2, H3, Title, Subtitle |
| `lineHeight.body` | 1.6 | Body — meets WCAG 1.4.8 |
| `lineHeight.compact` | 1.45 | Caption, Button, Code |

---

## 4. Spacing Scale

Ten-step hybrid 4pt/8pt system (`DECISIONS.md` WD-030).

| Token | Value | Typical use |
|---|---|---|
| `space.1` | 4px | Micro — icon-to-label gaps, tight inline adjustments |
| `space.2` | 8px | Base — smallest deliberate gap between related elements |
| `space.3` | 12px | Compact — form-field internal padding, small component gaps |
| `space.4` | 16px | Default — standard gap between related but distinct elements |
| `space.5` | 24px | Comfortable — gap between distinct components within a section |
| `space.6` | 32px | Grouped — spacing within a section between sub-groups |
| `space.7` | 48px | Block — spacing between major content blocks within a section |
| `space.8` | 64px | Section — gap between one section and the next (desktop) |
| `space.9` | 96px | Generous — large-screen section boundary, hero-adjacent breathing room |
| `space.10` | 128px | Macro — largest deliberate gap, reserved for the most generous moments |

---

## 5. Border Radius

`DECISIONS.md` WD-031.

| Token | Value | Used for |
|---|---|---|
| `radius.none` | 0px | Structural elements — dividers, full-bleed imagery |
| `radius.sm` | 4px | Tight elements — badges, tags, inputs, small buttons |
| `radius.md` | 8px | Default — cards, standard buttons, most containers |
| `radius.lg` | 16px | Larger surfaces — modals, prominent panels |
| `radius.full` | 9999px / 50% | Circular/pill elements only — avatars, pill badges, toggles |

---

## 6. Elevation

`DECISIONS.md` WD-032. Flat-first, per `PROJECT_CONSTITUTION.md` Part 6 — Elevation.

| Token | Level | Used for |
|---|---|---|
| `elevation.0` | Flat (default) | Page background, most cards, most sections |
| `elevation.1` | Resting | Elements needing slight separation at rest (e.g. a Portfolio card) |
| `elevation.2` | Raised | Interactive hover/focus states, popovers |
| `elevation.3` | Overlay | Modals and dialogs — the highest elevation in the system |

**Rendering strategy (`DECISIONS.md` WD-132):** Elevation 0 uses no treatment at all. Elevation 1–2 use a background-lightness step (from the Neutral Scale, §11) plus a 1px low-opacity border — no `box-shadow` — since conventional drop-shadows read poorly on Weber's near-black default background (`DECISIONS.md` WD-003). Elevation 3 (Overlay) is the only level using a true `box-shadow`: soft, low-opacity, high-blur, reserved for the genuine separation modals and dialogs functionally need.

---

## 7. Motion Tokens

`DECISIONS.md` WD-033.

| Token | Duration | Used for |
|---|---|---|
| `duration.micro` | 100–150ms | Hover/press feedback, small icon transitions |
| `duration.standard` | 200–250ms | Most UI transitions — dropdowns, tooltips |
| `duration.moderate` | 300–400ms | Modal open/close, section reveals |
| `duration.deliberate` | ~500ms | Rare, meaningful moments only (e.g. Interactive Showcase preview transition) |

| Token | Easing | Used for |
|---|---|---|
| `easing.out` | ease-out | Elements entering/appearing |
| `easing.in` | ease-in | Elements exiting/disappearing |
| `easing.inOut` | ease-in-out | State changes visible at both ends |
| `easing.linear` | linear | Continuous/looping elements only (e.g. a loading indicator) |

`prefers-reduced-motion` is respected without exception; no state change relies on motion as its only signal (`UI_FOUNDATION.md §6`).

---

## 8. Breakpoint Tiers

`DECISIONS.md` WD-034. Illustrative device-class ranges, not tied to a specific framework's syntax.

| Token | Range | Represents |
|---|---|---|
| `breakpoint.mobile` | base (no query) | Mobile-first baseline |
| `breakpoint.tablet` | ≥768px | Simple multi-column layout begins |
| `breakpoint.laptop` | ≥1024px | Primary navigation and full section layouts settle |
| `breakpoint.desktop` | ≥1280px | Full-width sections reach intended visual scale |

Beyond Desktop, the Container Width Strategy (§9) — not additional breakpoints — governs large-screen behavior.

---

## 9. Container Widths

`DECISIONS.md` WD-035.

| Token | Max-width | Used for |
|---|---|---|
| `container.reading` | 720px | Long-form, text-heavy content (Services descriptions) |
| `container.standard` | 1152px | Default page/section container |
| `container.wide` | 1320px | Portfolio grids, Interactive Showcase — content that benefits from more horizontal room |

Full-bleed section backgrounds may still extend beyond any container — the container governs content width, not a section's visual backdrop (`UI_FOUNDATION.md §3`).

---

## 10. Semantic Color Roles

`DECISIONS.md` WD-036 (roles), completed by WD-130 (hex values).

| Token | Role | Purpose | Hex |
|---|---|---|---|
| `color.success` | Success | Confirms a completed, correct action — calm reassurance, not celebration | `#6FA98A` |
| `color.warning` | Warning | Flags something needing attention before it becomes a problem — caution, not alarm | `#C9A15C` |
| `color.danger` | Danger | Communicates an error clearly, without blaming the user | `#C97B72` |
| `color.information` | Information | Neutral, non-urgent context | `#7C9FC9` |
| `color.neutral` | Neutral | Supports structure (borders, disabled states, tertiary text) without competing with Primary/Secondary/Accent | `#71717A` (= Accent, WD-002 — no new hue) |

Desaturated and restrained, consistent with the approved primary palette (`DECISIONS.md` WD-002) — functional, never decorative, per `PROJECT_CONSTITUTION.md` Part 2 — Color Philosophy. All five values remain subject to a real contrast-ratio check during implementation.

---

## 11. Neutral Scale

`DECISIONS.md` WD-129. A six-step achromatic scale interpolated between Background and Primary — not an independent hue.

| Token | Hex | Anchor |
|---|---|---|
| `neutral.950` | `#0B0C0F` | = Background (WD-002) |
| `neutral.900` | `#1C1D21` | interpolated |
| `neutral.700` | `#3A3B40` | interpolated |
| `neutral.500` | `#71717A` | = Accent (WD-002) |
| `neutral.300` | `#9A9AA1` | interpolated |
| `neutral.100` | `#D4D4D8` | = Secondary (WD-002) |

Used for borders, disabled states, tertiary text, and muted surfaces — including the elevation 1–2 background-lightness step (§6).

---

## 12. z-index Scale

`DECISIONS.md` WD-133. Sized to Version 1's actually-approved components — not pre-allocated for the deferred Version 2 Modal/Sheet/Popover family.

| Token | Value | Used for |
|---|---|---|
| `z.base` | 0 | Default document flow |
| `z.sticky` | 10 | Header (sticky navigation) |
| `z.dropdown` | 20 | Select, other floating menus |
| `z.overlay` | 30 | Mobile Navigation overlay, Tooltip |
| `z.skip-link` | 50 | Skip Link — must always sit above everything when focused |

Headroom (40, 60+) is deliberately left unallocated for the deferred Modal/Sheet/Popover family.

---

## 13. CSS Variables Strategy & Tailwind v4 Mapping

`DECISIONS.md` WD-134. Every token on this page lives exclusively in Tailwind v4's native `@theme` block in `src/app/globals.css` — no separate hand-authored CSS-variables file, no `tailwind.config.ts` theme extension. Each `@theme` entry is automatically both a Tailwind utility and a real CSS custom property. The full token-by-token mapping table is recorded in `DECISIONS.md` WD-134 to avoid duplicating it here; two findings from that mapping are worth surfacing on this page specifically:

- The Spacing Scale (§4) requires no custom Tailwind tokens — Tailwind v4's default spacing scale already lands exactly on 4/8/12/16/24/32/48/64/96/128px.
- The Breakpoint Tiers (§8) require no custom values — Tailwind v4's default `md`/`lg`/`xl` breakpoints already equal 768/1024/1280px.

This is a documentation decision only — `globals.css` has not yet been edited to reflect it; that is implementation, tracked separately from this Finalization.

---

## Reference: Already-Approved Brand Tokens

Not re-decided here — included for a complete picture in one place. Full detail remains in `BRAND_GUIDELINES.md` and `DECISIONS.md` WD-002/WD-003.

| Token | Value |
|---|---|
| `color.background` | `#0B0C0F` (dark mode default) |
| `color.primary` | `#FFFFFF` |
| `color.secondary` | `#D4D4D8` |
| `color.accent` | `#71717A` |

---

## How This Document Is Maintained

Every value above traces to a `DECISIONS.md` entry (WD-027–WD-036, WD-129–WD-134). Changing any value requires a new decision, logged the same way — this document is never edited to introduce a new number without a corresponding entry in `DECISIONS.md`. No open items remain on this page as of the Design Foundation Finalization.
