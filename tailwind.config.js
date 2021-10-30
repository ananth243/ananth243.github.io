module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  theme: {
    extend: {
      gridTemplateColumns: {
       'auto': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
};
