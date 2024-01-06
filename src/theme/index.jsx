import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { useMemo } from "react";
import breakpoints from "./breakpoints";
import typography from "./typography";

const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(() => ({
    typography,
    breakpoints,
  }));

  const theme = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
