module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F61313",
        secondary: "#BB0707",
        dark: "#130101",
        darkGray: "#0A0A0A",
        alterGray: "#212121",
        lightGray: "#494949",
      },
      backgroundImage: {
        "hero-img": "url('./assets/hero-img.jpg')",
      },
    },
  },
  plugins: [],
};
