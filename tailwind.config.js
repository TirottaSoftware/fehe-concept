/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#252525",
        "white": "#F1F1F1",
        "body": "#101010",
        "color-text": "#A0A0AB",
        "color-cta": "#353331",
      },
      fontFamily: {
        "lato": ["Lato"],
        "tb": ["Thicccboi"]
      },
      backgroundImage: {
        "featured": "url('./assets/img/featured.png')",
      }
    },
  },
  plugins: [],
}