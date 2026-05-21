export const SITE = {
  name: "LLCforLandlords",
  domain: "llcforlandlords.com",
  url: "https://llcforlandlords.com",
  tagline: "Plain-English LLC guidance, written for landlords.",
  description:
    "Plain-English LLC guidance for landlords and rental property investors. Real filing fees, real timelines, real tradeoffs — no fluff.",
  author: "The LLCforLandlords team",
  logoUrl: "/logo.svg",
  ogImage: "/og-default.svg",
  twitterHandle: "@LLCforLandlords",
  gaMeasurementId: "G-K1NM2F31HQ",
  founded: "2026",
  // Social profile URLs. Empty strings are ignored by schema sameAs.
  // Fill these in as the accounts are created — they immediately feed
  // the Organization entity's sameAs array for Google + AI search engines.
  socials: {
    facebook: "https://www.facebook.com/llcforlandlords/",
    instagram: "https://www.instagram.com/llcforlandlords/",
    youtube: "",
    linkedin: "",
    twitter: "",
  },
} as const;

export const ENTITY_IDS = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
} as const;

export const NAV = [
  { label: "LLC Guides", href: "/llc-guide/" },
  { label: "Editorial Standards", href: "/editorial-standards/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;
