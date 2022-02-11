module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slide: "slide .6s ease-in-out",
      },
    },
    backgroundImage: {
      "bg-pattern": "url('./assets/bg.png')",
    },
    fontFamily: {
      'body': ['"Cormorant Upright"'],
      'sans': ['ui-sans-serif'],
      'serif': ['ui-serif']
    },
    maxWidth: {
      '1/2': '50%',
    },
  },
  plugins: [],
};
