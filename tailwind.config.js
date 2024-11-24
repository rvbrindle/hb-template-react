import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */

// Tailwind purges colors, which breaks dynamic classes being added -
// colors need to be added to this list if to be used

const colorsSafe = [
    'green-500', 'bg-green-500',
    'purple-500', 'bg-purple-500',
    'blue-500', 'bg-blue-500',
    'white', 'black'
]
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    purge: {
        safelist: [
            ...colorsSafe
        ]
    },
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem'
            },
            height: {
                '6-rem': '6rem',
                '8-rem': '8rem',
                '10-rem': '10rem',
            },
            width: {
                '6-rem': '6rem',
                '8-rem': '8rem',
                '10-rem': '10rem',
            },
            colors: {},
        },
    },
    plugins: [],
}