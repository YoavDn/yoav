/** @type {import('tailwindcss').Config} */
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
  theme: {
    extend: {
      fontFamily: {
        nanum: ['Nanum Brush Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        geist: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      screens: {
        '3xl': '1633px',
        '1.5xl': '1333px',
        'lt-2xl': { max: '1535px' },
        'lt-xl': { max: '1279px' },
        'lt-lg': { max: '1023px' },
        'lt-md': { max: '767px' },
        'lt-sm': { max: '639px' },
        'xsm': '439px',
        'lt-xsm': { max: '439px' },
        'xxsm': '339px',
        'lt-xxsm': { max: '339px' },
      },
      container: {
        center: true,
      },
      colors: {
        primary: 'rgb(163 230 53)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
