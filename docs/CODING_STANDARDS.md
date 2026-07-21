# Weber — Coding Standards

> This document separates standards already established by the Constitution (stack-agnostic engineering principles) from standards that depend on a technology stack decision that has not been made yet. Nothing here is invented — sections that require a chosen framework/language are explicitly marked as pending.

**Note:** The core technology stack was approved in Technology Stack Finalization — Phase 2 (`DECISIONS.md` WD-014–WD-026; full list in `ARCHITECTURE.md` §0). This document now includes stack-specific standards for those approved technologies. Concrete conventions that depend on decisions still pending (folder layout, file naming) remain marked as placeholders.

---

## Naming Conventions

Established by the Constitution's Naming Standards:

- Names must describe intent immediately — no abbreviations, no vague names.
- Function names read as actions: `createProject()`, `isAuthenticated()`, `calculateEstimate()`, `getPortfolioProjects()`.
- If a name requires explanation, it is the wrong name.

---

## Folder Conventions

Established principles:

- Project structure must remain predictable — files exist where an experienced developer would expect to find them.
- Avoid deep nesting and avoid oversized directories.
- Organize by feature whenever practical.

Concrete folder layout: `[PLACEHOLDER — Pending Project Owner Decision]` — the technology stack that will populate the layout is decided (`DECISIONS.md` WD-014–WD-026), but the directory structure itself is not (see `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`).

---

## Component Conventions

Established principles:

- Components are reusable, independent, predictable, accessible, small, and composable.
- One component solves one problem — avoid giant, multi-purpose components; split complexity into smaller units.
- Components with identical purposes must look and behave identically across the product.
- **Composition First (`DECISIONS.md` WD-055):** before building a large component, evaluate whether it can be assembled from smaller, independently reusable pieces instead. See `DESIGN_SYSTEM.md` §3–§4 for the full component philosophy and classification system.
- **Documentation Before Implementation (`DECISIONS.md` WD-066):** no component may be implemented before its documentation entry in `docs/components/` has been reviewed and approved — see `docs/components/01_FOUNDATIONS.md` for the required template and lifecycle.
- **Dependency layering (`DECISIONS.md` WD-068):** a component may only depend on components in its own category layer or a lower one (Utilities/Layout → Navigation/Inputs/Feedback → Data Display/Surfaces → Marketing) — never the reverse.

Component system: **shadcn/ui built on Radix UI primitives** (`DECISIONS.md` WD-017), styled with **Tailwind CSS** (`DECISIONS.md` WD-016). Radix provides accessible-by-default behavior (keyboard, focus, ARIA); shadcn/ui components are copied into the codebase rather than installed as an opaque dependency, so visual identity stays fully under Weber's control per the brand's specific dark, minimal aesthetic. Class name composition and conflict resolution are decided — **clsx + tailwind-merge**, composed as a single `cn()` helper (`DECISIONS.md` WD-135); variant management (class-variance-authority or an alternative) is explicitly deferred until a component needs genuine variant matrices, not rejected. Concrete conventions beyond this (file extensions, props typing patterns, `cn()`'s exact file location): `[PLACEHOLDER — Pending Project Owner Decision]`

**Content/Component Separation Rule (Amendment 1 — `DECISIONS.md` WD-010):** content must never live inside a UI component unless it is truly UI-specific. Copy, offerings, pricing language, testimonials, and similar content must be kept separate from component code and injected/referenced, not hardcoded — regardless of which component framework is ultimately chosen.

---

## Styling Rules

**Tailwind CSS** is the official styling system (`DECISIONS.md` WD-016).

- Styling values (color, spacing, typography, radius, motion timing) come from the Tailwind theme configuration — never hardcoded arbitrary values in a component. This is how the Design System's token-driven requirement (Constitution, Part 6 — Design Tokens) is technically enforced.
- The approved color palette (`DECISIONS.md` WD-002) and dark-mode-as-default (`DECISIONS.md` WD-003) are configured at the theme level, not reintroduced ad hoc per component.
- No CSS-in-JS runtime styling — it carries a performance cost that conflicts with the Performance Trade-off Rule (Amendment 1 — `DECISIONS.md` WD-010).
- The full token set — typography, spacing, radius, elevation, motion, breakpoints, and container widths — is defined in [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md) (`DECISIONS.md` WD-027–WD-035). Components reference these tokens; they never redeclare an equivalent value locally.
- Semantic color values (success/warning/danger/information/neutral) are fully assigned (`DECISIONS.md` WD-036, WD-130) — see `DESIGN_TOKENS.md` §10.
- Class names are composed via **clsx + tailwind-merge** (`cn()`, `DECISIONS.md` WD-135) — never plain string concatenation, since Tailwind's equal-specificity utilities cannot otherwise guarantee a consumer's `className` reliably overrides a component's own default classes. Structured variant management (class-variance-authority or an alternative) is a separate, still-open decision — not resolved by WD-135.

---

## State Management Rules

**Zustand** is the official global client-state library (`DECISIONS.md` WD-022), used only when state is genuinely shared beyond a single component.

- Local component state remains the default (Constitution, Part 5 — State Management). Reaching for Zustand out of habit rather than a genuine cross-component need is a violation of this rule, not a stylistic choice.
- A server-state/data-fetching library (for data that originates on the server, e.g., a future dashboard) is a separate, still-open decision — Zustand is for client state only (`DECISIONS.md` WD-022 Final Decision).
- Any state introduced must have a Single Source of Truth (Amendment 1 — `DECISIONS.md` WD-010) — a Zustand store is a valid single source; duplicating the same data into local component state alongside it is not.

---

## Forms & Validation Rules

**React Hook Form** (`DECISIONS.md` WD-020) for client-side form handling, paired with **Zod** (`DECISIONS.md` WD-021) as the validation schema.

- A form's Zod schema is its single source of truth for both validation and the inferred TypeScript type — define it once, reuse it on the client and the server, never re-declare the same shape twice.
- Simple forms (e.g., Contact) may be implemented with native Server Actions (`DECISIONS.md` WD-026) instead of React Hook Form, to ship the least JavaScript necessary (Performance Trade-off Rule — `DECISIONS.md` WD-010). Reserve React Hook Form for forms with meaningful client-side interactivity or multi-step state (e.g., the Interactive Showcase).
- Validation runs server-side regardless of which pattern is used for the client — never trust client-side validation alone (Constitution, Part 5 — Validation).

---

## Data Rules

**Single Source of Truth Rule (Amendment 1 — `DECISIONS.md` WD-010):** every piece of data has exactly one authoritative origin. No value may be duplicated across multiple stores, components, or state containers in a way that allows copies to drift out of sync — everything else derives from or references the single source.

**Persistence layer:** **PostgreSQL** via **Prisma ORM** (`DECISIONS.md` WD-024, WD-025) is the single source of truth for persisted application data. Prisma's schema is the one place a data shape is defined for the database layer — application code reads and writes through it rather than maintaining a parallel description of the same shape.

---

## TypeScript Rules

**TypeScript** is the official programming language (`DECISIONS.md` WD-015). JavaScript is not used for application code.

- Every data shape that crosses a boundary (a component prop, a Server Action input, a database record via Prisma, a Zod-validated form) is typed — untyped `any` defeats the purpose of the decision and is avoided.
- Types double as documentation: naming should still describe intent (see Naming Conventions above) even though the compiler enforces shape — one does not replace the other.
- Zod schemas (`DECISIONS.md` WD-021) and Prisma's generated types (`DECISIONS.md` WD-025) are the preferred source of inferred types over hand-written duplicate interfaces, consistent with the Single Source of Truth Rule.
- The import alias is `@/*`, resolving to the `src/` directory (`DECISIONS.md` WD-116). Compiler strictness flags and other `tsconfig` specifics remain undecided — `[PLACEHOLDER — Pending Project Owner Decision]`.

---

## React Rules

React is the frontend framework (`DECISIONS.md` WD-011), used via **Next.js, App Router** (`DECISIONS.md` WD-014). The following are binding, as direct applications of existing Constitution and Amendment 1 principles to React specifically:

- **Content/Component Separation (Amendment 1 — WD-010):** content (copy, offerings, pricing language, testimonials, etc.) must not be hardcoded inside a React component unless it is genuinely UI-specific (e.g., a label that only exists because of that interaction). Content lives outside the component and is passed in or referenced.
- **Single Responsibility:** each component solves one problem; avoid giant, multi-purpose components — split complexity into smaller composable units (Constitution, Part 5 — Component Philosophy).
- **Predictable state:** keep state local to a component whenever possible; lift to Zustand (`DECISIONS.md` WD-022) only when it is genuinely shared, never for convenience (Constitution, Part 5 — State Management).
- **Consistency:** components with identical purposes must look and behave identically everywhere they're used (Constitution, Part 6 — Component Consistency).

Concrete conventions such as file/folder layout and prop-typing style beyond what TypeScript itself enforces remain `[PLACEHOLDER — Pending Project Owner Decision]`.

---

## Next.js Rules

Next.js, App Router (`DECISIONS.md` WD-014), with Route Handlers and Server Actions as the backend for V1 (`DECISIONS.md` WD-026).

- Server Components are the default; a component is only marked as a Client Component when it genuinely needs interactivity, browser APIs, or client-side state — keeping business logic and secrets off the client by default (Constitution, Part 5 — Security).
- Server Actions handle simple form submissions (e.g., Contact) directly; Route Handlers are reserved for cases that need a conventional HTTP endpoint. Neither exists as a formal, versioned public API yet — that remains `[PLACEHOLDER — Pending Project Owner Decision]`.
- The Metadata API is the mechanism for satisfying the Constitution's SEO requirements (Part 5 — SEO) — titles, descriptions, Open Graph data — per route.
- next-intl (`DECISIONS.md` WD-023) governs locale-aware routing once localization implementation specifics are decided.

---

## Accessibility Rules

Established by the Constitution (mandatory, not optional, for every implementation):

- Full keyboard navigation support.
- Semantic HTML with proper heading hierarchy (never skip heading levels).
- Sufficient color contrast.
- Visible focus states on every interactive element.
- Screen reader compatibility.
- ARIA attributes used only when semantic HTML is insufficient.
- Touch-friendly target sizes.

---

## Security Rules

**AI Security Decision Authority (Amendment 1 — `DECISIONS.md` WD-010):** the AI may write and implement security-related code (authentication flows, validation, access control, etc.), but may never independently choose the underlying security approach — authentication method, encryption strategy, authorization model, or session strategy. These require an explicit proposal with trade-offs and Project Owner approval before implementation.

---

## Performance Rules

Established by the Constitution, and made a hard gate by Amendment 1 (`DECISIONS.md` WD-010): **no feature may be added if it noticeably degrades performance without delivering equivalent user value.** This must be evaluated during planning, not discovered after the fact.

- Optimize rendering, images, fonts, JavaScript bundles, database queries, network requests, and animations.
- Measure before optimizing — no premature optimization.
- Respect `prefers-reduced-motion`; animation must never delay interaction.
- Every dependency added increases maintenance cost — before adding a package, confirm it is actively maintained, genuinely necessary, and that native capabilities can't solve the problem instead.

---

## Animation & Icon Rules

- **Motion** (`DECISIONS.md` WD-018) is reserved for animation that communicates state, feedback, or continuity — not decoration (Constitution, Part 6 — Motion System). Simple hover/focus states are handled with native CSS rather than Motion, to keep the JavaScript cost proportional to what the interaction actually needs.
- Duration and easing values come from the approved motion tokens (`DECISIONS.md` WD-033; `DESIGN_TOKENS.md` §7) — never an arbitrary one-off value per component.
- **Lucide React** (`DECISIONS.md` WD-019) is the one and only icon family used throughout the project (Constitution, Part 6 — Icons). Icons support a label; they do not replace one.

---

## Code Review Checklist

Per the Constitution's Code Reviews and Completion Checklist (Parts 5 and 8), before any implementation is considered complete:

- [ ] Does the implementation solve the stated problem?
- [ ] Can it be simplified?
- [ ] Is it reusable?
- [ ] Is it secure (no exposed secrets, validated input, protected routes)?
- [ ] Is it accessible (keyboard, screen reader, contrast, focus states)?
- [ ] No console errors or warnings.
- [ ] Responsive across supported breakpoints.
- [ ] Design System respected (colors, spacing, typography, motion).
- [ ] Performance acceptable.
- [ ] Documentation updated (including `DECISIONS.md` if architectural).
- [ ] Matches the Constitution end to end.

---

## Implementation Quality Requirements (Mandatory)

**(`DECISIONS.md` WD-172)** A permanent engineering policy, binding on every implementation task from the date it was adopted — applied automatically, without needing to be restated per task. Supersedes case-by-case reminders; extends (does not replace) the Code Review Checklist below with a stricter, more exhaustive, explicitly mandatory gate.

**Before implementing any feature or modification:**

- Search the entire codebase for existing implementations of the same behavior.
- Search for existing utilities, hooks, components, motion primitives, content registries, validators, types, and design tokens that can be reused.
- Explain briefly what was found and why the chosen implementation is the correct extension point.

Never start writing new code before completing this investigation.

If an existing implementation can be extended safely, extending it is always preferred over creating a parallel implementation.

Creating duplicate architecture requires an explicit justification in the implementation report.

**After implementation, always perform a complete quality review:**

1. Search for duplicated code or duplicated logic introduced by the implementation.
2. Verify no existing component, utility, helper, hook, or motion primitive already solves the same problem.
3. Ensure the implementation follows the existing Weber architecture and all approved decisions.
4. Review for bugs, including: race conditions, stale state, hydration mismatches, memory leaks, missing cleanup, incorrect dependency arrays, accessibility regressions, keyboard navigation issues, focus management issues, animation conflicts, layout shift (CLS).
5. Review for security issues, including: XSS, unsafe URL handling, unsafe external links, unsanitized user input, accidental exposure of sensitive information.
6. Verify TypeScript correctness without introducing `any`, `@ts-ignore`, or unsafe assertions unless absolutely justified.
7. Ensure no unnecessary Client Components are introduced.
8. Ensure the implementation does not negatively affect performance, bundle size, or static prerendering.
9. Perform Mandatory Regression Verification (below).

**Mandatory Regression Verification:** after every implementation, before considering the task complete, verify:

- Existing behavior has not changed unintentionally.
- Existing routes still work correctly.
- Existing reusable components continue to behave the same unless intentionally modified.
- Accessibility behavior has not regressed.
- Motion behavior has not regressed.
- Responsive layouts remain correct.
- SEO metadata and structured data (if affected) remain correct.
- No new console errors or hydration issues were introduced.
- No unnecessary dependencies or bundle-size increases were introduced.

The final report must include a short "Regression Review" section summarizing this verification.

**Code Quality Gate:** no implementation is considered complete until all of the following pass:

- TypeScript (`pnpm run typecheck`)
- ESLint (`pnpm run lint`)
- Production Build (`pnpm run build`)

If any validation fails, the implementation is considered incomplete regardless of feature completeness — fix it before finishing.

**Every implementation report must also include:**

- Files created
- Files modified
- Files removed (if any)
- Existing components/utilities reused
- Architecture decisions respected
- Validation results
- Duplication review
- Security review
- Performance review
- Accessibility review
- Regression Review

---

## Best Practices

- Comments explain *why*, not *what* — code should be self-explanatory before it needs a comment.
- Single Responsibility Principle applies to every function, component, module, and service.
- Extract logic into reusable abstractions only once genuine duplication exists — do not over-engineer speculatively.
- Never trust user input — validate on the client, the server, and (where appropriate) the database layer.
- Errors must explain the problem, the cause, and the suggested fix — never fail silently, never show a generic message.
- Never log secrets, passwords, or other sensitive information.
- No hardcoded credentials, ever.

---

## How This Document Is Maintained

Remaining placeholder items (compiler strictness flags, file/folder conventions beneath `src/`, ESLint rule configuration, formal API design) will be filled in once those specific decisions are made and recorded in `DECISIONS.md`. The core technology stack, package manager, Node.js version policy, and `create-next-app` bootstrap configuration (`src/` directory, import alias, ESLint tool inclusion, dev-only Turbopack) are now decided (`DECISIONS.md` WD-014–WD-026, WD-114–WD-116) — see `ARCHITECTURE.md` §0 for the full list.
