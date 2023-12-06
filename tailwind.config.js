/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cabj-blue": "#001D63",
        "cabj-yellow": "#FFD800",
      },
      screens: {
        dm: {min: "450px"},
        sml: {min: "350px", max: "450px"},
      }
    },
  },
  plugins: [],
}

