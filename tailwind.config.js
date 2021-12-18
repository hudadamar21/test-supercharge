module.exports = {
  content: [
    "./index.html",
    "./assets/main.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    extend: {
      colors: {
        primary: {
          purple: '#290063'
        },
        secondary: {
          purple: '#5300c9'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
