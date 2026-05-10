/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          deep: "#1F2937",
          charcoal: "#374151",
        },
        rust: {
          DEFAULT: "#D97706",
          hover: "#B45309",
        },
        gold: {
          muted: "#B45309",
        },
        canvas: {
          white: "#FFFFFF",
          subtle: "#F9FAFB",
          card: "#F3F4F6",
        },
        line: "#E5E7EB",
        success: "#15803D",
        caution: "#6B7280",
      },
      fontFamily: {
        sans: ["'Inter Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Manrope Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        num: ["'Inter Tight Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        article: "740px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#374151",
            maxWidth: "100%",
            h1: { color: "#1F2937", fontFamily: "'Manrope Variable', ui-sans-serif, sans-serif" },
            h2: { color: "#1F2937", fontFamily: "'Manrope Variable', ui-sans-serif, sans-serif" },
            h3: { color: "#1F2937", fontFamily: "'Manrope Variable', ui-sans-serif, sans-serif" },
            h4: { color: "#1F2937", fontFamily: "'Manrope Variable', ui-sans-serif, sans-serif" },
            a: {
              color: "#D97706",
              textDecoration: "underline",
              fontWeight: 500,
              "&:hover": { color: "#B45309" },
            },
            strong: { color: "#1F2937" },
            code: {
              color: "#1F2937",
              backgroundColor: "#F3F4F6",
              padding: "0.125rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
