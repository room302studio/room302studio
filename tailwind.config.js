/** @type {import('tailwindcss').Config} */
export default {
  content: [],
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
        // Define a custom orange color that matches the logo's #E17055
        primary: {
          50: "#fef2f0",
          100: "#fde6e1",
          200: "#fbd0c7",
          300: "#f7b0a0",
          400: "#f28a72",
          500: "#e17055", // This is the exact color from the logo
          600: "#d45a3e",
          700: "#b14730",
          800: "#913c2b",
          900: "#783629",
          950: "#411a14",
        },
      },
    },
  },
  plugins: [],
};
