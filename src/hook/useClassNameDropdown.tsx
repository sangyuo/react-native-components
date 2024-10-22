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
  return useMemo(() => {
    const classDefault = 'absolute z-9 bg-white rounded-md border gap-1 py-2';

    // Get width and height
    let width = offset?.width || offsetLayout?.width;
    const heightClass = offset?.height ? `h-[${offset?.height}]` : 'h-auto';

    // Calculate positions
    const positionTop = offset?.top ?? offsetLayout?.top;
    const positionLeft = offset?.left ?? offsetLayout?.left ?? 0;
    const bottomPositionClass = isNumber(offset?.bottom)
      ? `bottom-[${offset?.bottom}]`
      : '';

    // Max dimensions
    let maxHeight = maxContent?.height || 0;
    let maxWidth = maxContent?.width || 0;
    if (positionTop) {
      maxHeight -= positionTop;
    }

    // Position for right-to-left layouts
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

    // Determine class for left/right positioning
    const positionLeftClass = `left-[${positionLeft}]`;
    const rightPositionClass = positionRight ? `right-[${positionRight}]` : '';

    // Adjust width based on RTL and full-width option
    if (classOption?.includes('w-full')) {
      classOption = classOption.replace('w-full', '');
      const effectiveWidth =
        enableRightToLeft && positionRight
          ? maxWidthOption - positionRight
          : maxWidthOption - (positionLeft ?? 0);
      width = Math.floor(effectiveWidth);
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
}
