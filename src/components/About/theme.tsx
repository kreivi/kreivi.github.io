import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
  overrides: {
    MuiChip: {
      label: {
        fontFamily: "Monospace",
      },
    },
  },
});

export default theme;
