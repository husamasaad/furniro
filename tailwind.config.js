/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary' : '#B88E2F',
        'secondary': '#FFF3E3',
        'light-bg': '#F4F5F7',
        'font-clr': '#333',
        'font-clr-1': '#666',
        'color-gray-1': '#3A3A3A',
        'color-gray-2': '#616161',
        'color-gray-3': '#898989',
        'color-gray-4': '#8B0B0B0',
        'color-gray-5': '#9F9F9F',
      },


    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
