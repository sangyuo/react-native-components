import {StyleSheet} from 'react-native';
import {CONFIG_BOX} from '../config';
import {createBaseStyles, createSpaceStyles} from '../utils/styles';

const colorPropertiesKey = {
  bg: 'backgroundColor',
  text: 'color',
  border: 'borderColor',
  'border-top': 'borderTopColor',
  'border-bottom': 'borderBottomColor',
  'border-left': 'borderLeftColor',
  'border-right': 'borderRightColor',
  'border-x': 'borderLeftColor borderRightColor',
  'border-y': 'borderTopColor borderBottomColor',
  shadow: 'shadowColor',
};

export const sizeStylesType = {
  gap: 'gap',
  'row-gap': 'rowGap',
  'col-gap': 'columnGap',
  m: 'margin',
  mt: 'marginTop',
  ml: 'marginLeft',
  mb: 'marginBottom',
  mr: 'marginRight',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pt: 'paddingTop',
  pl: 'paddingLeft',
  pb: 'paddingBottom',
  pr: 'paddingRight',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  w: 'width',
  'max-w': 'maxWidth',
  'min-w': 'minWidth',
  h: 'height',
  'max-h': 'maxHeight',
  'min-h': 'minHeight',
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
};

export const roundedStylesType = {
  rounded: 'borderRadius',
  'rounded-tl': 'borderTopLeftRadius',
  'rounded-tr': 'borderTopRightRadius',
  'rounded-bl': 'borderBottomLeftRadius',
  'rounded-br': 'borderBottomRightRadius',
  'rounded-t': 'borderTopLeftRadius borderTopRightRadius',
  'rounded-b': 'borderBottomLeftRadius borderBottomRightRadius',
  'rounded-l': 'borderTopLeftRadius borderBottomLeftRadius',
  'rounded-r': 'borderTopRightRadius borderBottomRightRadius',
};

export const styleConfig = StyleSheet.create({
  ...createBaseStyles(CONFIG_BOX.colors, colorPropertiesKey, true),
  ...createSpaceStyles(CONFIG_BOX.space.rounded, roundedStylesType, true),
  ...createSpaceStyles(CONFIG_BOX.space.size, sizeStylesType),
  ...createSpaceStyles(CONFIG_BOX.space.text, {text: 'fontSize'}),
  ...createSpaceStyles(CONFIG_BOX.space['line-height'], {
    'line-height': 'lineHeight',
  }),
});
