/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // this is neccessary when you touch your index.html file, most of the you'll never touch index.html
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:{
          // 300:"green"
        }
      }
    },
  },
  plugins: [],
}

