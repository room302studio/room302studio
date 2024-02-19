/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   white: colors.white,
    //   black: colors.black,
    //   red: colors.red,
    // },
    extend: {
      colors: {
        specialorange: {
          50: "hsl(10, 86%, 97%)",
          100: "hsl(12, 100%, 94%)",
          200: "hsl(12, 100%, 89%)",
          300: "hsl(12, 100%, 82%)",
          400: "hsl(12, 97%, 71%)",
          500: "hsl(12, 91%, 60%)",
          600: "hsl(12, 78%, 50%)",
          700: "hsl(12, 79%, 42%)",
          800: "hsl(11, 76%, 35%)",
          900: "hsl(11, 68%, 31%)",
          950: "hsl(11, 80%, 15%)",
        },
      },
    },
  },
};
