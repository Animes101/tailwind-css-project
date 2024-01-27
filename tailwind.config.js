/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'Oranienbaum':['Oranienbaum', 'serif'],
        'Oswald':['Oswald', 'sans-serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'Overlock':['Overlock', 'sans-serif'],

      },
      colors: {
        'text-color': '#000',
      },
      backgroundImage: {
        'hero-img': "url('/images/hero.png')",
        
      }
    },
  },
  plugins: [],
}

