import React from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import {Image, ImageSourcePropType} from 'react-native';
import {horizontalScale} from '../..';
import Checked from '../../assets/image/checked.png';

export interface CheckBoxProps<ItemT = any> {
  className?: string;
  classNameParent?: string;
  classNameChildren?: string;
  classNameLabel?: string;
  checked?: boolean;
  color?: {
    default?: string;
    checked?: string;
  };
  value?: ItemT;
  label?: string;
  size?: number;
  iconChecked?: ImageSourcePropType;
  sizeChildren?: number;
  onPress?: (value?: ItemT) => void;
}

function RadioButton<ItemT = any>(props: CheckBoxProps<ItemT>) {
  const {
    className,
    size,
    label,
    checked,
    sizeChildren,
    classNameLabel,
    classNameParent,
    iconChecked,
    color,
  } = props;

  return (
    <Button className={`row-center gap-2 ${className || ''}`}>
      <Box
        className={`rounded border-md border-gray-300 center ${
          size ? `w-[${size}] h-[${size}]` : 'w-5 h-5'
        } ${checked && 'border-blue-500'} ${classNameParent || ''}`}
        style={[
          color?.checked && checked ? {borderColor: color?.checked} : {},
          color?.default && !checked ? {borderColor: color?.default} : {},
        ]}>
        {checked && (
          <Image
            source={iconChecked || Checked}
            width={
              sizeChildren
                ? sizeChildren
                : size
                ? size * 0.5
                : horizontalScale(12)
            }
            tintColor={color?.checked}
          />
        )}
      </Box>
      <Text className={`font-semibold ${classNameLabel}`}>{label}</Text>
    </Button>
  );
}

export default RadioButton;
