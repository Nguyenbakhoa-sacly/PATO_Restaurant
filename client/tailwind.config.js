/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "green": "#39DB4A",
        "orange": "#fb8500",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC"

      },
      backgroundColor: {
        "Orange": "#fb8500",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "white", // name of one of the included themes for dark mode
  },
}

