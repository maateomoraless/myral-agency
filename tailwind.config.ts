import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "13": "52px",
      },
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        yellow: "var(--yellow)",
        cream: "var(--white)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        instrument: ["var(--font-instrument)", "serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
