/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mytheme: {
      primary: "#6FCF97",
    },
    colors: {
      textPrimary: "#ABB2BF",
      bgColor: "#282C33",
      navColor: "#1c1f24",
      textSecondary: "#6FCF97",
      btnColor: "#6FCF97",
      secondaryBtnColor: "#C778DD",
      white: "#FFFFFF",
    },
    fontFamily: {
      primaryFont: ["Azeret Mono", "monospace"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("daisyui"), "gatsby-plugin-postcss"],
};
