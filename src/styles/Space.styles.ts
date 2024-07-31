import {StyleSheet} from 'react-native';
import {createSpaceStyles} from '../utils/styles';
import {SIZE_SPACE} from '../config/Spaces';

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

export const spaceStyles = StyleSheet.create(
  createSpaceStyles(SIZE_SPACE, sizeStylesType),
);
