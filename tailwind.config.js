/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        },
        colors: {
            'darkgray': '#454b50',
            stone: colors.stone,
            surf: {
                100: '#ebfff4',
                150: '#ccfbe3',
                200: '#aef7d3',
                250: '#8fecc2',
                300: '#71e1b5',
                400: '#3fbba5',
                500: '#1d6d89',
                600: '#0b2359',
                700: '#030835',
                800: '#010121',
                900: '#000019',
            }
        },
        fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
                'sm': '1rem',
                'msm': '1.5rem',
                'md': '2rem',
                'mdl': '3rem',
                'lg': '4rem',
                'xl': '6rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        }
    },
    plugins: [],
}