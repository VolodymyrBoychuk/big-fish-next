/** @type {import('tailwindcss').Config} */
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
    },
  },

  plugins: [],
};
