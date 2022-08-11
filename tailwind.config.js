/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    colors: {
      'very-dark-blue-main-bg': 'hsl(233, 47%, 7%)',
      'dark-desaturated-blue-card-bg': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      'white': 'hsl(0, 0%, 100%)',
      'slightly-transparent-white-main': 'hsla(0, 0%, 100%, 0.75)',
      'slightly-transparent-white-stat': 'hsla(0, 0%, 100%, 0.6)',
    },
    fontFamily: {
      'sans': ['Lexend Deca', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    screens: {
      'sm': '1150px',
    }
  },
  plugins: [],
}
