/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        customwhite: "hsl(0, 0%, 100%)",
        customBlack: "hsl(0, 0%, 7%)",

        "custompurple-100": "hsl(254, 88%, 90%)",
        "custompurple-500": "hsl(256, 67%, 59%)",

        "customyellow-50": "hsl(31, 66%, 98%)",
        "customyellow-100": "hsl(31, 66%, 93%)",
        "customyellow-500": "hsl(39, 100%, 71%)",
      },
      fontFamily: {
        "sans-serif": ['"DM Sans"', "sans-serif"],
      },
      gridTemplateColumns: {
        10: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        10: "repeat(12, 50px)",
      },
    },
  },
  plugins: [],
};
