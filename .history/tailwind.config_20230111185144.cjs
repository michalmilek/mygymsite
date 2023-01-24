/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"]
      },
      colors: {
        "secondary1": "#dbcdc6ff",
        "secondary2": "#ead7d1ff",
        "primary1": "#dd99bbff",
        "primary2": "#7b506fff",
        'primary3': "#1f1a38ff"
      }
    },
  },
  plugins: [],
}