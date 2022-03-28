import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeModeContext } from "theme/ThemeContext";

const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);
  return (
    <>
      <IconButton
        // sx={{ ml: 1 }}
        onClick={colorMode.toggleThemeMode}
        color='inherit'>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggle;
