import React, {ReactNode} from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import {ImageSourcePropType, ImageResizeMode} from 'react-native';
import {classNames, ImageBox} from '../..';
import Checked from '../../assets/image/checked.png';
import {VarianCheckbox} from '../../model';
import {useVarianCheckbox} from '../../hook';

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

CheckboxComponent.defaultProps = {
  checked: false,
  classNameParent: '',
  classNameLabel: '',
  classNameChildren: '',
};

function CheckboxComponent<ItemT = any>(props: CheckBoxProps<ItemT>) {
  const {
    className,
    size,
    label,
    checked,
    iconSize,
    classNameLabel,
    classNameParent,
    iconChecked,
    iconColor,
    delayDebounce,
    isDebounce,
    resizeMode,
    value,
    varian,
    renderIconChecked,
    onPress,
  } = props;
  const classCustom = useVarianCheckbox({varian});
  const renderChecked = () => {
    if (!checked) {
      return null;
    }
    if (renderIconChecked) {
      return renderIconChecked();
    }

    return (
      <ImageBox
        source={iconChecked || Checked}
        className={
          iconSize
            ? `w-${iconSize} h-${iconSize}`
            : size
            ? `w-${size * 0.5} h-${size * 0.5}`
            : 'w-3 h-3'
        }
        style={{
          tintColor: iconColor ?? classCustom.iconColor,
        }}
        resizeMode={resizeMode || 'contain'}
      />
    );
  };

  return (
    <Button
      isDebounce={isDebounce}
      delayDebounce={delayDebounce}
      onPress={() => {
        onPress && onPress(value);
      }}
      className={classNames('row-center gap-2', className || '')}>
      <Box
        className={classNames(
          'rounded center',
          size ? `w-[${size}] h-[${size}]` : 'w-6 h-6',
          checked ? classCustom.checked : 'border-2 border-unchecked',
          classNameParent || '',
        )}>
        {renderChecked()}
      </Box>
      <Text
        className={classNames(
          'text-black font-semibold text-md',
          classNameLabel || '',
        )}>
        {label}
      </Text>
    </Button>
  );
}
export default CheckboxComponent;
