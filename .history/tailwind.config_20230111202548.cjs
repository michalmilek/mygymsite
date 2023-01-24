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
    backgroundImage: {
      'button': "url('https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/11/6-Reasons-You-Should-Never-Open-a-Gym.jpg')"
    }
  },
  plugins: [],
}