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
          online: {
            400: '#30c54f'
          },
          offline: {
            400: '#b50000'
          },
          logada: {
            400: '#4b96bc'
          },
          executado: {
            400: '#26ae00'
          },
          executando: {
            400: '#00ae9b'
          },
          recusado: {
            400: '#ea5555'
          },
          programado: {
            400: '#039be5'
          },
          emrota: {
            400: '#f9cb6a'
          },
          gray: {
            400: '#e5ebe8',
            500: '#555555',
            700: '#dddddd'
          },
          green: {
            200: '#4ebd4a',
            300: '#26AE00',
            400: '#60C0B8',
            500: '#00665e',
            600: '#27AA9F',
            800: '#00665e'
          },
          blue: {
            200: '#4b96bc',
            400: '#039BE5'
          },
          red: {
            200: '#EA5555',
            400: '#b50000',
          },
          yellow: {
            400: '#FBC400'
          },
          orange: {
            400: '#ffa63c'
          },
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
