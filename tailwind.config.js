/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
    },
  },
  plugins: [],
}

