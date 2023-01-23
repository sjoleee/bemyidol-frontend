module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeout: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadein: "fadein 0.3s",
        fadeout: "fadeout 0.3s",
      },
      colors: {
        GREY_LIGHT: "#F9F9F9",
        GREY_MEDIUM: "#C8C8C8",
        GREY_HEAVY: "#A8A8A8",
        PRIMARY: "#F64280",
        PRIMARY_LIGHT: "#FFF2F7",
      },
    },
  },
  plugins: [],
};
