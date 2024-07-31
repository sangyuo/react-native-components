interface DefaultTheme {
  colors: {
    dark: string;
    light: string;
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    success: string;
    'primary-light': string;
    'secondary-light': string;
    'danger-light': string;
    'warning-light': string;
    'success-light': string;
    'primary-dark': string;
    'secondary-dark': string;
    checked: string;
    unchecked: string;
  };
  scaleOptions: {
    default: number;
    options: {
      gap?: number;
      'row-gap'?: number;
      'col-gap'?: number;
      m?: number;
      mt?: number;
      ml?: number;
      mb?: number;
      mr?: number;
      mx?: number;
      my?: number;
      p?: number;
      pt?: number;
      pl?: number;
      pb?: number;
      pr?: number;
      px?: number;
      py?: number;
      w?: number;
      'max-w'?: number;
      'min-w'?: number;
      rounded?: number;
      'rounded-tl'?: number;
      'rounded-tr'?: number;
      'rounded-bl'?: number;
      'rounded-br'?: number;
      'rounded-l'?: number;
      'rounded-r'?: number;
      'rounded-t'?: number;
      'rounded-b'?: number;
    };
  };
}

const DEFAULT_THEME: DefaultTheme = {
  colors: {
    dark: '#1a75d2',
    light: '#ffffff',
    primary: '#42A5F5',
    secondary: '#BA68C8',
    danger: '#F87171',
    warning: '#FACC15',
    success: '#4ADE80',
    'primary-light': '#AFD1FC',
    'secondary-light': '#E1BEE7',
    'danger-light': '#F87171',
    'warning-light': '#FACC15',
    'success-light': '#4ADE80',
    'primary-dark': '#D7E8FD',
    'secondary-dark': '#DDD6FE',
    checked: '#60A5FA',
    unchecked: '#BDBDBD',
  },
  scaleOptions: {
    default: 0,
    options: {},
  },
};

export const getThemeConfig = (): DefaultTheme => {
  try {
    const config = require('../../box.config.js');
    return {
      colors: {
        ...DEFAULT_THEME.colors,
        ...config?.theme?.colors,
      },
      scaleOptions: {
        ...DEFAULT_THEME.scaleOptions,
        ...config?.theme?.scaleOptions,
      },
    };
  } catch (error) {
    return DEFAULT_THEME;
  }
};

export const CONFIG_BOX = getThemeConfig();
