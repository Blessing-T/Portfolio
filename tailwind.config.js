/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via a CSS class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // or "./pages/**/*.{js,ts,jsx,tsx}" depending on your structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
