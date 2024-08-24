const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.teal,
        neutral: colors.gray,
        // Light mode
        lightBg: colors.gray[100],
        lightCard: colors.white,
        lightText: colors.gray[900],
        lightButton: colors.indigo[500],
        lightButtonHover: colors.indigo[600],
        // Dark mode
        darkBg: colors.gray[900],
        darkCard: colors.gray[800],
        darkText: colors.gray[100],
        darkButton: colors.indigo[600],
        darkButtonHover: colors.indigo[700],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};