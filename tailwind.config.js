/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        lights: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#F5F0FF",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
      },
    },
  },
  plugins: [],
};
