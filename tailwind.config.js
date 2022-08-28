/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warna: 'rgb(248 250 252)'
      },
      fontFamily: {
        'sans': ['Algerian', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
