# Component Library — Master Index

> Governed by `01_FOUNDATIONS.md`. The single cross-category lookup for every component in Weber's library — checked before proposing anything new (`01_FOUNDATIONS.md` §7 — Reuse).

**Status:** Fifty-four components documented across eight categories — every category in `DESIGN_SYSTEM.md` §4 now has at least one documented component. **Layout (9 components) is confirmed complete for Version 1 — `DECISIONS.md` WD-074.** **Utilities (4 components) is documented — `DECISIONS.md` WD-098** — Skip Link, Visually Hidden, Icon, and Live Region Announcer; the latter two resolve forward dependencies previously recorded against Mobile Navigation Toggle, Button, Alert, Spinner, Empty State, Form, Feature List, and Preview Frame. **Navigation (9 components, one optional) is confirmed complete for Version 1 with no open blockers — `DECISIONS.md` WD-076, WD-110** — its CTA inside Navigation now depends on the documented Button (WD-079/WD-084, resolved), and Footer is now documented as a composition-only component reusing Brand Link, with Language Switcher explicitly excluded by default (WD-110, WD-111) — no Footer content is approved. **Inputs (10 components, one optional) is documented — `DECISIONS.md` WD-081.** **Feedback (4 components) is documented — `DECISIONS.md` WD-085.** **Data Display (10 components, two optional) is documented — `DECISIONS.md` WD-089, WD-112** — Case Study Layout, Article Layout, and Service Detail Layout are Data Display components, not Layout primitives, despite their names; Service Card, Portfolio Card, Blog Post Card, and Testimonial Card each depend on the now-documented Surfaces Card primitive (WD-091, resolved by WD-092); CTA Banner is explicitly not a Service Detail Layout dependency, avoiding a WD-068 violation (WD-112). **Surfaces (2 components, one optional) is documented — `DECISIONS.md` WD-092** — Card resolves the Data Display forward dependency; Tooltip is a core primitive with no Version 1 consumer, documented now for Design System completeness. **Marketing (4 components) is documented — `DECISIONS.md` WD-095** — Hero, CTA Banner, Feature List, Preview Frame; Blog Preview is documented separately as a composition pattern, not a component (WD-097); Hero Content and Hero Media are confirmed as internal compositions of Hero, not independent entries. Forty-five of the fifty-four have entered Implementation (see the Index below for the per-component breakdown); the remaining nine — Aspect Ratio (Workshopped and Finalized as a value-agnostic mechanism, `DECISIONS.md` WD-138, but not yet implemented in code), Breadcrumb, Language Switcher (blocked on the still-undecided next-intl locale-routing scheme, WD-023), Text Area, Portfolio Card, Blog Post Card (the latter two blocked on Aspect Ratio's own implementation, not its architecture), Key Value Pair, Tooltip, and Preview Frame (blocked on the unresolved Interactive Showcase generation mechanism) — remain at Documented. All fifty-four passed the Documentation Before Implementation Gate (WD-066) before any implementation began.

---

## Index

| Component | Category | Lifecycle Status | Documentation |
|---|---|---|---|
| App Shell | Layout | Implemented | `02_LAYOUT.md` |
| Page | Layout | Implemented | `02_LAYOUT.md` |
| Container | Layout | Implemented | `02_LAYOUT.md` |
| Section | Layout | Implemented | `02_LAYOUT.md` |
| Stack | Layout | Implemented | `02_LAYOUT.md` |
| Grid | Layout | Implemented (`DECISIONS.md` WD-137) | `02_LAYOUT.md` |
| Cluster | Layout | Implemented | `02_LAYOUT.md` |
| Divider | Layout | Implemented | `02_LAYOUT.md` |
| Aspect Ratio | Layout | Documented (mechanism Finalized — `DECISIONS.md` WD-138 — not yet implemented) | `02_LAYOUT.md` |
| Skip Link | Utilities | Implemented | `09_UTILITIES.md` |
| Visually Hidden | Utilities | Implemented | `09_UTILITIES.md` |
| Icon | Utilities | Implemented (resolves 4 forward dependencies) | `09_UTILITIES.md` |
| Live Region Announcer | Utilities | Implemented (resolves 5 forward dependencies) | `09_UTILITIES.md` |
| Header | Navigation | Implemented | `03_NAVIGATION.md` |
| Footer | Navigation | Implemented (content pending) | `03_NAVIGATION.md` |
| Navigation Menu | Navigation | Implemented | `03_NAVIGATION.md` |
| Navigation Item | Navigation | Implemented | `03_NAVIGATION.md` |
| Brand Link | Navigation | Implemented | `03_NAVIGATION.md` |
| Mobile Navigation Toggle | Navigation | Implemented | `03_NAVIGATION.md` |
| CTA inside Navigation | Navigation | Implemented (depends on Button, resolved) | `03_NAVIGATION.md` |
| Breadcrumb | Navigation | Documented (optional) | `03_NAVIGATION.md` |
| Language Switcher | Navigation | Documented | `03_NAVIGATION.md` |
| Button | Inputs | Implemented | `04_INPUTS.md` |
| Text Field | Inputs | Implemented | `04_INPUTS.md` |
| Text Area | Inputs | Documented (optional) | `04_INPUTS.md` |
| Select | Inputs | Implemented | `04_INPUTS.md` |
| Form | Inputs | Implemented | `04_INPUTS.md` |
| Form Field | Inputs | Implemented | `04_INPUTS.md` |
| Label | Inputs | Implemented | `04_INPUTS.md` |
| Helper Text | Inputs | Implemented | `04_INPUTS.md` |
| Error Message | Inputs | Implemented (field-scoped) | `04_INPUTS.md` |
| Required Indicator | Inputs | Implemented | `04_INPUTS.md` |
| Alert | Feedback | Implemented (4 variants) | `05_FEEDBACK.md` |
| Spinner | Feedback | Implemented | `05_FEEDBACK.md` |
| Skeleton | Feedback | Implemented | `05_FEEDBACK.md` |
| Empty State | Feedback | Implemented (Default + Error variants) | `05_FEEDBACK.md` |
| Service Card | Data Display | Implemented | `06_DATA_DISPLAY.md` |
| Portfolio Card | Data Display | Documented (blocked — depends on Aspect Ratio's implementation, not its architecture, which is Finalized per WD-138) | `06_DATA_DISPLAY.md` |
| Blog Post Card | Data Display | Documented (blocked — depends on Aspect Ratio's implementation, not its architecture, which is Finalized per WD-138) | `06_DATA_DISPLAY.md` |
| Testimonial Card | Data Display | Implemented | `06_DATA_DISPLAY.md` |
| Tag | Data Display | Implemented | `06_DATA_DISPLAY.md` |
| Timeline | Data Display | Implemented | `06_DATA_DISPLAY.md` |
| Accordion | Data Display | Implemented | `06_DATA_DISPLAY.md` |
| Case Study Layout | Data Display | Implemented (not a Layout primitive; unblocked by Grid, `DECISIONS.md` WD-137) | `06_DATA_DISPLAY.md` |
| Article Layout | Data Display | Implemented (not a Layout primitive) | `06_DATA_DISPLAY.md` |
| Service Detail Layout | Data Display | Implemented (not a Layout primitive) | `06_DATA_DISPLAY.md` |
| Avatar | Data Display | Implemented (optional) | `06_DATA_DISPLAY.md` |
| Key Value Pair | Data Display | Documented (optional) | `06_DATA_DISPLAY.md` |
| Card | Surfaces | Implemented (resolves Data Display dependency) | `07_SURFACES.md` |
| Tooltip | Surfaces | Documented (optional for Version 1 usage — zero V1 consumers) | `07_SURFACES.md` |
| Hero | Marketing | Implemented | `08_MARKETING.md` |
| CTA Banner | Marketing | Implemented | `08_MARKETING.md` |
| Feature List | Marketing | Implemented | `08_MARKETING.md` |
| Preview Frame | Marketing | Documented (blocked — Interactive Showcase generation mechanism unresolved) | `08_MARKETING.md` |

**Lifecycle Status values:** Proposed · In Review · Approved · Documented · Implemented · Deprecated (`01_FOUNDATIONS.md` §5, §8).

**Explicitly excluded:** Spacer, Screen Reader Only (`DECISIONS.md` WD-072); Navigation Bar, Mobile Navigation, Navigation Group, standalone Logo Component, Search Trigger (`DECISIONS.md` WD-077); Theme Switcher (`DECISIONS.md` WD-080 — confirmed not approved for Version 1); Icon Button, Link Button, Button Group, Email Field, Phone Field, Number Field, Combobox, Autocomplete, Checkbox, Checkbox Group, Radio, Radio Group, Slider, Range Slider, Date Picker, Time Picker, Date Range Picker (`DECISIONS.md` WD-082); Banner, Toast, Snackbar, Notification, Success Message, Warning Message, Error State (standalone), Info Message, Loading Indicator, Progress Bar, Circular Progress, Inline Status, Validation Summary, Retry Panel, Offline Indicator (`DECISIONS.md` WD-086); Feature Card, Statistic Card, Badge, Chip, Avatar Group, Icon + Text, List, Definition List, Table, Tabs, Code Block, Quote Block, Metric Display, Rating, Price Display (`DECISIONS.md` WD-090 — Price Display specifically contradicts WD-006); Surface (generic elevated-container primitive), Panel, Overlay, Backdrop, Scroll Area, Floating Action Surface (`DECISIONS.md` WD-093); Hero Content, Hero Media — internal composition of Hero, not independent entries (`DECISIONS.md` WD-095); Service Showcase, Portfolio Showcase, Testimonial Showcase, FAQ Section, Contact CTA — redundant compositions (`DECISIONS.md` WD-096); Pricing Section (contradicts WD-006), Logo Cloud, Newsletter Signup, Social Proof, Metrics Section, Video Showcase, Comparison Section (`DECISIONS.md` WD-096); Theme Provider, Theme Switcher helper, Keyboard Shortcut Helper, Copy to Clipboard, External Link Indicator, Loading Boundary, Error Boundary, Client Only, No SSR Wrapper, Portal (`DECISIONS.md` WD-099). **Belongs to another category:** Modal, Confirmation Dialog — deferred, see below (`DECISIONS.md` WD-087, WD-094); Card — Surfaces, now documented (`DECISIONS.md` WD-091, resolved by WD-092); Callout — Feedback, already exists as Alert; Separator Surface — Layout, already exists as Divider; Sticky Container — Navigation, already owned by Header (`DECISIONS.md` WD-093); Process Steps — Data Display, already exists as Timeline; Input Form — Inputs, already exists as Form; Trust Signals — Navigation's Footer content, or covered by Feature List (`DECISIONS.md` WD-096). **Composition pattern, not a component:** Blog Preview — Section + Grid + Blog Post Card + CTA Banner, documented in `08_MARKETING.md` with no independent Lifecycle status (`DECISIONS.md` WD-097). **Alias, not a separate component:** Screen Reader Announcer — the same concept as Live Region Announcer (`DECISIONS.md` WD-098). **Deferred, not rejected:** Theme Switcher may be reconsidered in a future theme-expansion phase (WD-080); Password Field, OTP Input, PIN Input, File Upload, Drag & Drop Upload, and Switch (`DECISIONS.md` WD-083 — Switch specifically awaits a genuine feature need, not tied to Theme Switcher); Status Badge, Version 2 (WD-087); Data Table, Progress Metric, Version 2 (WD-091); Modal (with Dialog as the same concept), Confirmation Dialog, Sheet/Drawer/Bottom Sheet, Popover/Hover Card, Side Panel — Version 2, to be reviewed as one connected pass (`DECISIONS.md` WD-094); Focus Trap — tied to that same deferred overlay family, to be reviewed together (`DECISIONS.md` WD-100). **Belongs to an unapproved feature:** Search Field (WD-083).

---

## How This Document Is Maintained

A row is added here only when a component reaches the **Approval** stage of the Component Lifecycle (`01_FOUNDATIONS.md` §5) — never before. The row's status is updated as the component moves through Documentation, Implementation, and eventually Maintenance or Deprecation (§8). This index must never list a component that doesn't also have a corresponding entry in its category document.
