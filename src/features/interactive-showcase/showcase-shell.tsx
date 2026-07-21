"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Form } from "@/components/inputs/form";
import { FormField } from "@/components/inputs/form-field";
import { Select } from "@/components/inputs/select";
import { TextField } from "@/components/inputs/text-field";
import { LiveRegionAnnouncer } from "@/components/utilities/live-region-announcer";
import {
  ScrollReveal,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import { GLOBAL_REGISTRY } from "@/content/interactive-showcase/global";
import { BUSINESS_TYPE_REGISTRY } from "@/content/interactive-showcase/business-types";
import { resolveShowcasePreview } from "./resolver";
import { resolveTemplatePreview } from "./templates/resolve-template";
import { TemplateRenderer } from "./templates/template-renderer";
import { GenerationSequence } from "./generation-sequence";
import { VisualGridPattern } from "./patterns/visual-grid-pattern";
import { TrustCredibilityPattern } from "./patterns/trust-credibility-pattern";
import { OfferingForwardPattern } from "./patterns/offering-forward-pattern";
import { NeutralFallbackPattern } from "./patterns/neutral-fallback-pattern";
import type {
  BusinessTypeId,
  ResolvedPreview,
} from "@/content/interactive-showcase/types";
import type { PreviewTemplate } from "@/content/interactive-showcase/templates/types";
import type { PreviewTheme } from "@/content/interactive-showcase/templates/themes";

const BUSINESS_TYPE_OPTIONS = Object.values(BUSINESS_TYPE_REGISTRY);

/**
 * Either a V2 template result (Interactive Showcase V2, Design
 * Evolution, Project Owner approved) or the original, unmodified
 * pattern result — the original four-pattern resolver (`./resolver`)
 * is untouched; this is purely an additive routing layer on top of it.
 */
type ResolvedState =
  | {
      kind: "template";
      template: PreviewTemplate;
      companyName: string;
      theme: PreviewTheme;
    }
  | { kind: "pattern"; resolved: ResolvedPreview };

/**
 * "generating" shows the Generation Sequence while the already-resolved
 * preview waits to be revealed (Interactive Showcase Generation
 * Experience, Design Evolution, Project Owner approved) — the preview
 * itself is resolved immediately and synchronously in `handleSubmit`,
 * exactly as before; only its on-screen reveal is gated behind the
 * sequence finishing.
 */
type ShowcasePhase = "idle" | "generating" | "revealed";

/**
 * The Interactive Showcase's Global layer (DECISIONS.md WD-159, WD-164,
 * WD-166). Owns input capture (Business Type + Company Name), invokes the
 * Resolver (the only cross-registry composition step), and renders the
 * "Concept Preview" label around whichever result renders — a V2
 * template (Interactive Showcase V2, Design Evolution, Project Owner
 * approved) if the selected Business Type has one registered, otherwise
 * the original Pattern component the original Resolver selects,
 * completely unmodified. Never itself contains Pattern- or
 * template-specific rendering logic. Between submission and reveal, it
 * renders Generation Sequence (Interactive Showcase Generation
 * Experience, Design Evolution, Project Owner approved) — the result is
 * resolved immediately as before, but its on-screen reveal waits for
 * that sequence to finish. Its own heading/body/form reveal with the
 * same cadence as Hero (Motion Phase B, Design Evolution, Project Owner
 * approved).
 */
export function ShowcaseShell() {
  const [businessTypeId, setBusinessTypeId] = useState<BusinessTypeId | "">("");
  const [companyName, setCompanyName] = useState("");
  const [resolved, setResolved] = useState<ResolvedState | null>(null);
  const [phase, setPhase] = useState<ShowcasePhase>("idle");
  const [businessTypeError, setBusinessTypeError] = useState<
    string | undefined
  >();
  const [companyNameError, setCompanyNameError] = useState<
    string | undefined
  >();
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "idle") {
      previewRef.current?.focus();
    }
  }, [phase]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedCompanyName = companyName.trim();

    setBusinessTypeError(
      businessTypeId ? undefined : "Please select a business type.",
    );
    setCompanyNameError(
      trimmedCompanyName ? undefined : "Please enter your company name.",
    );

    if (!businessTypeId || !trimmedCompanyName) {
      return;
    }

    const templateResult = resolveTemplatePreview(businessTypeId, companyName);
    if (templateResult) {
      setResolved({ kind: "template", ...templateResult });
    } else {
      setResolved({
        kind: "pattern",
        resolved: resolveShowcasePreview(businessTypeId, companyName),
      });
    }
    setPhase("generating");
  }

  return (
    <Section>
      <Container>
        <Stack gap={10}>
          <Stack gap={5} className="items-center text-center">
            <ScrollReveal>
              <h1 className="text-display font-semibold text-foreground">
                Interactive Showcase
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <p className="max-w-reading text-body text-muted-foreground">
                Select your business type and enter your company name to preview
                a website concept.
              </p>
            </ScrollReveal>
          </Stack>

          <ScrollReveal
            delay={SEQUENCE_REVEAL_STEP * 2}
            className="mx-auto w-full max-w-reading"
          >
            <Form submitLabel="Preview My Website" onSubmit={handleSubmit}>
              <FormField
                label="Business Type"
                required
                error={businessTypeError}
              >
                <Select
                  value={businessTypeId}
                  onChange={(event) => {
                    setBusinessTypeId(
                      event.target.value as BusinessTypeId | "",
                    );
                    setBusinessTypeError(undefined);
                  }}
                >
                  <option value="" disabled>
                    Select your business type
                  </option>
                  {BUSINESS_TYPE_OPTIONS.map((businessType) => (
                    <option
                      key={businessType.businessTypeId}
                      value={businessType.businessTypeId}
                    >
                      {businessType.label}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Company Name" required error={companyNameError}>
                <TextField
                  value={companyName}
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                    setCompanyNameError(undefined);
                  }}
                  autoComplete="organization"
                />
              </FormField>
            </Form>
          </ScrollReveal>

          {phase !== "idle" ? (
            <Stack gap={6} ref={previewRef} tabIndex={-1}>
              <ScrollReveal>
                <p className="text-center text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                  {GLOBAL_REGISTRY.conceptPreviewLabel}
                </p>
              </ScrollReveal>
              {phase === "generating" ? (
                <GenerationSequence onComplete={() => setPhase("revealed")} />
              ) : resolved ? (
                <>
                  {resolved.kind === "template" ? (
                    <TemplateRenderer
                      template={resolved.template}
                      companyName={resolved.companyName}
                      theme={resolved.theme}
                    />
                  ) : resolved.resolved.patternId === "visual-grid" ? (
                    <VisualGridPattern {...resolved.resolved.props} />
                  ) : resolved.resolved.patternId === "trust-credibility" ? (
                    <TrustCredibilityPattern {...resolved.resolved.props} />
                  ) : resolved.resolved.patternId === "offering-forward" ? (
                    <OfferingForwardPattern {...resolved.resolved.props} />
                  ) : (
                    <NeutralFallbackPattern {...resolved.resolved.props} />
                  )}
                  <LiveRegionAnnouncer
                    message="Website concept preview updated."
                    priority="polite"
                  />
                </>
              ) : null}
            </Stack>
          ) : null}
        </Stack>
      </Container>
    </Section>
  );
}
