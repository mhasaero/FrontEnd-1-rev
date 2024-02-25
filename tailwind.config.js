/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      fold: "200px",
      md: "768px",
      lg: "1025px",
    },
  },
  plugins: [],
};
