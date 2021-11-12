module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  theme: {
    extend: {
      colors: {
        "blue-regal": "rgb(33, 150, 243)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  variants: {},
  plugins: [],
};
