/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },

      spacing: {
        '150': '600px',
        '100': '400px',
        '135': '540px'
      }
    },
  },
  plugins: [],
}

