/** @ts-ignore */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001d3d',
    },
    secondary: {
      main: '#5f0f40',
    },
    background: {
      default: '#edede9',
    },
  },
  typography: {
    fontFamily: ['Lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
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
