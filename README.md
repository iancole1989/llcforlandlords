# LLCforLandlords.com

Plain-English LLC guidance for landlords and rental-property investors. Leadility-owned affiliate property targeting US real estate investors looking to form LLCs.

## Stack

- **Astro v5** — static-first SEO content site
- **Tailwind CSS** — styling, configured to brand palette
- **MDX** — article authoring format
- **Cloudflare Pages** — hosting (production)

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serves dist/
```

## Authoring articles

Articles live in `src/content/articles/` as `.mdx` files. The frontmatter schema is enforced via Zod in `src/content/config.ts`. Required fields:

```yaml
---
title: "LLC for Rental Property: Complete Guide"
slug: "llc-for-rental-property"
description: "150-160 char SEO meta description."
primaryKeyword: "llc for rental property"
secondaryKeywords:
  - "llc for landlords"
intent: "informational"
publishedAt: 2026-05-15
updated: 2026-05-15
schemaType: "Article"
isPillar: true
isComparison: false
hasLeadMagnet: false
affiliateOffers: []
---
```

URL pattern: `/llc-guide/{slug}`.

## Components available in MDX

Import at the top of an article:

```mdx
import KeyTakeaways from "@/components/KeyTakeaways.astro";
import ProsCons from "@/components/ProsCons.astro";
import ComparisonTable from "@/components/ComparisonTable.astro";
import CTAButton from "@/components/CTAButton.astro";
import CloseIronHandoff from "@/components/CloseIronHandoff.astro";
import LeadMagnetForm from "@/components/LeadMagnetForm.astro";
import FAQ from "@/components/FAQ.astro";
import AffiliateDisclosure from "@/components/AffiliateDisclosure.astro";
```

## Deploy (Cloudflare Pages)

1. Connect repo `iancole1989/llcforlandlords` to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist/`
4. Root directory: `/`
5. Environment: `NODE_VERSION=20`
6. Custom domain: `llcforlandlords.com` + Cloudflare DNS.

## Brand reference

Visual identity, voice doc, component spec: `~/leadility/clients/affiliate-portfolio/llcforlandlords-brand.md`
Article briefs: `~/leadility/clients/affiliate-portfolio/article-briefs/`
