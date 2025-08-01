/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode support
  // Specify the paths to all of the template files in your project
  // Tailwind will scan these files for class names to generate the necessary styles 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};