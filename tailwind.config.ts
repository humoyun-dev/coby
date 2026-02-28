import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coby: {
          primary: "rgb(var(--coby-primary) / <alpha-value>)",
          accent: "rgb(var(--coby-accent) / <alpha-value>)",
          dark: "rgb(var(--coby-dark) / <alpha-value>)",
          darkSecondary: "rgb(var(--coby-dark-secondary) / <alpha-value>)",
          light: "rgb(var(--coby-light) / <alpha-value>)",
          surface: "rgb(var(--coby-surface) / <alpha-value>)",
          surfaceMuted: "rgb(var(--coby-surface-muted) / <alpha-value>)",
          border: "rgb(var(--coby-border) / <alpha-value>)",
          text: "rgb(var(--coby-text) / <alpha-value>)",
          muted: "rgb(var(--coby-muted) / <alpha-value>)",
          heroText: "rgb(var(--hero-text) / <alpha-value>)",
          heroMuted: "rgb(var(--hero-muted) / <alpha-value>)",
          heroCard: "rgb(var(--hero-card) / <alpha-value>)"
        }
      },
      boxShadow: {
        panel: "0 16px 40px rgba(8, 11, 17, 0.18), 0 2px 10px rgba(37, 99, 235, 0.08)",
        soft: "0 10px 24px rgba(8, 11, 17, 0.14), 0 1px 6px rgba(37, 99, 235, 0.06)",
        hero: "0 30px 75px rgba(5, 10, 18, 0.38), 0 0 0 1px rgba(96, 165, 250, 0.08)"
      },
      backgroundImage: {
        heroInstitutional: "var(--hero-bg)"
      }
    }
  },
  plugins: []
};

export default config;
