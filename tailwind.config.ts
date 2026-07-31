import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C1B13",
        forest: {
          DEFAULT: "#14402C",
          deep: "#0E2A1D",
          900: "#0A1B12",
        },
        moss: "#2F6B4F",
        sage: "#C9D8C6",
        paper: {
          DEFAULT: "#F0F1EB",
          2: "#E6E9DF",
        },
        bone: "#F8F8F3",
        gold: {
          DEFAULT: "#CF9A2B",
          soft: "#E4C173",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        floatIn: "floatIn 0.8s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
