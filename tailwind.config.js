// /** @type {import('tailwindcss').Config} */
let weights = Array.from(Array(9), (_, i) => (i + 1) * 100);
let fontWeight = {};
weights.forEach((val) => {
  fontWeight[val] = val;
});

module.exports = {
  content: [
    `./components/**/*.{vue,js}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./nuxt.config.{js,ts}`,
  ],
  extend: {
    theme: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
      },
      fontFamily: {
        // nanum: ["Nanum Brush Scåript", "cursive"],
        // inter: ["Inter", "sans-serif"],
        nanum: ["Nanum Brush Script", "cursive"],
        sans: ["Inter", "sans-serif"],
        serif: ["Ariel","serif"],
      },
      fontWeight,
      screens: {
        "3xl": "1633px",
        "1.5xl": "1333px",
        "lt-2xl": { max: "1535px" },

        "lt-xl": { max: "1279px" },

        "lt-lg": { max: "1023px" },

        "lt-md": { max: "767px" },

        "lt-sm": { max: "639px" },

        "xsm": "439px",
        "lt-xsm": { max: "439px" },

        "xxsm": "339px",
        "lt-xxsm": { max: "339px" },

        'coarse': { 'raw': '(pointer: coarse)' },
        'fine': { 'raw': '(pointer: fine)' },
      },
      container: {
        center: "true",
      },
      colors: {
        primary: "rgb(163 230 53)"
      },
    },
  },
   plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
