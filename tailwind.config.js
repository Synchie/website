/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        white: {
          primary: "#ffffff",
          secondary: "f0f0f0",
          accent: "#ffcc00",
          text: "#333333",
        },
        dark: {
          primary: "#0B2447",
          secondary: "#ffffff",
          accent: "#2DCDDF",
          text: "#ffffff",
        },
      },
      animation: {
        zoom: "zoom 1s ease-in-out forwards",
        flip: "flipHorizontal 1s ease-in-out forwards",
        wiggle: "wiggle 500ms ease-in-out infinite",
      },
      keyframes: {
        zoom: {
          "0%": { "border-radius": "100%" },
          "50%": { "border-radius": "50%" },
          "100%": { "border-radius": "16px;" },
        },
        flipHorizontal: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(42deg)" },
          "50%": { transform: "rotate(48deg)" },
        },
      },
    },
    fontFamily: {
      sans: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
      italic: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
