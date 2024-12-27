/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, 
      padding: 0, 
      screens: {
        DEFAULT: '100%', 
      },
    },
    extend: {
      colors:{
        mainColor:"#000",
      }
    },
  },
  plugins: [],
}


