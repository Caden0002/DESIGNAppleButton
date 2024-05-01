/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        OldSTT: ['Old Standard TT', 'serif'],
      },

      colors: {
        // Define your color variables here
        textColorPrimary: '#351410',
        textColorSecondary: '#3F3225',
        textColorTertiary:  '#483E37',
        backgroundColorPrimary: '#ECE9D8',
        backgroundColorSecondary: '#D9D1BB',
        backgroundColorTertiary: '#351410',
        // backgroundColorQuaternary: '#F6F6EB',
      },

    },
  },
  plugins: [],
};