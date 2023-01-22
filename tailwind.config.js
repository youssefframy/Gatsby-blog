/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nothing: ['Nothing You Could Do', 'cursive'],
      },
      colors: {
        mainWhite: '#f5f5f5',
        mainBlack: '#121212',
      },
    },
  },
  plugins: [],
}
