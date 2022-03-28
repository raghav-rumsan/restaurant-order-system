import { PaletteMode } from "@mui/material";
import merge from "deepmerge";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import common from "./common";

const getDesignTokens = (mode: PaletteMode) => {
  let mergedTheme = merge(common, mode === "light" ? lightTheme : darkTheme);

  return mergedTheme;
};

export { getDesignTokens };
