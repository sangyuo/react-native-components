import {useEffect, useMemo, useRef, useState} from 'react';
import {ScrollView} from 'react-native';

interface Props {
  spaceItem: number;
  sliderItemWidth: number;
  centerContent?: boolean;
  horizontal?: boolean | null;
  data: any[];
  defaultIndex: number;
}

export default function useActionSliderBox({
  sliderItemWidth,
  spaceItem,
  horizontal,
  defaultIndex,
  data,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<ScrollView>(null);
  const maxIndex = useMemo(() => data?.length - 1 ?? 0, [data]);

  useEffect(() => {
    if (defaultIndex) {
      setTimeout(() => {
        handleScrollToIndex(defaultIndex);
      }, 0);
    }
  }, [defaultIndex]);

  const handleControl = (type: 'next' | 'prev') => {
    if (sliderRef?.current) {
      const nextIndex =
        type === 'next'
          ? Math.min(activeIndex + 1, maxIndex)
          : Math.max(activeIndex - 1, 0);
      handleScrollToIndex(nextIndex);
    }
  };

  const handleScrollToIndex = (index: number) => {
    if (sliderRef?.current) {
      const nextIndex = index * (sliderItemWidth + spaceItem);
      const offset = horizontal ? {y: 0, x: nextIndex} : {y: nextIndex, x: 0};
      sliderRef.current.scrollTo({
        ...offset,
        animated: true,
      });
    }
  };

  return {
    activeIndex,
    maxIndex,
    sliderRef,
    handleControl,
    handleScrollToIndex,
    setActiveIndex,
  };
}
