/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // ⚠️ Required this line to compile RizzUI style.
  ],
  theme: {
    extend: {
      colors: {
        primary: "#097782",
        secondary: "#002E3E",
        primaryBg: "#E8EAF6",

        /*
         * body, modal, drawer background & ring-offset-color
         */
        background: colors.white,

        /*
         * body text color
         */
        foreground: colors.gray[600],

        /*
         * border, default flat bg color for input components, tab & dropdown hover color
         */
        muted: colors.gray[200],

        /*
         * danger colors
         */
        red: {
          lighter: colors.rose[200],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },

        /*
         * warning colors
         */
        orange: {
          lighter: colors.amber[200],
          DEFAULT: colors.amber[500],
          dark: colors.amber[700],
        },

        /*
         * info colors
         */
        blue: {
          lighter: colors.sky[200],
          DEFAULT: colors.sky[500],
          dark: colors.sky[700],
        },

        /*
         * success colors
         */
        green: {
          lighter: colors.emerald[200],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[700],
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
