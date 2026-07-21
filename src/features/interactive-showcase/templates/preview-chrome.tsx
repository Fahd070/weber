import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Globe } from "lucide-react";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Icon } from "@/components/utilities/icon";
import { cn } from "@/lib/utils";
import { deriveBrandInitials } from "@/lib/deterministic-pick";
import {
  CARD_RADIUS_CLASS,
  type PreviewTheme,
} from "@/content/interactive-showcase/templates/themes";

export interface PreviewChromeProps {
  companyName: string;
  navLabels: string[];
  theme: PreviewTheme;
  /** Curated, deterministically-selected brand tagline (Dynamic Brand Identity, Project Owner approved) — see `resolve-template.ts`. */
  tagline: string;
  /** The brand mark's icon, only rendered when `theme.logoMarkStyle` is `"icon"` (Dynamic Brand Identity, Project Owner approved). */
  logoIcon: LucideIcon;
  children: ReactNode;
}

type PreviewChromeStyle = CSSProperties & {
  "--preview-accent": string;
  "--preview-gradient-from": string;
  "--preview-gradient-to": string;
};

/**
 * Decorative window-control dots (Premium Preview Chrome, Project Owner
 * approved) — the closed-red/minimize-amber/expand-green convention
 * every desktop browser uses, instantly reading as "a real browser
 * window." Reuses the existing `--color-danger`/`--color-warning`/
 * `--color-success` semantic tokens (DECISIONS.md WD-036) purely for
 * their already-approved, already-muted hue — not their state meaning —
 * rather than inventing a new red/amber/green outside the approved
 * palette. Purely decorative and `aria-hidden`; never real, clickable
 * window controls (DECISIONS.md WD-050 — no fake interactive element).
 */
function BrowserWindowControls() {
  return (
    <Cluster gap={2} aria-hidden="true">
      <span className="size-2.5 rounded-full bg-danger" />
      <span className="size-2.5 rounded-full bg-warning" />
      <span className="size-2.5 rounded-full bg-success" />
    </Cluster>
  );
}

/**
 * A decorative, non-fabricated placeholder address-bar string derived
 * from the visitor's own company name (Premium Preview Chrome, Project
 * Owner approved) — never a real, resolvable domain, never rendered as a
 * link. The whole Interactive Showcase already sits under the page-level
 * "Concept Preview" label (`GLOBAL_REGISTRY.conceptPreviewLabel`,
 * DECISIONS.md WD-149/WD-157) before a visitor ever reaches this
 * component, the same honesty context every other non-interactive,
 * realistic-looking detail in this mockup (fake nav labels, the browser
 * window controls above) already relies on.
 */
function toAddressBarUrl(companyName: string): string {
  const slug = companyName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
  return `${slug || "yourbusiness"}.com`;
}

/**
 * Maps `theme.logoShape` to the brand mark's own container treatment
 * (Dynamic Brand Identity, Project Owner approved) — "circle" is
 * `rounded-full`, Preview Chrome's original, still-used shape; "rounded"
 * and "outlined" both reuse `CARD_RADIUS_CLASS` (the same shared mapping
 * `Template Renderer`/`Preview Section Renderer` use for every card in
 * this template, WD-031) so the mark's own corners always match the rest
 * of that industry's card personality rather than picking an independent
 * radius. "outlined" additionally swaps the filled `bg-[var(--preview-
 * accent)]`/`text-white` treatment for a transparent, border-only one —
 * still built entirely from `var(--preview-accent)`, never a new color.
 */
function logoMarkClass(theme: PreviewTheme): string {
  const shape =
    theme.logoShape === "circle"
      ? "rounded-full"
      : CARD_RADIUS_CLASS[theme.cardRadius];
  const fill =
    theme.logoShape === "outlined"
      ? "border-2 border-[var(--preview-accent)] bg-transparent text-[var(--preview-accent)]"
      : "bg-[var(--preview-accent)] text-white";
  return cn(shape, fill);
}

/**
 * Renders `navLabels` as a row of plain, non-interactive spans — the
 * first accent-colored (`var(--preview-accent)`), the rest muted (Dynamic
 * Brand Identity, Project Owner approved). One shared implementation
 * reused by both the top nav row and the footer's own repeated row,
 * rather than duplicating this JSX at each of the two call sites.
 */
function NavLabelsRow({
  labels,
  className,
}: {
  labels: string[];
  className?: string;
}) {
  const [primary, ...rest] = labels;
  return (
    <Cluster gap={4} className={className}>
      {primary ? (
        <span className="text-caption font-medium text-[var(--preview-accent)]">
          {primary}
        </span>
      ) : null}
      {rest.map((label) => (
        <span key={label} className="text-caption text-muted-foreground">
          {label}
        </span>
      ))}
    </Cluster>
  );
}

/**
 * The simulated "mini-site" frame around a V2 template — a fake nav bar
 * and footer carrying the visitor's company name, bordered distinctly
 * from Weber's own real site chrome so it reads unambiguously as a
 * mockup, not as Weber's actual navigation (Interactive Showcase V2,
 * Design Evolution, Project Owner approved). Nav labels are rendered as
 * plain, non-interactive text — never real or fake links — so keyboard
 * and screen-reader users never encounter a dead tab-stop that looks
 * actionable but isn't (DECISIONS.md WD-050). The border/background
 * treatment reuses existing tokens only (`border-border`, `bg-surface`)
 * — no new colors on the frame itself.
 *
 * Sets `theme`'s three color values as CSS custom properties exactly
 * once, here, on this component's own root element (Premium Realism
 * Phase, Project Owner approved) — every descendant inside `children`
 * (Template Renderer's hero, every Preview Section Renderer case)
 * references `var(--preview-accent)` / `var(--preview-gradient-from)` /
 * `var(--preview-gradient-to)` directly in its own Tailwind arbitrary-
 * value classes via normal CSS cascade, so those three never need to be
 * threaded through as a prop past this one point. `theme.contentWidth`
 * (Genuine Differentiation Pass, Project Owner approved) is the one
 * theme value this component *does* still consume directly as a prop,
 * not via CSS variable — it's a JS-level `Container` `size` choice, not
 * a stylable CSS value — applied to this component's own footer
 * `Container` so the footer's column width matches every section
 * inside `children`, not Container's own unrelated default.
 *
 * The brand mark beside the company name (Dynamic Brand Identity,
 * Project Owner approved; originally Dynamic Branding's plain "Logo," a
 * single always-circular letter) now varies genuinely by industry, built
 * entirely from `PreviewTheme` and already-existing pieces — no new
 * branding system, no illustration library, no generated image:
 * - Container shape (`logoMarkClass`) — `theme.logoShape`, reusing
 *   `CARD_RADIUS_CLASS`/`rounded-full`.
 * - Content — `theme.logoMarkStyle === "monogram"` shows
 *   `deriveBrandInitials(companyName)` (`src/lib/deterministic-pick.ts`
 *   — "Vertex Cloud" → "VC"); `"icon"` shows `logoIcon` (resolved in
 *   `resolve-template.ts` as `source.logoIcon ?? source.heroIcon` — the
 *   template's own already-authored hero icon, reused rather than a new
 *   per-mark field on most templates).
 * - `tagline`, curated and deterministically selected the same way
 *   `heroHeadline`/`ctaMessage` already are, renders as a small subtitle
 *   directly beneath the company name — the classic "mark + wordmark +
 *   tagline" lockup real brand systems use.
 * - The first nav label (repeated identically in the footer row) picks
 *   up `var(--preview-accent)` instead of the muted default — Preview
 *   Chrome's nav previously used zero accent color anywhere, the one
 *   real gap found auditing accent usage across this component; every
 *   other accent touchpoint (mark fill/border, hero gradient, section
 *   accents) was already consistent before this phase.
 * The footer repeats `navLabels` as a second, equally non-interactive
 * row — the same real-website footer pattern Weber's own Footer Nav
 * mirrors from Primary Nav (DECISIONS.md WD-010), applied here to the
 * *fake* nav labels for the same reason: consistency, not a new pattern.
 *
 * A genuine desktop-browser toolbar (Premium Preview Chrome, Project
 * Owner approved) sits above the site's own nav bar — window controls
 * (`BrowserWindowControls`) plus a decorative address bar
 * (`toAddressBarUrl`). Deliberately neutral throughout
 * (`border-border`/`bg-surface`/`bg-background`/`text-muted-foreground`
 * only) — `var(--preview-accent)` never appears in the toolbar, so the
 * industry identity always begins exactly one layer down, at the site's
 * own nav bar. The outer frame's `shadow-elevation-3` (DECISIONS.md
 * WD-132's own Overlay-tier token) is reused rather than a new shadow
 * value — a floating browser-window mockup over the page is the same
 * "genuine visual separation" case WD-132 already grants modals.
 */
export function PreviewChrome({
  companyName,
  navLabels,
  theme,
  tagline,
  logoIcon,
  children,
}: PreviewChromeProps) {
  const style: PreviewChromeStyle = {
    "--preview-accent": theme.accent,
    "--preview-gradient-from": theme.gradientFrom,
    "--preview-gradient-to": theme.gradientTo,
  };
  const initials = deriveBrandInitials(companyName);

  return (
    <div
      style={style}
      className="overflow-hidden rounded-lg border border-border shadow-elevation-3"
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-4 border-b border-border bg-surface px-4 py-3 sm:px-6"
      >
        <BrowserWindowControls />
        <div className="flex min-w-0 flex-1 justify-center">
          <Cluster
            gap={2}
            className="min-w-0 max-w-sm rounded-md border border-border bg-background px-3 py-1.5"
          >
            <Icon
              icon={Globe}
              className="size-3.5 shrink-0 text-muted-foreground"
            />
            <span className="truncate text-caption text-muted-foreground">
              {toAddressBarUrl(companyName)}
            </span>
          </Cluster>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="border-b border-border bg-surface px-4 py-3 sm:px-6"
      >
        <Cluster gap={4} className="justify-between">
          <Cluster gap={3}>
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center text-caption font-semibold",
                logoMarkClass(theme),
              )}
            >
              {theme.logoMarkStyle === "monogram" ? (
                initials
              ) : (
                <Icon icon={logoIcon} className="size-4" />
              )}
            </span>
            <div>
              <p className="text-body font-semibold text-foreground">
                {companyName}
              </p>
              <p className="text-caption text-muted-foreground">{tagline}</p>
            </div>
          </Cluster>
          <NavLabelsRow labels={navLabels} className="hidden sm:flex" />
        </Cluster>
      </div>

      {children}

      <div
        aria-hidden="true"
        className="border-t border-border bg-surface px-4 py-6 sm:px-6"
      >
        <Container size={theme.contentWidth}>
          <Stack gap={4} className="items-center text-center">
            <NavLabelsRow labels={navLabels} className="justify-center" />
            <p className="text-caption text-muted-foreground">
              © {companyName}
            </p>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
