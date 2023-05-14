/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'font': '#FF3811',
        'second': '#F3F3F3'
      },

    },
  },
  plugins: [require("daisyui")],
}

