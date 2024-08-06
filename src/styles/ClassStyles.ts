import {flexStyles} from './Flex.styles';
import {classBorderStyles} from './Border.styles';
import {sizeRatioStyles} from './Size.styles';
import {textStyles} from './Text.styles';
import {styleConfig} from './Theme.styles';
import {ColorStyles} from './Colors.styles';
import {positionStyles} from './Position.styles';
import {createSizeCustomStyles} from '../utils/styles';

const classStyles = {
  ...sizeRatioStyles,
  ...positionStyles,
  ...ColorStyles,
  ...styleConfig,
  ...flexStyles,
  ...classBorderStyles,
  ...textStyles,
};

export const getClassNameStyles = (className: string) => {
  try {
    if (className.length > 0) {
      const listClass = className?.split(' ');
      return listClass.map(item => {
        try {
          const customClass = item.match(/\[(\d+)\]/);
          if (customClass) {
            const typeClass = item?.split(customClass[0]);
            if (typeClass?.length && typeClass[0] && customClass?.[1]) {
              const customsClass = typeClass[0].split(/-$/);
              if (customsClass) {
                return createSizeCustomStyles(
                  Number(customClass[1]),
                  customsClass[0],
                );
              }
            }
            return {};
          } else {
            return classStyles[item as never] || {};
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
