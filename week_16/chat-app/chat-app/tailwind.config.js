/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:{
          300:"#b2bec3",
          500:"#636e72"
        }
      }
    },
  },
  plugins: [],
}

