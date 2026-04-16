import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf8f3",
          100: "#f9ecdc",
          200: "#f2d4b0",
          300: "#e6b177",
          400: "#d38a45",
          500: "#b56b2a",
          600: "#935420",
          700: "#72421e",
          800: "#55331b",
          900: "#3c2515",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
