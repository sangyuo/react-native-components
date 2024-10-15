import {
  GestureResponderEvent,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  NativeScrollEvent,
  ScrollViewProps,
  StyleProp,
  TextInputProps,
  TextProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {ImageModuleType, Varian, VarianCheckbox, VarianColor} from '.';
import {ReactNode} from 'react';

interface checkedType {
  checked?: string;
  unchecked?: string;
}
export interface BoxProps extends ViewProps {
  className?: string;
}

export interface ButtonComponentProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  classNameText?: string;
  enableDebounce?: boolean;
  delayDebounce?: number;
  varian?: Varian;
  title?: string;
  numberOfLines?: number;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  children?: ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

interface CheckboxItemBaseProps {
  className?: string;
  classNameBox?: string;
  classNameChildren?: string;
  classNameLabel?: string;
  classNameStatus?: checkedType;
  size?: number;
  enableDebounce?: boolean;
  delayDebounce?: number;
  resizeMode?: ImageResizeMode;
  varian?: VarianCheckbox;
}

export interface CheckboxProps<ItemT = any> extends CheckboxItemBaseProps {
  checked?: boolean;
  value?: ItemT;
  label?: string;
  iconColor?: string;
  iconChecked?: ImageSourcePropType;
  iconSize?: number;
  renderIconChecked?: (checked?: boolean) => ReactNode;
  onChange?: (value?: ItemT) => void;
}

export interface RadioButtonProps<ItemT = any> extends CheckboxItemBaseProps {
  classNameStatus?: checkedType & {
    borderChecked?: string;
  };
  checked?: boolean;
  value?: ItemT;
  label?: string;
  sizeChildren?: number;
  varian?: VarianColor;
  onChange?: (value?: ItemT) => void;
}

export interface ImageBoxProps {
  source: ImageSourcePropType;
  className?: string;
  imageModuleType?: ImageModuleType;
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
  classLabel?: string;
  renderLabel?: (value: number) => ReactNode;
}

export interface ProgressBarProps extends ProgressBaseProps {
  classBox?: string;
  classProgress?: string;
}

export interface ProgressCircleProps extends ProgressBaseProps {
  size?: number;
  strokeWidth?: number;
  colorProgress?: string;
  colorBackground?: string;
}

export interface SwipeBoxProps<ItemT = any> extends ScrollViewProps {
  classBox?: string;
  classSlider?: string;
  classSliderItem?: string;
  classPageItem?: string;
  classPagination?: string;
  data: ItemT[];
  showPagination?: boolean;
  currentIndex?: number;
  width?: number;
  itemWidth?: number;
  sliderWidth?: number;
  enableAnimation?: boolean;
  enableControl?: boolean;
  space?: number;
  iconNext?: ReactNode;
  iconPrev?: ReactNode;
  iconColor?: string;
  renderSliderItem: (item: ItemT, index: number) => ReactNode;
  renderPageItem?: (item: ItemT, index: number) => ReactNode;
  renderControl?: () => ReactNode;
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
}
export interface OnEndReachedProps extends NativeScrollEvent {
  space: number;
  itemWidth: number;
  horizontal?: boolean | null;
}

interface GroupPropsBase<ItemT = any> {
  data: ItemT[];
  classBox?: string;
  pickKey?: keyof ItemT;
  pickLabel?: keyof ItemT;
  onChange?: (value: ItemT) => void;
}

export interface RadioGroupProps<ItemT = any> extends GroupPropsBase<ItemT> {
  value?: number | string;
  radioItem?: CheckboxItemBaseProps & {
    size?: number;
    sizeChildren?: number;
    varian?: VarianColor;
  };
}

export interface CheckBoxGroupProps<ItemT = any> extends GroupPropsBase<ItemT> {
  value?: (number | string)[];
  checkBoxItem?: CheckboxItemBaseProps & {
    iconColor?: string;
    iconChecked?: ImageSourcePropType;
    iconSize?: number;
  };
}

export interface TextInputBoxProps extends TextInputProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  classInput?: string;
  classInputBase?: string;
  classBox?: string;
  label?: string;
  classLabel?: string;
}

export interface SwitchBoxProps {
  value?: boolean;
  varian?: VarianColor;
  className?: string;
  classThumb?: string;
  classLabel?: string;
  disabled?: boolean;
  label?: {
    on?: string;
    off?: string;
  };
  renderLabel?: (value: boolean) => ReactNode;
  renderThumb?: (value: boolean) => ReactNode;
  onChange?: (value: boolean) => void;
}

export interface SvgProps {
  children: ReactNode;
  width?: string;
  height?: string;
  viewBox?: string;
}

interface OffsetType {
  top?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
}

export interface RenderButtonProps {
  onPress: () => void;
}

export interface RenderOptionItem<ItemT = any> {
  selected?: boolean;
  index: number;
  item: ItemT;
}

interface DropDownBaseProps<ItemT = any> {
  data: ItemT[];
  offset?: OffsetType;
  buttonDropdown?: ButtonComponentProps & {
    hidden?: boolean;
    placeholder?: string;
    classPlaceholderColor?: string;
    classValueColor?: string;
  };
  maxWidthOption?: number;
  classBox?: string;
  classOption?: string;
  classOptionItem?: string;
  classOptionItemSelected?: string;
  classOptionLabel?: string;
  classOptionLabelSelected?: string;
  enableRightToLeft?: boolean;
  enableSearch?: boolean;
  height?: number;
  width?: number;
  pickKey?: keyof ItemT;
  pickLabel?: keyof ItemT;
  enableScroll?: boolean;
  varian?: VarianColor;
  iconColor?: string;
  numberOfLinesOption?: number;
  saveKeywordType?: 'none' | 'auto' | 'submit';
  searchType?: 'auto' | 'submit';
  iconSelected?: ReactNode;
  iconSelectedColor?: string;
  styleSelectType?: 'none' | 'icon' | 'color';
  inputSearch?: {
    value?: string;
    classInput?: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    placeholder?: string;
    onSearch?: (keyword: string) => void;
  };

  renderOptionItem?: (props: RenderOptionItem) => ReactNode;
  onChange?: (value: ItemT) => void;
}

export interface DropDownProps<ItemT = any> extends DropDownBaseProps<ItemT> {
  value?: number | string;
  renderButtonAction?: (
    params: RenderButtonProps & {
      dataSelected: ItemT | null;
    },
  ) => ReactNode;
}

export interface MultiDropDownProps<ItemT = any>
  extends DropDownBaseProps<ItemT> {
  value?: Array<number | string>;
  classContentSelected?: VirtualListClassProps;
  onPressSelectedItem?: (item: ItemT) => void;
  renderButtonAction?: (
    params: RenderButtonProps & {
      dataSelected: ItemT[] | null;
    },
  ) => ReactNode;
}

export interface VirtualListClassProps {
  className?: string;
  classContent?: string;
  classColWrapper?: string;
  classIndicator?: string;
  classHeader?: string;
  classFooter?: string;
}
