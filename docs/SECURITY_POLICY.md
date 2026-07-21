# Weber — Security Policy

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and must remain consistent with `DECISIONS.md` (the record of what has actually been approved). Every statement below either (a) restates an approved Constitution principle, (b) restates a logged decision from `DECISIONS.md`, or (c) is explicitly marked `[PENDING PROJECT OWNER DECISION]`. Nothing here is invented. Referenced as the intended home for detailed security specifications by `ARCHITECTURE.md` §9 and `CODING_STANDARDS.md` §9 (`DECISIONS.md` WD-101–WD-103).

**Status:** Approved security principles are finalized below. Every mechanism-level decision — how authentication, authorization, sessions, and encryption actually work — remains open and is marked accordingly. See **Security Decision Boundaries** (§2) before reading any further section.

---

## 1. Governing Rule

**The AI Security Decision Authority Rule (`DECISIONS.md` WD-010, `PROJECT_CONSTITUTION.md` Part 11 — Amendment 1, Rule 3):**

> "Security is a requirement, not a feature."
> "AI may generate code, but it may never decide security."

The AI may write and implement security-related code — authentication flows, validation, access control, and so on — but may never independently choose the underlying security **approach**: authentication method, encryption strategy, authorization model, or session strategy. Those choices require an explicit proposal with trade-offs and Project Owner approval before implementation, consistent with the Decision Hierarchy in `PROJECT_CONSTITUTION.md` Part 7 (Engineering Decision → AI Recommendation → Project Owner Approval).

This rule governs this document as much as it governs implementation. Section 2 exists to make that boundary explicit and unambiguous.

---

## 2. Security Decision Boundaries

**This document intentionally does NOT define or imply any of the following, until each is explicitly proposed and approved by the Project Owner:**

- **Authentication mechanism** — how a user's identity is established and verified.
- **Authorization model** — how access to resources or actions is granted or restricted.
- **Session strategy** — how an authenticated state is maintained across requests.
- **Encryption approach** — how sensitive data is protected at rest or in transit.

No default, convention, or implied choice for any of the four items above should be inferred from anything else in this document, in `ARCHITECTURE.md`, or in any other approved documentation. Where a Version 1 or Version 2 feature eventually requires one of these (for example, a future Client Dashboard, `DECISIONS.md` WD-038), it must go through the same path: an explicit proposal with trade-offs, reviewed and approved by the Project Owner, and logged in `DECISIONS.md` before implementation — never assumed, never defaulted, never inferred from a technology already chosen for an unrelated reason.

This boundary exists because Weber's Version 1 scope, as currently approved, has no authenticated area at all — no user accounts, no login, no Client Dashboard (Version 2 only). There is nothing today that these four decisions need to unblock. Documenting them prematurely would risk exactly the kind of unilateral security decision WD-010 was written to prevent.

---

## 3. Approved Security Principles

Every principle below is a direct restatement of already-approved Constitution text, `DECISIONS.md` entries, or engineering standards — not a new policy.

### 3.1 Security Is a Requirement

"Security is a requirement. Not a feature. Follow secure defaults." (`PROJECT_CONSTITUTION.md` Part 5 — Security.) The following categories are explicitly protected, per the Constitution, regardless of which concrete mechanism eventually implements each one: authentication, authorization, API routes, sensitive data, environment variables, uploads, cookies, sessions, and database access.

- Never expose secrets.
- Never hardcode credentials.
- Never bypass validation.

### 3.2 Input Validation

- All input is validated client-side, server-side, and at the database layer where appropriate (`PROJECT_CONSTITUTION.md` Part 5 — Validation). Client-side validation alone is never trusted.
- **Zod** (`DECISIONS.md` WD-021) is the approved validation schema library, paired with **React Hook Form** (`DECISIONS.md` WD-020) for client-side form handling.
- A form's Zod schema is its single source of truth for both validation and its inferred TypeScript type — defined once, reused on the client and the server, never re-declared.
- Validation runs server-side regardless of which pattern is used on the client.

### 3.3 SQL Injection Prevention

**Prisma ORM** (`DECISIONS.md` WD-025) is the approved data-access layer. Prisma's query builder is parameterized by construction, which is the approved default protection against SQL injection — direct, unparameterized query construction is not used.

### 3.4 Secrets Management

- Secrets, credentials, and API keys are never exposed, hardcoded, or committed to the codebase.
- Secrets are never logged — this applies to passwords and any other sensitive information, in every environment.
- Environment variables are the approved mechanism for keeping business logic and secrets off the client: Server Components are the default in the approved architecture (`DECISIONS.md` WD-014), and a component is only marked as a Client Component when it genuinely needs interactivity, browser APIs, or client-side state — keeping secrets server-side by default.

### 3.5 Dependency and Third-Party Package Management

"Every dependency increases maintenance cost." (`PROJECT_CONSTITUTION.md` Part 5.) Before any package is added:

- Confirm it is actively maintained.
- Confirm it is genuinely necessary.
- Confirm native platform or framework capabilities can't solve the problem instead.

This applies to supply-chain security exactly as it applies to maintenance cost — an unmaintained or unnecessary dependency is both a maintenance liability and a security liability.

### 3.6 Error Handling

- Errors must explain the problem, the cause, and the suggested fix — never fail silently, never show a generic message (`CODING_STANDARDS.md` Best Practices).
- Combined with the requirement to never expose secrets or sensitive information (§3.1), **user-facing error messages must never leak internal system details** — stack traces, raw query text, file paths, or other implementation detail — regardless of environment.
- This principle is already implemented at the UX layer: Alert and Empty State's Error variants (`docs/components/05_FEEDBACK.md`, `DECISIONS.md` WD-085) and Form's Error state (`docs/components/04_INPUTS.md`) all follow the calm, non-technical, solution-oriented tone required by `DECISIONS.md` WD-049.

---

## 4. Security Topics Pending Decision

Each item below requires an explicit Project Owner proposal-and-approval cycle before it can move into §3. None should be assumed, defaulted, or invented ahead of that decision. The first four restate the Security Decision Boundaries in §2 for tracking purposes; the remainder have no approved mechanism of any kind yet.

- **Authentication mechanism** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Authorization model** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Session strategy** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Encryption approach** — see §2. `[PENDING PROJECT OWNER DECISION]`
- **Output encoding / XSS prevention strategy** — no sanitization or encoding mechanism has been proposed. `[PENDING PROJECT OWNER DECISION]`
- **CSRF protection mechanism** — not addressed anywhere in the approved documentation. `[PENDING PROJECT OWNER DECISION]`
- **Security headers** (e.g., HSTS, X-Frame-Options, X-Content-Type-Options) — no header policy has been proposed. `[PENDING PROJECT OWNER DECISION]`
- **Content Security Policy** — no directive set or nonce/hash strategy has been proposed. `[PENDING PROJECT OWNER DECISION]`
- **Rate limiting** — no mechanism or threshold has been proposed, despite two plausible targets already existing in the approved product scope: the Interactive Showcase's generation step (`DECISIONS.md` WD-005) and the Contact form. `[PENDING PROJECT OWNER DECISION]`
- **Logging, monitoring, and error-tracking strategy** — explicitly listed as undecided in `ARCHITECTURE.md` §0. The one already-settled sub-rule (never log secrets or sensitive information, §3.4) applies regardless of which tooling is eventually chosen. `[PENDING PROJECT OWNER DECISION]`
- **File upload security** — moot until the File Upload Strategy itself is decided; File Upload and Drag & Drop Upload were deferred pending exactly this decision during Inputs Components Finalization (`DECISIONS.md` WD-083). No Version 1 feature currently uses file upload. `[PENDING PROJECT OWNER DECISION]`

---

## 5. Out of Scope for This Document

- **Infrastructure-level controls** (WAF, DDoS mitigation, TLS certificate management, database encryption-at-rest) — properties of a specific hosting platform, which is itself `[PENDING PROJECT OWNER DECISION]` (`ARCHITECTURE.md` Pending Decisions Summary). Cannot be specified without inventing a hosting choice.
- **Email provider security** (SPF/DKIM/DMARC) — the Email Provider itself is undecided (`ARCHITECTURE.md` §0).
- **CMS/content-editor access control** — the Content Management/CMS strategy itself is undecided.
- **Payment/billing security** — not applicable. Consultation-First Pricing (`DECISIONS.md` WD-006) means no pricing tiers or checkout flow exist anywhere in the approved product — there is no payment data to protect.

---

## How This Document Is Maintained

Each `[PENDING PROJECT OWNER DECISION]` marker in §4 is replaced with a concrete, approved statement — moved into §3 — only after that decision is proposed, reviewed, and approved by the Project Owner, and logged in `DECISIONS.md`. This document must never contain an invented security mechanism, and the Security Decision Boundaries in §2 must never be narrowed or worked around by adding implementation detail elsewhere in this file. This document must be re-checked against `PROJECT_CONSTITUTION.md` and `DECISIONS.md` for consistency whenever either changes.
