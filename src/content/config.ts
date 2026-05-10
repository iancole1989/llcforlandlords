import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().min(120).max(170),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    intent: z.enum(["informational", "commercial-investigation", "transactional"]),
    publishedAt: z.coerce.date(),
    updated: z.coerce.date(),
    author: z.string().default("The LLCforLandlords team"),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    schemaType: z.enum(["Article", "HowTo", "Review", "FAQPage"]).default("Article"),
    wordCount: z.number().optional(),
    isPillar: z.boolean().default(false),
    isComparison: z.boolean().default(false),
    hasLeadMagnet: z.boolean().default(false),
    affiliateOffers: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
