import {flexStyles, gapNoneScaleStyles, gapStyles} from './Flex.styles';
import {classBorderNoneScaleStyles, classBorderStyles} from './Border.styles';
import {classMarginNoneScaleStyle, classMarginStyle} from './Margin.styles';
import {classPaddingNoneScaleStyle, classPaddingStyle} from './Padding.styles';
import {
  classPositionNoneScaleStyle,
  classPositionStyle,
} from './Position.styles';
import {classSizeNoneScaleStyle, classSizeStyle} from './Size.styles';
import {
  textFontSizeNoneScaleStyle,
  textFontSizeStyle,
  textStyles,
} from './Text.styles';
import {backgroundColorStyle, opacityStyles} from './background.styles';
import {ClassCustomType} from '../model';

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
  ...opacityStyles,
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
  ...opacityStyles,
};

export const getClassNameStyles = (className: string, scaleScreen = true) => {
  try {
    if (className.length > 0) {
      const listClass = className?.split(' ');
      const listStyles = scaleScreen ? classStyles : classNoneScaleStyles;
      return listClass.map(item => {
        try {
          const customClass = item.match(/\[(\d+)\]/);
          if (customClass) {
            const typeClass = item?.split(customClass[0]);
            if (typeClass?.length && typeClass[0] && customClass?.[1]) {
              return generalClassCustom(typeClass[0], Number(customClass[1]));
            }
            return {};
          } else {
            return listStyles[item as never] || {};
          }
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

const generalClassCustom = (typeClass: string, value: number) => {
  switch (typeClass) {
    case ClassCustomType.MARGIN:
      return {margin: value};
    case ClassCustomType.MARGIN_LEFT:
      return {marginLeft: value};
    case ClassCustomType.MARGIN_RIGHT:
      return {marginRight: value};
    case ClassCustomType.MARGIN_TOP:
      return {marginTop: value};
    case ClassCustomType.MARGIN_BOTTOM:
      return {marginBottom: value};
    case ClassCustomType.MARGIN_X:
      return {marginHorizontal: value};
    case ClassCustomType.MARGIN_Y:
      return {marginVertical: value};
    case ClassCustomType.PADDING:
      return {padding: value};
    case ClassCustomType.PADDING_LEFT:
      return {paddingLeft: value};
    case ClassCustomType.PADDING_RIGHT:
      return {paddingRight: value};
    case ClassCustomType.PADDING_TOP:
      return {paddingTop: value};
    case ClassCustomType.PADDING_BOTTOM:
      return {paddingBottom: value};
    case ClassCustomType.PADDING_X:
      return {paddingHorizontal: value};
    case ClassCustomType.PADDING_Y:
      return {paddingVertical: value};
    case ClassCustomType.WIDTH:
      return {width: value};
    case ClassCustomType.MAX_WIDTH:
      return {maxWidth: value};
    case ClassCustomType.MIN_WIDTH:
      return {minWidth: value};
    case ClassCustomType.HEIGHT:
      return {height: value};
    case ClassCustomType.MAX_HEIGHT:
      return {maxHeight: value};
    case ClassCustomType.MIN_HEIGHT:
      return {minHeight: value};
    case ClassCustomType.TOP:
      return {top: value};
    case ClassCustomType.LEFT:
      return {left: value};
    case ClassCustomType.RIGHT:
      return {right: value};
    case ClassCustomType.BOTTOM:
      return {bottom: value};
    case ClassCustomType.TEXT:
      return {fontSize: value};
    case ClassCustomType.GAP:
      return {gap: value};
    case ClassCustomType.ROW_GAP:
      return {rowGap: value};
    case ClassCustomType.COL_GAP:
      return {columnGap: value};
    default:
      return {};
  }
};
