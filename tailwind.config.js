/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        wayfreela_backgroundImage: "linear-gradient(rgba(40, 15, 73,.9), rgba(40, 15, 73,.9)), url('/images/WayFreela-transparent.png')"
      }
    },
  },
  plugins: [],
}

