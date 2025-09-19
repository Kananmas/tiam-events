    // tailwind.config.js
    const plugin = require('tailwindcss/plugin');

    module.exports = {
        // ... other configurations
        plugins: [
            plugin(function ({ addUtilities }) {
                addUtilities({
                    '.scrollbar-thin': {
                        'scrollbar-width': 'thin',
                        'scrollbar-color': 'var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'var(--tw-scrollbar-track)',
                            'border-radius': '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'var(--tw-scrollbar-thumb)',
                            'border-radius': '10px',
                        },
                    },
                    '.scrollbar-none': {
                        '-ms-overflow-style': 'none', /* IE and Edge */
                        'scrollbar-width': 'none', /* Firefox */
                        '&::-webkit-scrollbar': {
                            display: 'none', /* Chrome, Safari, Opera */
                        },
                    },
                });
            }),
        ],
        theme: {
            extend: {
                // Define custom CSS variables for scrollbar colors if desired
                colors: {
                    'scrollbar-thumb': '#888',
                    'scrollbar-track': '#f1f1f1',
                },
            },
        },
    };