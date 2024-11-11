import React, {useRef} from 'react';
import {Box} from '..';
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  ViewProps,
} from 'react-native';
import {insertObjectIf} from '../../utils';

const swipeConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 5,
};

type SwipeDirectionType =
  | 'SWIPE_LEFT'
  | 'SWIPE_RIGHT'
  | 'SWIPE_UP'
  | 'SWIPE_DOWN';

export interface PanResponderBoxProps extends ViewProps {
  enableResponderMove?: boolean;
  className?: string;
  onSwipe?: (type: SwipeDirectionType, value: PanResponderGestureState) => void;
  onSwipeLeft?: (value: PanResponderGestureState) => void;
  onSwipeRight?: (value: PanResponderGestureState) => void;
  onSwipeUp?: (value: PanResponderGestureState) => void;
  onSwipeDown?: (value: PanResponderGestureState) => void;
}

const PanResponderBox = ({
  enableResponderMove = false,
  onSwipe,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
  ...rest
}: PanResponderBoxProps) => {
  const handleShouldSetPanResponder = (
    evt: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    return (
      evt.nativeEvent.touches.length === 1 &&
      Math.abs(gestureState.dx) < swipeConfig.gestureIsClickThreshold &&
      Math.abs(gestureState.dy) < swipeConfig.gestureIsClickThreshold
    );
  };

  const onPanResponderEnd = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    const swipeDirection = getSwipeDirection(gestureState);
    if (swipeDirection) {
      onSwipe && onSwipe(getSwipeDirection(gestureState)!, gestureState);
      switch (getSwipeDirection(gestureState)) {
        case 'SWIPE_LEFT':
          onSwipeLeft && onSwipeLeft(gestureState);
          break;
        case 'SWIPE_RIGHT':
          onSwipeRight && onSwipeRight(gestureState);
          break;
        case 'SWIPE_UP':
          onSwipeUp && onSwipeUp(gestureState);
          break;
        case 'SWIPE_DOWN':
          onSwipeDown && onSwipeDown(gestureState);
          break;
        default:
          break;
      }
    }
  };

  const getSwipeDirection = (
    gestureState: PanResponderGestureState,
  ): SwipeDirectionType | null => {
    const {dx, dy, vx} = gestureState;
    if (isValidSwipe(vx, dy)) {
      return dx > 0 ? 'SWIPE_RIGHT' : 'SWIPE_LEFT';
    }
    if (isValidSwipe(vx, dx)) {
      return dy > 0 ? 'SWIPE_DOWN' : 'SWIPE_UP';
    }
    return null;
  };

  function isValidSwipe(velocity: number, directionalOffset: number) {
    return (
      Math.abs(velocity) > swipeConfig.velocityThreshold &&
      Math.abs(directionalOffset) < swipeConfig.directionalOffsetThreshold
    );
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: handleShouldSetPanResponder,
      onMoveShouldSetPanResponder: handleShouldSetPanResponder,
      onPanResponderRelease: onPanResponderEnd,
      ...insertObjectIf(enableResponderMove, {
        onPanResponderMove: onPanResponderEnd,
      }),
    }),
  ).current;
  return <Box {...rest} {...panResponder.panHandlers} />;
};

export default PanResponderBox;
