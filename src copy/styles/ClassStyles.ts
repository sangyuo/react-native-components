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
import {
  textFontSizeNoneScaleStyle,
  textFontSizeStyle,
  textStyles,
} from './Text.styles';
import {backgroundColorStyle} from './background.styles';

const classStyles = {
  ...flexStyles,
  ...gapStyles,
  ...classBorderStyles,
  ...classMarginStyle,
  ...classPaddingStyle,
  ...classPositionStyle,
  ...classSizeStyle,
  ...textStyles,
  ...backgroundColorStyle,
  ...textFontSizeStyle,
};

const classNoneScaleStyles = {
  ...flexStyles,
  ...gapNoneScaleStyles,
  ...classBorderNoneScaleStyles,
  ...classMarginNoneScaleStyle,
  ...classPaddingNoneScaleStyle,
  ...classPositionNoneScaleStyle,
  ...classSizeNoneScaleStyle,
  ...backgroundColorStyle,
  ...textStyles,
  ...textFontSizeNoneScaleStyle,
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

export const getClassNameStyles = (className: string, scaleScreen = true) => {
  try {
    if (className.length > 0) {
      const listClass = className?.split(' ');
      const listStyles = scaleScreen ? classStyles : classNoneScaleStyles;
      return listClass.map(item => {
        try {
          return listStyles[item as never];
        } catch (error) {
          return {};
        }
      });
    }
    return {};
  } catch (error) {
    return {};
  }
};
