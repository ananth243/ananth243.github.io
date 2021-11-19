module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  theme: {
    extend: {
      colors: {
        dark: "#222831",
        "extra-dark": "#393E46",
        // "blue-regal": "rgb(33, 150, 243)"
        "blue-regal": "#00ADB5",
        "dark-blue": "#00FFF5",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  variants: {},
  plugins: [],
};
