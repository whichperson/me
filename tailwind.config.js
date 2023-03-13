/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                main: '#6347FF',
                light: '#9381FF',
            },
            width: {
                window: 'calc(-50px + 60vw)',
                windowMinimized: 'calc(-20px + 20vw)',
            },
            height: {
                window: 'calc(-50px + 80vh)',
                windowMinimized: 'calc(-50px + 15vh)',
            },
        },
    },
    plugins: [],
};
