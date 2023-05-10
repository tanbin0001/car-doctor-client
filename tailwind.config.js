/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        prime: '#FF3811',

      },
    },

  },
  plugins: [require("daisyui")],
}

