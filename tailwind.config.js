module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    backgroundImage: {
      'wood': "url('./img/wood.jpg')",
      'space': "url('./img/space.jpg')",
      'brick': "url('./img/brick.jpg')",

      
    },
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [require('flowbite/plugin')],
}
