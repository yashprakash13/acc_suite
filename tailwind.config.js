/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    colors: {
      primary: "#FDCABA",
      secondary: "#FFF7F5",
      black: "#000000",
      lightHighlight: "#69595e",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["K2D", "sans-serif"],
      serif: ["Cutive", "serif"],
    },
    boxShadow: {
      sm: "5px 5px 0px 0px rgba(0,0,0,0.23)",
      lg: "7px 7px 0px 0px rgba(0,0,0,0.23)",
      xl: "10px 10px 0px 0px rgba(0,0,0,0.23)",
      xxl: "7px 7px 0px 0px #69595e",
      none: "0px 0px",
    },
    extend: {},
  },
  plugins: [],
}
