/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#031926",
          2: "#468189",
          3: "#77ACA2",
          4: "#9DBEBB",
          5: "#F4E9CD",
          6: "#0E0C15"
        }
      },
      fontFamily: {
        sora: "var(--font-sora)",
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      }
    },
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem"
        }
      }
    }
  },
  plugins: [],
}

