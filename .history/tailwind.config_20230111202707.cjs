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
      'button': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IR0weL2a-3QEIl5nL8WWBlgrvOY7TfzJ7g&usqp=CAU')"
    }
  },
  plugins: [],
}