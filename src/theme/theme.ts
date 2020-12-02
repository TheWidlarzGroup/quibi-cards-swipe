const space = {
  unit: 8,
};

const padding = {
  sm: space.unit * 0.5,
  md: space.unit,
  lg: space.unit * 2,
  xLg: space.unit * 3,
  xxLg: space.unit * 4,
};

const fontSizes = {
  small: 12,
  regular: 14,
  medium: 18,
  large: 28,
  xLarge: 34,
};

export const theme = {
  colors: {
    white: '#ffffff',
    light: '#b2bec3',
    light100: 'rgba(159, 159, 159, 0.7)',
    dark: '#636e72',
    primary: '#0984e3',
    secondary: '#81ecec',
    black: '#000',
    black100: '#2d3436',
  },
  space,
  padding,
  fontSizes,
};
