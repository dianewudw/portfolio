/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'diane': '#AA57CA',
      'orange': '#DE9146',
      'green': '#7FE7B1',
      'gray': '#333333',
      'white': '#FDFBFD',
    },
    fontFamily: {
      'header':['Bai Jamjuree'],
      'display':['Gentium Book Basic'],
      'body': ['K2D'],
    },
    extend: {
      TextUnderline: {
        'squiggle':'url(/public/Squiggle.svg)'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}