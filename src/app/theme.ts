'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    default: '#0B0500',
                    paper: '#000000',
                },
                primary: {
                    main: '#4EAC5A',
                },
                secondary: {
                    main: '#FF6B35',
                },
            },
        },
        light: {
            palette: {
                background: {
                    default: '#E6E6E6',
                    paper: '#FFFFFF',
                },
                primary: {
                    main: '#4EAC5A',
                },
                secondary: {
                    main: '#FF6B35',
                },
            },
        },
    },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: 'var(--font-open-sans)',
        h1: {
            fontFamily: 'var(--font-space-mono)',
            fontSize: '3rem',
        },
        h2: {
            fontFamily: 'var(--font-space-mono)',
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: 'var(--font-space-mono)',
            fontSize: '2rem',
        },
        h4: {
            fontFamily: 'var(--font-space-mono)',
            fontSize: '1.75rem',
        },
        h5: {
            fontFamily: 'var(--font-space-mono)',
            fontSize: '1.5rem',
        },
        h6: {
            fontFamily: 'var(--font-space-mono)',
            fontSize: '1.25rem',
        },
    },
});

export default responsiveFontSizes(theme);
