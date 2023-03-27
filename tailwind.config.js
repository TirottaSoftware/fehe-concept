/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#191919",
        "white": "#F1F1F1",
        "color-text-dark": "#646464",
        "color-text-light": "#BEBEBE",
        "color-cta": "#353331",
      },
      fontFamily: {
        "lato": ["Lato"]
      },
      backgroundImage: {
        "hero": "url('../assets/img/hero.png')",
        "about": "url('../assets/img/about-01.png')"
      }
    },
  },
  plugins: [],
}