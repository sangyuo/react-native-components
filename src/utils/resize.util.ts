import {Dimensions, StatusBar, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const heightStatusbar = StatusBar.currentHeight || 0;

const horizontalScale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
// scale fontsize
const scaleWidth = width / guidelineBaseWidth;
const scaleHeight = height / guidelineBaseHeight;
const scale = Math.min(scaleWidth, scaleHeight);
const fontSize = (size: number) => Math.ceil(size * scale);

const isIOS = Platform.OS === 'ios';
const device = {
  width,
  height,
};

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  fontSize,
  heightStatusbar,
  isIOS,
  device,
};
