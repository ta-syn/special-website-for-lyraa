/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "maroon-primary": "#800020",
        "maroon-dark": "#660019", 
        "maroon-light": "#99334C",
        "cream-primary": "#FFF6E5",
        "cream-dark": "#F5E6D3",
        "gold-accent": "#D4AF37",
        "gold-light": "#E5C158",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}