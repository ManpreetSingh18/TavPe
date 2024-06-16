/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        customRed: {
          500: '#800000', // Adding your custom color
        },
      },
    },
  },
  
  plugins: [],
}

