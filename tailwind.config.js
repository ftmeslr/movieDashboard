/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      dana: ["dana", "sans-serif"],
    },
    extend: {
      // backgroundImage: {
      //   hero: "url('../src/asssets/images/hero.jpg')",
      // },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
