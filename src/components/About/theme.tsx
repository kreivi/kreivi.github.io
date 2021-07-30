import { createTheme } from '@material-ui/core/styles';
const DEFAULT_THEME = createTheme();
const theme = createTheme({
  palette: {
    type: 'light',
  },
  overrides: {
    MuiChip: {
      root: {
        marginRight: DEFAULT_THEME.spacing(0.5),
        marginBottom: DEFAULT_THEME.spacing(0.5),
      },
      label: {
        fontFamily: 'Monospace',
      },
    },
  },
});

export default theme;
