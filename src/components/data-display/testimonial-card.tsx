import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/surfaces/card";
import { Stack } from "@/components/layout/stack";
import { Cluster } from "@/components/layout/cluster";

/**
 * Presents one client testimonial — quote, author, and optionally their
 * role/company — within the Testimonials Home section (DECISIONS.md
 * WD-040). Owns presenting a single testimonial's quote and attribution
 * only; does not own the section's overall arrangement. Composes the
 * Surfaces Card primitive (elevation.1/Resting) and, optionally, Avatar.
 * Non-interactive — a static presentation. The quote is marked up as a
 * real quotation (<blockquote>/<cite>) so assistive technology identifies
 * it as such, not a generic paragraph. No content is hardcoded — quote,
 * author, and role are supplied entirely by the caller.
 * docs/components/06_DATA_DISPLAY.md — Testimonial Card.
 */
export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: ReactNode;
  author: ReactNode;
  /** Optional role/company attribution (e.g. "CEO, Acme Co."). */
  authorRole?: ReactNode;
  /** Optional Avatar element for the author's photo. */
  avatar?: ReactNode;
}

export function TestimonialCard({
  quote,
  author,
  authorRole,
  avatar,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <Card elevation="resting" className={cn("p-6", className)} {...props}>
      <Stack gap={4}>
        <blockquote className="text-body text-foreground">{quote}</blockquote>
        <Cluster gap={3}>
          {avatar}
          <Stack gap={1}>
            <cite className="text-body font-medium not-italic">{author}</cite>
            {authorRole ? (
              <span className="text-caption text-muted-foreground">
                {authorRole}
              </span>
            ) : null}
          </Stack>
        </Cluster>
      </Stack>
    </Card>
  );
}
