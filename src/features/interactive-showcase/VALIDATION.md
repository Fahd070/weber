# Interactive Showcase — Validation Checklist

Plain-language validation record, per the approved Goal #10 approach (`DECISIONS.md` WD-149 through WD-166). No executable test files exist yet — `IMPLEMENTATION_BLUEPRINT.md` records the project's testing framework as unresolved, and this feature does not make that decision. Convert the items below into executable tests once a framework is chosen.

## 1. All fourteen Business Type records resolve successfully

**Enforced at compile time.** `BusinessTypeRegistry` (`src/content/interactive-showcase/types.ts`) is typed as `Record<BusinessTypeId, BusinessTypeRecord>` against the closed `BusinessTypeId` union — TypeScript requires all fourteen keys to be present in `business-types.ts`, with no extra or missing entries. This was verified via `pnpm run typecheck` (passed).

**Future executable test:** iterate every `BusinessTypeId` and call `resolveShowcasePreview(id, "Test Co")`, asserting no exception and a non-null `ResolvedPreview` for each.

## 2. Every Business Type maps only to its approved Pattern

**Enforced at compile time.** `BusinessTypeRecord` is a discriminated union keyed by `patternId`; each `content` field's shape is structurally required to match its own `patternId`'s schema (e.g., a `"trust-credibility"` entry cannot compile without exactly three `valueProps`). The actual `patternId` assigned to each of the fourteen entries in `business-types.ts` was cross-checked by hand against `DECISIONS.md` WD-155's approved mapping during authoring.

**Future executable test:** assert each entry's `patternId` matches the WD-155 mapping table exactly (a fixed lookup comparison).

## 3. Resolver output matches Pattern contracts

**Enforced at compile time.** `resolveShowcasePreview`'s return type is the `ResolvedPreview` discriminated union; each `switch` branch's returned `props` object is checked against that branch's exact resolved-props interface (`VisualGridResolvedProps`, etc.) by the compiler. A mismatched or missing field fails `tsc`, not a test run.

**Future executable test:** for each of the fourteen Business Types, assert the resolved payload's `patternId` and prop shape match the expected Pattern contract.

## 4. Pattern components remain Business-Type-agnostic

**Enforced by contract.** None of the four Pattern components' prop interfaces (`VisualGridResolvedProps`, `TrustCredibilityResolvedProps`, `OfferingForwardResolvedProps`, `NeutralFallbackResolvedProps`) include a `businessTypeId` or any business-type-identifying field — confirmed by inspection of `types.ts` and each pattern component file.

**Future executable test:** render each Pattern component directly with a hand-constructed props object that was never produced by the resolver, and confirm it renders correctly — proving no implicit dependency on Business Type data exists.

## 5. Company Name is safely rendered

Company Name is trimmed and defaulted (`resolver.ts`), then rendered exclusively as plain JSX text content (`{headline}`, `{supportingLine}`, etc.) in every Pattern component — no `dangerouslySetInnerHTML` is used anywhere in this feature, which means React's default JSX escaping is the active XSS defense for every rendered instance of the substituted name.

**Future executable test:** resolve a preview with a Company Name containing `<script>` or similar markup and assert the rendered output contains the literal text, not executable markup.

## 6. Global CTA and Concept Preview label remain consistent

**Enforced structurally.** `GLOBAL_REGISTRY` (`global.ts`) is a singleton — there is exactly one `cta` record and one `conceptPreviewLabel` string in the entire codebase. Every Pattern component receives `cta` only via its resolved props (sourced from `GLOBAL_REGISTRY.cta` inside the resolver); no Pattern or Business Type file defines its own CTA text or destination. The Concept Preview label is rendered exactly once, by `ShowcaseShell`, never duplicated inside a Pattern component.

**Future executable test:** assert every resolved payload's `cta` is referentially or value-equal to `GLOBAL_REGISTRY.cta`, and assert no Pattern component file contains a CTA string literal.
