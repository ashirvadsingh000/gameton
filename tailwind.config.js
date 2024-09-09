/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenyellow': '#499600',
        'lightgreenyellow': '#a8eb34',
      },
    },
  },
  plugins: [],
}