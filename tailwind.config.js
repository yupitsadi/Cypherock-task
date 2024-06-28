/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'by-black' : '#0a1018'
      },
      backgroundColor: {
        'by-black' : '#0a1018'
      },
    },
  },
  plugins: [],
}

