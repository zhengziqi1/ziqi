/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#e63946", // 红色
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1d3557", // 蓝色
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#e63946",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1faee",
          foreground: "#1d3557",
        },
        accent: {
          DEFAULT: "#457b9d",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1d3557",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1d3557",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
}