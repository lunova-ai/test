/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4a857",
        dark: "#1a1a1a",
        cream: "#f7f3ee",
      },
    },
  },
  plugins: [],
};
