/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./theme/**/*.{js,jsx,ts,tsx}", "./navigation/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#191970',
        'golden-yellow': '#FFC000',
        'electric-blue': '#7DF9FF',
        'gray-icon': '#D3D3D3',
        'table-person': '#393990'
      },
    },
  },
  plugins: [],
}

