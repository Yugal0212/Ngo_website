# GauSeva Compassion Website — Next.js + TypeScript

A production-ready Next.js application built with TypeScript, Tailwind CSS, and Framer Motion, migrated from the original Magic Pattern design.

## Features & Architecture

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **Animations**: Framer Motion with reduced motion support
- **State & Navigation**: Next.js App Router with client-side transitions and smooth anchor scrolling
- **Type Safety**: Strictly typed interfaces for all components, routes, and data models

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Global layout with fonts and metadata
│   │   ├── globals.css               # Global CSS, @theme tokens and animations
│   │   ├── page.tsx                  # Home page (/)
│   │   ├── about/page.tsx            # About page (/about)
│   │   ├── what-we-do/page.tsx       # What We Do page (/what-we-do)
│   │   ├── donate/
│   │   │   ├── page.tsx              # Donation flow (/donate)
│   │   │   └── thank-you/page.tsx    # Confirmation & receipt (/donate/thank-you)
│   │   ├── gallery/page.tsx          # Photo gallery with category filters (/gallery)
│   │   ├── blog/
│   │   │   ├── page.tsx              # Journal listing with search (/blog)
│   │   │   └── [slug]/page.tsx       # Dynamic blog post (/blog/[slug])
│   │   ├── contact/page.tsx          # Contact form with anti-spam honeypot (/contact)
│   │   ├── volunteer/page.tsx        # Volunteer signup & FAQ (/volunteer)
│   │   ├── privacy-policy/page.tsx   # Privacy policy (/privacy-policy)
│   │   ├── terms/page.tsx            # Terms of service (/terms)
│   │   ├── donation-policy/page.tsx  # Donation & transparency policy (/donation-policy)
│   │   └── not-found.tsx             # Branded 404 page
│   ├── components/
│   │   ├── common/                   # Reusable UI components (Button, Navbar, Footer, PageShell, etc.)
│   │   ├── home/                     # Home sections (Hero, Missions, OurStory, QuickDonate, etc.)
│   │   ├── donate/                   # Donation forms & thank you view
│   │   ├── gallery/                  # Gallery viewer with lightbox & share modal
│   │   ├── blog/                     # Blog listing and post view
│   │   ├── contact/                  # Contact form
│   │   ├── volunteer/                # Volunteer registration form
│   │   └── policies/                 # Policy content tabs
│   ├── config/
│   │   └── site.ts                   # Site constants (BRAND, NAV, STATS, plans, contact)
│   ├── lib/
│   │   ├── data.ts                   # Articles, stories, and testimonials
│   │   ├── images.ts                 # Image CDN configurations
│   │   ├── motion.ts                 # Animation easing and variants
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── index.ts                  # Shared TypeScript type definitions
├── next.config.ts                    # Next.js config with redirects & image domains
├── postcss.config.mjs                # PostCSS config for Tailwind v4
└── tsconfig.json                     # Strict TypeScript compiler options
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## Routes & Pages

- `/` — Home (Hero, sanctuary overview, heartfelt mission, story timeline, quick donate)
- `/about` — About Us (founder story, problem & answer, team, journey)
- `/what-we-do` — Our Work (Gau Seva, Shiksha, fund distribution, roadmap)
- `/donate` — Interactive Donation Flow (cause selection, custom/preset amounts, frequency, UPI/card payment)
- `/donate/thank-you` — Donation Acknowledgement & Receipt
- `/gallery` — Photo Gallery with category filters, modal lightbox, and share modal
- `/blog` — Journal articles with search and category filters
- `/blog/[slug]` — Individual full-length story pages
- `/contact` — Contact details, visiting hours, and message form
- `/volunteer` — Volunteer opportunities, registration, and FAQs
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms of Service
- `/donation-policy` — Transparency & Donation Policy
