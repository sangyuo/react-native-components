import {BORDER_RADIUS, LINE_HEIGHT_SIZE, SIZE_SPACE, TEXT_SIZE} from './Spaces';

interface DefaultTheme {
  colors: {[key: string]: string};
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
  space: {
    size: {[key: string]: number};
    text: {[key: string]: number};
    'line-height': {[key: string]: number};
    rounded: {[key: string]: number};
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
    overlay: 'rgba(0, 0, 0, 0.22)',
    'primary-light': '#AFD1FC',
    'secondary-light': '#E1BEE7',
    'danger-light': '#F87171',
    'warning-light': '#FACC15',
    'success-light': '#4ADE80',
    'primary-dark': '#D7E8FD',
    'secondary-dark': '#DDD6FE',
  },
  scaleOptions: {
    default: 0,
    options: {},
  },
  space: {
    size: SIZE_SPACE,
    text: TEXT_SIZE,
    'line-height': LINE_HEIGHT_SIZE,
    rounded: BORDER_RADIUS,
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
      space: {
        size: {
          ...DEFAULT_THEME.space.size,
          ...config?.theme?.space?.size,
        },
        text: {
          ...DEFAULT_THEME.space.text,
          ...config?.theme?.space?.text,
        },
        'line-height': {
          ...DEFAULT_THEME.space['line-height'],
          ...config?.theme?.space?.['line-height'],
        },
        rounded: {
          ...DEFAULT_THEME.space.rounded,
          ...config?.theme?.space?.rounded,
        },
      },
    };
  } catch (error) {
    return DEFAULT_THEME;
  }
};

export const CONFIG_BOX = getThemeConfig();
