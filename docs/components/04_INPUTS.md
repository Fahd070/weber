# Component Category — Inputs

> Governed by `01_FOUNDATIONS.md`. Category approved in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

**Purpose:** Data collection.

**Layer position:** Second tier (with Navigation, Feedback) — may compose Layout and Utilities (tier 1) only, never the reverse (`01_FOUNDATIONS.md` §7; `DECISIONS.md` WD-068).

**Category status:** Ten components approved and documented (nine required, one optional) — `DECISIONS.md` WD-081. Seventeen candidates were explicitly rejected as variants, groupings, or unjustified complexity (`DECISIONS.md` WD-082) and must not be re-proposed without new justification. Six further candidates are deferred, not rejected — tied to specific pending prerequisite decisions or, in Switch's case, simply awaiting a genuine feature need (`DECISIONS.md` WD-083). Button's placement in this category is explicitly confirmed, not inferred (`DECISIONS.md` WD-084).

Every entry follows the ten-field standard from `01_FOUNDATIONS.md` §4 — this document itself defines no implementation (code, exact CSS, prop names), only the contract. All ten components completed the Documentation stage of the Component Lifecycle before any entered Implementation, satisfying the Documentation Before Implementation Gate (`DECISIONS.md` WD-066). Button, Text Field, Form, Form Field, Label, Helper Text, Error Message, Required Indicator, and Select have since entered Implementation (`src/components/inputs/`) — only Text Area (optional) remains undone, blocked on Contact's still-open field list. Current per-component implementation status across the full library is tracked in `10_MASTER_INDEX.md`, not restated here.

---

## Button

| Field | Detail |
|---|---|
| **Purpose** | A generic, reusable interactive control that triggers an action — the primitive Navigation's CTA element already depends on (`DECISIONS.md` WD-079). |
| **Responsibilities** | Owns its own interactive states and triggering an action on activation. Does not own a link's destination/navigation logic (Navigation Item's job, a distinct primitive) or any specific copy/content it displays (Content/Component Separation, `DECISIONS.md` WD-010). |
| **Composition** | A primitive within the Inputs category. Icon Button and Link Button (both rejected as separate components — `DECISIONS.md` WD-082) are expressed as Button variants composing Icon (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved). |
| **Variants** | Official Version 1 visual variant set (`DECISIONS.md` WD-136): `primary` \| `secondary` \| `accent`, filled-only, default `primary`. Destructive, Success, Warning, Ghost, Outline, and Link were each evaluated and found not part of Version 1 — see WD-136. Size variants map to the approved type/spacing scale (WD-027, WD-030); exact size enumeration remains open. Icon-only and link-styled presentations are anticipated as future variants, not new components. |
| **States** | All nine canonical states apply (`DECISIONS.md` WD-044) — most directly Default, Hover, Active/Pressed, Focus, Disabled, Loading. |
| **Accessibility** | Must be fully keyboard-operable; Loading and Disabled states must be communicated to assistive technology, not shown only visually (WD-050, WD-060). |
| **Token Usage** | Typography (Button role, WD-027), spacing scale (WD-030), color roles (WD-002, WD-036), radius (WD-031), motion tokens for state transitions (WD-033). |
| **Relationships** | Depended on by Navigation's CTA element (`03_NAVIGATION.md`); used by Form's submit action. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: CTA inside Navigation (Navigation, same tier — WD-079); Form (Inputs, same tier). |
| **Future Extension** | Icon Button and Link Button presentations are added as variants composing the now-documented Icon primitive, not as new components. Category confirmed as Inputs (`DECISIONS.md` WD-084). |

---

## Text Field

| Field | Detail |
|---|---|
| **Purpose** | A single-line text input — the primitive behind the Interactive Showcase's company-name input and any Contact form text field. |
| **Responsibilities** | Owns its own value, focus, and validation-display state. Does not own the overall field's label/helper/error presentation (Form Field's job). |
| **Composition** | A primitive — composed into Form Field alongside Label, Helper Text, and Error Message. |
| **Variants** | Format-specific configuration (email, phone, etc.) is expressed through Zod schemas (`DECISIONS.md` WD-021) applied to this same component, not as separate Email Field/Phone Field/Number Field components (`DECISIONS.md` WD-082). |
| **States** | Default, Hover, Focus, Active/Pressed, Disabled, Error, Success (validation-passed, optional). |
| **Accessibility** | Always paired with a visible Label — never placeholder-only (`DECISIONS.md` WD-046); validation errors are programmatically associated with the field, not only visually adjacent. |
| **Token Usage** | Typography (Body role, WD-027), spacing scale (WD-030), radius (WD-031), color roles for state (WD-036, WD-130). |
| **Relationships** | Used directly by the Interactive Showcase (company name, WD-005) and Contact; composed into Form Field. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Form Field. |
| **Future Extension** | Any future field needing specific format validation reuses this component with a different Zod schema, not a new primitive. |

---

## Text Area *(Optional)*

| Field | Detail |
|---|---|
| **Purpose** | A multi-line text input, for longer free-text entry than Text Field comfortably supports. |
| **Responsibilities** | Same as Text Field, scoped to multi-line content. Does not own label/helper/error presentation (Form Field's job). |
| **Composition** | A primitive — composed into Form Field, the same pattern as Text Field. |
| **Variants** | None beyond Text Field's variant discipline. |
| **States** | Default, Hover, Focus, Active/Pressed, Disabled, Error, Success. |
| **Accessibility** | Same requirements as Text Field. |
| **Token Usage** | Same as Text Field. |
| **Relationships** | Used for the Contact form's Message field — Contact's field list is resolved (`DECISIONS.md` WD-139: Name, Company, Email, Message), confirming this justification directly rather than by inference. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Form Field, for Contact's Message field. |
| **Future Extension** | Same reuse pattern as Text Field for any future long-form text need. |

---

## Select

| Field | Detail |
|---|---|
| **Purpose** | A categorical-choice control — the primitive behind the Interactive Showcase's business-type selector (`DECISIONS.md` WD-005). |
| **Responsibilities** | Owns its own selected value and open/closed state. Does not own the overall field's label/helper/error presentation (Form Field's job). |
| **Composition** | A primitive — composed into Form Field. |
| **Variants** | None beyond standard sizing (type/spacing scale, WD-027, WD-030). |
| **States** | Default, Hover, Focus, Active/Pressed, Disabled, Open/Closed (a Select-specific state pair, the same pattern as Mobile Navigation Toggle's Open/Closed state — `03_NAVIGATION.md`), Error. |
| **Accessibility** | Fully keyboard-operable (arrow-key selection, escape-to-close); open/closed state and selected value communicated to assistive technology. |
| **Token Usage** | Typography (Body role, WD-027), spacing scale (WD-030), radius (WD-031), motion tokens (WD-033) for its open/close transition. |
| **Relationships** | Used directly by the Interactive Showcase (business type, WD-005); composed into Form Field. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Form Field. |
| **Future Extension** | Reused for any future categorical-choice need without a new component. Combobox/Autocomplete-level complexity remains not recommended until a real need justifies it (`DECISIONS.md` WD-082). |

---

## Form

| Field | Detail |
|---|---|
| **Purpose** | The architectural container for a complete input flow — validation, submission, and field composition — used by both the Interactive Showcase's input step and Contact. |
| **Responsibilities** | Owns overall submission state and validation orchestration across its Form Field children. Does not own any individual field's own value or presentation. |
| **Composition** | Composes one or more Form Field instances via Stack (`02_LAYOUT.md` — Layout, tier 1), plus a Button for submission. |
| **Variants** | None — one Form contract, reused per use case (Interactive Showcase, Contact) with different field compositions. |
| **States** | Default, Submitting (Loading-adjacent, WD-044), Success, Error — applied at the whole-form level, distinct from any single field's own Error state. |
| **Accessibility** | Announces submission success/failure to assistive technology; moves focus sensibly after submission (e.g., to a success message or the first invalid field). Uses Live Region Announcer (`09_UTILITIES.md`, `DECISIONS.md` WD-098, resolved) for its live-region mechanics. |
| **Token Usage** | Spacing scale (WD-030) via Stack for field arrangement. |
| **Relationships** | Used by the Interactive Showcase and Contact (`INFORMATION_ARCHITECTURE.md` §7, §10); composes Form Field and Button. |
| **Dependencies** | Depends on: Form Field, Button (same tier, Inputs); Stack (Layout, tier 1, downward); Live Region Announcer (Utilities, tier 1, downward — `DECISIONS.md` WD-098, resolved). Depended on by: nothing structurally — composed into whatever feature or page uses it. |
| **Future Extension** | The same Form contract serves any future Dashboard settings form or Learning Platform enrollment form without redesign (`DECISIONS.md` WD-058). |

---

## Form Field

| Field | Detail |
|---|---|
| **Purpose** | Pairs a Label, an input (Text Field, Text Area, or Select), Helper Text, and Error Message into one consistent, reusable unit — Composition First (WD-055) applied directly to form-building. |
| **Responsibilities** | Owns the consistent arrangement and pairing of its children. Does not own any child's own internal behavior. |
| **Composition** | Composes Label, one input primitive (Text Field, Text Area, or Select), Helper Text, and Error Message, arranged via Stack (Layout, tier 1). |
| **Variants** | None — one consistent pairing pattern regardless of which input it wraps. |
| **States** | Inherits its wrapped input's state for display purposes (e.g., shows Error Message only when the input is in an Error state). |
| **Accessibility** | Ensures Label, Helper Text, and Error Message are all correctly associated with its wrapped input — this is Form Field's central accessibility responsibility. |
| **Token Usage** | Spacing scale (WD-030) via Stack. |
| **Relationships** | Used by Form to compose each individual field; wraps exactly one input primitive per instance. |
| **Dependencies** | Depends on: Label, Helper Text, Error Message (same tier, Inputs); one of Text Field/Text Area/Select (same tier); Stack (Layout, tier 1, downward). Depended on by: Form. |
| **Future Extension** | Any future input primitive composes into Form Field the same way, without Form Field itself changing. |

---

## Label

| Field | Detail |
|---|---|
| **Purpose** | The visible text identifying what a field collects — mandatory per "labels remain visible at all times... never placeholder-only" (`DECISIONS.md` WD-046). |
| **Responsibilities** | Owns its own text content and association with its paired input. Does not own the input's own value or state. |
| **Composition** | A primitive — composed into Form Field; composes a Required Indicator when its field is required. |
| **Variants** | None. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Must be programmatically associated with its input, not just visually adjacent — this is Label's entire purpose. |
| **Token Usage** | Typography (Caption or Body-adjacent role, WD-027). |
| **Relationships** | Composed into Form Field; composes Required Indicator when applicable. |
| **Dependencies** | Depends on: Required Indicator (same tier, when applicable). Depended on by: Form Field. |
| **Future Extension** | Unchanged by any future field type — the pairing pattern is universal. |

---

## Helper Text

| Field | Detail |
|---|---|
| **Purpose** | Explains why a piece of information is being requested or how to provide it — directly serving "explain why it's needed" (Part 4 — Forms). |
| **Responsibilities** | Owns its own supplementary text content. Does not own error messaging (Error Message's job) — the two are never shown simultaneously for the same field. |
| **Composition** | A primitive — composed into Form Field, typically replaced by Error Message when the field enters an Error state. |
| **Variants** | None. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Programmatically associated with its input, the same way Label is. |
| **Token Usage** | Typography (Caption role, WD-027). |
| **Relationships** | Composed into Form Field. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Form Field. |
| **Future Extension** | Unchanged by any future field type. |

---

## Error Message *(field-scoped)*

| Field | Detail |
|---|---|
| **Purpose** | States what went wrong with a specific field's value and how to fix it — directly serving `DECISIONS.md` WD-046. **Distinct from the Feedback category's future system-level Error message type (`DECISIONS.md` WD-049)** — this is field-local, not a toast or page-level alert. |
| **Responsibilities** | Owns its own field-specific error text, shown only when its paired input is in an Error state. Does not own system-level error communication (Feedback category's job) or the input's own validation logic (Zod, WD-021). |
| **Composition** | A primitive — composed into Form Field, displacing Helper Text when active. |
| **Variants** | None. |
| **States** | Non-interactive — N/A; its presence tracks its paired input's Error state. |
| **Accessibility** | Announced to assistive technology when it appears (a dynamic content change); programmatically associated with its input. |
| **Token Usage** | Typography (Caption role, WD-027); color from the Danger semantic role (`DECISIONS.md` WD-036, WD-130). |
| **Relationships** | Composed into Form Field. Conceptually related to, but not the same component as, Feedback's future Error message type — flagged explicitly to prevent future conflation. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Form Field. |
| **Future Extension** | Unchanged by any future field type; the Feedback category's own Error component, when documented, remains a separate, system-level concern. |

---

## Required Indicator

| Field | Detail |
|---|---|
| **Purpose** | A small visual marker showing that a field must be completed — implied by `DECISIONS.md` WD-046's principle that required fields are the default and are minimized, meaning required fields genuinely exist and need marking. |
| **Responsibilities** | Owns only the marking itself. Does not own the field's own required/optional validation logic (Zod, WD-021). |
| **Composition** | A primitive, composed into Label when a field is required — not used standalone. |
| **Variants** | None. |
| **States** | Non-interactive — N/A. |
| **Accessibility** | Communicated to assistive technology as part of the field being required, not conveyed by color/symbol alone. |
| **Token Usage** | Color from an approved role (`DECISIONS.md` WD-036, WD-130); typography scale for sizing (WD-027). |
| **Relationships** | Composed into Label. |
| **Dependencies** | Depends on: nothing (primitive). Depended on by: Label. |
| **Future Extension** | Unchanged by any future field type. |

---

## Index

| Component | Status | Documentation |
|---|---|---|
| Button | Documented | Above |
| Text Field | Documented | Above |
| Text Area | Documented (optional) | Above |
| Select | Documented | Above |
| Form | Documented | Above |
| Form Field | Documented | Above |
| Label | Documented | Above |
| Helper Text | Documented | Above |
| Error Message | Documented (field-scoped) | Above |
| Required Indicator | Documented | Above |

**Not included — rejected (`DECISIONS.md` WD-082):** Icon Button, Link Button, Button Group, Email Field, Phone Field, Number Field, Combobox, Autocomplete, Checkbox, Checkbox Group, Radio, Radio Group, Slider, Range Slider, Date Picker, Time Picker, Date Range Picker.

**Not included — deferred (`DECISIONS.md` WD-083):** Password Field, OTP Input, PIN Input (Authentication, Version 2); File Upload, Drag & Drop Upload (File Upload Strategy pending); Switch (no approved Version 1 feature requires it — **not** tied to the Theme Switcher rejection, WD-080; remains valid whenever a real feature, e.g. a future Dashboard settings surface, justifies it).

**Belongs to an unapproved feature, not another category:** Search Field (tied to site search, which is not an approved Weber feature — `INFORMATION_ARCHITECTURE.md` §4).
