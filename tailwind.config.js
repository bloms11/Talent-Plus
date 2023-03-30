/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'xmd': '600px',
      'md': '1020px',
      // 'lg': '1023px',
      'xl': '1286px',
      '2xl': '1536px',
    },
    extend: {},
  },
}