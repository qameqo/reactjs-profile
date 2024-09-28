/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// export default {};
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "2px 2px 4px #000000",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      animation: {
        shake: "shake 4s cubic-bezier(.36,.07,.19,.97) both",
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-6px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(6px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-6px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(6px, 0, 0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
    colors: {
      pur: "#905b9a",
      cl1: "#ff00ff",
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: [
        "sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: "normal",
        },
      ],
      serif: ["Merriweather", "serif"],
      mono: ["monospace"],
    },
  },
  plugins: [],
});
