/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        // transitionProperty: {
        //     'width': 'width'
        // },
      },
    },
    plugins: [require('tailwind-scrollbar'),],
}
