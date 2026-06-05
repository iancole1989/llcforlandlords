import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://llcforlandlords.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      // No fabricated changefreq/lastmod: Google ignores changefreq and
      // discounts a uniform build-time lastmod. @astrojs/sitemap can't read
      // per-article frontmatter dates, so we omit lastmod rather than stamp
      // every URL with the same timestamp. (Per-article <lastmod> would need
      // a custom sitemap endpoint — tracked as a follow-up.)
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
