import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const myPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    ".saju-title-before": {
      "&::before": {
        content: "''",
        position: "absolute",
        top: "1.333vw",
        left: "1.6vw",
        width: "14.9vw",
        height: "10.1vw",
        backgroundImage: "url('/images/pattern_left.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      },
      "@screen sm": {
        "&::before": {
          top: "6px",
          left: "7px",
          width: "67px",
          height: "45px",
        },
      },
    },
    ".saju-title-after": {
      "&::after": {
        content: "''",
        position: "absolute",
        top: "-4.5vw",
        right: "1.333vw",
        width: "14.9vw",
        height: "10.1vw",
        backgroundImage: "url('/images/pattern_right.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      },
      "@screen sm": {
        "&::after": {
          top: "-20px",
          right: "6px",
          width: "67px",
          height: "45px",
        },
      },
    },
  });
};

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
  safelist: [
    "bg-[#4a90e2]",
    "bg-[#C23030]",
    "bg-[#2f2f2f]",
    "bg-[#18868c]",
    "bg-[#f9f9f9]",
    "bg-[#9013fe]",
    "bg-[#ffc107]",
  ],
  plugins: [myPlugin],
};

export default config;
