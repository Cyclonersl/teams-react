/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px'
      },
      colors: {        
        casan: {
          gray: {            
            400: '#e5ebe8',
            700: '#dddddd'
          },
          green: {
            200: '#4ebd4a',
            400: '#60C0B8',
            600: '#27AA9F',
            800: '#00665e'
          },
          blue: {
            200: '#4b96bc'
          },
          red: {
            400: '#b50000',
            
          }
        }
      },
      fontSize: {
        ssm: '0.65em',
        12: '0.75em'
      }
    },    
  },
  plugins: [],
}
