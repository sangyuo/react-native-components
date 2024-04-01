import {flexStyles, gapNoneScaleStyles, gapStyles} from './Flex.styles';
import {classBorderNoneScaleStyles, classBorderStyles} from './Border.styles';
import {classMarginNoneScaleStyle, classMarginStyle} from './Margin.styles';
import {classPaddingNoneScaleStyle, classPaddingStyle} from './Padding.styles';
import {
  classPositionNoneScaleStyle,
  classPositionStyle,
} from './Position.styles';
import {classSizeNoneScaleStyle, classSizeStyle} from './Size.styles';
import {ClassStyleType} from '../model';

const classStyles = {
  ...flexStyles,
  ...gapStyles,
  ...classBorderStyles,
  ...classMarginStyle,
  ...classPaddingStyle,
  ...classPositionStyle,
  ...classSizeStyle,
};

const classNoneScaleStyles = {
  ...flexStyles,
  ...gapNoneScaleStyles,
  ...classBorderNoneScaleStyles,
  ...classMarginNoneScaleStyle,
  ...classPaddingNoneScaleStyle,
  ...classPositionNoneScaleStyle,
  ...classSizeNoneScaleStyle,
};

export const getClassStyles = (
  className: ClassStyleType | ClassStyleType[],
  scaleScreen = true,
) => {
  if (Array.isArray(className)) {
    if (className.length > 0) {
      const listStyle: any[] = className.map(item =>
        getClassStyles(item, scaleScreen),
      );
      return listStyle;
    }
    return [{}];
  } else {
    if (scaleScreen) {
      return classStyles[className];
    }
    return classNoneScaleStyles[className];
  }
};
