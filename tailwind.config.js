/** @type {import('tailwindcss').Config} */

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
      backgroundImage: {
        'nft-mobile': "url('/src/assets/nftHighlightImageMobile.png')",
        'nft-desktop': "url('/src/assets/nftHighlightImage.png')",
      },
    },
  },
  plugins: [],
}

