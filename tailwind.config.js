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
      primary: "#ffffff",
      secondary: "##ef6c6c",
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
    extend: {
      transitionDelay: {
        accordShow: "0.5s",
        accordHide: "0.5s",
      },
      transitionProperty: {
        accordShow: "all",
        accordHide: "all",
      },
      transitionTimingFunction: {
        accordShow: "cubic-bezier(1, 0, 1, 0)",
        accordHide: "cubic-bezier(0, 1, 0, 1)",
      },
    },
  },
  plugins: [],
}
