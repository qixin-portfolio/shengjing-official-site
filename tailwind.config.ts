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
          DEFAULT: "#F6F2EA", // 米白（主背景）
          50: "#FBF9F4",
          100: "#F6F2EA",
          200: "#EDE6D6",
        },
        forest: {
          DEFAULT: "#304238", // 深绿（主品牌色）
          50: "#E8ECE9",
          600: "#3C5045",
          700: "#304238",
          800: "#243329",
          900: "#1A241D",
        },
        // 陶土赭石（强调色，用于按钮/标签/局部高亮/分割线）
        clay: {
          DEFAULT: "#947461",
          light: "#AC9787",
          dark: "#635242",
          50: "#F5EDE8",
          100: "#E8D9D0",
        },
        wood: {
          DEFAULT: "#CFAE7B", // 浅木色（辅助点缀）
          light: "#E0C9A0",
          dark: "#B8965F",
        },
        ink: {
          DEFAULT: "#352F2A", // 深棕黑（主文字，比纯黑温暖）
          soft: "#5F5E5A",
          muted: "#A19C96", // 暖灰（辅助文字）
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
        soft: "0 1px 3px rgba(53, 47, 42, 0.06), 0 1px 2px rgba(53, 47, 42, 0.04)",
        card: "0 4px 16px rgba(53, 47, 42, 0.08)",
        hover: "0 8px 24px rgba(53, 47, 42, 0.12)",
        dark: "0 8px 32px rgba(26, 36, 29, 0.15)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
