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
        'by-black' : '#0a1018',
        'txcolor' : '#85633e',
      },
      backgroundColor: {
        'by-black' : '#0a1018',
        'sidenavcolor' : '#161c23',
        'support' : '#4b3c2b',
        'color1' : '#161c23',
        'color2' : '#161c23',
        'color3' : '#171c23',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

