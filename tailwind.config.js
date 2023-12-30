/** @type {import('tailwindcss').Config} */

const { fontFamily }  = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)',...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
      },
    },
  },
  plugins: [],
}

