/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: '"Cinzel Decorative", serif', 
        inter: '"Inter", sans-serif'
      }
    },
  },
  plugins: [require('daisyui'),],
}