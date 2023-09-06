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
      xs: "1rem",
      sm: "1.1rem",
      tiny: "1.21rem",
      base: "1.27rem",
      lg: "1.46rem",
      xl: "1.64rem",
      "2xl": "1.825rem",
      "3xl": "2.2rem",
      "4xl": "2.7rem",
      "5xl": "3.25rem",
      "6xl": "4.3rem",
      "7xl": "5.8rem",
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
          display: "flex",
          padding: "0.4rem",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
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
