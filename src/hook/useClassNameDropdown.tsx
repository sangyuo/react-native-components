import {useMemo} from 'react';
import {classNames, isNumber} from '../utils';

interface OffsetType {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
}

interface Props {
  offset?: OffsetType;
  offsetLayout?: OffsetType;
  classOption?: string;
  enableScroll?: boolean;
  classTheme?: string;
  enableRightToLeft?: boolean;
  maxWidthOption: number;
  maxContent?: OffsetType;
}

export default function useClassNameDropdown({
  classOption,
  offset,
  offsetLayout,
  enableScroll,
  classTheme,
  enableRightToLeft,
  maxWidthOption,
  maxContent,
}: Props) {
  const className = useMemo(() => {
    const classDefault = 'absolute z-9 bg-white rounded-md border gap-1 py-2';
    let width = offset?.width || offsetLayout?.width;
    const heightClass = offset?.height ? `h-[${offset?.height}]` : 'h-auto';
    const positionTop = offset?.top ?? offsetLayout?.top;
    const bottomPositionClass = isNumber(offset?.bottom)
      ? `bottom-[${offset?.bottom}]`
      : '';
    let maxHeight = maxContent?.height || 0;
    let maxWidth = maxContent?.width || 0;
    if (positionTop) {
      maxHeight -= positionTop;
    }

    const positionLeft = offset?.left ?? offsetLayout?.left ?? 0;
    const positionLeftClass = `left-[${positionLeft}]`;

    let positionRight = offset?.right;
    if (enableRightToLeft && !positionRight) {
      positionRight = Math.floor(
        maxWidthOption -
          ((offset?.left ?? offsetLayout?.left ?? 0) +
            (offsetLayout?.width ?? 0)),
      );
      maxWidth -= positionRight;
    } else {
      maxWidth -= positionLeft;
    }
    const rightPositionClass = positionRight ? `right-[${positionRight}]` : '';
    if (classOption?.includes('w-full')) {
      classOption = classOption.replace('w-full', '');
      if (enableRightToLeft && positionRight) {
        width = maxWidthOption - positionRight;
      } else {
        width = maxWidthOption - (positionLeft ?? 0);
      }
      width = Math.floor(width);
    }

    return classNames(
      classDefault,
      `w-[${width}]`,
      `top-[${positionTop}]`,
      `max-h-[${maxHeight}]`,
      `max-w-[${maxWidth}]`,
      heightClass,
      bottomPositionClass,
      classTheme,
      classOption,
      enableRightToLeft ? rightPositionClass : positionLeftClass,
    );
  }, [
    classOption,
    offset,
    offsetLayout,
    enableScroll,
    enableRightToLeft,
    maxContent,
  ]);

  return className;
}
