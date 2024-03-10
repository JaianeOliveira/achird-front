import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        slate: {
          930: "#080d1e",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        "achird-dark": {
          primary: "#8B5CF6",
          secondary: "#1E293B",
          accent: "#8B5CF6",
          neutral: "#1f2937",
          "base-100": "#111827",
          info: "#374151",
          success: "#0d9488",
          warning: "#fbbf24",
          error: "#f43f5e",
        },
        "achird-light": {
          primary: "#8B5CF6",
          secondary: "#1E293B",
          accent: "#d1d5db",
          neutral: "#e5e7eb",
          "base-100": "#e5e7eb",
          info: "#374151",
          success: "#10b981",
          warning: "#fbbf24",
          error: "#f43f5e",
        },
      },
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  plugins: [daisyui, require("tailwind-scrollbar")],
  darkMode: "class",
};
export default config;
