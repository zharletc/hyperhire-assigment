import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-gray-80": "#343741",
        "blue-gray-60": "#5E626F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      mdb: "960px",
      lg: "1024px",
      xl: "1280px",
    }
  },
  plugins: [
    aspectRatio,
  ],
};
export default config;
