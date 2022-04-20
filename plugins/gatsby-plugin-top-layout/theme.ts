import { orange, red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: orange,
    secondary: red,
  },
});

export default responsiveFontSizes(theme);
