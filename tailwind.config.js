/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
       
      },

    },
  },
  plugins: [],
}