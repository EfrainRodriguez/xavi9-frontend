import { type Theme, type Palette } from '@mui/material';

// palette ----------------------------------------------------------------
export interface Grey {
  0: string;
  100: string;
  200: string;
  300: string;

  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
}

// shadows ---------------------------------------------------------------

export type Shadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export interface CustomShadows {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

// shape
export interface Shape {
  borderRadius: number;
  borderRadiusSm: number;
  borderRadiusMd: number;
}

export interface CustomTheme extends Theme {
  palette: Palette & {
    grey: Grey;
  };
  shape: Shape;
  customShadows: CustomShadows;
}
