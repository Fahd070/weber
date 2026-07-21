import type { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { ShowcaseShell } from "@/features/interactive-showcase/showcase-shell";

const INTERACTIVE_SHOWCASE_DESCRIPTION =
  "Preview a realistic concept for your business website — share your business type and company name to see what Weber could build for you.";

export const metadata: Metadata = {
  title: "Interactive Showcase",
  description: INTERACTIVE_SHOWCASE_DESCRIPTION,
  openGraph: {
    title: "Interactive Showcase | Weber",
    description: INTERACTIVE_SHOWCASE_DESCRIPTION,
    type: "website",
    siteName: "Weber",
  },
};

export default function InteractiveShowcasePage() {
  return (
    <Page>
      <ShowcaseShell />
    </Page>
  );
}
