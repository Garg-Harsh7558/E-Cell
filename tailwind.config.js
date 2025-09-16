/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const CustomStyle = plugin(function ({addUtilities}) {
  addUtilities({
    ".rotate-y-180" : {
      transform : "rotateY(180deg)"
    },
    ".preserve-3d" : {
      transformStyle : "preserve-3d"
    },
    ".perspective-1000" : {
      perspective : "1000px"
    },
    ".backface-hidden" : {
      backfaceVisibility : "hidden",
    }
  })
}) 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scrollDown: 'scrollDown 10s linear infinite',
        scrollUp: 'scrollUp 10s linear infinite',
      },

      fontFamily: {
        blinker: ['Blinker', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bgblue: '#051219',
        cusgray: '#CCCCCC',
      },
    },
    screens: {
      'small': {'max': '1150px'},
      'big': '850px',
      'ss': '399px',
      
      'xxs': '240px',
      'xs': '550px',
      'sm': '640px',
      'mm': '704px',
      'md': '768px',
      'mdd':'850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'big': '1150px',
      'xxl': '1155px',
      'xxxl' : '1280px',
    }
  },
  plugins: [CustomStyle],
}
