/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       boxShadow: {
        'custom-shadow': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
    },
    fontFamily: {
      'Montserrat': ['Montserrat']
    }

  },
  plugins: []
}
