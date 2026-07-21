import {
  BadgeCheck,
  Code2,
  Layers,
  LayoutGrid,
  Package,
  RefreshCw,
  Search,
  ShieldCheck,
  Sliders,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Service Detail Page content registry (Service Detail Pages Phase 1,
 * Project Owner approved). Data only, no rendering logic — the exact
 * copy the Project Owner supplied for "What we build," "What you
 * receive," and FAQ, kept separate from the shared page template
 * (DECISIONS.md WD-010 — Content/Component Separation Rule), the same
 * pattern already used for Interactive Showcase's own content
 * registries (WD-159, WD-165). "What you receive" items are paired with
 * generic Lucide icons (WD-019) chosen to match each phrase's meaning —
 * an implementation detail, not new content.
 */
export interface ServiceDetailFeature {
  icon: LucideIcon;
  label: string;
}

export interface ServiceDetailFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailContent {
  slug: string;
  name: string;
  shortDescription: string;
  whatWeBuild: string[];
  whatYouReceive: ServiceDetailFeature[];
  faq: ServiceDetailFaqItem[];
}

export const SERVICE_DETAIL_CONTENT: Record<string, ServiceDetailContent> = {
  websites: {
    slug: "websites",
    name: "Website Development",
    shortDescription:
      "A professional website that gives your business a strong digital presence.",
    whatWeBuild: [
      "Landing Pages",
      "Company Websites",
      "Business Portals",
      "E-commerce Websites",
      "Booking & Reservation Systems",
      "Custom Business Websites",
    ],
    whatYouReceive: [
      { icon: Smartphone, label: "Responsive design" },
      { icon: Zap, label: "Fast loading performance" },
      { icon: Sparkles, label: "Clean and modern interface" },
      { icon: Search, label: "SEO-ready foundation" },
      { icon: ShieldCheck, label: "Secure development practices" },
      { icon: Wrench, label: "Easy future maintenance" },
    ],
    faq: [
      {
        question: "How long does a website usually take?",
        answer:
          "Every project is different. After understanding your requirements, we'll provide a realistic timeline before development begins.",
      },
      {
        question: "Can my website be expanded later?",
        answer: "Yes. Every project is built with future improvements in mind.",
      },
      {
        question: "Will it work on mobile devices?",
        answer:
          "Yes. Every website is designed to work across desktop, tablet, and mobile devices.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes. Support options can be discussed based on your project's needs.",
      },
    ],
  },
  "mobile-applications": {
    slug: "mobile-applications",
    name: "Mobile Applications",
    shortDescription:
      "A mobile-native experience for businesses whose customer relationship depends on being on the go.",
    whatWeBuild: [
      "Business Apps",
      "Customer Apps",
      "Internal Company Apps",
      "Booking Applications",
      "E-commerce Applications",
      "Cross-platform Mobile Apps",
    ],
    whatYouReceive: [
      { icon: Sparkles, label: "Modern UI" },
      { icon: Smartphone, label: "Responsive experience" },
      { icon: Zap, label: "Optimized performance" },
      { icon: Layers, label: "Scalable architecture" },
      { icon: Wrench, label: "Maintainable codebase" },
      { icon: RefreshCw, label: "Long-term flexibility" },
    ],
    faq: [
      {
        question: "Which platforms do you support?",
        answer:
          "Projects can target both iOS and Android depending on your requirements.",
      },
      {
        question: "Can my app connect to my website?",
        answer:
          "Yes. Applications can integrate with your existing systems and services.",
      },
      {
        question: "Can new features be added later?",
        answer: "Yes. Applications are designed with future growth in mind.",
      },
      {
        question: "Will I be involved during development?",
        answer: "Yes. We work collaboratively throughout the project.",
      },
    ],
  },
  "desktop-applications": {
    slug: "desktop-applications",
    name: "Desktop Applications",
    shortDescription:
      "A practical option that gives your business a smoother way to get things done.",
    whatWeBuild: [
      "Internal Management Systems",
      "Business Operations Software",
      "Administrative Tools",
      "Custom Desktop Applications",
      "Productivity Software",
      "Company Workstations",
    ],
    whatYouReceive: [
      { icon: Zap, label: "Fast native performance" },
      { icon: Sparkles, label: "User-friendly interface" },
      { icon: ShieldCheck, label: "Secure local workflows" },
      { icon: BadgeCheck, label: "Reliable long-term operation" },
      { icon: Wrench, label: "Maintainable architecture" },
      { icon: Sliders, label: "Custom functionality" },
    ],
    faq: [
      {
        question: "Which operating systems are supported?",
        answer:
          "Support depends on project requirements and target environment.",
      },
      {
        question: "Can the application work offline?",
        answer: "Yes, where appropriate for the project.",
      },
      {
        question: "Can it connect to existing systems?",
        answer:
          "Yes. Integration is planned according to business requirements.",
      },
      {
        question: "Can additional modules be added later?",
        answer: "Yes. Future expansion is considered during development.",
      },
    ],
  },
  templates: {
    slug: "templates",
    name: "Templates",
    shortDescription:
      "A faster, self-serve option for businesses wanting a quicker path to a professional site.",
    whatWeBuild: [
      "Landing Page Templates",
      "Business Website Templates",
      "Portfolio Templates",
      "E-commerce Templates",
      "Dashboard Templates",
      "UI Components",
    ],
    whatYouReceive: [
      { icon: LayoutGrid, label: "Clean structure" },
      { icon: Sparkles, label: "Modern visual design" },
      { icon: Sliders, label: "Easy customization" },
      { icon: Smartphone, label: "Responsive layouts" },
      { icon: Code2, label: "Organized code" },
      { icon: Package, label: "Ready-to-use assets" },
    ],
    faq: [
      {
        question: "Can templates be customized?",
        answer: "Yes. They are designed to be adapted to your brand.",
      },
      {
        question: "Can I request modifications?",
        answer: "Yes. Custom adjustments can be discussed.",
      },
      {
        question: "Are templates responsive?",
        answer: "Yes. They are designed to work across different screen sizes.",
      },
      {
        question: "Can templates be expanded later?",
        answer:
          "Yes. Additional pages and components can be added whenever needed.",
      },
    ],
  },
};
