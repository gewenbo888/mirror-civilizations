import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Noto Serif SC", "ui-serif", "Georgia", "serif"],
        body: ["Manrope", "Noto Sans SC", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        han: ["Noto Serif SC", "ui-serif", "serif"],
      },
      colors: {
        parchment: { 50: "#fbf6ec", 100: "#f3ead7", 200: "#e2d4b0", 300: "#c2ad7c" },
        ink: { 950: "#0a0908", 900: "#15120e", 800: "#1f1b14", 700: "#2c2619" },
        china: { DEFAULT: "#d04632", soft: "#e5715c", deep: "#8a2718" },     // vermilion
        europe: { DEFAULT: "#2c5e8f", soft: "#5380aa", deep: "#143350" },    // mediterranean blue
        gold: { DEFAULT: "#c9a14a", soft: "#e6c279", deep: "#8a6b1f" },
      },
    },
  },
  plugins: [],
};

export default config;
