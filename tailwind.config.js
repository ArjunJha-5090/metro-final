/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7A00',
        secondary: '#7A1F1F',
        accent: '#D4AF37',
        background: '#FFF8F0',
        text: '#222222',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
