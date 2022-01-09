module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        neon: "#b7e635",
      },
    },
  },
  plugins: [],
};
