/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#102E4A',
        'highlight': '#FF6542',
      },
      // colors goes inside extend:{} when you want to add more colors
      sizing: {
        'header-size': '10vh'
      }
    },
    // colors: {}
    // colors goes here if you want to override all other colors and only use these
  },
  plugins: [],
}