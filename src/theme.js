import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0072CE",
    },
  },
  typography: {
    fontFamily: "Open Sans, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          fontSize: "18px",
          fontWeight: 600,
          borderRadius: "1rem",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;