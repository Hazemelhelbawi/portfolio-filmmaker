/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          main: '#7B2CBF',
          primary: '#3c096c',
          secondary: '#5a189a',
          offset: '#6717b2'
        },
        light: {
          main: '#3BAFA9',
          primary: '#2B7A78'
        }
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        lp: '1440px',
        '2xl': '1680px'
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          xs: '440px',
          sm: '570px',
          md: '708px',
          lg: '924px',
          xl: '1100px',
          lp: '1300px',
          '2xl': '1536px'
        }
      },
      fontFamily: {
        firacode: ['Firacode'],
        raleway: ['"Raleway"']
      }
    }
  },
  plugins: []
};
