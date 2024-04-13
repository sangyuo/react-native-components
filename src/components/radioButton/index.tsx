import React from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';

export interface RadioButtonBox<ItemT = any> {
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
  sizeChildren?: number;
  isDebounce?: boolean;
  delayDebounce?: number;
  onPress?: (value?: ItemT) => void;
}

function RadioButton<ItemT = any>(props: RadioButtonBox<ItemT>) {
  const {
    className,
    size,
    label,
    checked,
    sizeChildren,
    classNameLabel,
    classNameParent,
    classNameChildren,
    color,
    delayDebounce,
    isDebounce,
    value,
    onPress,
  } = props;

  return (
    <Button
      isDebounce={isDebounce}
      delayDebounce={delayDebounce}
      onPress={() => {
        onPress && onPress(value);
      }}
      className={`row-center gap-2 ${className || ''}`}>
      <Box
        className={`rounded-full border-md border-gray-300 center ${
          size ? `w-[${size}] h-[${size}]` : 'w-5 h-5'
        } ${checked && 'border-blue-500'} ${classNameParent || ''}`}
        style={[
          color?.checked && checked ? {borderColor: color?.checked} : {},
          color?.default && !checked ? {borderColor: color?.default} : {},
        ]}>
        {checked && (
          <Box
            className={`${
              sizeChildren
                ? `w-[${sizeChildren}] h-[${sizeChildren}]`
                : size
                ? `w-[${size * 0.5}] h-[${size * 0.5}]`
                : 'w-2 h-2'
            }  bg-blue-500 rounded-full ${classNameChildren || ''}`}
            style={color?.checked ? {backgroundColor: color?.checked} : {}}
          />
        )}
      </Box>
      <Text className={`font-semibold ${classNameLabel}`}>{label}</Text>
    </Button>
  );
}

export default RadioButton;
