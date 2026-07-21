# Weber — Information Architecture

> **Authority:** This document is subordinate to `PROJECT_CONSTITUTION.md` (highest authority) and is the official, consolidated Information Architecture specification for Weber Version 1. Every statement below either restates an approved Constitution principle, restates a decision logged in `DECISIONS.md` (through WD-043), or is explicitly marked `[PENDING PROJECT OWNER DECISION]`. Nothing here is invented.
>
> **Status:** Official. This document supersedes the Information Architecture Workshop Phase 1 review as the source of record — where they differ, this document and `DECISIONS.md` govern.

---

# 1. Purpose

Information Architecture is the discipline of organizing what exists on Weber and how it connects — which destinations exist, what each is for, and how a visitor and a search engine move between them. It answers *"what is there and how does it relate,"* never *"what does it look like or how is it built."*

**Relationship to other documents:**

- **`PROJECT_CONSTITUTION.md`** — the source of every principle this document applies. IA decisions are evaluated against it the same way every other decision on this project is (Part 8 — Product Review, UX Review).
- **`ARCHITECTURE.md`** — defines the technical system layers (UI, Features, Content, Infrastructure) that *implement* what this document organizes. `ARCHITECTURE.md` answers "how is the system built"; this document answers "what does the system contain."
- **`PROJECT_STRUCTURE.md`** — defines the logical project organization (Application Code, Content, Assets, etc.) that this document's destinations and content ultimately live inside. This document is what `PROJECT_STRUCTURE.md` §4 (Feature Organization) was always going to need once Version 1 scope was confirmed.
- **`ROUTES.md`** — the product-level routing specification this document extends. `ROUTES.md` defines each destination's purpose, audience, entry points, and CTA individually; this document adds the site-wide structure, hierarchy, and relationships *between* them.
- **`UI_FOUNDATION.md`** — the visual philosophy this document's structure will eventually be dressed in. IA is deliberately upstream of it: a page's information architecture doesn't change based on typography or color.
- **`DESIGN_TOKENS.md`** — the numeric values that will eventually style the components this document names in §15. No token, spacing, or visual value is referenced or required by this document.

**This document defines the logical structure of the product — not its visual implementation.** No component design, no styling, no routing syntax, no code. Everything here should remain true even if Weber were rebuilt in a completely different technology stack next year.

---

# 2. Information Architecture Philosophy

- **Simplicity.** The fewest destinations and the shallowest hierarchy that can fully serve the product — "the simplest solution that fully solves the problem" (Part 10 — Simplicity Wins), applied to structure rather than code.
- **Discoverability.** Every destination is reachable through predictable navigation and internal links; nothing exists that a visitor or a search engine can't find (Part 4 — Navigation Philosophy: "users should never wonder where something is").
- **Trust-first.** Structure exists to carry a visitor through the Confidence Journey (Part 4) — every destination and every link between destinations should move a visitor toward trust, never away from it.
- **Content-first.** Structure organizes around content and its meaning, not around implementation convenience — a direct extension of the Content/Component Separation Rule (`DECISIONS.md` WD-010) to the site level.
- **Conversion-first.** Every path through the IA eventually reaches Contact — no destination is a dead end (`ROUTES.md` §9 — Routing Rules: "no orphan pages").
- **Scalability.** Structure is evaluated against Weber's future expansion into a client portal, a learning platform, and additional services (Part 5 — Scalability; Part 9 — Long-Term Thinking) before it's approved, not after.
- **SEO awareness.** Structure itself is an SEO asset — a shallow, clearly-grouped hierarchy with deliberate internal linking is easier for a search engine to understand completely (Part 5 — SEO).
- **Future expansion.** New destinations attach to the existing structure as new Features (`DECISIONS.md` WD-013); the structure is never redesigned to accommodate something new (Part 9 — Build Systems, Not Pages).

---

# 3. Complete Site Map

Every page below is grounded in `ROUTES.md` and `DECISIONS.md` WD-037–WD-043. No page is invented.

```
Weber (Version 1)
│
├── Core Pages
│   ├── Home              (nine sections — see §5)
│   ├── Services           (four services — see §6)
│   ├── Interactive Showcase
│   ├── Portfolio
│   └── Contact
│
├── Support Pages
│   └── (none currently approved — see note below)
│
├── Content Pages
│   └── Blog               (WD-039 — content strategy feature, structure in §9)
│
└── Future Pages (Version 2 — not built now)
    ├── Client Dashboard    (Part 9; ROUTES.md §3)
    ├── Learning Platform   (WD-038 — confirmed V2, not a current service)
    └── Authentication      (implied by the two above; existence/scope not independently approved)
```

**Support Pages note:** no support-tier page (e.g., a legal/privacy page) has been approved anywhere in the Constitution or `DECISIONS.md`. This category is left structurally present but empty rather than invented — a real gap that will need addressing before launch (see §18 and the closing Pending Decisions).

**Testimonials and FAQ** are not listed as separate pages — per `DECISIONS.md` WD-040, they are sections *within* Home, not standalone routes.

---

# 4. Navigation Architecture

| Layer | Responsibility | Status |
|---|---|---|
| **Primary Navigation** | Surfaces the Core Pages (§3) in a predictable, minimal set — the main way a visitor moves between destinations. | Composition approved implicitly (the Core Pages list); exact order/labels `[PENDING PROJECT OWNER DECISION]` |
| **Secondary Navigation** | Houses supporting, non-core links without competing with Primary Navigation for attention (Decision Fatigue, Part 4). | Contents `[PENDING PROJECT OWNER DECISION]` |
| **Footer Navigation** | Where supporting trust signals and utility links live, consistent with Trust Signals being "always discoverable" (Part 4). Natural home for the (currently empty) Support Pages tier once one exists. | Contents `[PENDING PROJECT OWNER DECISION]` |
| **Utility Navigation** | Items that aren't content destinations — most notably the Arabic/English language switcher (`DECISIONS.md` WD-012, WD-023) — kept visually and structurally distinct from content navigation. | Language switcher is the only confirmed utility item; others `[PENDING PROJECT OWNER DECISION]` |
| **Mobile Navigation** | A single collapsed menu is sufficient for a five-Core-Page site — there's nothing to nest. The Contact CTA stays reachable without opening the collapsed menu, since Contact is the shared conversion destination for every journey (§11). | Philosophy approved (`UI_FOUNDATION.md` §8; mobile-first — `DECISIONS.md` WD-034); exact behavior is implementation, out of scope here |
| **Search readiness (future)** | Site search is not an approved Weber feature — it appears nowhere in the Constitution or `DECISIONS.md`. Noted here only as a structural readiness consideration: a shallow, well-linked IA (§3, §12) is also what makes a future search feature easy to index, so nothing here forecloses it. | Not approved. `[PENDING PROJECT OWNER DECISION]` |

---

# 5. Home Page Information Architecture

Official section order per `DECISIONS.md` WD-040:

```
Hero → Services → Interactive Showcase → Why Weber → Portfolio → Process → Testimonials → FAQ → Contact CTA
```

| Section | Purpose | Business Goal | User Goal | Primary CTA | Related Pages |
|---|---|---|---|---|---|
| **Hero** | Introduce Weber (Part 4) | Establish premium first impression, open the Confidence Journey | Understand "am I in the right place?" | Implicit — leads the eye toward Services/Showcase | Services, Interactive Showcase |
| **Services** | Explain what problems Weber solves (Part 4) | Communicate the four V1 offerings (§6) | Understand "can Weber do what I need?" | Partnership-toned invitation (WD-007) | Services page, Interactive Showcase |
| **Interactive Showcase** | Weber's signature trust-building experience (WD-005) | Convert curiosity into a personalized, high-trust moment | See "my business" reflected back | Continue-the-conversation CTA (WD-007) | Interactive Showcase page, Portfolio |
| **Why Weber** (WD-041) | Build trust via Guarantees, Quality, Performance, Maintenance, Professionalism, Long-term support | Differentiate Weber from a generic freelancer/agency | Answer "why trust *this* company?" | Implicit — trust consolidation, not a hard CTA | Process, Testimonials |
| **Portfolio** | Build credibility through completed work (Part 4; Part 3 — Portfolio Philosophy) | Provide evidence, not just claims | See proof Weber delivers | Partnership-toned invitation (WD-007) | Portfolio page, Interactive Showcase |
| **Process** (WD-042) | Demonstrate Weber's professional workflow | Reduce perceived risk of working with Weber | Understand "what happens if I hire them?" | No CTA — explicit (`DECISIONS.md` WD-142) | Why Weber, Contact |
| **Testimonials** | Reduce uncertainty (Part 4) | Third-party validation of Why Weber's claims | Hear it from someone else, not just Weber | Implicit | Portfolio, Contact |
| **FAQ** | Remove objections (Part 4) | Clear the last blockers before conversion | Get remaining questions answered without contacting yet | Implicit, links into Contact for anything unanswered | Contact |
| **Contact CTA** | Convert confidence into action (Part 4) | The conversion moment | Start a conversation, not commit to a purchase | "Discuss Your Idea" (`DECISIONS.md` WD-144) | Contact page |

**Process section detail (`DECISIONS.md` WD-142).** Process explains how Weber transforms an idea into a delivered digital experience, reducing client uncertainty. Unlike Portfolio's teaser treatment (WD-141), Process is presented as a **full process presentation** directly on the Home page — not a teaser, not a link-only section. Four stages, each with a number, title, short description, and brief bullet points, presented in a Timeline visual layout:

| Stage | Purpose |
|---|---|
| **01 Discovery** | Consultation and understanding of the project direction. |
| **02 Design** | Create the user experience and visual direction. |
| **03 Development** | Transform the design into a reliable website with quality and performance. |
| **04 Launch** | Publish the website and provide post-launch support. |

No CTA appears inside the Process section. Language and style are professional but simple, understandable for non-technical clients. A dedicated Process page may be considered separately in a future version, but is not part of Version 1.

**Testimonials section detail (`DECISIONS.md` WD-143).** Testimonials provide external validation and credibility through real customer experiences. For Version 1, the Testimonials section is **not implemented** on the Home page — no placeholder testimonials, and no fictional names, companies, ratings, or results are created. Testimonials remains approved as a future Home section and will be introduced only once real customer testimonials are available; its position in the Home section order (WD-040) is unaffected.

**FAQ section detail (`DECISIONS.md` WD-145).** FAQ exists to answer real customer questions and reduce friction through useful information. For Version 1, the FAQ section is **not implemented** on the Home page — no placeholder questions, no placeholder answers, and no FAQ data or content are created. FAQ remains approved as a future Home section and will be introduced only once real customer questions and useful answers are identified; its position in the Home section order (WD-040) is unaffected.

**Final CTA section detail (`DECISIONS.md` WD-144).** Final CTA converts interested visitors into potential clients through a clear, consultation-focused next step — the last section in the approved Home order (WD-040), after Testimonials and FAQ. Neither Testimonials (WD-143) nor FAQ (WD-145) is implemented for Version 1, so Final CTA is currently the next built section a visitor reaches after Process; this does not change Final CTA's own approved position in the Home order. Home treatment: a simple CTA Banner — heading, supporting message, and one primary CTA button. CTA text is "Discuss Your Idea," linking to the Contact page. Tone is professional and collaborative. No pricing display, no secondary CTA, and no additional information blocks.

---

# 6. Services Information Architecture

Official Version 1 scope, per `DECISIONS.md` WD-037. The `/services` route itself is a single Version 1 listing page presenting these four services — individual Service Detail pages are not part of Version 1 and remain future architecture (`DECISIONS.md` WD-146).

| Service | Purpose | Target Audience | Relationship to Other Services | Future Expansion | Cross-Linking |
|---|---|---|---|---|---|
| **Website Development** | Weber's founding, best-established offering (Part 1 — Current Focus) | Any business needing a professional digital presence (Part 3) | The default entry point most visitors associate with Weber; other services are often discovered *from* this one | N/A — already core to Weber's identity | Interactive Showcase (a website preview), Portfolio (website case studies) |
| **Mobile Applications** | Extends Weber's "professional digital presence" promise to mobile-native experiences | Businesses whose customer relationship depends on a mobile experience | A natural complement to Website Development for businesses needing both | Could eventually connect to the Client Dashboard (V2) as a delivery channel | Portfolio (mobile case studies, once they exist) |
| **Desktop Applications** | Extends the same promise to desktop-native software | Businesses with internal tooling or desktop-first customer needs | The least likely of the four to be a visitor's *first* interest — positioned after Website Development and Mobile in most contexts | N/A | Portfolio (desktop case studies, once they exist) |
| **Templates** | A lighter-weight, likely lower-cost offering distinct from full custom engagements | Businesses/individuals wanting a faster, more self-serve option | Structurally different from the other three (product, not bespoke service) — should be presented distinctly, not as a peer category, to avoid confusing "buy a template" with "hire Weber for a project" | Could become the seed of a future self-serve product line (Part 1 — Digital Products) | Should link to Contact for anything beyond template scope, to avoid a dead end |

Every service ultimately routes back to the Interactive Showcase or Contact — consistent with "no orphan pages" (`ROUTES.md` §9).

---

# 7. Interactive Showcase

Logical journey only — no UI defined, per this task's constraint. Fully grounded in `DECISIONS.md` WD-005 and `PROJECT_CONSTITUTION.md` Part 3.

1. **Entry.** Reached from Home, Services, or Portfolio (`ROUTES.md` §2) — never a cold, standalone entry point.
2. **Company Name Input.** Business type and company name — deliberately minimal, avoiding the friction the Constitution warns against (Part 4 — Forms: "request only necessary information").
3. **Preview Experience.** A realistic website concept generated from the input — the mechanism that "transforms imagination into confidence" (Part 3 — The Interactive Showcase).
4. **Trust Building.** The visitor explores a concept that feels personalized rather than generic — the highest-leverage trust moment in the entire IA, because it's the only point where Weber *shows* rather than *tells* (consistent with the assessment in the Information Architecture Workshop Phase 1 review).
5. **Conversion Point.** A partnership-toned CTA (`DECISIONS.md` WD-007) framed as continuing an already-started conversation.

**Relationship with Portfolio:** the Showcase shows what *could* be built for this specific visitor; Portfolio shows what *has* been built for others. They are deliberately distinct and mutually reinforcing (`DECISIONS.md` WD-005) — neither replaces the other.

**Relationship with Contact:** the Showcase's natural exit is Contact, carrying forward the personalization the visitor just experienced rather than resetting them into a generic inquiry.

---

# 8. Portfolio Architecture

Portfolio is approved as a concept and purpose (Part 4; Part 3 — Portfolio Philosophy). The structural detail below is this document's finalization of that concept, kept at the philosophy/strategy level — no specific filter values or category names are invented, per this task's constraint.

**Home section launch treatment (`DECISIONS.md` WD-141).** Portfolio's purpose remains "provide evidence, not just claims" (Part 4) — but no real case studies or project data exist yet, and fabricated projects or placeholder content must not be used. The Home page's Portfolio section therefore launches as a teaser — Section, Container, Stack, a heading, supporting copy, and a Contact-oriented CTA — rather than a project card grid. No project cards are displayed initially. The section introduces Portfolio's purpose and guides visitors toward starting a project, without claiming evidence Weber does not yet have to show. This does not change Portfolio's position in the Home information architecture (`DECISIONS.md` WD-040).

**`/portfolio` route Version 1 treatment (`DECISIONS.md` WD-147).** `/portfolio` is an approved Version 1 route (`ROUTES.md` §2), distinct from the Home section above. Because no real projects or case studies exist yet, Version 1 uses the existing `EmptyState` component — no `PortfolioCard` grid, no placeholder projects, no fictional case studies. The page carries exactly one CTA, "Explore the Interactive Showcase," linking to `/interactive-showcase`. `PortfolioCard` and `CaseStudyLayout` remain fully implemented and preserved as future architecture — the page is structured (Page → Section → Container → Stack) so they can replace `EmptyState` once real project content exists, without an architecture change.

The bullets below describe Portfolio's full content model for once real projects exist — they are unaffected by the Home teaser treatment or the route's Empty State treatment above, both of which are sequencing decisions, not a change to what Portfolio is meant to become.

- **Categories.** Should mirror the Services structure (§6) once its own hierarchy is finalized, so a visitor's mental model stays consistent between "what Weber offers" and "what Weber has built" (Brand Consistency, Part 6).
- **Case studies.** Depth proportional to what builds trust — the problem solved and the outcome delivered, not an engineering changelog (Part 3: "customers buy outcomes. Not deliverables").
- **Project details.** Each case study should answer the same questions a Testimonial implicitly answers — what was the client's problem, and did Weber solve it — presented as evidence rather than a portfolio-piece description.
- **Technology tags.** Optional, secondary metadata for a technically literate minority of visitors — never the primary way a piece is understood, since most of Weber's audience isn't evaluating tech stack (Part 3 — Customer Problem).
- **Navigation.** Every Portfolio piece links back toward the Interactive Showcase and Contact — a case study is a dead end otherwise (`ROUTES.md` §9).
- **Cross-linking.** Portfolio pieces should link to the Service category they demonstrate (§6), closing the loop between "what Weber offers" and "proof Weber delivers."
- **Future filtering strategy.** Filtering by category becomes valuable once Portfolio volume justifies it — for an initial, small set, an unfiltered grid is simpler and avoids "filtering an empty room." No specific filter taxonomy is defined here; it should be derived from whatever Services hierarchy is finalized, not invented independently. `[PENDING PROJECT OWNER DECISION]`

**Future evolution of the Home section (`DECISIONS.md` WD-141).** Once sufficient real projects and case studies exist, the Home Portfolio section may evolve from the teaser above into a project card grid (Portfolio Card instances arranged via Grid), surfacing project previews, each project's Service/category relationship (Cross-linking, above), technologies (Technology tags, above), and outcomes/case studies (Case studies and Project details, above). This evolution does not require revisiting Portfolio's position in the Home order.

**Future evolution of the `/portfolio` route (`DECISIONS.md` WD-147).** Once sufficient real projects and case studies exist, `/portfolio` may evolve from the Empty State treatment above into a real `PortfolioCard` grid (arranged via Grid), each card linking to its own `CaseStudyLayout` route, per the content model above. This evolution does not require revisiting the route's approval or its position among the Version 1 Core Routes.

---

# 9. Blog Information Architecture

Approved as a Version 1 content strategy feature (`DECISIONS.md` WD-039). No CMS or storage technology is chosen here.

- **Purpose.** Informational, trust-building content and SEO discovery — meeting prospective clients earlier in their research than Home or Services would, consistent with "educate first" (Part 3 — Conversion Philosophy).
- **Content categories.** No specific category list is approved. The most defensible starting structure — proposed here, not decided — mirrors the four approved Services (§6) plus a general company/insights category for content that doesn't map to a specific service. This keeps Blog content organized around the same mental model as the rest of the site (Content-First, §2) rather than inventing an independent taxonomy. `[PENDING PROJECT OWNER DECISION]`
- **Relationship with Services.** Blog content should demonstrate the expertise behind a Service before a visitor ever reaches the Services page — an earlier-funnel counterpart to Portfolio's later-funnel proof.
- **Relationship with SEO.** Blog is Weber's primary mechanism for topical breadth (§16) — individual posts target specific, narrower search intent that a five-page Core structure can't cover on its own.
- **Relationship with the future Learning Platform.** No formal integration is approved. Structurally, Blog content should not be organized in a way that would need to be redone if the Learning Platform (`DECISIONS.md` WD-038) eventually reuses or extends it — the same "don't foreclose the future" principle already governing Version 1 architecture generally (Part 9 — Long-Term Thinking), not a specific integration plan.

---

# 10. Contact Architecture

Governed by consultation-first pricing (`DECISIONS.md` WD-006) and partnership-toned CTA language (WD-007). No backend implementation is defined.

- **Contact form.** The primary, always-available channel. Asks only what's needed to start a consultation (Part 4 — Forms), not a full project brief. **Field list (`DECISIONS.md` WD-139):** Name, Company, Email, Message — all four required, no optional fields. Company is required because Weber's approved audience is exclusively "Businesses seeking a professional digital presence" (§5, every route in `ROUTES.md` §2), not a speculative addition. Phone, Budget, Timeline, Project Type, Attachment, Website, Country, and Preferred Contact Method are explicitly not Version 1 fields. Service may be pre-filled in a future flow (e.g., a Services-page referral) but is not a Contact form field itself.
- **WhatsApp.** Grounded directly in the Constitution — WhatsApp is named as a channel Weber's prospective clients already use (Part 3 — The Customer Problem). Meets businesses where they already are.
- **Email.** The lowest-commitment, most universally expected fallback — present, but not the most prominent option, since it implies the slowest response time of the three.
- **Consultation request.** Not a fourth channel — the single outcome all three above lead to. Framing it this way avoids presenting four equal-weight choices, which would reintroduce Decision Fatigue (Part 4).
- **Lead collection.** Whatever information is collected must be the minimum needed to start a consultation (Part 4 — Forms), validated per the Constitution's security requirements (Part 5 — Validation, Security) — no specific field list or storage mechanism is defined here.
- **Follow-up philosophy.** Should continue the partnership tone established by the CTA itself (WD-007) — a follow-up is the next step in a conversation that's already started, not a sales sequence. Specific timing/automation is implementation, out of scope here.

---

# 11. User Journeys

Six stages, extending the Constitution's Customer Journey (Part 3: Awareness → Understanding → Trust → Confidence → Interest → Action) with the Entry/Discovery/Evaluation/Trust/Conversion/Retention framing this document uses.

### Business Owner

**Entry:** Search, direct traffic, or a referral from a social platform the business already uses (Part 3). **Discovery:** Home → Services, learning what Weber offers. **Evaluation:** Interactive Showcase and Portfolio — seeing a personalized concept and prior proof. **Trust:** Why Weber, Process, and Testimonials reinforce credibility. **Conversion:** Contact, via partnership-toned CTA (WD-007). **Retention:** Becomes a Returning Visitor for future needs (see below) or a Prospective Client mid-engagement.

### Prospective Client

The conversion-stage variant of Business Owner — already past Discovery. **Entry:** Often direct to Portfolio, Services, or Contact rather than Home. **Discovery:** Minimal — already knows roughly what Weber offers. **Evaluation:** Weighs Portfolio and Testimonials more heavily than Hero/Services. **Trust:** Process and Why Weber matter most here, since they address "should I actually commit." **Conversion:** Contact. **Retention:** Becomes a Business Owner-in-engagement, eventually a Returning Visitor.

### Returning Visitor

**Entry:** Direct return to Home or a specific destination (often Contact) from a bookmark or prior visit. **Discovery:** Abbreviated — Progressive Trust (Part 4) means earlier visits already built some confidence. **Evaluation:** May skip directly to Portfolio or the Interactive Showcase for reinforcement rather than re-reading Services. **Trust:** Reinforcement, not introduction. **Conversion:** Faster than a first-time visitor. **Retention:** Already retained by definition — the loop closes on itself.

### Future Student

Tied to the Learning Platform, confirmed Version 2 (`DECISIONS.md` WD-038). No journey detail can be documented yet — Entry through Retention all depend on a scope that doesn't exist. `[PENDING PROJECT OWNER DECISION]`, unchanged from the prior review.

---

# 12. Internal Linking Strategy

No URLs are invented — relationships only, consistent with `ROUTES.md` §2's existing Related Pages fields, extended site-wide:

- **SEO.** Every Core Page links to at least two others, and Blog content links into Services and Portfolio — a shallow, densely cross-linked structure signals topical relevance and lets a search engine understand the whole site without deep crawling (Part 5 — SEO).
- **Navigation.** Primary Navigation carries the structural links; internal content links carry the contextual ones — a visitor should never need to return to Primary Navigation to move between two related destinations mid-journey.
- **User flow.** Links follow the Confidence Journey direction (§2) — from earlier-funnel content (Blog, Services) toward later-funnel content (Portfolio, Interactive Showcase) toward Contact — rather than looping visitors backward.
- **Trust.** Testimonials and Portfolio should be linkable from anywhere a claim is made elsewhere on the site (Why Weber, Services) — trust signals should always be discoverable, never buried (Part 4 — Trust Signals).

---

# 13. Content Relationships

- **Services ↔ Portfolio.** Services states the offer; Portfolio proves it was delivered. Every Service should have Portfolio pieces demonstrating it (once volume allows).
- **Services ↔ Interactive Showcase.** The Showcase is Website Development's most concrete expression — a live demonstration of the first and most established service.
- **Services ↔ Blog.** Blog content demonstrates the expertise behind a Service earlier in the funnel than Services itself.
- **Portfolio ↔ Interactive Showcase.** Distinct and complementary by design (`DECISIONS.md` WD-005) — proof of the past vs. a preview of the visitor's own future.
- **Blog ↔ Contact.** Blog content should route an educated reader toward Contact once they're ready, not just toward more content.
- **Everything ↔ Contact.** Every content relationship above ultimately terminates at Contact — the shared conversion destination (`ROUTES.md` §2).
- **Learning Platform (future).** Not yet integrated with any Version 1 content. The only current relationship is architectural: nothing in Services, Blog, or Portfolio should be structured in a way that would need rework once the Learning Platform is scoped (`DECISIONS.md` WD-038).

---

# 14. Version 2 Integration

Architectural approach only — consistent with the six-category/six-layer model (`DECISIONS.md` WD-013) and "Build Systems, Not Pages" (Part 9).

- **Learning Platform.** Attaches as a new top-level destination and a new Feature (per WD-013), consuming the existing UI, Content, and component layers rather than introducing a parallel system. Version 1 remains "architecturally prepared" for it (`DECISIONS.md` WD-038) — meaning nothing in Version 1's IA should assume Learning Platform will never exist, without requiring any Learning-Platform-specific structure now.
- **Client Dashboard.** Same pattern — a new destination behind whatever Authentication surface is eventually built, not a modification to any Core Page.
- **Authentication.** A cross-cutting capability rather than a visible page in the sitemap (§3) — required by Client Dashboard and Learning Platform, not a destination in its own right. Its existence, scope, and implementation remain `[PENDING PROJECT OWNER DECISION]`.

None of the three require Home, Services, Interactive Showcase, Portfolio, Blog, or Contact to change shape to accommodate them.

---

# 15. Component Mapping

Logical inventory only — names and roles, not implementation, props, or visual design. This prepares the Component Library phase. Every component below is now organized into the official eight-category classification system in `DESIGN_SYSTEM.md` §4 (`DECISIONS.md` WD-056).

| Page / Section | Logical components required |
|---|---|
| Hero | Hero, CTA Banner |
| Services | Service Card (×4, entry point not rendered — `DECISIONS.md` WD-146), CTA Banner (single, consultation-focused, page-level) |
| Interactive Showcase | Input Form (business type + company name), Preview Frame, CTA Banner |
| Why Weber | Feature/Guarantee List, Icon + Label pairing |
| Portfolio | Portfolio Card, Project Detail view, Technology Tag, CTA Banner |
| Process | Timeline |
| Testimonials | Testimonial Card |
| FAQ | FAQ (accordion-style list) |
| Contact CTA / Contact page | Contact Form, CTA Banner |
| Services (individual service pages) — **not part of Version 1**, future architecture only (`DECISIONS.md` WD-146) | Service Detail layout, CTA Banner, cross-links to Portfolio |
| Blog | Blog Post Card (listing), Article layout (individual post), Category label |
| Global | Primary Navigation, Footer, Utility Navigation (language switcher) |

Every component named here already has an approved visual system to be built on (`UI_FOUNDATION.md`, `DESIGN_TOKENS.md`) and an approved technology to build it with (shadcn/ui on Radix UI — `DECISIONS.md` WD-017) — this table exists to define *what* is needed, not *how*.

---

# 16. SEO Information Architecture

No keywords are defined — structure and philosophy only, per the Constitution's SEO requirements (Part 5).

- **Hierarchy.** A shallow, five-Core-Page structure (§3) plus Blog is easier for a search engine to crawl completely than a deep, nested one — consistent with "avoid deep nesting" (Part 5 — File Organization) applied to information hierarchy.
- **Content clusters.** Each of the four Services (§6) is a natural cluster center — Service page, related Portfolio pieces, and related Blog posts should all interlink around it.
- **Topic authority.** Built by Blog content demonstrating depth within each Service cluster over time, rather than by adding more Core Pages — topical depth comes from content volume within the existing structure, not structural growth.
- **Internal linking philosophy.** Already detailed in §12 — links should always flow toward relevance (a Service links to its Portfolio proof and its Blog content) and toward conversion (everything eventually reaches Contact).
- **Content growth strategy.** New content (Blog posts, Portfolio pieces) is added within the existing cluster structure — the SEO architecture is designed to absorb growth without requiring new Core Pages, consistent with Future Scalability (§17).

---

# 17. Future Scalability

Weber's Version 1 IA is designed to absorb years of growth without restructuring, for the same reason its technical architecture is (`DECISIONS.md` WD-013): new things become new Features and new content within existing clusters, not new categories of structure.

- New Services can be added to §6 without changing the Services page's role in the sitemap.
- New Portfolio pieces and Blog posts grow within their existing clusters (§16) indefinitely.
- Client Dashboard, Learning Platform, and Authentication (§14) attach as new destinations, never as changes to existing ones.
- The Home page's nine-section structure (§5) was derived from the Confidence Journey itself (Part 4), a principle that doesn't change as the product grows — new trust signals extend existing sections rather than requiring new ones.

The test for any future addition is the same one already established for the technical architecture (Part 9 — Long-Term Thinking): would this still be the right structure if Weber becomes an educational platform, a client portal, and a multi-language product? If a proposed change would require restructuring what's already here, it should be reconsidered before approval.

---

# 18. Non-Goals

This document intentionally does **not** define:

- No UI or visual design.
- No component implementation (props, state, styling — only the logical inventory in §15).
- No routing implementation (URL slugs, file-based routing syntax — only that multi-route architecture is used, `DECISIONS.md` WD-043).
- No styling or design tokens (see `UI_FOUNDATION.md`, `DESIGN_TOKENS.md`).
- No backend implementation (form handling, lead storage, email delivery mechanics).
- No database schema.
- No code of any kind.
- No CMS or content-authoring technology (Blog, §9).
- No specific Portfolio filter taxonomy (§8).
- No SEO keywords (§16).

---

## Pending Decisions Summary

Consolidated from every section above — none of these block this document from being official, but each is a genuine open item:

- Support Pages tier is currently empty — no legal/privacy page has been approved (§3).
- Primary/Secondary/Footer/Utility navigation exact composition (§4).
- Site search — not an approved feature at all, only noted as structurally compatible (§4).
- Exact URL scheme and content for future individual Service Detail pages, once approved (§6, §15; `DECISIONS.md` WD-146 defers them entirely for Version 1).
- Portfolio filter taxonomy (§8).
- Blog content category list and CMS/storage technology (§9).
- Contact follow-up automation and backend implementation (§10) — the field list itself is resolved (`DECISIONS.md` WD-139).
- "Freelancer" and "E-commerce Client" as approved audience segments — still unconfirmed, and deliberately not included in §11.
- Authentication existence, scope, and implementation (§14).
- Exact URL scheme (multi-route architecture itself is decided — `DECISIONS.md` WD-043).

---

## How This Document Is Maintained

Every structural claim above traces to `PROJECT_CONSTITUTION.md` or a `DECISIONS.md` entry (through WD-043). Any change to the sitemap, Home page section order, Services list, or Version 2 integration approach requires a new decision, logged the same way — this document is never edited to add or remove a page without a corresponding `DECISIONS.md` entry.
