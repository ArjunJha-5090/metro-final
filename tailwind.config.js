/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E53935', // Vibrant Red
        secondary: '#111111', // True Black
        accent: '#FFB300', // Bold Yellow
        background: '#F4F1EA', // Cream/Off-White
        text: '#111111', // True Black
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #111111',
        'brutal-lg': '8px 8px 0px 0px #111111',
        'brutal-sm': '2px 2px 0px 0px #111111',
      }
    },
  },
  plugins: [],
}
