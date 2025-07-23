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
        fontFamily: "open-sans, sans-serif",
        h1: {
            fontFamily: "space-mono, monospace",
            fontSize: '3rem',
        },
        h2: {
            fontFamily: "space-mono, monospace",
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: "space-mono, monospace",
            fontSize: '2rem',
        },
        h4: {
            fontFamily: "space-mono, monospace",
            fontSize: '1.75rem',
        },
        h5: {
            fontFamily: "space-mono, monospace",
            fontSize: '1.5rem',
        },
        h6: {
            fontFamily: "space-mono, monospace",
            fontSize: '1.25rem',
        },
    },
});
export default responsiveFontSizes(theme);
