This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


2. Balaji 
# Zentrix – Next.js Web Application

This repository contains a fresh **Next.js (React) application**.  
The project was reinitialized to move from a basic React setup to a modern, scalable Next.js architecture.

---

## 🚀 Tech Stack

- **Framework:** Next.js (React)
- **Language:** JavaScript / TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **Version Control:** Git & GitHub

---

## 🧹 Repository Reset & Fresh Start

The repository was cleaned to remove previous code from `main` and `dev` branches, and a fresh Next.js app was initialized.

### Steps followed:

1. Removed all existing files except `.git`
2. Initialized a new Next.js app in the same repository
3. Committed the fresh setup to the main branch
4. Recreated the development branch for parallel work

---

## 🛠️ Project Setup Steps

### 1️⃣ Clone the repository
```bash
git clone <repo-url>
cd zentrix




-- Folder structure

src/
├── app/                              # Next.js App Router (routing + layouts)
│   ├── layout.tsx                    # Root layout → renders Header + Footer
│   ├── page.tsx                      # Home page (/)
│   ├── globals.css                   # Global styles (Tailwind, fonts, reset)
│
│   ├── about-us/
│   │   └── page.tsx                  # /about-us page
│
│   ├── contact/
│   │   └── page.tsx                  # /contact page
│
│   ├── pricing/
│   │   └── page.tsx                  # /pricing page
│
│   ├── catalog/
│   │   └── page.tsx                  # /catalog page
│
│   ├── services/                     # Services section
│   │   ├── layout.tsx                # Services layout (banner, CTA)
│   │   ├── page.tsx                  # /services overview
│   │
│   │   ├── seo/
│   │   │   └── page.tsx              # /services/seo
│   │
│   │   ├── digital-marketing/
│   │   │   └── page.tsx              # /services/digital-marketing
│   │
│   │   ├── lead-generation/
│   │   │   └── page.tsx              # /services/lead-generation
│   │
│   │   ├── websites-development/
│   │   │   └── page.tsx              # /services/websites-development
│   │
│   │   ├── logo-design/
│   │   │   └── page.tsx              # /services/logo-design
│   │
│   │   ├── business-website-development/
│   │   │   └── page.tsx              # /services/business-website-development
│   │
│   │   ├── seo/
│   │   │   └── page.tsx              # /services/seo
│   │
│   │   ├── ai-seo/
│   │   │   └── page.tsx              # /services/ai-seo
│   │
│   │   ├── local-seo/
│   │   │   └── page.tsx              # /services/local-seo
│   │
│   │   ├── ads/
│   │   │   ├── page.tsx              # /services/ads
│   │   │   ├── google-ads/
│   │   │   │   └── page.tsx          # /services/ads/google-ads
│   │   │   └── meta-ads/
│   │   │       └── page.tsx          # /services/ads/meta-ads
│   │
│   │   ├── app-development/
│   │   │   └── page.tsx              # /services/app-development
│   │
│   │   ├── web-portals/
│   │   │   └── page.tsx              # /services/web-portals
│   │
│   │   ├── custom-websites/
│   │   │   └── page.tsx              # /services/custom-websites
│   │
│   │   ├── ui-ux-design/
│   │   │   └── page.tsx              # /services/ui-ux-design
│   │
│   │   └── erp-solutions/
│   │       └── page.tsx              # /services/erp-solutions
│
│   ├── marketing/                    # Marketing section
│   │   ├── layout.tsx                # Marketing layout (hero, lead form)
│   │   ├── page.tsx                  # /marketing overview
│   │
│   │   ├── seo/
│   │   │   └── page.tsx              # /marketing/seo
│   │
│   │   ├── digital-marketing/
│   │   │   └── page.tsx              # /marketing/digital-marketing
│   │
│   │   ├── lead-generation/
│   │   │   └── page.tsx              # /marketing/lead-generation
│   │
│   │   ├── websites-development/
│   │   │   └── page.tsx              # /marketing/websites-development
│   │
│   │   ├── logo-design/
│   │   │   └── page.tsx              # /marketing/logo-design
│   │
│   │   └── ads/
│   │       ├── google-ads/
│   │       │   └── page.tsx          # /marketing/ads/google-ads
│   │       └── meta-ads/
│   │           └── page.tsx          # /marketing/ads/meta-ads
│
├── components/                       # Reusable UI components
│   ├── navbar/
│   │   ├── Header.tsx                # HEADER / NAVBAR component
│   │   ├── ServicesMegaMenu.tsx      # Services dropdown
│   │   ├── MarketingMegaMenu.tsx     # Marketing dropdown
│   │   └── NavItem.tsx               # Single nav link
│
│   ├── footer/
│   │   └── Footer.tsx                # Footer component
│
│   └── shared/
│       ├── PageHero.tsx              # Hero/banner component
│       ├── CTA.tsx                   # Call-to-action section
│       └── Section.tsx               # Generic layout wrapper
│
├── data/                             # Menu + page content config
│   ├── services.ts                   # Services menu & content data
│   └── marketing.ts                  # Marketing menu & content data
│
├── lib/                              # Utility & helper logic
│   ├── seo.ts                        # SEO helpers
│   └── utils.ts                     # Generic utility functions
│
└── public/                           # Static assets
    └── images/                       # Logos, banners, icons
