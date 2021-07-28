import { createMuiTheme } from '@material-ui/core/styles';
const DEFAULT_THEME = createMuiTheme();
const theme = createMuiTheme({
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
