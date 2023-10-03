/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        'Krona': "'Krona One', sans-serif",
        'Base': "'Poppins', sans-serif",
        'Akronim':"'Akronim', cursive",
        'Caveat':"'Caveat', cursive",
        'Playfair': "'Playfair Display', serif"
        

      },
      colors: {
        'base': '#f8fafc',
        'darkBlue': '#003262',
        'blue': '#007FFF',
        'yellow': '#FBB13C',
        'green': '#E3FF00',
        'darkGreen': '#15803d',
        'teal': '#0d9488'
      }, 
      backgroundImage: {
        'foodBanner1': "url('./src/assets/produceBanner.jpg')",
        'bannerImg2': "url('./src/assets/bannerImg2.jpg')",
        'bannerImg3': "url('./src/assets/bannerImg3.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}

