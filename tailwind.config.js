/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public html/*.html"],
  theme: {
    extend: {
      colors: {
        yellow: {
          900: '#F0B80D'
        },
      },
      container: {
        screens: {
          sm: '556px',
          md: '767px',
          lg: '991px',
          xl: '1199px'
        }
      },

    },
  },
  plugins: [],
}