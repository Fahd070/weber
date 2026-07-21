# Weber — Routing & Navigation Specification

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and must remain consistent with `DECISIONS.md`, `ARCHITECTURE.md`, and `PROJECT_STRUCTURE.md`. It is a **product-level routing specification** — it defines navigable destinations, their purpose, and the user journeys between them. It is not a Next.js routing document, not a folder-structure document, and does not decide file names, `app/` conventions, or any implementation detail.
>
> Every statement below either restates an approved Constitution principle, restates a logged decision from `DECISIONS.md`, or is explicitly marked `[PENDING PROJECT OWNER DECISION]`.

**Scope note:** Weber officially adopts a multi-route architecture (`DECISIONS.md` WD-043) — every destination named below is a distinct route, not a section within a single scrolling page. This document uses "route" as a product concept — a distinct, purposeful, navigable destination with its own audience and CTA — independent of the exact URL scheme, which remains open (see Pending Decisions Summary).

---

## 1. Routing Philosophy

Approved, directly from the Constitution:

- **Clarity over complexity.** The interface must feel obvious; visitors should instantly know where they are, what Weber offers, and what to do next. Confusion is a design failure (Part 4 — Simplicity First).
- **Predictable navigation.** Navigation requires zero learning — natural, predictable, consistent, minimal (Part 4 — Navigation Philosophy).
- **Minimal navigation depth.** Too many choices reduce conversions; only the most important actions are presented, unnecessary complexity is hidden, cognitive load is reduced (Part 4 — Decision Fatigue). Structure avoids deep nesting (Part 5 — File Organization, applied here to navigation depth).
- **Trust-first experience.** Every route must support the Confidence Journey — Curiosity → Interest → Understanding → Trust → Confidence → Excitement → Action — and no route or navigation choice may interrupt it (Part 4 — The Confidence Journey).
- **Performance-first navigation.** A fast site feels trustworthy; a slow one feels unreliable. Every millisecond of navigation matters (Part 4 — Performance Equals UX; Part 5 — Performance).
- **Accessibility-first navigation.** Full keyboard navigation, visible focus states, and screen reader compatibility are mandatory for every route and every navigation element, not added later (Part 4 — Accessibility; Part 6 — Accessibility).

---

## 2. Version 1 Public Routes

Every destination below is grounded in an approved Constitution section or `DECISIONS.md` entry.

### Home

- **Purpose:** Introduce Weber and carry the visitor through the full Confidence Journey in one place. Corresponds to the Hero section's approved job — "Introduce Weber" (Part 4 — Every Section Has One Job) — and serves as the primary entry point into the rest of the experience.
- **Section order (official — `DECISIONS.md` WD-040):** Hero → Services → Interactive Showcase → Why Weber → Portfolio → Process → Testimonials → FAQ → Contact CTA.
  - **Why Weber** (`DECISIONS.md` WD-041): builds trust by presenting Guarantees, Quality, Performance, Maintenance, Professionalism, and Long-term support.
  - **Process** (`DECISIONS.md` WD-042): demonstrates Weber's professional workflow. Presented as a full four-stage timeline directly on Home — not a teaser, no CTA inside the section — per `DECISIONS.md` WD-142.
  - The remaining seven sections retain the purposes defined in Part 4 — Every Section Has One Job.
- **Primary Audience:** Businesses seeking a professional digital presence (Part 3 — The Customer Problem).
- **Entry Points:** Direct traffic, search engines, and referrals from the social platforms businesses currently rely on (Instagram, TikTok, Snapchat, WhatsApp — Part 3 — The Customer Problem, named as where the customer problem originates).
- **Primary CTA:** Partnership-toned invitation per the approved CTA language (`DECISIONS.md` WD-007) — e.g., "Let's discuss your project."
- **Related Pages:** Services, Interactive Showcase, Portfolio, Blog, Contact.

### Services

- **Purpose:** "Explain what problems Weber solves" (Part 4 — Every Section Has One Job).
- **Version 1 scope (official — `DECISIONS.md` WD-037):** Website Development, Mobile Applications, Desktop Applications, Templates. The Learning Platform is explicitly excluded from this list — it is a Version 2 direction (`DECISIONS.md` WD-038), not a current service.
- **Page Structure (official — `DECISIONS.md` WD-146):** `/services` is a single Version 1 listing page, not a set of individual service routes. It presents the four services above via reused Service Card instances, with each card's internal "Learn more" entry point not rendered — avoiding a self-link back to the same page. Navigation forward is a single, page-level, consultation-focused CTA at the bottom of the page. Individual Service Detail pages are not part of Version 1; the architecture and components already exist (`ServiceDetailLayout`, `DECISIONS.md` WD-112) and remain reserved for a future phase.
- **Primary Audience:** Businesses seeking a professional digital presence (Part 3).
- **Entry Points:** Home; direct navigation; search.
- **Primary CTA:** Partnership-toned invitation (`DECISIONS.md` WD-007), reflecting consultation-first pricing rather than a package purchase (`DECISIONS.md` WD-006).
- **Related Pages:** Home, Interactive Showcase, Portfolio, Contact.
- **Note:** Detailed information hierarchy within Services is documented in `INFORMATION_ARCHITECTURE.md` §6.

### Interactive Showcase

- **Purpose:** Weber's signature experience — visitors select a business type, enter a company name, and preview a realistic website concept, transforming imagination into confidence (`DECISIONS.md` WD-005; `PROJECT_CONSTITUTION.md` Part 3 — The Interactive Showcase). Approved as distinct from, and coexisting with, Portfolio.
- **Primary Audience:** Businesses seeking a professional digital presence (Part 3).
- **Entry Points:** Home; Services; direct navigation.
- **Primary CTA:** Partnership-toned invitation (`DECISIONS.md` WD-007), framed as continuing the conversation after the visitor previews their concept.
- **Related Pages:** Portfolio, Services, Contact.

### Portfolio

- **Purpose:** "Build credibility" by demonstrating completed work (Part 4 — Every Section Has One Job; Part 3 — Portfolio Philosophy).
- **Page Structure (official — `DECISIONS.md` WD-147):** Version 1 uses the existing `EmptyState` component — no `PortfolioCard` grid is rendered, since no real projects or case studies exist yet. No placeholder projects, no fictional case studies. The page carries exactly one CTA, linking to `/interactive-showcase`. `PortfolioCard` and `CaseStudyLayout` remain implemented and preserved, reserved to replace `EmptyState` in a future phase once real project content exists, without requiring an architecture change.
- **Primary Audience:** Businesses seeking a professional digital presence (Part 3).
- **Entry Points:** Home; Services; Interactive Showcase.
- **Primary CTA:** Explore the Interactive Showcase, linking to `/interactive-showcase` (`DECISIONS.md` WD-147). Once real project content exists and the page evolves beyond Empty State, the partnership-toned invitation (`DECISIONS.md` WD-007) applies as it does elsewhere.
- **Related Pages:** Interactive Showcase, Services, Contact.

### Contact

- **Purpose:** "Convert confidence into action" (Part 4 — Every Section Has One Job), positioned as the final step of the Confidence Journey, not a pressured sales moment (Part 4 — Call-To-Action Philosophy).
- **Primary Audience:** Businesses seeking a professional digital presence who have moved through the Confidence Journey (Part 4).
- **Entry Points:** Every other Version 1 route; this is the shared conversion destination.
- **Primary CTA:** The approved CTA language itself (`DECISIONS.md` WD-007) — "Let's discuss your project," "Request your website," "Tell us about your business."
- **Related Pages:** Home, Services, Portfolio, Interactive Showcase.

### Blog

- **Purpose:** A Version 1 content strategy feature (`DECISIONS.md` WD-039) — informational, trust-building content and SEO discovery, consistent with the Constitution's SEO requirements (Part 5) and Conversion Philosophy ("educate first," Part 3). Not yet assigned one of the Constitution's original named section purposes, since it is new IA scope rather than a restatement of Part 4.
- **Primary Audience:** Businesses seeking a professional digital presence (Part 3), reached earlier in their research than a visitor already on Home or Services.
- **Entry Points:** Search engines (primary — content discovery is the point), internal links from Home and Services, direct navigation.
- **Primary CTA:** Partnership-toned invitation (`DECISIONS.md` WD-007), routing an educated reader toward Contact or the Interactive Showcase rather than a hard sell.
- **Related Pages:** Home, Services, Contact.
- **Note:** Content architecture is documented in `INFORMATION_ARCHITECTURE.md` §9. Content storage/authoring technology (CMS vs. Git-based) remains undecided (`DECISIONS.md` Pending Decisions). `[PENDING PROJECT OWNER DECISION]`

---

## 3. Future Routes

Marked clearly as Version 2 / future — no technical detail, per the constraints on this task.

- **Client Dashboard.** Approved future direction, named explicitly in `PROJECT_CONSTITUTION.md` Part 9 — Long-Term Thinking ("Client Dashboard") and Part 1 — Long-Term Mission ("Client Portal"). Referenced in `PROJECT_STRUCTURE.md` §4 as a future feature.
- **Learning Platform.** Confirmed as a **Version 2** direction, explicitly not part of Version 1 (`DECISIONS.md` WD-038), named explicitly in Part 8 — Future Scalability Review ("Learning Platform") and Part 1 — Long-Term Vision ("Learning Ecosystem," "Student Portal"). Version 1 must remain architecturally prepared for its future integration without presenting it as a current service — this does not require any Learning-Platform-specific work now.
- **Authentication.** Not independently named as an approved feature anywhere in the Constitution or `DECISIONS.md`. It is included here only because Client Dashboard and Learning Platform, both approved future directions, would logically require some form of identity/access surface. Its existence, scope, and implementation are `[PENDING PROJECT OWNER DECISION]`.

No route names, technical structure, or implementation approach is defined for any of these.

---

## 4. Navigation Structure

Architecture only — no menu design, ordering, or visual layout.

- **Primary Navigation.** Surfaces the core Version 1 experience destinations (§2) in a predictable, minimal set, consistent with Minimal Navigation Depth (§1). Exact composition/order is a design decision, not an architectural one — `[PENDING PROJECT OWNER DECISION]`.
- **Secondary Navigation.** No secondary navigation items have been approved. Conceptually, secondary navigation would house supporting, non-core links without competing with the primary destinations, consistent with Decision Fatigue (Part 4). Contents are `[PENDING PROJECT OWNER DECISION]`.
- **Footer Navigation.** No footer content has been approved. Conceptually, a footer is where supporting trust signals and utility links are expected to live, consistent with Trust Signals being "always discoverable" (Part 4). Contents are `[PENDING PROJECT OWNER DECISION]`.
- **Cross-navigation between Services and Education.** "Education" refers to the Learning Platform, confirmed as Version 2 only (§3; `DECISIONS.md` WD-038) — it does not exist in Version 1 and is not presented as a current service. The architectural principle — that Weber's systems should stay connected rather than becoming isolated silos (Part 9 — Build Systems, Not Pages) — is approved and applies here. The concrete cross-navigation mechanism cannot be designed before the Learning Platform itself is scoped. `[PENDING PROJECT OWNER DECISION]`
- **Navigation hierarchy.** Conceptually: primary navigation carries the core Version 1 destinations; secondary and footer navigation carry supporting/utility content, never core destinations, per Decision Fatigue and Minimal Navigation Depth (§1). No concrete hierarchy (levels, grouping) has been approved beyond this principle.

---

## 5. User Journey

Each journey below is described using the Constitution's approved five-stage Customer Journey — Awareness → Understanding → Trust → Confidence → Interest → Action (Part 3), mapped to the task's requested framing of Entry, Exploration, Trust Building, Decision, Conversion.

### Business Visitor (approved audience — Part 3, The Customer Problem)

- **Entry:** Arrives via search, direct traffic, or a referral from a social platform (Instagram/TikTok/Snapchat/WhatsApp) where the business currently has a presence.
- **Exploration:** Home → Services, understanding what problems Weber solves.
- **Trust Building:** Interactive Showcase (visualizing their own business) and Portfolio (seeing completed work), consistent with Progressive Trust (Part 4) — education and demonstration before any ask.
- **Decision:** Confidence has been built gradually; no fixed pricing is shown (`DECISIONS.md` WD-006), so the decision point is choosing to start a conversation, not choosing a package.
- **Conversion:** Contact, using partnership-toned CTA language (`DECISIONS.md` WD-007).

### Returning Visitor

- **Entry:** Direct return to Home or a specific route (e.g., Contact) from a bookmark or prior visit.
- **Exploration:** Likely abbreviated — Progressive Trust (Part 4) means earlier visits already built some confidence, so exploration may skip directly to Portfolio or Interactive Showcase for reinforcement.
- **Trust Building:** Reinforcement rather than introduction — reviewing Portfolio updates or revisiting the Interactive Showcase.
- **Decision:** Faster than a first-time visitor, since trust was partially established previously.
- **Conversion:** Contact.

### Student (future — tied to the Learning Platform, §3)

This journey applies once the Learning Platform (an approved future direction — Part 1, Part 8) is scoped and built. Entry/Exploration/Trust Building/Decision/Conversion details cannot be documented yet because the Learning Platform itself has no approved scope. `[PENDING PROJECT OWNER DECISION]`

### Freelancer

**Not documented.** "Freelancer" as a target audience segment does not appear anywhere in `PROJECT_CONSTITUTION.md` or `DECISIONS.md`. Writing a journey for this audience would require inventing assumptions about their needs that have not been approved. `[PENDING PROJECT OWNER DECISION — audience segment not yet approved]`

### E-commerce Client

**Not documented.** "E-commerce Client" as a target audience segment does not appear anywhere in `PROJECT_CONSTITUTION.md` or `DECISIONS.md`, for the same reason as Freelancer above. `[PENDING PROJECT OWNER DECISION — audience segment not yet approved]`

---

## 6. CTA Architecture

The only officially approved CTA **copy** is the partnership-toned language ratified in `DECISIONS.md` WD-007:

- *"Let's discuss your project."*
- *"Request your website."*
- *"Tell us about your business."*

These exist to make every CTA "feel like the beginning of a partnership. Not a sales transaction" (Part 4 — Call-To-Action Philosophy), directly reflecting consultation-first pricing (`DECISIONS.md` WD-006) — no CTA leads to a fixed-price purchase flow.

The task instructions additionally named CTA labels such as "Request Consultation," "Explore Services," "Try Interactive Showcase," "Contact Us," and "Start Learning (future)." These describe **functional roles** (which route a CTA leads a visitor to), not approved copy:

| Functional Role | Leads To | Approved Copy? |
|---|---|---|
| Consultation invitation | Contact | Yes — WD-007 phrasing above |
| Navigate to Services | Services | Home Hero instance approved — "Explore Our Services" (`DECISIONS.md` WD-140); label for any other instance (e.g. within the Services section itself) not decided |
| Navigate to Interactive Showcase | Interactive Showcase | Role approved (WD-005); exact label not decided |
| General contact invitation | Contact | Yes — WD-007 phrasing above |
| Start Learning | Learning Platform (future) | Not applicable — Learning Platform is unscoped (§3) |

Exact CTA label wording beyond the three WD-007 phrases and the Home Hero's approved "Explore Our Services" (`DECISIONS.md` WD-140) is `[PENDING PROJECT OWNER DECISION]`.

---

## 7. URL Principles

High-level only — no framework-specific routing is defined.

- **Readable URLs.** URLs communicate what a visitor will find, consistent with Clarity Over Complexity (§1).
- **Stable URLs.** Once published, a URL is not silently changed — routing changes are never made silently (Part 7 — No Silent Changes).
- **SEO-friendly.** Clean, fast-loading URLs with meaningful metadata, consistent with the Constitution's SEO requirements for every public page (Part 5 — SEO).
- **Localization-ready.** URL structure must remain compatible with Arabic and English (`DECISIONS.md` WD-012) without requiring a restructure when a second language is added. The internationalization library is now decided — **next-intl** (`DECISIONS.md` WD-023) — which provides locale-aware routing for the Next.js App Router (`DECISIONS.md` WD-014).
- **No unnecessary nesting.** Consistent with the Constitution's File Organization principle (avoid deep nesting — Part 5), applied to URL depth.

Routing framework (Next.js App Router — `DECISIONS.md` WD-014) and multi-route architecture (`DECISIONS.md` WD-043) are both decided — every destination in §2 is a distinct route. Exact URL scheme and locale-routing implementation (URL prefix vs. domain vs. cookie-based) remain `[PENDING PROJECT OWNER DECISION]`.

---

## 8. Future Expansion

Version 2 routes (Client Dashboard, Learning Platform, and any resulting Authentication surface) are expected to integrate as new destinations alongside the Version 1 routes in §2, not by altering or restructuring them — consistent with the approved six-category/six-layer architecture model (`DECISIONS.md` WD-013) and "Build Systems, Not Pages" (Part 9). New routes become new Feature-layer destinations that consume the same Content, Shared Components, and UI layers already established, the same way `PROJECT_STRUCTURE.md` §9 describes future features integrating without restructuring.

No technical integration plan, migration path, or route-naming approach is decided for any Version 2 route.

---

## 9. Routing Rules

- **One clear purpose per page.** Directly required by the Constitution: "No section should attempt to achieve multiple unrelated objectives" (Part 4 — Every Section Has One Job).
- **Every page must have a primary CTA.** Every route in §2 converts toward Action, the final stage of the Confidence Journey (Part 4); a route without a CTA would be a dead end in that journey.
- **Navigation must never confuse users.** Directly required: "Users should never wonder where something is" (Part 4 — Navigation Philosophy).
- **Trust signals should always be discoverable.** Directly required: trust "should appear naturally throughout the experience" and "should never rely on marketing slogans" (Part 4 — Trust Signals).
- **No orphan pages.** Every route in §2 lists Related Pages that link back to it — consistent with predictable, learn-free navigation (Part 4 — Navigation Philosophy).
- **Every important page must be reachable within a small number of interactions.** Consistent with Remove Friction ("reduce extra clicks") and avoiding deep nesting (Part 4 — Remove Friction; Part 5 — File Organization).

---

## Pending Decisions Summary

- Whether "Freelancer" and "E-commerce Client" are approved target audience segments — still unresolved.
- Blog's content storage/authoring technology — feature existence and IA are decided (`DECISIONS.md` WD-039; `INFORMATION_ARCHITECTURE.md` §9), the underlying technology is not.
- Existence, scope, and implementation of an Authentication surface.
- Primary/secondary/footer navigation composition and hierarchy detail.
- Concrete cross-navigation mechanism between Services and the Learning Platform (confirmed Version 2 — `DECISIONS.md` WD-038).
- CTA label wording beyond the three phrases approved in `DECISIONS.md` WD-007 and the Home Hero's approved "Explore Our Services" (`DECISIONS.md` WD-140).
- Exact URL scheme and locale-routing implementation (multi-route architecture and the i18n library are decided; see `DECISIONS.md` WD-043, WD-023).
- Technical integration plan for Version 2 routes.

---

## Conflicts / Traceability Gaps

**Resolved.** Two items previously flagged here are now resolved: whether Version 1 routes are distinct routes or single-page sections (multi-route architecture officially adopted — `DECISIONS.md` WD-043), and whether "Blog" is an approved feature (approved as Version 1 scope — `DECISIONS.md` WD-039).

**Still open:** "Freelancer" and "E-commerce Client" as target audience segments (§5 — User Journey) do not appear anywhere in `PROJECT_CONSTITUTION.md` or `DECISIONS.md`. Documenting a journey for either would require inventing assumptions about their needs, so none was written. If these are intended to be real target audiences, they should be confirmed and logged in `DECISIONS.md` before a journey is documented for them.

No other conflicts were found between `ROUTES.md` and the documents it depends on.

---

## How This Document Is Maintained

Each `[PENDING PROJECT OWNER DECISION]` marker is replaced with concrete detail only after that decision is proposed, reviewed, and approved by the Project Owner, and logged in `DECISIONS.md`. This document must be re-checked against `PROJECT_CONSTITUTION.md`, `DECISIONS.md`, `ARCHITECTURE.md`, and `PROJECT_STRUCTURE.md` for consistency whenever any of them changes.
