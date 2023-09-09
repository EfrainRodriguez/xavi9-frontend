// THIS IS THE DEFAULT VALUE YOU CAN CHANGE IF YOU WANT

export interface Breakpoints {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const breakpoints: Breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

export default breakpoints;
