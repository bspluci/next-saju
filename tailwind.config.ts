import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "448px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-[#4a90e2]",
    "bg-[#C23030]",
    "bg-[#2f2f2f]",
    "bg-[#18868c]",
    "bg-[#f9f9f9]",
    "bg-[#9013fe]",
    "bg-[#ffc107]",
  ],
};
export default config;
