/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './utils/**/*.{js,jsx}'
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#003756',
        secondary: {
          300: '#23C1F0',
          200: '#98E2F9',
          100: '#D3EBF3'
        },
        accent1: {
          200: '#573200',
          100: '#7F5925'
        },
        accent2: {
          200: '#AC7B39', 
          100: '#AD8D61'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}