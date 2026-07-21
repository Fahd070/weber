import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  Car,
  ChefHat,
  Fuel,
  Gauge,
  Gift,
  GraduationCap,
  Hammer,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  Hexagon,
  Home,
  Landmark,
  Layers,
  MapPin,
  MessageCircle,
  PaintBucket,
  Package,
  PartyPopper,
  Plug,
  Rocket,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Soup,
  Sparkles,
  Stethoscope,
  Tag,
  Truck,
  Users,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";
import type { PreviewTemplateSource, TemplateId } from "./types";

/**
 * Interactive Showcase V2 template content registry (Design Evolution,
 * Project Owner approved; extended to fourteen templates and enriched
 * with additional section variety in the Premium Realism Phase, Project
 * Owner approved; each template's hero/navigation/CTA copy turned into
 * curated, deterministically-selected variation pools in the Premium
 * Personalization Phase, Project Owner approved). Data only, no rendering
 * logic — the same separation already established for the original
 * pattern content (WD-159, WD-165). Every string below follows the same
 * content boundary as the original patterns: generic, aspirational,
 * structural — no invented names, credentials, menu items, listings,
 * products, quotes, results, awards, or certifications anywhere.
 * `{{companyName}}` is the same substitution token the original resolver
 * already uses.
 *
 * Typed against `PreviewTemplateSource`, not `PreviewTemplate` —
 * `resolve-template.ts` is the only place that reads this file, picks one
 * option per variation pool deterministically (`src/lib/deterministic-
 * pick.ts`), and produces an ordinary, fully-resolved `PreviewTemplate`.
 * Every pool here has at least two hand-authored options except where a
 * template intentionally stays closer to its original single voice (e.g.
 * `corporate`, which stays deliberately generic per its own "maintain the
 * intentionally generic corporate identity" instruction) — those still
 * use a real pool (never a pool of exactly one), just with more
 * conservative, closely-related variations.
 *
 * `headingVariants` appears on one representative section per template
 * (typically the first content section after the hero) rather than on
 * every section of every template — the smallest, most proportionate
 * application of "dynamic headlines" that still demonstrates the pattern
 * genuinely, rather than tripling this file's size for marginal benefit
 * on sections where a rotating heading adds little.
 *
 * Each template's own section list deliberately uses a different
 * combination and order of section types (Premium Realism Phase,
 * Project Owner approved: "do not simply reuse the same layout with
 * different colors") — chosen to match how that industry's real
 * websites are typically structured, not a fixed five-section template
 * repeated fourteen times.
 */
export const TEMPLATE_CONTENT: Record<TemplateId, PreviewTemplateSource> = {
  restaurant: {
    templateId: "restaurant",
    navLabelVariations: [
      ["Home", "Menu", "Reservations", "Contact"],
      ["Menu", "Reservations", "About", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could welcome guests online.",
        supportingText:
          "A warm, inviting layout designed around your dining experience.",
      },
      {
        headline:
          "Fresh, inviting dining — presented the way {{companyName}} deserves.",
        supportingText:
          "A menu-forward layout built around the ingredients and atmosphere that define your kitchen.",
      },
    ],
    heroIcon: UtensilsCrossed,
    heroImage: "/interactive-showcase/cafe1.webp",
    heroLayout: "overlay",
    heroTags: ["Fresh Ingredients", "Family Friendly", "Outdoor Seating"],
    sections: [
      {
        type: "featuredGrid",
        heading: "What {{companyName}} could feature",
        headingVariants: [
          "What {{companyName}} could feature",
          "Today's Specials",
          "Chef Recommendations",
        ],
        items: [
          {
            label: "Chef's Signature Dish",
            description:
              "A featured plate that represents your kitchen's style.",
            badge: "Chef's Pick",
            icon: ChefHat,
          },
          {
            label: "Seasonal Tasting Menu",
            description:
              "A rotating selection built around fresh, seasonal ingredients.",
            badge: "Popular",
            icon: UtensilsCrossed,
          },
          {
            label: "House Specialty",
            description: "A signature dish guests come back for.",
            badge: "Guest Favorite",
            icon: Soup,
          },
        ],
      },
      {
        type: "galleryGrid",
        heading: "Gallery",
        tiles: [
          {
            label: "Dining Room",
            icon: Camera,
            image: "/interactive-showcase/cafe2.webp",
          },
          {
            label: "Kitchen",
            icon: Camera,
            image: "/interactive-showcase/cafe3.webp",
          },
          {
            label: "Ambiance",
            icon: Camera,
            image: "/interactive-showcase/cafe4.webp",
          },
        ],
      },
      {
        type: "conceptual",
        heading: "Reservations",
        body: "A reservation section could let guests book a table in just a few taps.",
      },
      {
        type: "testimonialGrid",
        heading: "What Guests Could Say",
        quotes: [
          "A memorable evening from start to finish.",
          "Warm service and a welcoming atmosphere.",
          "The kind of place we keep coming back to.",
        ],
      },
      {
        type: "conceptual",
        heading: "Location",
        body: "A location section could help nearby diners find you easily.",
      },
    ],
    ctaVariations: [
      {
        message: "Ready to welcome guests to {{companyName}} online?",
        label: "Let's plan your restaurant website",
      },
      {
        message: "Ready to give {{companyName}} a seat at the table online?",
        label: "Let's bring your menu online",
      },
    ],
    taglineVariations: ["Crafted with passion", "Fresh, made with care"],
  },

  "law-firm": {
    templateId: "law-firm",
    navLabelVariations: [
      ["Home", "Practice Areas", "About", "Contact"],
      ["Practice Areas", "Team", "About", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could present its expertise online.",
        supportingText:
          "A composed, professional layout built around trust and clarity.",
      },
      {
        headline:
          "Strategic expertise, presented with the confidence {{companyName}} has earned.",
        supportingText:
          "A refined layout built to reflect the trust clients place in your judgment.",
      },
    ],
    heroIcon: Briefcase,
    heroImage: "/interactive-showcase/pro1.webp",
    heroLayout: "split",
    heroImagePosition: "right",
    heroTags: ["Experienced", "Confidential", "Client-Focused"],
    sections: [
      {
        type: "categoryList",
        heading: "Practice Areas {{companyName}} could highlight",
        headingVariants: [
          "Practice Areas {{companyName}} could highlight",
          "Areas of Expertise",
        ],
        items: [
          "Business Law",
          "Family Law",
          "Real Estate Law",
          "Civil Litigation",
        ],
      },
      {
        type: "processSteps",
        heading: "Consultation Process",
        steps: [
          {
            title: "Initial Consultation",
            description:
              "A conversation to understand your situation and goals.",
          },
          {
            title: "Case Assessment",
            description:
              "A closer look at the details before recommending next steps.",
          },
          {
            title: "Proposed Approach",
            description:
              "A clear plan outlining how your case could move forward.",
          },
          {
            title: "Ongoing Representation",
            description:
              "Ongoing support and communication throughout the process.",
          },
        ],
      },
      {
        type: "imageBanner",
        heading: "Our Office",
        image: "/interactive-showcase/pro2.webp",
        imagePosition: "right",
      },
      {
        type: "teamGrid",
        heading: "Our Team",
        roles: ["Attorney", "Paralegal", "Client Relations"],
      },
      {
        type: "testimonialGrid",
        heading: "What Clients Could Say",
        quotes: [
          "Clear guidance when it mattered most.",
          "Direct communication at every step.",
          "A team I trusted with something important.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How do I schedule a consultation?",
            answer:
              "A consultation request section could let visitors reach out directly online.",
          },
          {
            question: "What should I bring to a first meeting?",
            answer:
              "A dedicated page could walk new clients through what to expect.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to present {{companyName}}'s expertise with the same clarity you bring to every case?",
        label: "Let's discuss your business",
      },
      {
        message: "Ready to show {{companyName}}'s expertise at its best?",
        label: "Let's showcase your expertise",
      },
    ],
    taglineVariations: ["Helping businesses grow", "Clarity you can count on"],
  },

  corporate: {
    templateId: "corporate",
    navLabelVariations: [
      ["Home", "Services", "About", "Contact"],
      ["Home", "About", "Services", "Contact"],
    ],
    heroVariations: [
      {
        headline: "A concept for {{companyName}}'s professional website.",
        supportingText:
          "A clean, modern design built on Weber's professional web development service.",
      },
      {
        headline: "A modern digital presence, built around {{companyName}}.",
        supportingText:
          "A clean, professional layout adaptable to whatever your business needs to say.",
      },
    ],
    heroIcon: Building2,
    heroLayout: "minimal",
    sections: [
      {
        type: "categoryList",
        heading: "Services {{companyName}} could showcase",
        items: [
          "Consulting",
          "Strategy",
          "Operations Support",
          "Business Development",
        ],
      },
      {
        type: "featureHighlights",
        heading: "Highlights",
        items: [
          { label: "A track record of dependable delivery", icon: ShieldCheck },
          { label: "A collaborative, transparent process", icon: Users },
          { label: "Solutions built around your goals", icon: Award },
        ],
      },
      {
        type: "conceptual",
        heading: "About",
        body: "An About section could introduce your team's approach and values.",
      },
      {
        type: "testimonialGrid",
        heading: "What Clients Could Say",
        quotes: [
          "A partner that understood our goals from day one.",
          "Consistent, dependable, and easy to work with.",
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to give {{companyName}} the professional presence it deserves?",
        label: "Let's discuss your project",
      },
      {
        message: "Ready to bring {{companyName}} online?",
        label: "Let's build your presence",
      },
    ],
    taglineVariations: [
      "Built for your business",
      "A modern digital foundation",
    ],
  },

  "medical-clinic": {
    templateId: "medical-clinic",
    navLabelVariations: [
      ["Home", "Services", "Appointments", "Contact"],
      ["Services", "Doctors", "Appointments", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could present its care online.",
        supportingText:
          "A calming, professional layout built around trust and clarity.",
      },
      {
        headline:
          "Trusted care, presented the way {{companyName}} practices it.",
        supportingText:
          "A calm, reassuring layout built around compassionate, patient-first care.",
      },
    ],
    heroIcon: Stethoscope,
    logoIcon: HeartPulse,
    heroImage: "/interactive-showcase/hel1.webp",
    heroLayout: "split",
    heroImagePosition: "left",
    heroTags: ["Licensed", "Trusted", "24/7 Care"],
    sections: [
      {
        type: "valueProps",
        heading: "Our Approach",
        headingVariants: ["Our Approach", "Patient Care"],
        items: [
          "A calm, welcoming environment",
          "Clear communication about your care",
          "Appointments that respect your time",
        ],
      },
      {
        type: "categoryList",
        heading: "Services {{companyName}} could offer",
        items: [
          "General Checkups",
          "Consultations",
          "Preventive Care",
          "Follow-up Visits",
        ],
      },
      {
        type: "imageBanner",
        heading: "Our Clinic",
        image: "/interactive-showcase/hel2.webp",
        imagePosition: "left",
      },
      {
        type: "teamGrid",
        heading: "Our Care Team",
        roles: ["Practitioner", "Nurse", "Patient Coordinator"],
      },
      {
        type: "processSteps",
        heading: "Appointment Process",
        steps: [
          {
            title: "Request an Appointment",
            description: "Share your preferred time and reason for visiting.",
          },
          {
            title: "Confirmation",
            description:
              "Receive confirmation with everything you need to know.",
          },
          {
            title: "Your Visit",
            description: "A calm, welcoming visit focused on your care.",
          },
          {
            title: "Follow-Up",
            description: "Clear next steps and support after your appointment.",
          },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How do I book an appointment?",
            answer:
              "A booking section could let visitors request an appointment directly online.",
          },
          {
            question: "What should I expect at my first visit?",
            answer:
              "A dedicated page could walk new patients through what to expect.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to make it easier for patients to find and trust {{companyName}}?",
        label: "Let's build your patient experience",
      },
      {
        message:
          "Here to help {{companyName}}'s patients, every step of the way.",
        label: "We're here to help",
      },
    ],
    taglineVariations: [
      "Care you can trust",
      "Compassionate care, every visit",
    ],
  },

  gym: {
    templateId: "gym",
    navLabelVariations: [
      ["Home", "Services", "Booking", "Contact"],
      ["Services", "Specialists", "About", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could showcase its services online.",
        supportingText:
          "A soft, polished layout built around your clients' experience.",
      },
      {
        headline:
          "An elevated, calming experience — designed around {{companyName}}.",
        supportingText:
          "A soft, elegant layout that reflects the care behind every treatment.",
      },
    ],
    heroIcon: Sparkles,
    heroImage: "/interactive-showcase/care1.webp",
    heroLayout: "split",
    heroImagePosition: "left",
    heroTags: ["Relaxing Atmosphere", "Premium Care", "Personalized Service"],
    sections: [
      {
        type: "categoryList",
        heading: "Services {{companyName}} could offer",
        headingVariants: [
          "Services {{companyName}} could offer",
          "Treatments & Packages",
        ],
        items: [
          "Hair & Styling",
          "Skincare & Facials",
          "Massage & Relaxation",
          "Nail Care",
        ],
      },
      {
        type: "imageBanner",
        heading: "Our Studio",
        image: "/interactive-showcase/care2.webp",
      },
      {
        type: "pricingPreview",
        heading: "Packages {{companyName}} could offer",
        tiers: [
          {
            name: "Essential",
            description: "A focused treatment for a quick refresh",
          },
          {
            name: "Signature",
            description: "A fuller experience combining multiple services",
          },
          {
            name: "Indulgent",
            description: "An extended, premium session for total relaxation",
          },
        ],
      },
      {
        type: "teamGrid",
        heading: "Our Team",
        roles: ["Stylist", "Esthetician", "Massage Therapist"],
      },
      {
        type: "testimonialGrid",
        heading: "What Clients Could Say",
        quotes: [
          "I always leave feeling completely taken care of.",
          "A relaxing, professional experience every time.",
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to give {{companyName}} the polished online presence your clients expect?",
        label: "Let's elevate your brand",
      },
      {
        message:
          "Ready to give {{companyName}}'s clients something to look forward to?",
        label: "Let's grow your client base",
      },
    ],
    taglineVariations: ["Elevated care, every time", "Where you come first"],
  },

  "real-estate": {
    templateId: "real-estate",
    navLabelVariations: [
      ["Home", "Listings", "Agents", "Contact"],
      ["Listings", "Neighborhoods", "Agents", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could showcase its listings online.",
        supportingText:
          "A polished, premium layout — the kind of foundation Weber builds for businesses like yours.",
      },
      {
        headline:
          "Showcasing {{companyName}}'s listings with the polish they deserve.",
        supportingText:
          "A premium layout built to make every property feel like the right one.",
      },
    ],
    heroIcon: Landmark,
    heroImage: "/interactive-showcase/real1.webp",
    heroLayout: "overlay",
    heroTags: ["Luxury", "Apartments", "Investment"],
    sections: [
      {
        type: "featuredGrid",
        heading: "What {{companyName}} could feature",
        headingVariants: [
          "What {{companyName}} could feature",
          "Featured Properties",
        ],
        items: [
          {
            label: "Featured Residence",
            description:
              "A standout property presented with full visual detail.",
            badge: "Featured",
            icon: Home,
          },
          {
            label: "New Development",
            description: "A newly listed property ready for the right buyer.",
            badge: "New Listing",
            icon: Building2,
          },
          {
            label: "Prime Location",
            description: "A property in a sought-after neighborhood.",
            badge: "Popular Area",
            icon: MapPin,
          },
        ],
      },
      {
        type: "categoryList",
        heading: "Property Categories",
        items: ["Residential", "Commercial", "New Developments", "Rentals"],
      },
      {
        type: "mapPreview",
        heading: "Locations",
        caption: "A map preview could help visitors browse listings by area.",
      },
      {
        type: "teamGrid",
        heading: "Our Agents",
        roles: ["Listing Agent", "Buyer's Agent", "Client Relations"],
      },
      {
        type: "processSteps",
        heading: "Buying Process",
        steps: [
          {
            title: "Search & Discover",
            description: "Browse listings that match what you're looking for.",
          },
          {
            title: "Schedule a Tour",
            description: "See a property in person with a guided walkthrough.",
          },
          {
            title: "Make an Offer",
            description:
              "Move forward with confidence once you've found the right fit.",
          },
          {
            title: "Close With Confidence",
            description: "A guided path to closing, every step of the way.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to put {{companyName}}'s listings in front of more buyers?",
        label: "Let's showcase your properties",
      },
      {
        message:
          "Ready to help buyers discover what {{companyName}} has to offer?",
        label: "Let's list your properties online",
      },
    ],
    taglineVariations: [
      "Finding the right fit",
      "Properties, presented with care",
    ],
  },

  ecommerce: {
    templateId: "ecommerce",
    navLabelVariations: [
      ["Home", "Shop", "Categories", "Contact"],
      ["Shop", "New Arrivals", "Categories", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could showcase its products online.",
        supportingText:
          "A polished, easy-to-browse layout — the kind of foundation Weber builds for businesses like yours.",
      },
      {
        headline:
          "A modern storefront, built around {{companyName}}'s products.",
        supportingText:
          "A clean, conversion-ready layout designed to make browsing feel effortless.",
      },
    ],
    heroIcon: ShoppingBag,
    heroImage: "/interactive-showcase/commer.webp",
    heroLayout: "split",
    heroImagePosition: "right",
    heroTags: ["Fast Shipping", "Secure Checkout", "Easy Returns"],
    sections: [
      {
        type: "featuredGrid",
        heading: "What {{companyName}} could feature",
        headingVariants: [
          "What {{companyName}} could feature",
          "Featured Products",
        ],
        items: [
          {
            label: "Top-Rated Product",
            description: "A standout item your customers keep coming back for.",
            badge: "Best Seller",
            icon: Package,
          },
          {
            label: "New This Season",
            description: "A fresh addition to your latest collection.",
            badge: "New Arrival",
            icon: ShoppingBag,
          },
          {
            label: "Customer Favorite",
            description: "A product that keeps earning repeat purchases.",
            badge: "Trending",
            icon: Gift,
          },
        ],
      },
      {
        type: "categoryList",
        heading: "Categories",
        items: ["New Arrivals", "Best Sellers", "Gift Ideas", "Sale"],
      },
      {
        type: "featureHighlights",
        heading: "Why Shop With Us",
        items: [
          { label: "A smooth, secure checkout experience", icon: ShieldCheck },
          { label: "Clear product information", icon: Layers },
          { label: "Support when you need it", icon: MessageCircle },
        ],
      },
      {
        type: "testimonialGrid",
        heading: "What Customers Could Say",
        quotes: [
          "Ordering was quick and the whole process felt easy.",
          "Exactly what I expected, delivered smoothly.",
        ],
      },
      {
        type: "conceptual",
        heading: "Stay Updated",
        body: "A newsletter section could keep customers informed about new arrivals and updates.",
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to bring {{companyName}}'s products to a wider audience?",
        label: "Let's grow your online store",
      },
      {
        message: "Ready to launch {{companyName}} online?",
        label: "Let's launch your online store",
      },
    ],
    taglineVariations: ["Shop with confidence", "Quality, delivered"],
  },

  "retail-boutique": {
    templateId: "retail-boutique",
    navLabelVariations: [
      ["Home", "Shop", "Collections", "Contact"],
      ["Shop", "New In", "Collections", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could showcase its products online.",
        supportingText:
          "A fresh, colorful layout designed to make browsing feel effortless.",
      },
      {
        headline: "A vibrant online home for {{companyName}}.",
        supportingText:
          "A fresh, curated layout that reflects your store's own sense of style.",
      },
    ],
    heroIcon: Tag,
    heroImage: "/interactive-showcase/cloth.webp",
    heroLayout: "overlay",
    heroTags: ["New Arrivals", "Curated Picks", "Member Favorites"],
    sections: [
      {
        type: "featuredGrid",
        heading: "What {{companyName}} could feature",
        headingVariants: [
          "What {{companyName}} could feature",
          "Curated For You",
        ],
        items: [
          {
            label: "Curated Pick",
            description:
              "A hand-selected piece that reflects your store's style.",
            badge: "Editor's Choice",
            icon: ShoppingBag,
          },
          {
            label: "Limited Release",
            description: "A limited-run item available while supplies last.",
            badge: "Limited",
            icon: Package,
          },
          {
            label: "Customer Favorite",
            description: "A piece shoppers keep coming back for.",
            badge: "Trending",
            icon: Gift,
          },
        ],
      },
      {
        type: "categoryList",
        heading: "Collections",
        items: [
          "New In",
          "Seasonal Picks",
          "Everyday Essentials",
          "Limited Editions",
        ],
      },
      {
        type: "valueProps",
        heading: "Why Shop With Us",
        items: [
          "A fresh, easy-to-browse selection",
          "A checkout experience that stays simple",
          "Friendly support whenever you need it",
        ],
      },
      {
        type: "galleryGrid",
        heading: "Shop Gallery",
        tiles: [
          {
            label: "Storefront",
            icon: Camera,
            image: "/interactive-showcase/cloth2.webp",
          },
          {
            label: "Display",
            icon: Camera,
            image: "/interactive-showcase/cloth3.webp",
          },
          {
            label: "Detail",
            icon: Camera,
            image: "/interactive-showcase/cloth4.webp",
          },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you offer in-store pickup?",
            answer: "A pickup option could be shown clearly at checkout.",
          },
          {
            question: "What is your return policy?",
            answer:
              "A dedicated page could explain returns clearly to every shopper.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to give shoppers a reason to browse {{companyName}} online?",
        label: "Let's showcase your products",
      },
      {
        message: "Ready to grow {{companyName}}'s following online?",
        label: "Let's grow your boutique",
      },
    ],
    taglineVariations: ["Curated for you", "Style, delivered"],
  },

  "home-trade-craft": {
    templateId: "home-trade-craft",
    navLabelVariations: [
      ["Home", "Services", "Gallery", "Contact"],
      ["Services", "Our Work", "Reviews", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could present its work online.",
        supportingText:
          "A grounded, trustworthy layout built around the work you do.",
      },
      {
        headline:
          "Reliable work, presented the way {{companyName}} delivers it.",
        supportingText:
          "A grounded layout built to earn trust before the first call.",
      },
    ],
    heroIcon: Hammer,
    heroImage: "/interactive-showcase/home1.webp",
    heroLayout: "overlay",
    heroTags: ["Licensed", "Emergency Service", "Free Estimates"],
    sections: [
      {
        type: "featureHighlights",
        heading: "Services {{companyName}} could offer",
        headingVariants: ["Services {{companyName}} could offer", "What We Do"],
        items: [
          { label: "Repairs & Maintenance", icon: Wrench },
          { label: "Installations", icon: Plug },
          { label: "Renovations", icon: PaintBucket },
        ],
      },
      {
        type: "imageBanner",
        heading: "Our Work",
        image: "/interactive-showcase/home2.webp",
        imagePosition: "left",
      },
      {
        type: "conceptual",
        heading: "Emergency Callout",
        body: "An emergency contact section could give customers a fast way to reach you when it matters most.",
      },
      {
        type: "processSteps",
        heading: "Service Process",
        steps: [
          {
            title: "Reach Out",
            description: "Tell us about the work you need done.",
          },
          {
            title: "On-Site Assessment",
            description: "A closer look to scope the job accurately.",
          },
          {
            title: "Clear Quote",
            description: "A straightforward quote before any work begins.",
          },
          {
            title: "Job Completed",
            description: "Quality work delivered on schedule.",
          },
        ],
      },
      {
        type: "testimonialGrid",
        heading: "What Customers Could Say",
        quotes: [
          "Showed up on time and did the job right.",
          "Clear pricing and honest communication throughout.",
        ],
      },
    ],
    ctaVariations: [
      {
        message: "Ready to show off the work {{companyName}} does best?",
        label: "Let's grow your business",
      },
      {
        message: "Ready to put {{companyName}}'s work on display?",
        label: "Let's showcase your craftsmanship",
      },
    ],
    taglineVariations: ["Quality work, done right", "Reliable, every time"],
  },

  "education-academy": {
    templateId: "education-academy",
    navLabelVariations: [
      ["Home", "Courses", "Instructors", "Contact"],
      ["Programs", "Faculty", "Admissions", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could present its programs online.",
        supportingText:
          "A clean, structured layout built around the learning experience.",
      },
      {
        headline:
          "A learning experience, built around {{companyName}}'s programs.",
        supportingText:
          "A structured, approachable layout designed to guide every student forward.",
      },
    ],
    heroIcon: GraduationCap,
    heroImage: "/interactive-showcase/learn1.webp",
    heroLayout: "editorial",
    heroTags: ["Accredited", "Flexible Learning", "Expert Instructors"],
    sections: [
      {
        type: "categoryList",
        heading: "Courses {{companyName}} could offer",
        headingVariants: ["Courses {{companyName}} could offer", "Programs"],
        items: ["Beginner", "Intermediate", "Advanced", "Certification Track"],
      },
      {
        type: "imageBanner",
        heading: "Our Learning Environment",
        image: "/interactive-showcase/learn2.webp",
        imagePosition: "right",
      },
      {
        type: "teamGrid",
        heading: "Our Instructors",
        roles: ["Lead Instructor", "Program Coordinator", "Student Support"],
      },
      {
        type: "testimonialGrid",
        heading: "What Students Could Say",
        quotes: [
          "Structured lessons that were easy to follow.",
          "Support whenever I had a question.",
          "I felt genuinely prepared by the end of the program.",
        ],
      },
      {
        type: "processSteps",
        heading: "Learning Journey",
        steps: [
          {
            title: "Enroll",
            description: "Choose the program that fits your goals.",
          },
          {
            title: "Learn",
            description: "Work through structured lessons at your own pace.",
          },
          {
            title: "Practice",
            description: "Apply what you've learned through hands-on work.",
          },
          {
            title: "Get Certified",
            description:
              "Complete the program with a recognized certification.",
          },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How do I enroll in a course?",
            answer:
              "An enrollment section could let visitors sign up directly online.",
          },
          {
            question: "Are courses self-paced?",
            answer:
              "A dedicated page could explain each program's format and schedule.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message: "Ready to help more students discover {{companyName}}?",
        label: "Let's build your learning platform",
      },
      {
        message: "Ready to bring {{companyName}}'s courses online?",
        label: "Let's launch your learning journey",
      },
    ],
    taglineVariations: ["Learning for tomorrow", "Structured for success"],
  },

  "hospitality-venue": {
    templateId: "hospitality-venue",
    navLabelVariations: [
      ["Home", "Venues", "Packages", "Contact"],
      ["Venues", "Experiences", "Packages", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could showcase its spaces online.",
        supportingText:
          "A warm, elevated layout built around memorable events.",
      },
      {
        headline:
          "Memorable events, presented the way {{companyName}} creates them.",
        supportingText:
          "An elevated layout designed to make every space feel unforgettable.",
      },
    ],
    heroIcon: PartyPopper,
    heroImage: "/interactive-showcase/event1.webp",
    heroLayout: "overlay",
    heroTags: ["Custom Packages", "All-Inclusive", "Unforgettable Moments"],
    sections: [
      {
        type: "galleryGrid",
        heading: "Venue Gallery",
        tiles: [
          { label: "Main Hall", icon: Camera },
          { label: "Outdoor Space", icon: Camera },
          { label: "Private Room", icon: Camera },
        ],
      },
      {
        type: "featuredGrid",
        heading: "Packages {{companyName}} could offer",
        headingVariants: [
          "Packages {{companyName}} could offer",
          "Event Packages",
        ],
        items: [
          {
            label: "Signature Celebration",
            description: "A fully coordinated package for milestone events.",
            badge: "Most Popular",
            icon: PartyPopper,
          },
          {
            label: "Intimate Gathering",
            description: "A tailored setup for smaller, closer occasions.",
            badge: "Popular",
            icon: Users,
          },
          {
            label: "Full-Day Experience",
            description: "An all-inclusive package covering the full event.",
            badge: "All-Inclusive",
            icon: Calendar,
          },
        ],
      },
      {
        type: "conceptual",
        heading: "Reservations",
        body: "A reservation section could let visitors check availability and request a date.",
      },
      {
        type: "testimonialGrid",
        heading: "What Guests Could Say",
        quotes: [
          "Every detail was handled with care.",
          "An unforgettable space for an unforgettable day.",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How far in advance should I book?",
            answer:
              "A dedicated page could explain availability and booking timelines.",
          },
          {
            question: "Can packages be customized?",
            answer:
              "A consultation section could let guests discuss custom options directly.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to help {{companyName}} book more unforgettable events?",
        label: "Let's create your guest experience",
      },
      {
        message: "Ready to put {{companyName}}'s venue in the spotlight?",
        label: "Let's showcase your venue",
      },
    ],
    taglineVariations: ["Moments worth remembering", "Where memories are made"],
  },

  "technology-saas": {
    templateId: "technology-saas",
    navLabelVariations: [
      ["Home", "Features", "Pricing", "Contact"],
      ["Solutions", "Products", "Pricing", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could present its product online.",
        supportingText:
          "A clean, modern layout designed to highlight what makes your product valuable.",
      },
      {
        headline:
          "A modern digital product, presented the way {{companyName}} builds it.",
        supportingText:
          "A minimal, confident layout designed to highlight what makes your platform scale.",
      },
    ],
    heroIcon: Rocket,
    logoIcon: Hexagon,
    heroImage: "/interactive-showcase/tech.webp",
    heroLayout: "split",
    heroImagePosition: "right",
    heroTags: ["AI", "Cloud", "Automation"],
    sections: [
      {
        type: "featureHighlights",
        heading: "Features {{companyName}} could highlight",
        headingVariants: [
          "Features {{companyName}} could highlight",
          "What We Build",
          "Our Platform",
        ],
        items: [
          { label: "Fast, reliable performance", icon: Zap },
          { label: "Built to scale with your team", icon: Layers },
          { label: "Secure by design", icon: Shield },
        ],
      },
      {
        type: "pricingPreview",
        heading: "Plans {{companyName}} could offer",
        tiers: [
          { name: "Starter", description: "For individuals getting started" },
          { name: "Growth", description: "For growing teams that need more" },
          {
            name: "Enterprise",
            description: "For organizations with advanced needs",
          },
        ],
      },
      {
        type: "categoryList",
        heading: "Popular Integration Categories",
        items: ["Team Collaboration", "Payments", "Analytics", "Automation"],
      },
      {
        type: "statHighlights",
        heading: "System Metrics {{companyName}} could showcase",
        items: [
          { metric: "Uptime", label: "Reliable performance you can count on" },
          {
            metric: "Response Time",
            label: "Fast, responsive interactions at scale",
          },
          {
            metric: "Data Security",
            label: "Built with security best practices in mind",
          },
          {
            metric: "Scalability",
            label: "Grows with your team and your workload",
          },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Is there a free trial?",
            answer:
              "A trial or demo section could let visitors experience the product firsthand.",
          },
          {
            question: "Can I change plans later?",
            answer:
              "A pricing page could make upgrading or downgrading simple and clear.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message: "Ready to show {{companyName}}'s product at its best?",
        label: "Let's discuss your product",
      },
      {
        message: "Ready to build what's next for {{companyName}}?",
        label: "Let's build your next product",
      },
    ],
    taglineVariations: ["Building digital experiences", "Built to scale"],
  },

  "automotive-showcase": {
    templateId: "automotive-showcase",
    navLabelVariations: [
      ["Home", "Inventory", "Services", "Contact"],
      ["Inventory", "Services", "Financing", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could showcase its vehicles online.",
        supportingText:
          "A bold, polished layout — the kind of foundation Weber builds for businesses like yours.",
      },
      {
        headline: "A bold showcase, built around {{companyName}}'s vehicles.",
        supportingText:
          "A confident layout designed to put every vehicle in its best light.",
      },
    ],
    heroIcon: Car,
    heroImage: "/interactive-showcase/auto.webp",
    heroLayout: "overlay",
    heroTags: ["Certified Technicians", "Quality Parts", "Fast Service"],
    sections: [
      {
        type: "galleryGrid",
        heading: "Vehicle Showcase",
        headingVariants: ["Vehicle Showcase", "Featured Vehicles"],
        tiles: [
          { label: "Featured Vehicle 1", icon: Car },
          { label: "Featured Vehicle 2", icon: Gauge },
          { label: "Featured Vehicle 3", icon: Fuel },
        ],
      },
      {
        type: "featureHighlights",
        heading: "Services {{companyName}} could offer",
        items: [
          { label: "Maintenance & Repairs", icon: Settings },
          { label: "Inspections", icon: ShieldCheck },
          { label: "Trade-In Support", icon: Truck },
        ],
      },
      {
        type: "processSteps",
        heading: "Service Process",
        steps: [
          {
            title: "Book a Service",
            description: "Schedule a visit at a time that works for you.",
          },
          {
            title: "Vehicle Diagnostics",
            description:
              "A thorough check to identify what your vehicle needs.",
          },
          {
            title: "Repair & Maintenance",
            description: "Quality work completed by experienced technicians.",
          },
          {
            title: "Ready for Pickup",
            description:
              "Your vehicle, ready to go, with a clear summary of the work done.",
          },
        ],
      },
      {
        type: "valueProps",
        heading: "Current Offers",
        items: [
          "Seasonal service offers, clearly presented",
          "Transparent pricing on every service",
          "Easy scheduling for busy customers",
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you offer financing?",
            answer:
              "A financing overview section could explain available options clearly.",
          },
          {
            question: "Can I schedule service online?",
            answer:
              "A booking section could let customers pick a convenient time directly.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message:
          "Ready to put {{companyName}}'s inventory in front of more drivers?",
        label: "Let's modernize your business",
      },
      {
        message: "Ready to put {{companyName}}'s inventory on display?",
        label: "Let's showcase your inventory",
      },
    ],
    taglineVariations: [
      "Built for the road ahead",
      "Performance you can trust",
    ],
  },

  "nonprofit-mission": {
    templateId: "nonprofit-mission",
    navLabelVariations: [
      ["Home", "Our Mission", "Get Involved", "Contact"],
      ["Mission", "Programs", "Volunteer", "Contact"],
    ],
    heroVariations: [
      {
        headline:
          "A concept for how {{companyName}} could share its mission online.",
        supportingText:
          "An approachable, sincere layout built around the impact you make.",
      },
      {
        headline:
          "A mission worth sharing, presented the way {{companyName}} lives it.",
        supportingText:
          "A sincere, human-focused layout built to invite people into your cause.",
      },
    ],
    heroIcon: HeartHandshake,
    heroImage: "/interactive-showcase/nonp.webp",
    heroLayout: "split",
    heroImagePosition: "left",
    heroTags: ["Community-Driven", "Transparent Impact", "Volunteer-Powered"],
    sections: [
      {
        type: "conceptual",
        heading: "Our Mission",
        headingVariants: ["Our Mission", "Mission Areas"],
        body: "A mission section could introduce your cause and why it matters, in your own words.",
      },
      {
        type: "statHighlights",
        heading: "Community Impact",
        items: [
          {
            metric: "Programs Supported",
            label: "Ongoing initiatives making a difference",
          },
          {
            metric: "Volunteers Engaged",
            label: "A community of people giving their time",
          },
          {
            metric: "Communities Reached",
            label: "Areas where your mission makes an impact",
          },
          {
            metric: "Transparency",
            label: "A clear, honest picture of how support is used",
          },
        ],
      },
      {
        type: "conceptual",
        heading: "Donations",
        body: "A donation section could give supporters a simple, secure way to contribute.",
      },
      {
        type: "featureHighlights",
        heading: "Get Involved",
        items: [
          { label: "Volunteer opportunities", icon: HandHeart },
          { label: "Community events", icon: Users },
          { label: "Ways to support the mission", icon: Heart },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How is my donation used?",
            answer:
              "A transparency section could explain how contributions support the mission.",
          },
          {
            question: "How can I volunteer?",
            answer:
              "A volunteer sign-up section could make getting involved simple.",
          },
        ],
      },
    ],
    ctaVariations: [
      {
        message: "Ready to help {{companyName}}'s mission reach more people?",
        label: "Let's amplify your mission",
      },
      {
        message: "Ready to grow the impact {{companyName}} makes?",
        label: "Let's grow your impact",
      },
    ],
    taglineVariations: [
      "Making a difference, together",
      "Impact, driven by community",
    ],
  },
};
