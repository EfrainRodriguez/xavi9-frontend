import React, { useMemo } from 'react';

// material
import { CssBaseline, type Direction, type PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import shadows, { customShadows } from './shadows';
import { type CustomTheme, type Shadows } from './types';

// ----------------------------------------------------------------------

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeMode = 'light';
  const themeDirection = 'ltr';
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLight
        ? { ...palette.light, mode: 'light' as PaletteMode }
        : { ...palette.dark, mode: 'dark' as PaletteMode },
      shape,
      typography,
      breakpoints,
      direction: themeDirection as Direction,
      shadows: isLight ? (shadows.light as Shadows) : (shadows.dark as Shadows),
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions) as CustomTheme;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
