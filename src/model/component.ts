import {
  ImageRequireSource,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import {ImageType, Varian, VarianCheckbox} from '.';
import {ReactNode} from 'react';
import {Source} from 'react-native-fast-image';

export interface BoxProps extends ViewProps {
  className?: string;
}
export interface ButtonComponentProps extends TouchableOpacityProps {
  className?: string;
  classNameText?: string;
  isDebounce?: boolean;
  delayDebounce?: number;
  varian?: Varian;
  title?: string;
}

export interface CheckBoxProps<ItemT = any> {
  className?: string;
  classNameParent?: string;
  classNameChildren?: string;
  classNameLabel?: string;
  checked?: boolean;
  value?: ItemT;
  label?: string;
  size?: number;
  iconColor?: string;
  iconChecked?: ImageSourcePropType;
  iconSize?: number;
  isDebounce?: boolean;
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
  checked?: boolean;
  value?: ItemT;
  label?: string;
  size?: number;
  sizeChildren?: number;
  isDebounce?: boolean;
  delayDebounce?: number;
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
