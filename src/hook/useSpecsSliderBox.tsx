import {useMemo} from 'react';

interface Props {
  sliderWidth: number;
  space?: number;
  itemWidth?: number;
  pagingEnabled?: boolean;
  centerContent?: boolean;
}

export default function useSpecsSliderBox({
  itemWidth,
  sliderWidth,
  pagingEnabled,
  space,
}: Props) {
  return useMemo(() => {
    let spaceItem = space ?? 0;
    let sliderItemWidth = itemWidth ?? sliderWidth;
    if (pagingEnabled) {
      if (itemWidth) {
        spaceItem = sliderWidth - itemWidth;
      }
      if (space && !itemWidth) {
        sliderItemWidth -= space;
      }
    } else {
      if (space && !itemWidth) {
        sliderItemWidth -= space;
      }
    }
    return {spaceItem, sliderItemWidth};
  }, [itemWidth, sliderWidth, pagingEnabled]);
}
