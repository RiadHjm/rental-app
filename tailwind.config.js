/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blueLogo: '#3C8BD4',
      silverGrey: '#C0C0C0',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

