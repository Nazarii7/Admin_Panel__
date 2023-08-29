/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "1.1rem",
      sm: "1.21rem",
      tiny: "1.27rem",
      base: "1.46rem",
      lg: "1.64rem",
      xl: "1.825rem",
      "2xl": "2.2rem",
      "3xl": "2.7rem",
      "4xl": "3.25rem",
      "5xl": "4.3rem",
      "6xl": "5.8rem",
      "7xl": "7.3rem",
    },
    extend: {
      colors: {
        primary: "#f08102",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionProperty: {
        DEFAULT: "350ms",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });
    }),
  ],
};
