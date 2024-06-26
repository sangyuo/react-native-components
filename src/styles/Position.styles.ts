import {StyleSheet} from 'react-native';
import {horizontalScale} from '../utils';

const positionStyles = StyleSheet.create({
  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
});

const topStyles = StyleSheet.create({
  'top-0': {top: 0},
  'top-0.5': {top: horizontalScale(2)},
  'top-1': {top: horizontalScale(4)},
  'top-1.5': {top: horizontalScale(6)},
  'top-2': {top: horizontalScale(8)},
  'top-2.5': {top: horizontalScale(10)},
  'top-3': {top: horizontalScale(12)},
  'top-3.5': {top: horizontalScale(14)},
  'top-4': {top: horizontalScale(16)},
  'top-5': {top: horizontalScale(20)},
  'top-6': {top: horizontalScale(24)},
  'top-7': {top: horizontalScale(28)},
  'top-8': {top: horizontalScale(32)},
  'top-9': {top: horizontalScale(36)},
  'top-10': {top: horizontalScale(40)},
  'top-11': {top: horizontalScale(44)},
  'top-12': {top: horizontalScale(48)},
  'top-14': {top: horizontalScale(56)},
  'top-16': {top: horizontalScale(64)},
});

const leftStyles = StyleSheet.create({
  'left-0': {left: 0},
  'left-0.5': {left: horizontalScale(2)},
  'left-1': {left: horizontalScale(4)},
  'left-1.5': {left: horizontalScale(6)},
  'left-2': {left: horizontalScale(8)},
  'left-2.5': {left: horizontalScale(10)},
  'left-3': {left: horizontalScale(12)},
  'left-3.5': {left: horizontalScale(14)},
  'left-4': {left: horizontalScale(16)},
  'left-5': {left: horizontalScale(20)},
  'left-6': {left: horizontalScale(24)},
  'left-7': {left: horizontalScale(28)},
  'left-8': {left: horizontalScale(32)},
  'left-9': {left: horizontalScale(36)},
  'left-10': {left: horizontalScale(40)},
  'left-11': {left: horizontalScale(44)},
  'left-12': {left: horizontalScale(48)},
  'left-14': {left: horizontalScale(56)},
  'left-16': {left: horizontalScale(64)},
});

const bottomStyles = StyleSheet.create({
  'bottom-0': {bottom: 0},
  'bottom-0.5': {bottom: horizontalScale(2)},
  'bottom-1': {bottom: horizontalScale(4)},
  'bottom-1.5': {bottom: horizontalScale(6)},
  'bottom-2': {bottom: horizontalScale(8)},
  'bottom-2.5': {bottom: horizontalScale(10)},
  'bottom-3': {bottom: horizontalScale(12)},
  'bottom-3.5': {bottom: horizontalScale(14)},
  'bottom-4': {bottom: horizontalScale(16)},
  'bottom-5': {bottom: horizontalScale(20)},
  'bottom-6': {bottom: horizontalScale(24)},
  'bottom-7': {bottom: horizontalScale(28)},
  'bottom-8': {bottom: horizontalScale(32)},
  'bottom-9': {bottom: horizontalScale(36)},
  'bottom-10': {bottom: horizontalScale(40)},
  'bottom-11': {bottom: horizontalScale(44)},
  'bottom-12': {bottom: horizontalScale(48)},
  'bottom-14': {bottom: horizontalScale(56)},
  'bottom-16': {bottom: horizontalScale(64)},
});

const rightStyles = StyleSheet.create({
  'right-0': {right: 0},
  'right-0.5': {right: horizontalScale(2)},
  'right-1': {right: horizontalScale(4)},
  'right-1.5': {right: horizontalScale(6)},
  'right-2': {right: horizontalScale(8)},
  'right-2.5': {right: horizontalScale(10)},
  'right-3': {right: horizontalScale(12)},
  'right-3.5': {right: horizontalScale(14)},
  'right-4': {right: horizontalScale(16)},
  'right-5': {right: horizontalScale(20)},
  'right-6': {right: horizontalScale(24)},
  'right-7': {right: horizontalScale(28)},
  'right-8': {right: horizontalScale(32)},
  'right-9': {right: horizontalScale(36)},
  'right-10': {right: horizontalScale(40)},
  'right-11': {right: horizontalScale(44)},
  'right-12': {right: horizontalScale(48)},
  'right-14': {right: horizontalScale(56)},
  'right-16': {right: horizontalScale(64)},
});

const zIndexStyles = StyleSheet.create({
  '-z-1': {zIndex: -1},
  '-z-2': {zIndex: -2},
  '-z-3': {zIndex: -3},
  'z-0': {zIndex: 0},
  'z-1': {zIndex: 1},
  'z-2': {zIndex: 2},
  'z-3': {zIndex: 3},
  'z-4': {zIndex: 4},
  'z-5': {zIndex: 5},
  'z-6': {zIndex: 6},
  'z-7': {zIndex: 7},
  'z-8': {zIndex: 8},
  'z-9': {zIndex: 9},
  'z-9999': {zIndex: 9999},
});

const topNoneScaleStyles = StyleSheet.create({
  'top-0': {top: 0},
  'top-0.5': {top: 2},
  'top-1': {top: 4},
  'top-1.5': {top: 6},
  'top-2': {top: 8},
  'top-2.5': {top: 10},
  'top-3': {top: 12},
  'top-3.5': {top: 14},
  'top-4': {top: 16},
  'top-5': {top: 20},
  'top-6': {top: 24},
  'top-7': {top: 28},
  'top-8': {top: 32},
  'top-9': {top: 36},
  'top-10': {top: 40},
  'top-11': {top: 44},
  'top-12': {top: 48},
  'top-14': {top: 56},
  'top-16': {top: 64},
});

const leftNoneScaleStyles = StyleSheet.create({
  'left-0': {left: 0},
  'left-0.5': {left: 2},
  'left-1': {left: 4},
  'left-1.5': {left: 6},
  'left-2': {left: 8},
  'left-2.5': {left: 10},
  'left-3': {left: 12},
  'left-3.5': {left: 14},
  'left-4': {left: 16},
  'left-5': {left: 20},
  'left-6': {left: 24},
  'left-7': {left: 28},
  'left-8': {left: 32},
  'left-9': {left: 36},
  'left-10': {left: 40},
  'left-11': {left: 44},
  'left-12': {left: 48},
  'left-14': {left: 56},
  'left-16': {left: 64},
});

const bottomNoneScaleStyles = StyleSheet.create({
  'bottom-0': {bottom: 0},
  'bottom-0.5': {bottom: 2},
  'bottom-1': {bottom: 4},
  'bottom-1.5': {bottom: 6},
  'bottom-2': {bottom: 8},
  'bottom-2.5': {bottom: 10},
  'bottom-3': {bottom: 12},
  'bottom-3.5': {bottom: 14},
  'bottom-4': {bottom: 16},
  'bottom-5': {bottom: 20},
  'bottom-6': {bottom: 24},
  'bottom-7': {bottom: 28},
  'bottom-8': {bottom: 32},
  'bottom-9': {bottom: 36},
  'bottom-10': {bottom: 40},
  'bottom-11': {bottom: 44},
  'bottom-12': {bottom: 48},
  'bottom-14': {bottom: 56},
  'bottom-16': {bottom: 64},
});

const rightNoneScaleStyles = StyleSheet.create({
  'right-0': {right: 0},
  'right-0.5': {right: 2},
  'right-1': {right: 4},
  'right-1.5': {right: 6},
  'right-2': {right: 8},
  'right-2.5': {right: 10},
  'right-3': {right: 12},
  'right-3.5': {right: 14},
  'right-4': {right: 16},
  'right-5': {right: 20},
  'right-6': {right: 24},
  'right-7': {right: 28},
  'right-8': {right: 32},
  'right-9': {right: 36},
  'right-10': {right: 40},
  'right-11': {right: 44},
  'right-12': {right: 48},
  'right-14': {right: 56},
  'right-16': {right: 64},
});

export const classPositionStyle = {
  ...positionStyles,
  ...rightStyles,
  ...bottomStyles,
  ...leftStyles,
  ...topStyles,
  ...zIndexStyles,
};
export const classPositionNoneScaleStyle = {
  ...positionStyles,
  ...rightNoneScaleStyles,
  ...bottomNoneScaleStyles,
  ...leftNoneScaleStyles,
  ...topNoneScaleStyles,
  ...zIndexStyles,
};
