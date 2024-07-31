import {StyleSheet} from 'react-native';
import {LINE_HEIGHT_SIZE, TEXT_SIZE} from '../config/Spaces';
import {createSpaceStyles} from '../utils/styles';

const textFontStyle = StyleSheet.create({
  'text-center': {
    textAlign: 'center',
  },
  'text-left': {
    textAlign: 'left',
  },
  'text-right': {
    textAlign: 'right',
  },
  'text-auto': {
    textAlign: 'auto',
  },
  'text-justify': {
    textAlign: 'justify',
  },
  'font-thin': {
    fontWeight: '100',
  },
  'font-extraLight': {
    fontWeight: '200',
  },
  'font-light': {
    fontWeight: '300',
  },
  'font-normal': {
    fontWeight: '400',
  },
  'font-medium': {
    fontWeight: '500',
  },
  'font-semibold': {
    fontWeight: '600',
  },
  'font-bold': {
    fontWeight: '700',
  },
  'font-extrabold': {
    fontWeight: '800',
  },
  'font-black': {
    fontWeight: '900',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  'text-italic': {
    fontStyle: 'italic',
  },
  'underline-solid': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  'underline-double': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
  },
  'underline-dotted': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  'underline-dashed': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
  },
  'underline-through': {
    textDecorationLine: 'line-through',
  },
  'underline-underline-through': {
    textDecorationLine: 'underline line-through',
  },
  'no-underline': {
    textDecorationLine: 'none',
  },
});

export const textStyles = {
  ...textFontStyle,
  ...createSpaceStyles(TEXT_SIZE, {
    text: 'fontSize',
  }),
  ...createSpaceStyles(LINE_HEIGHT_SIZE, {
    'line-height': 'lineHeight',
  }),
};
