import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FBF8F2",
          card: "#FFFFFF",
          beige: "#F1E9DD",
          red: "#A92B25",
          "red-hover": "#8E231E",
          "red-light": "#FAECEB",
          olive: "#66734A",
          "olive-hover": "#54603C",
          "olive-light": "#EFF3E8",
          dark: "#29231F",
          muted: "#665E58",
          border: "#E7DFD4",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(41, 35, 31, 0.04), 0 10px 30px rgba(41, 35, 31, 0.06)",
        card: "0 4px 20px rgba(41, 35, 31, 0.05)",
        lift: "0 12px 32px rgba(169, 43, 37, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
