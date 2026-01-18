import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // ProductFlow Studio Design System
        "pf-dark": "#070D03",
        "pf-dark-secondary": "#1F251C",
        "pf-green": "#0AFF56",
        "pf-green-light": "#53FF88",
        "pf-green-dark": "#046622",
        "pf-green-darker": "#034C19",
        "pf-gray": "#F2F2F2",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
        heading: ["Montserrat", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
      },
      fontSize: {
        "display": ["84px", { lineHeight: "110%", letterSpacing: "-0.84px", fontWeight: "500" }],
        "h1": ["60px", { lineHeight: "120%", letterSpacing: "-0.6px", fontWeight: "500" }],
        "h2": ["40px", { lineHeight: "130%", letterSpacing: "-0.4px", fontWeight: "500" }],
        "h3": ["26px", { lineHeight: "140%", letterSpacing: "-0.26px", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "150%", fontWeight: "400" }],
        "body": ["18px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "tiny": ["12px", { lineHeight: "150%", fontWeight: "400" }],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        "container": "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
