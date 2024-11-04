/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-projet': '#FF60BD',
        'blue-projet': '#66ADE6',
        'vert-caca': '#CDCD0D',
        'blanc-projet': '#FFFFFF',
        'rouge-projet': '#FF0000',
      },
    },
  },
  plugins: [],
}

