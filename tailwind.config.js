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
                400: '#bdbdbd',
                600: '#f2f2f2',
                800: '#333333'
            }
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
