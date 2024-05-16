/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./component/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    
    extend: {
      colors: {
      "red": "#d62828",
      "sky": "#4287f5",
      "dropdownMenu": "#ebebeb"
    },},
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}