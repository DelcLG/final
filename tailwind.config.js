/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // <-- CETTE LIGNE EST LA PLUS IMPORTANTE
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }