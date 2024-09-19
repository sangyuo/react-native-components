import React, {useMemo, useRef, useState} from 'react';
import Box from '../box';
import {
  Button,
  classNames,
  isEndReachedScroll,
  SwipeBoxProps,
  useClassName,
} from '../..';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import useSpecsSwipeBox from '../../hook/useSpecsSwipeBox';
import useActionSwipeBox from '../../hook/useActionSwipeBox';
import {CONFIG_BOX} from '../../config';

const SwipeBox = ({
  data,
  classBox,
  horizontal,
  showPagination,
  classPageItem,
  classPagination,
  classSliderItem,
  itemWidth,
  enableAnimation,
  classSlider,
  width,
  style,
  currentIndex,
  enableControl,
  pagingEnabled,
  space,
  centerContent,
  renderPageItem,
  renderSliderItem,
  onIndexChanged,
  onScroll,
  onEndReached,
  ...rest
}: SwipeBoxProps) => {
  const [sliderOffset, setSliderOffset] = useState({
    sliderWidth: width ?? 0,
    sliderHeight: 0,
  });
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const timeChangePageRef = useRef<ReturnType<typeof setTimeout> | null>();
  const styleSlider = useClassName(classNames('w-full', classSlider));
  const classControl =
    'absolute top-0 bottom-0 w-8 h-10 bg-overlay rounded center';

  const {sliderItemWidth, spaceItem} = useSpecsSwipeBox({
    itemWidth,
    sliderWidth: sliderOffset.sliderWidth,
    pagingEnabled,
    space,
    centerContent,
  });

  const {activeIndex, sliderRef, maxIndex, handleControl, setActiveIndex} =
    useActionSwipeBox({
      sliderItemWidth,
      spaceItem,
      horizontal,
      data,
      defaultIndex: currentIndex,
    });

  const onScrollListener = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    onScroll && onScroll(event);
    if (timeChangePageRef.current) {
      clearTimeout(timeChangePageRef.current);
      timeChangePageRef.current = null;
    }
    const {nativeEvent} = event;
    timeChangePageRef.current = setTimeout(() => {
      if (
        isEndReachedScroll({
          ...nativeEvent,
          itemWidth: sliderItemWidth,
          horizontal,
          space: spaceItem,
        })
      ) {
        onEndReached && onEndReached();
        setActiveIndex(maxIndex);
        onIndexChanged && onIndexChanged(maxIndex);
      } else {
        const targetOffset = horizontal
          ? nativeEvent.contentOffset.x
          : nativeEvent.contentOffset.y;
        if (sliderItemWidth) {
          const index = Math.round(
            targetOffset / (sliderItemWidth + spaceItem),
          );
          if (index !== activeIndex) {
            setActiveIndex(index);
            onIndexChanged && onIndexChanged(index);
          }
        }
      }
    }, 250);
  };

  const onLayoutSlider = ({nativeEvent}: LayoutChangeEvent) => {
    if (
      sliderOffset.sliderWidth !== nativeEvent.layout.width ||
      sliderOffset.sliderHeight !== nativeEvent.layout.height
    ) {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      timeRef.current = setTimeout(() => {
        setSliderOffset({
          sliderWidth: nativeEvent.layout.width,
          sliderHeight: nativeEvent.layout.height,
        });
      }, 100);
    }
  };

  const classCustomItem = useMemo(() => {
    if (centerContent) {
      return horizontal ? `mx-[${spaceItem / 2}]` : `mx-[${spaceItem / 2}]`;
    } else {
      return `gap-[${spaceItem}]`;
    }
  }, [centerContent, spaceItem]);

  const renderItem = () => {
    if (sliderItemWidth > 0) {
      return data?.map((item, index) => {
        if (enableAnimation) {
          return (
            <Box
              className={classNames(classCustomItem, classSliderItem)}
              key={item.id + index}
              style={[{width: sliderItemWidth}]}>
              {renderSliderItem(item, index)}
            </Box>
          );
        }
        return renderSliderItem(item, index);
      });
    }
    return null;
  };

  const renderPagination = () => {
    if (showPagination) {
      const pageItem = data?.map((item, index) => {
        if (renderPageItem) {
          return renderPageItem(item, index);
        }
        return (
          <Box
            key={item.id + index}
            className={classNames(
              'w-2 h-2 bg-gray-400 rounded-full',
              classPageItem,
              activeIndex === index ? 'bg-primary' : '',
            )}
          />
        );
      });
      return (
        <Box
          className={classNames(
            'row gap-1 justify-center absolute bottom-1 self-center ',
            classPagination,
          )}>
          {pageItem}
        </Box>
      );
    }
    return null;
  };

  const renderControl = () => {
    if (enableControl) {
      return (
        <>
          <Button
            enableDebounce
            disabled={activeIndex === 0}
            style={{
              transform: [{translateY: sliderOffset.sliderHeight / 2 - 20}],
            }}
            onPress={() => handleControl('prev')}
            className={classNames(classControl, 'left-2')}>
            <Svg width="19" height="34" viewBox="0 0 19 34" fill="none">
              <Path
                d="M17 32L3 17L17 1.99999"
                stroke={CONFIG_BOX.colors.primary}
                strokeWidth="4"
              />
            </Svg>
          </Button>
          <Button
            enableDebounce
            disabled={activeIndex === maxIndex}
            onPress={() => handleControl('next')}
            style={{
              transform: [{translateY: sliderOffset.sliderHeight / 2 - 20}],
            }}
            className={classNames(classControl, 'right-2')}>
            <Svg width="19" height="34" viewBox="0 0 19 34" fill="none">
              <Path
                d="M2 2L16 17L2 32"
                stroke={CONFIG_BOX.colors.primary}
                strokeWidth="4"
              />
            </Svg>
          </Button>
        </>
      );
    }
    return null;
  };

  return (
    <Box
      className={classNames('relative', classBox)}
      style={width ? {width} : {}}
      onLayout={onLayoutSlider}>
      <ScrollView
        {...rest}
        ref={sliderRef}
        style={[styleSlider, style]}
        horizontal={horizontal}
        onScroll={onScrollListener}
        pagingEnabled={pagingEnabled}>
        {renderItem()}
      </ScrollView>
      {renderPagination()}
      {renderControl()}
    </Box>
  );
};

SwipeBox.defaultProps = {
  currentIndex: 0,
  space: 0,
  spaceEndReach: 0,
  classBox: '',
  classSlider: '',
  classSliderItem: '',
  classPageItem: '',
  classPagination: '',
  horizontal: true,
  enableAnimation: true,
  showPagination: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  enableControl: false,
  pagingEnabled: true,
  centerContent: true,
};

export default SwipeBox;
