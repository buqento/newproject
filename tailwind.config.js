const defaultTheme = require('tailwindcss/defaultTheme')
const spacing = {
  4: '4px',
  6: '6px',
  8: '8px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  32: '32px',
  48: '48px',
  128: '128px',
  286: '286px'
}

module.exports = {
  future: {},
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'max': '414px' },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      ...spacing
    },
    spacing: spacing,
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '2rem',
        lg: '8rem',
        xl: '8rem',
        '2xl': '8rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  variants: {},
}