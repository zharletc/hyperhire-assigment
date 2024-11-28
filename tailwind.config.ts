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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeIn500: 'fadeIn 500ms ease-in-out forwards',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        fadeInUp500: 'fadeInUp 500ms ease-in-out',
        fadeInUp300: 'fadeInUp 300ms ease-in-out',
        fadeInWithDelay: 'fadeIn 1s ease-in-out 300ms forwards'
      },
      colors: {
        "blue-gray-80": "#343741",
        "blue-gray-60": "#5E626F",
        "trabuddy-alternative": "#00C696",
        "nephritis-05": "#E9F7EF",
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
