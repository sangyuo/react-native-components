import {CONFIG_BOX} from '../config';
import {ScaleType} from '../model';
import {roundedStylesType, sizeStylesType} from '../styles/Theme.styles';
import {
  fontSize,
  horizontalScale,
  moderateScale,
  verticalScale,
} from './resize.util';

export const createSpaceStyles = (
  stylesOptions: {[key: string]: number},
  propertiesOptions: {[key: string]: string},
  hasSlice?: boolean,
) => {
  const styles: {[key: string]: {[key: string]: number}} = {};
  for (const options in stylesOptions) {
    let value = stylesOptions[options];
    for (const property in propertiesOptions) {
      const styleProperty =
        options === 'default' ? property : `${property}-${options}`;
      const scaleType: ScaleType =
        CONFIG_BOX.scaleOptions?.options?.[
          property as keyof typeof CONFIG_BOX.scaleOptions.options
        ] ?? CONFIG_BOX.scaleOptions.default;
      if (scaleType !== ScaleType.NONE) {
        const fnScale = {
          [ScaleType.HORIZONTAL]: horizontalScale,
          [ScaleType.VERTICAL]: verticalScale,
          [ScaleType.MODERATE]: moderateScale,
          [ScaleType.FONTSIZE]: fontSize,
        };
        value = fnScale[scaleType](value);
      }
      const keyStyle = propertiesOptions[property]?.toString();
      if (hasSlice) {
        const keysStyle = keyStyle.split(' ');
        if (keysStyle.length > 1) {
          keysStyle.forEach(item => {
            styles[styleProperty] = {
              [item]: value,
            };
          });
        } else {
          styles[styleProperty] = {
            [keyStyle]: value,
          };
        }
      } else {
        styles[styleProperty] = {
          [keyStyle]: value,
        };
      }
    }
  }
  return styles;
};

export const createSizeCustomStyles = (value: number, keyStyle: string) => {
  const customsSpaceKey = {
    ...sizeStylesType,
    ...roundedStylesType,
    border: 'borderWidth',
    'border-l': 'borderLeftWidth',
    'border-r': 'borderRightWidth',
    'border-t': 'borderTopWidth',
    'border-b': 'borderBottomWidth',
    'border-x': 'borderLeftWidth borderRightWidth',
    'border-y': 'borderTopWidth borderBottomWidth',
    'line-height': 'lineHeight',
  };
  let styles: {[key: string]: number} = {};
  const scaleType: ScaleType =
    CONFIG_BOX.scaleOptions?.options?.[
      keyStyle as keyof typeof CONFIG_BOX.scaleOptions.options
    ] ?? CONFIG_BOX.scaleOptions.default;
  if (scaleType !== ScaleType.NONE) {
    const fnScale = {
      [ScaleType.HORIZONTAL]: horizontalScale,
      [ScaleType.VERTICAL]: verticalScale,
      [ScaleType.MODERATE]: moderateScale,
      [ScaleType.FONTSIZE]: fontSize,
    };
    value = fnScale[scaleType](value);
  }
  const keyCustom = customsSpaceKey[keyStyle as keyof typeof customsSpaceKey];
  const keysStyle = keyCustom.split(' ');
  if (keysStyle.length > 1) {
    keysStyle.forEach(item => {
      styles[item] = value;
    });
  } else {
    styles = {
      [keyCustom]: value,
    };
  }
  return styles;
};

export const createBaseStyles = (
  stylesOptions: {[key: string]: string},
  propertiesOptions: {[key: string]: string},
  hasSlice?: boolean,
) => {
  const styles: {[key: string]: {[key: string]: string}} = {};
  for (const options in stylesOptions) {
    const value = stylesOptions[options];
    for (const property in propertiesOptions) {
      const styleProperty =
        options === 'default' ? property : `${property}-${options}`;
      const keyStyle = propertiesOptions[property]?.toString();
      if (hasSlice) {
        const keysStyle = keyStyle.split(' ');
        if (keysStyle.length > 1) {
          keysStyle.forEach(item => {
            styles[styleProperty] = {
              [item]: value,
            };
          });
        } else {
          styles[styleProperty] = {
            [keyStyle]: value,
          };
        }
      } else {
        styles[styleProperty] = {
          [keyStyle]: value,
        };
      }
    }
  }
  return styles;
};
