/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[],
  content: ['./src/public/index.html', './src/styles.css/**/*.js'],

  theme: {
    extend: {
      colors:{
        primary: '#FF0000',
        secondary: '#00FF00',
      }
    },
  },
  plugins: [],
}

