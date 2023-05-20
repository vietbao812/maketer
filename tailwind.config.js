/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      spacing: {
        30: '30px',
        50: '50px',
        100: '100px',
      },
      colors: {
        primary: '#00A650',
        greenLight: '#00E56F',
        second: '#FFD600',
        blackPrimary: '#101010',
        grayPrimary: '#ccc',
        grayFA: '#FAFAFA',
        grayD9: '#D9D9D9',
        grayF2: '#F2F2F2',
        grayB6: '#B6B6B6',
        grayDO: '#D0CFCF',
      },
      height: {
        'full': '100%',
        50: '50px',
      },
      width: {
        50: '50px',
        200: '200px'
      },
      borderRadius: {
        100: '100px'
      }
    },
  },
  plugins: [],
}

