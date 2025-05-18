/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,component.html}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b112b",
        secondary: "#02d3da",
      },
      borderRadius: {
        "2rem": "2rem",
      },
      height: {
        "mobile-dvh": "70dvh",
        "laptop-dvh": "80dvh",
      },
    },
  },
  plugins: [],
};
