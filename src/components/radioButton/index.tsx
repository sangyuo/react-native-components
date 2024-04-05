import React from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';

export interface PropsBox<ItemT = any> {
  className?: string;
  classNameParent?: string;
  classNameChildren?: string;
  classNameLabel?: string;
  checked?: boolean;
  scaleScreen?: boolean;
  value?: ItemT;
  label?: string;
  size?: number;
  spaceChildren?: number;
  onPress?: (value?: ItemT) => void;
}

function RadioButton<ItemT = any>(props: PropsBox<ItemT>) {
  const {
    className,
    size,
    label,
    checked,
    classNameLabel,
    classNameParent,
    classNameChildren,
  } = props;

  return (
    <Box className={`row-center gap-2 ${className || ''}`}>
      <Button
        className={`rounded-full border-md center ${size ? '' : 'w-6 h-6'} ${
          checked && 'border-blue-500'
        } ${classNameParent || ''}`}>
        {checked && (
          <Box
            className={`w-3 h-3 bg-blue-500 rounded-full ${
              classNameChildren || ''
            }`}
          />
        )}
      </Button>
      <Text className={`font-semibold ${classNameLabel}`}>{label}</Text>
    </Box>
  );
}

export default RadioButton;
