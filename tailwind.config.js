/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        pixel: ["pixel", "sans-serif"],
        adevas: ["adevas", "sans-serif"],
        alfena: ["alfena", "sans-serif"],
        pixeldown: ["pixeldown", "sans-serif"],
      },
      colors: {
        MainText: {50: "#F4F0E8"},
        SecondaryText: {50: "#BDB9AE"},
        UIBackground: {50: "#111722"},
        DarkArea: {50: "#080B11", 100:"#070d1a"},
        Borders: {50: "#384252"},
        PrimaryAccent: {50: "#E6C86A"},
        SecondaryAccent: {50: "#79B8C5"},
        Highlight: {50: "#F3D98A"},
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};