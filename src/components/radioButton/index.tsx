import React from 'react';
import {classNames} from '../../utils';
import {RadioButtonProps} from '../../model';
import {useVarianColor} from '../../hook';
import {Box, ButtonBox, TextBox} from '../..';

function RadioButton<ItemT = any>(props: RadioButtonProps<ItemT>) {
  const {
    className,
    size,
    label,
    checked,
    sizeChildren,
    classNameLabel,
    classNameBox,
    classNameChildren,
    delayDebounce,
    enableDebounce,
    value,
    varian,
    classNameStatus,
    onChange,
  } = props;

  const styleCustom = useVarianColor({varian});
  const colorChecked = classNameStatus?.borderChecked || styleCustom.border;
  const colorUnchecked = classNameStatus?.unchecked || 'border-gray-400';

  return (
    <ButtonBox
      enableDebounce={enableDebounce}
      delayDebounce={delayDebounce}
      onPress={() => {
        onChange && onChange(value);
      }}
      className={classNames('row-center gap-2', className)}>
      <Box
        className={classNames(
          'rounded-full border-2 center',
          size ? `w-[${size}] h-[${size}]` : 'w-6 h-6',
          checked ? colorChecked : colorUnchecked,
          classNameBox,
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
              classNameChildren,
            )}
          />
        )}
      </Box>
      <TextBox
        className={classNames('text-black font-semibold', classNameLabel)}>
        {label}
      </TextBox>
    </ButtonBox>
  );
}

export default RadioButton;
