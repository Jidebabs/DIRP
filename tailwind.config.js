/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A76C3",
        light: "#F5F9FE",
        "primary-green": "#157145",
        dark: {
          100: "#4F4F4F",
          200: "#333333",
          gray: "#828282",
        },
      },
      screens: {
        xs: "400px"
      }
    },
  },
  plugins: [],
};
