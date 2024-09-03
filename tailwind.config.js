/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'base-1': "url('/src/assets/background/bg1.jpg')",
        'base-2': "url('/src/assets/background/bg2.png')",
        'base-3': "url('/src/assets/background/bg3.png')",
        'base-3-transparent': "url('/src/assets/background/bg3-transparent.png')",
        'base-3-landscape': "url('/src/assets/background/bg3-landscape.png')",
        'base-3-landscape-transparent': "url('/src/assets/background/bg3-landscape-transparent.png')",
        'base-4': "url('/src/assets/background/bg4.png')",
        'base-5': "url('/src/assets/background/bg5.png')",
        'base-6': "url('/src/assets/background/bg6.png')",
        'base-7': "url('/src/assets/background/bg7.png')",
        'base-8': "url('/src/assets/background/bg8.png')",
        'base-9': "url('/src/assets/background/bg9.png')",
        'base-10': "url('/src/assets/background/bg10.png')",
        'base-11': "url('/src/assets/background/bg11.png')",
        'base-12': "url('/src/assets/background/bg12.png')",
      },
      backgroundColor: {
        'custom-color': '#412222',
      },
      colors: {
        'custom-color': '#412222',
        'white': '#ffffff',
        'custom-brown': '#5b3d2c',
        'custom-text': '#684d3d',
        'champagne-gold': '#f7e7ce',
        gold: {
          100: '#F6E1B3', // Light gold
          200: '#F4D68C', // Slightly darker gold
          300: '#F1C46D', // Medium gold
          400: '#F0B53F', // Rich gold
          500: '#E9B52F', // Deep gold
          600: '#D9A21B', // Dark gold
          700: '#C8920F', // Even darker gold
        },
      },
      fontFamily: {
        // 'kaushan': ['Kaushan Script', 'cursive'],
        // 'poppins': ['Poppins', 'sans-serif'],
        // 'playfair': ['Playfair Display', 'serif'],
        // 'pacifico': ['Pacifico', 'cursive'],
        'adora-bouton': ['Adora Bouton', 'sans-serif'], // 'sans-serif' as a fallback
        'eb-garamond': ['EB Garamond', 'sans-serif'], // Custom font family
        'cormorant': ['Cormorant', 'sans-serif'], // Custom font family
      },
      fontWeight: {
        // Define weight values if needed
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      spacing: {
        '50': '50px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}

