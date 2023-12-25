/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '376px',
      'md': '736px',
      'lg': '1440px',
      'xl': '1920px',
    },
    colors: {
      'dark-green': '#001D26',
      'darker-green': '#0B0D17',
      'base-green': '#2AF598',
      'light-blue': '#009EFD',
      'white': '#FFFFFF', 
      'inputbox-label': '#808080'
    },

    fontFamily: {
      'cutive': ['Cutive', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },

    fontWeight: {
      'regular': 400,
      'semibold': 600,
      'bold': 700,
      'extra-bold': 800
    },

    extend: {
      backgroundImage : {
        'mobile': 'url("./src/assets/Background/Background-mobile.png")',
        'tablet': 'url("./src/assets/Background/Background-tablet.png")',
        'large': 'url("./src/assets/Background/Background-1arge.png")',
        'extraLarge': 'url("./src/assets/Background/Background-extra-large.png")',
        'logo-mobile': 'url("./src/assets/Images/publink-logo-mobile.png")',
        'logo-tablet': 'url("./src/assets/Images/publink-logo-tablet.png")',
        'logo-desktop': 'url("./src/assets/Images/publink-logo-desktop.png")'
      }
    },
  },
  plugins: [],
}

