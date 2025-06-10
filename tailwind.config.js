const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@rnr/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary-gray": {
          100: "#656C7B",
          200: "#5C6270",
          300: "#535865",
          400: "#494E5A",
          500: "#40454F",
          600: "#373B43",
          700: "#2E3138",
        },
        "primary-yellow": {
          100: "#F7DE8D",
          200: "#F6D979",
          300: "#F5D466",
          400: "#F4CE52",
          500: "#F3CA40",
          600: "#F2C32C",
        },
        "primary-red": {
          100: "#FED7D8",
          200: "#FDC3C4",
          300: "#FDAFB0",
          400: "#FD9B9C",
          500: "#FD8789",
          600: "#FD7275",
        },
        "primary-green": {
          100: "#7BF491",
          200: "#68F381",
          300: "#55F172",
          400: "#42F062",
          500: "#2FEE52",
          600: "#1DED43",
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
