import { createTheme } from '@material-ui/core/styles';
const DEFAULT_THEME = createTheme();
const theme = createTheme({
  palette: {
    type: 'light',
  },
});

export default theme;
