import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        // PMT brand — purple system (Phase 2)
        "pmt-purple": {
          900: "#2E1F52",
          800: "#382564",
          700: "#432D72",
          600: "#553A8E",
          500: "#6347A0",
          400: "#8268B8",
        },
        "pmt-gold": {
          DEFAULT: "#C9972B",
          soft: "#D9AC4E",
          deep: "#A87C1F",
        },
        "pmt-ink": {
          DEFAULT: "#1A1726",
          soft: "#3D3654",
        },
        "pmt-cream": {
          DEFAULT: "#FAF7F2",
          2: "#F2EDE3",
        },
        "pmt-maroon": "#6B1F2A",
        chart: {
          "1": "#2E1F52",
          "2": "#C9972B",
          "3": "#6B1F2A",
          "4": "#432D72",
          "5": "#5C566B",
        },
        sidebar: {
          DEFAULT: "var(--color-sidebar)",
          foreground: "var(--color-sidebar-foreground)",
          primary: "var(--color-sidebar-primary)",
          "primary-foreground": "var(--color-sidebar-primary-foreground)",
          accent: "var(--color-sidebar-accent)",
          "accent-foreground": "var(--color-sidebar-accent-foreground)",
          border: "var(--color-sidebar-border)",
          ring: "var(--color-sidebar-ring)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      maxWidth: {
        "8xl": "88rem",
        prose: "68ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "pulse-draw": {
          to: { strokeDashoffset: "0" },
        },
        "pulse-blip": {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-draw": "pulse-draw 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-blip": "pulse-blip 0.4s ease-out 2.6s forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
