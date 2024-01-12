/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "420": "490px"
      },
      height: {
        "420": "490px"
      },
      colors: {
        // "green": "#39DB4A",
        "orange": "#fb8500",
        "red": "#D61C22",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC"

      },
      backgroundColor: {
        "Orange": "#fb8500",
      },
      letterSpacing: {
        '7': '7px',
        '10': '10px',
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "white", // name of one of the included themes for dark mode
  },
}

