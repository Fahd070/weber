"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Stack } from "@/components/layout/stack";
import { Icon } from "@/components/utilities/icon";
import { entranceReveal } from "@/components/utilities/scroll-reveal";
import { LiveRegionAnnouncer } from "@/components/utilities/live-region-announcer";

const DEFAULT_STEPS = [
  "Analyzing your business...",
  "Planning page structure...",
  "Applying branding...",
  "Building preview...",
  "Finalizing...",
];

/** 5 default steps × 600ms = 3000ms — mid-range of the requested 2.5–3.5s window. */
const STEP_DURATION_MS = 600;

export interface GenerationSequenceProps {
  /** Called exactly once, when every step has completed (naturally or via Skip). */
  onComplete: () => void;
  steps?: string[];
}

/**
 * A dedicated, reusable component owning only the simulated "generating"
 * sequence shown between form submission and the preview reveal
 * (Interactive Showcase Generation Experience, Design Evolution, Project
 * Owner approved). Purely a UI pacing device — no API calls, no real
 * work happens here or anywhere else; the actual preview is already
 * fully resolved (deterministically, per DECISIONS.md WD-149) by the
 * caller before this even mounts. Owns its own step timer and Skip
 * interaction; does not know what a "template" or "pattern" is, and
 * imports nothing from the template registry, template renderer,
 * content registry, or resolvers — those are unmodified. Each step's
 * entrance reuses the exact fade + slight-upward-movement + ease-out
 * language already established for Hero/ScrollReveal (Motion Phase
 * A/B), just mount-triggered here instead of scroll-triggered, since
 * this content isn't scrolled into view — it's revealed by a timer.
 * Skipped entirely under `prefers-reduced-motion`: the same step
 * sequence and timing still runs (so the live-region announcements stay
 * meaningful), just rendered without transition animations.
 */
export function GenerationSequence({
  onComplete,
  steps = DEFAULT_STEPS,
}: GenerationSequenceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (currentIndex >= steps.length) {
      onCompleteRef.current();
      return;
    }

    const timer = setTimeout(() => {
      setCompletedIndices((prev) => [...prev, currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, STEP_DURATION_MS);

    return () => clearTimeout(timer);
  }, [currentIndex, steps.length]);

  function handleSkip() {
    setCompletedIndices(steps.map((_, index) => index));
    setCurrentIndex(steps.length);
  }

  const isFinished = currentIndex >= steps.length;
  const currentStepText = steps[Math.min(currentIndex, steps.length - 1)];
  const visibleSteps = steps.slice(0, Math.min(currentIndex + 1, steps.length));

  return (
    <Stack gap={4} className="items-center text-center">
      {/* Decorative — the accessible announcement is the LiveRegionAnnouncer below, so this visual checklist doesn't get read twice. */}
      <Stack gap={2} aria-hidden="true" className="items-start">
        {visibleSteps.map((step, index) => {
          const isDone = completedIndices.includes(index);
          const stepProps = shouldReduceMotion ? {} : entranceReveal();

          return (
            <motion.div
              key={step}
              className="flex items-center gap-2"
              {...stepProps}
            >
              <span className="text-body text-muted-foreground">{step}</span>
              {isDone ? (
                <motion.span
                  initial={
                    shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }
                  }
                  animate={
                    shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Icon icon={Check} className="size-4 text-success" />
                </motion.span>
              ) : null}
            </motion.div>
          );
        })}
      </Stack>

      {!isFinished ? (
        <button
          type="button"
          onClick={handleSkip}
          className="text-caption text-muted-foreground underline-offset-2 transition-colors duration-standard ease-in-out hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skip
        </button>
      ) : null}

      <LiveRegionAnnouncer message={currentStepText} priority="polite" />
    </Stack>
  );
}
