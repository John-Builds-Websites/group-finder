import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/cms/**/*.{ts,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|red|yellow|pink|indigo|purple|gray|orange|teal|cyan|sky|violet|fuchsia|rose)-(100|200|300|400|500|600|700|800|900|950)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
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
      fontFamily: {
        sans: ['var(--font-comfortaa)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        'purple-heart': {
          '50': '#edefff',
          '100': '#dee1ff',
          '200': '#c4c8ff',
          '300': '#a0a4ff',
          '400': '#817bfe',
          '500': '#6d5bf9',
          '600': '#613eed',
          '700': '#4e2cc9',
          '800': '#442aa9',
          '900': '#3a2a85',
          '950': '#24184e',
        },


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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "blob": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "25%": { transform: "translate(10%, -5%) scale(1.1)" },
          "50%": { transform: "translate(5%, 10%) scale(0.9)" },
          "75%": { transform: "translate(-10%, 5%) scale(1.1)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob": "blob 10s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config