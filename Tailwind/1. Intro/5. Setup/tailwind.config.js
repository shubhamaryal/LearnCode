/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Include all HTML and JS files in the src folder
    "./*.{html,js}",        // Include HTML and JS files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
