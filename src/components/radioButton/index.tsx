import React from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import {classNames} from '../../utils';

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
      className={classNames('row-center gap-2', className || '')}>
      <Box
        className={classNames(
          'rounded-full border-2 center',
          size ? `w-[${size}] h-[${size}]` : 'w-6 h-6',
          checked ? 'border-checked' : 'border-unchecked',
          classNameParent || '',
        )}>
        {checked && (
          <Box
            className={classNames(
              ' bg-checked rounded-full',
              sizeChildren
                ? `w-[${sizeChildren}] h-[${sizeChildren}]`
                : size
                ? `w-[${size * 0.5}] h-[${size * 0.5}]`
                : 'w-3 h-3',
              classNameChildren || '',
            )}
          />
        )}
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

RadioButton.defaultProps = {
  checked: false,
  classNameParent: '',
  classNameLabel: '',
  classNameChildren: '',
};

export default RadioButton;
