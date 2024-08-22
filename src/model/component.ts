import {
  ImageRequireSource,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  NativeScrollEvent,
  ScrollViewProps,
  StyleProp,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import {ImageType, Varian, VarianCheckbox, VarianColor} from '.';
import {ReactNode} from 'react';
import {Source} from 'react-native-fast-image';

interface checkedType {
  checked?: string;
  unchecked?: string;
}
export interface BoxProps extends ViewProps {
  className: string;
}

export interface ButtonComponentProps extends TouchableOpacityProps {
  className?: string;
  classNameText?: string;
  enableDebounce?: boolean;
  delayDebounce?: number;
  varian?: Varian;
  title?: string;
}

export interface CheckBoxProps<ItemT = any> {
  className?: string;
  classNameParent?: string;
  classNameChildren?: string;
  classNameLabel?: string;
  classNameStatus?: checkedType;
  checked?: boolean;
  value?: ItemT;
  label?: string;
  size?: number;
  iconColor?: string;
  iconChecked?: ImageSourcePropType;
  iconSize?: number;
  enableDebounce?: boolean;
  delayDebounce?: number;
  resizeMode?: ImageResizeMode;
  varian?: VarianCheckbox;
  renderIconChecked?: (checked?: boolean) => ReactNode;
  onPress?: (value?: ItemT) => void;
}

export interface RadioButtonBox<ItemT = any> {
  className?: string;
  classNameParent?: string;
  classNameChildren?: string;
  classNameLabel?: string;
  classNameStatus?: checkedType & {
    borderChecked?: string;
  };
  checked?: boolean;
  value?: ItemT;
  label?: string;
  size?: number;
  sizeChildren?: number;
  enableDebounce?: boolean;
  delayDebounce?: number;
  varian?: VarianColor;
  onPress?: (value?: ItemT) => void;
}

export interface ImageBoxProps {
  source: ImageRequireSource | Source;
  className: string;
  imageType?: ImageType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageStyle['resizeMode'];
}

export interface TextComponentProps extends TextProps {
  className?: string;
}

interface ProgressBaseProps extends BoxProps {
  value: number;
  label?: string;
  varian: VarianColor;
  showLabel?: boolean;
  classLabel: string;
  renderLabel?: (value: number) => ReactNode;
}

export interface ProgressBarProps extends ProgressBaseProps {
  classBox: string;
  classProgress: string;
}

export interface ProgressCircleProps extends ProgressBaseProps {
  size: number;
  strokeWidth: number;
  colorProgress?: string;
  colorBackground?: string;
}

export interface SliderBoxProps<ItemT = any> extends ScrollViewProps {
  classBox: string;
  classSlider: string;
  classSliderItem: string;
  classPageItem: string;
  classPagination: string;
  data: ItemT[];
  showPagination: boolean;
  currentIndex: number;
  width?: number;
  itemWidth?: number;
  sliderWidth?: number;
  enableAnimation: boolean;
  enableControl: boolean;
  space: number;
  iconNext?: ReactNode;
  iconPrev?: ReactNode;
  iconColor?: string;
  renderSliderItem: (item: ItemT, index: number) => ReactNode;
  renderPageItem?: (item: ItemT, index: number) => ReactNode;
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
}
export interface OnEndReachedProps extends NativeScrollEvent {
  space: number;
  itemWidth: number;
  horizontal?: boolean | null;
}
