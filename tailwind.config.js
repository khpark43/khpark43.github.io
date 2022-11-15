/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      light: ["Comic\\ Neue\\ Light"],
      regular: ["Comic\\ Neue\\ Regular"],
      bold: ["Comic\\ Neue\\ Bold"],
    },
    extend: {},
  },
  plugins: [],
};
