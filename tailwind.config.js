/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000",
      "primary-cta": "#DCFD88",
      "primary-input": "#242424",
      "primary-text": "#0B0D14",
      "secondary-warning": "#F3B146",
      "gray-light": "#F7F8FA",
      "background-gray": "#1A1A1A",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1600px",
          },
        },
      });
    },
  ],
};
