/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppings: ['Poppins', 'sans-serif']
            }
        },
    },
    plugins: [],
}

