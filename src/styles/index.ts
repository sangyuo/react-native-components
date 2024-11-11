import {styleConfig} from './Theme.styles';
import {ColorStyles} from './Colors.styles';
import {createSizeCustomStyles} from '../utils/styles';
import {StyleProp} from 'react-native';
import {commonStyles} from './common.styles';

const classStyles = {
  ...ColorStyles,
  ...styleConfig,
  ...commonStyles,
};

export const getClassNameStyles = (className: string): StyleProp<any> => {
  try {
    if (className.length > 0) {
      const listClass = className?.split(' ');
      let customStyles: {[key: string]: number} = {};
      customStyles = listClass.reduce(
        (acc, item) => {
          const customClass = item.match(/\[(\d+)\]/);
          let itemStyle = {};
          if (customClass) {
            const typeClass = item?.split(customClass[0]);
            if (typeClass?.length && typeClass[0] && customClass?.[1]) {
              const customsClass = typeClass[0].split(/-$/);
              if (customsClass) {
                itemStyle = createSizeCustomStyles(
                  Number(customClass[1]),
                  customsClass[0],
                );
              }
            }
          } else {
            itemStyle = classStyles[item as never] || {};
          }
          return {...acc, ...itemStyle};
        },
        {...customStyles},
      );
      return customStyles;
    }
    return {};
  } catch (error) {
    return {};
  }
};
