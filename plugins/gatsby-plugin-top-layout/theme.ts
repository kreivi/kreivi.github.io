/** @ts-ignore */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6f00',
      light: '#ffa040',
      dark: '#c43e00',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1565c0',
      light: '#5e92f3',
      dark: '#003c8f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#00021c',
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          marginRight: 3,
          marginBottom: 0.5,
        },
        label: {
          fontFamily: 'Monospace',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
