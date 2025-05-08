/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // важливо для Next.js (app router)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        publicsans: ["var(--font-publicsans)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: "2.25rem", fontWeight: "700", marginTop: "1.5rem" },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "600",
              marginTop: "1.25rem",
            },
            p: { marginTop: "1rem", marginBottom: "1rem" },
            a: { color: "#3b82f6", textDecoration: "underline" },
            code: {
              backgroundColor: "#f5f5f5",
              color: "#ef4444",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
            ul: { paddingLeft: "1.25rem", listStyleType: "disc" },
            ol: { paddingLeft: "1.25rem", listStyleType: "decimal" },
            li: { marginTop: "0.25rem", marginBottom: "0.25rem" },
          },
        },
      },
    },
  },

  plugins: [typography],
};
