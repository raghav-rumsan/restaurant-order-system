import { ThemeOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const lightTheme: ThemeOptions = {
  palette: {
    // mode: "light",
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: red.A400,
    },
    error: {
      main: red.A400,
    },
  },
};

export default lightTheme;
