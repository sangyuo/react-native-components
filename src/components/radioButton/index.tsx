import React from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import {classNames} from '../../utils';
import {RadioButtonBox} from '../../model';
import {useVarianColor} from '../../hook';

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
    enableDebounce,
    value,
    varian,
    classNameStatus,
    onPress,
  } = props;

  const styleCustom = useVarianColor({varian});
  const colorChecked = classNameStatus?.borderChecked || styleCustom.border;
  const colorUnchecked = classNameStatus?.unchecked || 'border-gray-400';

  return (
    <Button
      enableDebounce={enableDebounce}
      delayDebounce={delayDebounce}
      onPress={() => {
        onPress && onPress(value);
      }}
      className={classNames('row-center gap-2', className || '')}>
      <Box
        className={classNames(
          'rounded-full border-2 center',
          size ? `w-[${size}] h-[${size}]` : 'w-6 h-6',
          checked ? colorChecked : colorUnchecked,
          classNameParent || '',
        )}>
        {checked && (
          <Box
            className={classNames(
              classNameStatus?.checked || styleCustom.bg,
              'rounded-full',
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
          'text-black font-semibold',
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
