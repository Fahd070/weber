import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Tag } from "./tag";

/**
 * Presents one blog post's full article content on its own route. A Data
 * Display content component, not a Layout-category primitive (DECISIONS.md
 * WD-089). Owns arranging a single article's title, category, body, and
 * author into a coherent reading experience; does not own page-level
 * structural wrapping or the listing presentation (Blog Post Card's job).
 * Composes Section, Container, Stack, and a Tag for its category label.
 * Reading width favors the Reading container (720px) — stated directly in
 * this component's own Accessibility field (DECISIONS.md WD-035). Content
 * (title/category/author/body) is supplied entirely by the caller.
 * docs/components/06_DATA_DISPLAY.md — Article Layout.
 */
export interface ArticleLayoutProps extends HTMLAttributes<HTMLElement> {
  heading: ReactNode;
  category: ReactNode;
  author: ReactNode;
  children: ReactNode;
}

export const ArticleLayout = forwardRef<HTMLElement, ArticleLayoutProps>(
  ({ heading, category, author, children, className, ...props }, ref) => {
    return (
      <Section ref={ref} className={className} {...props}>
        <Container size="reading">
          <Stack gap={5}>
            <Stack gap={2}>
              <Tag>{category}</Tag>
              <h1 className="text-h1 font-semibold text-foreground">
                {heading}
              </h1>
              <p className="text-caption text-muted-foreground">{author}</p>
            </Stack>
            <Stack gap={4} className="text-body text-foreground">
              {children}
            </Stack>
          </Stack>
        </Container>
      </Section>
    );
  },
);

ArticleLayout.displayName = "ArticleLayout";
