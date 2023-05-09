/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'font': '#FF3811',
      },

    },
  },
  plugins: [require("daisyui")],
}

