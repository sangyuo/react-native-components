import React, {useMemo} from 'react';
import {Svg, SvgProps} from 'react-native-svg';
import {VarianColor} from '../../model';
import {useVarianColor} from '../../hook';
import {Box} from '..';
const ICON_WIDTH = 24;
const ICON_HEIGHT = 24;
interface SvgProviderProps extends SvgProps {
  varian?: VarianColor;
  autoResize?: boolean;
  aspectRatio?: number;
  originalWidth?: number;
  originalHeight?: number;
  width?: number;
}

export const SvgProvider = ({
  children,
  height,
  width,
  varian,
  fill,
  originalWidth = ICON_WIDTH,
  originalHeight = ICON_HEIGHT,
  ...rest
}: SvgProviderProps) => {
  const theme = useVarianColor({varian, enableNull: true});
  const widthIcon = useMemo(
    () => width ?? originalWidth,
    [width, originalWidth],
  ) as number;

  const aspectRatio = useMemo(
    () => originalWidth / originalHeight,
    [originalWidth, originalHeight],
  );
  const heightIcon = useMemo(() => {
    if (height) {
      return height;
    }
    if (width) {
      return Math.floor(width * (width / originalWidth));
    }
    return originalHeight;
  }, [height, originalWidth, originalHeight, width]);

  return (
    <Box
      className={`w-[${widthIcon}] h-[${heightIcon}] aspectRatio[${aspectRatio}]`}>
      <Svg
        height={'100%'}
        width={'100%'}
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        fill={fill ?? theme?.color}
        {...rest}>
        {children}
      </Svg>
    </Box>
  );
};
