module.exports = {
  content: ["./src/**/*.{html,js,css}", "*.{html,js}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      pc: "1280px",
    },
    extend: {
      backgroundImage: {
        hero: "url('../images/basic.png')",
        hero2: "url('../images/basic2.png')",
        hero3: "url('../images/basic3.png')",
      },
      colors: {
        black: "#0A0908",
        red: "#49111C",
        white: "#F2F4F3",
        lightbrown: "#A9927D",
        darkbrown: "#5E503F",
        backgroundColor: "#0B0B0A",
        gradientMid: "#1f1f1f",
        gradientEnd: "#383838",
      },
      fontFamily: {
        gv: ["Great Vibes", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
