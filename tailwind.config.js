module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: '#ffffff',
            black: '#000000',
            blue: {
                600: '#577590'
            },
            gray: {
                100: '#e0e0e0',
                200: '#4f4f4f',
                250: '#666666',
                300: '#828282',
                400: '#bdbdbd',
                500: '#eeeeee',
                600: '#f2f2f2',
                800: '#333333'
            },
            pink: {
                100: '#F94144',
                200: '#FFE9EB'
            },
            yellow: {
                500: '#fff9ec'
            }
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [],

    corePlugins: {
        container: false
    }
};
