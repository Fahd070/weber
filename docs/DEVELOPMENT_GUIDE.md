# Weber — Development Guide

> This guide describes the development workflow that governs the Weber project. Where the Constitution defines a workflow explicitly, it is documented here as decided. Where no concrete tooling/process has been chosen yet, it is marked as a placeholder rather than invented.

---

## Branch Strategy

`[PLACEHOLDER — Pending Project Owner Decision]`

No branching model (e.g., trunk-based, GitFlow, feature-branch naming convention) has been chosen yet. This section will be completed once a version control workflow is approved and logged in `DECISIONS.md`.

---

## Implementation Workflow

This is defined by the Constitution's Mandatory Workflow (`PROJECT_CONSTITUTION.md`, Part 7) and applies to every task, without exception:

1. **Understand the request.** Never start coding immediately.
2. **Analyze the existing architecture.** Review affected components, dependencies, and possible side effects.
3. **Create an implementation plan** covering: objective, reason, files affected, risks, benefits, estimated complexity, expected outcome.
4. **Wait for approval** if the task changes architecture, business logic, UX, branding, or project structure.
5. **Implement carefully** — no rushing, no touching unrelated files, logically separated commits.
6. **Verify the implementation** — functionality, accessibility, performance, responsiveness, consistency, security, code quality, SEO.
7. **Provide an implementation report** — what changed, why, files modified, architectural impact, future recommendations, known limitations.

At a project level, the same shape repeats per Phase (see Part 9 of the Constitution): Phase Planning → Architecture Review → Project Owner Approval → Implementation → Internal Validation → Quality Assurance → Documentation → Project Owner Review → Acceptance → Next Phase. No phase may begin before the previous one is formally accepted.

**Component-specific gate:** for any UI component, this general workflow is sharpened into a hard rule — no component may be implemented before its documentation entry in `docs/components/` has been reviewed and approved (Documentation Before Implementation Gate, `DECISIONS.md` WD-066). See `docs/components/01_FOUNDATIONS.md` §5 for the full six-stage component lifecycle.

---

## Approval Workflow

- The Project Owner is the sole and final decision authority (business, brand, UX, product, roadmap, pricing, technology changes).
- The AI may recommend; it may never decide unilaterally on anything affecting architecture, business logic, UX, branding, or project structure.
- Approval must be **explicit**. Silence is not approval. Approval for one phase does not carry over to the next.
- When multiple viable solutions exist, all reasonable options must be presented with trade-offs, with one recommended — the Project Owner chooses.
- When information is missing, the correct action is to stop and ask — never guess or invent.

---

## Code Review Workflow

Before any implementation is considered complete, verify (per the Constitution's Code Reviews and Mandatory Internal Review sections):

- Does it solve the stated problem?
- Can it be simplified?
- Is it reusable, secure, accessible?
- Does it match the Constitution (architecture, UX, product, design, engineering, performance, accessibility, security, SEO, future scalability)?

If improvements are identified during review, they are implemented before requesting sign-off — not deferred silently.

ESLint is installed as a Bootstrap tool (`DECISIONS.md` WD-116). Its rule-set policy is now decided: correctness-first and maintainability-first, at a moderate rule set — accessibility, React, React Hooks, the base `@typescript-eslint` plugin, `no-explicit-any`, `no-debugger`, `prefer-const`, and `no-var` are approved rule categories, and import-boundary enforcement is approved in direction as the mechanism for enforcing WD-068 (`DECISIONS.md` WD-121).

Prettier is adopted as Weber's formatting tool (`DECISIONS.md` WD-122): "Defer to Prettier defaults unless an approved Weber principle requires otherwise." Trailing commas, JSX formatting, LF line endings, and end-of-file newline are approved. `docs/` is explicitly excluded from automatic formatting — Weber's governance documentation is maintained manually. Import ordering belongs to ESLint, not Prettier.

EditorConfig is adopted (`DECISIONS.md` WD-123), scoped to editor-level consistency only — the earliest stage in the pipeline, before Prettier, ESLint, or TypeScript run. `root=true`, `charset=utf-8`, and a Markdown-specific whitespace-protection section (guarding the two-space hard-line-break convention in `docs/`) are approved. `end_of_line=lf` and `insert_final_newline=true` are recorded as reflections of WD-122's own values, not independent decisions. EditorConfig must never become a second source of formatting policy.

Husky is adopted (`DECISIONS.md` WD-124) as Weber's Git hook orchestration tool. **Husky decides when hooks execute; lint-staged decides what runs on staged files; ESLint defines lint policy (WD-121); Prettier defines formatting policy (WD-122); EditorConfig defines editor behavior (WD-123); TypeScript defines compiler behavior; CI performs repository-wide verification.** `pre-commit` is the only approved hook, orchestrating already-approved ESLint and Prettier policy only. `commit-msg` (blocked on the undecided commit message convention), `pre-push` (blocked on the undecided testing framework and branch strategy), `post-merge`, and `post-checkout` all remain deferred. Husky is not a Bootstrap requirement. Husky must never become a mechanism for introducing new engineering policy.

lint-staged is adopted (`DECISIONS.md` WD-125), completing the `pre-commit` payload WD-124 left open. It operates only on staged files and may execute only already-approved tooling: ESLint on staged source files (WD-121) and Prettier on staged source files (WD-122), with `docs/` remaining excluded exactly as WD-122 already requires. Type checking, testing, build execution, generated files, Prisma-specific behavior, `package.json`-specific behavior, and image optimization are all explicitly deferred, each against its own named prerequisite. lint-staged completes the already-approved `pre-commit` pipeline — it does not extend it. It is recommended for Bootstrap completion and is not a Bootstrap blocker. lint-staged must never become a mechanism for introducing new engineering policy.

Weber's Next.js version policy is adopted (`DECISIONS.md` WD-126), following the same governance pattern as Node.js version policy (WD-115): **Active Major, deliberately pinned, never floating automatically** — Weber tracks a specific, deliberately-chosen Next.js major version, never "latest" and never a literal "LTS version," since Next.js has no official LTS program, unlike Node.js's Active/Maintenance/EOL tiers. Upgrades are **event-driven, never calendar-driven**, mirroring WD-115's own upgrade philosophy directly.

Weber's concrete Next.js version is **Next.js 16** (`DECISIONS.md` WD-127), resolving the version number WD-126 deliberately left open. Chosen because Next.js 15's active security-backport window closes within roughly three months of this decision while 14 is already past support, and because Next.js 16 carries a stable Turbopack production build path and a stable (opt-in) React Compiler, with none of the 15→16 breaking changes applying to Weber since no prior installation exists. Pinning 16 mechanically enables — but does not itself resolve — the concrete Node.js version lookup (WD-115's Active LTS formula, now runnable against Next.js 16's published Node.js ≥ 20.9.0 minimum), the `package.json` `engines` value, and the `.nvmrc` value. It makes React Compiler and Production Turbopack **evaluable**; it does **not** approve either. Both remain separate, undecided items.

Weber's concrete Node.js version is **Node.js 24** (`DECISIONS.md` WD-128) — the current Active LTS line, resolving the version number WD-115's own Active LTS policy deliberately left open, mechanically derived by running that policy against Next.js 16's published minimum (WD-127). Node.js 20, the literal Next.js 16 floor, was rejected because it reached end-of-life before this decision and receives no further security patches; Node.js 22 is Maintenance LTS only, not Active LTS; Node.js 24 also independently clears pnpm's own Node ≥ 22 requirement. This resolves `package.json` `engines`, `.nvmrc`, the local development runtime, and the CI runtime baseline as direct mechanical write-throughs of this single value. It introduces no new architectural policy, does not approve React Compiler, does not approve Production Turbopack, and does not change the Next.js version policy, the concrete Next.js version, the package manager, or any other Bootstrap configuration.

Numeric thresholds (`complexity`, `max-lines`, `max-params`), mechanical naming-convention enforcement, the specific import-boundary plugin, print width, quote style, semicolons, `indent_size`/`tab_width`, `indent_style`, TypeScript compiler strictness, commit message convention, testing framework, CI platform, PR templates, and required reviewers all remain undecided: `[PLACEHOLDER — Pending Project Owner Decision]`

---

## Testing Workflow

The Constitution establishes the philosophy but not the tooling:

- Critical functionality should be testable; code should be written with testing in mind.
- Avoid tightly coupled implementations that prevent testing.
- "Code compiles" is not sufficient for completion — see the Completion Checklist in `PROJECT_CONSTITUTION.md`, Part 8.

Specific testing framework, coverage targets, and CI test gates: `[PLACEHOLDER — Pending Project Owner Decision]`

---

## Deployment Workflow

`[PLACEHOLDER — Pending Project Owner Decision]`

No hosting platform, environments, or deployment/release process have been chosen yet. Whatever is chosen must satisfy the Constitution's Launch Readiness and Release Readiness requirements (Parts 8–9): no critical bugs, no placeholder content, no debug code, responsive and accessible, and the phase must represent a genuinely deployable state before it is accepted.

---

## Documentation Workflow

- Every important architectural or product decision is logged in [`DECISIONS.md`](./DECISIONS.md) at the time it is approved — not after the fact.
- Every completed phase produces documentation deliverables: implementation summary, architecture changes, files modified, design/engineering decisions, known limitations, future recommendations, and the suggested next phase (Constitution, Part 9).
- Documentation is part of the definition of "done" — a task is not complete until relevant docs are updated and the Project Owner has reviewed them.
- No file is renamed, deleted, or restructured silently — every such change is explained before it happens.

---

## How This Guide Is Maintained

Placeholders in this document are replaced with concrete process only after the relevant decision is made and recorded in `DECISIONS.md`.
