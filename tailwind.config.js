/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: "#4B2C20",
        cream: "#FFF8F0",
        strawberry: "#FADADD",
        cherry: "#A8324A",
        orangeAccent: "#F58936",
      },
    },
  },
  plugins: [],
}

