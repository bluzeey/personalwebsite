const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend:{
      backgroundImage: {
           'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
        },
    },
    screens: {
      'xs': '350px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('tailwindcss-font-inter')
  ],
}

