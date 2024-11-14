/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        cream: "#FFF9ED",
        green: "#A3B9A2",
        forest: "#4D5D4B",
        jade: "#333333",
      },
    },
  },
  plugins: [],
};
