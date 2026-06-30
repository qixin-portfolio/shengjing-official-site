import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 品牌主色：温暖、真实、本地老品牌感
        cream: {
          DEFAULT: "#F6F2EA", // 米白
          50: "#FBF9F4",
          100: "#F6F2EA",
          200: "#EDE6D6",
        },
        forest: {
          DEFAULT: "#304238", // 深绿
          50: "#E8ECE9",
          600: "#3C5045",
          700: "#304238",
          800: "#243329",
          900: "#1A241D",
        },
        wood: {
          DEFAULT: "#CFAE7B", // 浅木色
          light: "#E0C9A0",
          dark: "#B8965F",
        },
        ink: {
          DEFAULT: "#222222", // 深灰黑
          soft: "#3A3A3A",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        soft: "0 1px 3px rgba(34, 34, 34, 0.06), 0 1px 2px rgba(34, 34, 34, 0.04)",
        card: "0 4px 16px rgba(34, 34, 34, 0.08)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
