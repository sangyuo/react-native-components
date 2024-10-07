import {OnEndReachedProps} from '../model';

export const classNames = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

export const isEndReachedScroll = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
  space,
  horizontal,
}: OnEndReachedProps) => {
  const offset = horizontal ? contentOffset.x : contentOffset.y;
  const layoutSize = horizontal
    ? layoutMeasurement.width
    : layoutMeasurement.height;
  const content = horizontal ? contentSize.width : contentSize.height;
  return layoutSize + offset >= content - space;
};

export const isNumber = (value: any) => typeof value === 'number';
