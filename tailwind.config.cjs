/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      dark: '#1a2744',
      main: {
        DEFAULT: '#00C793',
        200: '#00C79333',
      },
      secondary: '#29C5F6',
      grey: { DEFAULT: '#5A5A5D', light: '#BEBEBF' },
    },
    extend: {
      backgroundImage: {
        login: "url('./src/assets/images/bg-login.png')",
        signup: "url('./src/assets/images/signup.png')",
      },
      fontFamily: {
<<<<<<< HEAD
        poppinsRegular: ["PoppinsRegular", 'sans-serif'],
        poppinsMedium: ["PoppinsMedium", 'sans-serif'],
        poppinsBold: ["PoppinsBold", 'sans-serif'],
        poppinsExtraBold: ["PoppinsExtraBold", 'sans-serif'],
        poppinsLight: ["PoppinsLight", 'sans-serif'],
        poppinsThin: ["PoppinsThin", 'sans-serif'],
        poppinsBlack: ["PoppinsBlack", 'sans-serif'],
      },
      colors: {
        'primary': '#00C793',
        'green2': '#E7F4F7',
        'green3': '#3D8F8A',
=======
        poppinsRegular: ['PoppinsRegular', 'sans-serif'],
        poppinsMedium: ['PoppinsMedium', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
        poppinsExtraBold: ['PoppinsExtraBold', 'sans-serif'],
        poppinsLight: ['PoppinsLight', 'sans-serif'],
        poppinsThin: ['PoppinsThin', 'sans-serif'],
        poppinsBlack: ['PoppinsBlack', 'sans-serif'],
      },
      colors: {
        primary: '#00C793',
        green2: '#E7F4F7',
        'green-light': '#DFFDFB',
>>>>>>> 3e4439b60ba65d3cd565fb881fa53997fcb333dc
        'dragos-orange': '#F66729',
        'dragos-input': '#F5F7FF',
        'card-stroke': '#E0E9FF',
        'text-black': '#344863',
        'text-gray': '#A8B1C1',
        'text-yellow': '#F8A300',
        'card-gray': '#F3F5FA',
<<<<<<< HEAD
        'text-gray2': '#6C7B97',
        'gray-blue': '#E4E8F3',
        'pink1': '#F35C9D'
=======
        'bg-green-light': '#F0FBF7',
>>>>>>> 3e4439b60ba65d3cd565fb881fa53997fcb333dc
      },
    },
    plugins: [],
  },
};