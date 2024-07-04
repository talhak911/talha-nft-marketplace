/** @type {import('tailwindcss').Config} */
import {colors} from './src/constants/color'
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],

      },

        colors: {
          ...colors,
        },
      screens: {
        xsm: '375px', 
        lg2:'1220px'
      },
      backgroundImage: {
        'nft-mobile': "url('/src/assets/images/nftHighlightImageMobile.png')",
        'nft-desktop': "url('/src/assets/images/nftHighlightImage.png')",
      },
    },
  },
  plugins: [],
}

