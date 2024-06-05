/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        'rec-blue': '#00AAA2',
        'rec-blue-dark': '#097f7c'
      },
      screens: {
        'xxs': '450px',
      }
    },
  },
  plugins: [],
}

