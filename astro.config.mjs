import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://llcforlandlords.com",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
