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
    plugin(({ addUtilities, addComponents }) => {
      addComponents({
        ".shadow-icon": {
          border: "none",
          outline: "none",

          cursor: "pointer",
          padding: "0.6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.7rem",
          transition: "box-shadow .4s ease-in-out",
          boxShadow: "0 4px 10px rgba(82, 120, 209, 0.3)",
          color: "#295bcf",
          borderRadius: "50%",
          backgroundColor: "rgb(30 58 138)",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(82, 120, 209, 0.9)",
          },
        },
      });
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
