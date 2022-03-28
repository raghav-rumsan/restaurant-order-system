import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getDesignTokens } from "theme";

const ThemeModeContext = createContext({
  toggleThemeMode: () => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // const value = useContext(ThemeModeContext);
  // console.log("value", value);
  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeModeContext };
