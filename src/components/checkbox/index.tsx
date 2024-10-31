import React, {useMemo} from 'react';
import {Box, ButtonBox, classNames, TextBox} from '../..';
import {CheckboxProps} from '../../model';
import {useVarianCheckbox} from '../../hook';
import {Tick} from '../svgBox/Tick';

function Checkbox<ItemT = any>(props: CheckboxProps<ItemT>) {
  const {
    className,
    size,
    label,
    checked,
    iconSize,
    classNameLabel,
    classNameBox,
    classNameStatus,
    iconColor,
    delayDebounce,
    enableDebounce,
    value,
    varian,
    iconChecked,
    renderIconChecked,
    onChange,
  } = props;
  const classCustom = useVarianCheckbox({varian});
  const width = useMemo(
    () => (iconSize ? iconSize : size ? size * 0.5 : 12),
    [size, iconSize],
  );

  const renderChecked = () => {
    if (renderIconChecked) {
      return renderIconChecked(checked ?? false);
    }

    if (!checked) {
      return null;
    }

    if (iconChecked) {
      return iconChecked;
    }
    return (
      <Tick
        width={width}
        height={width}
        fill={iconColor ?? classCustom.iconColor}
      />
    );
  };

  const colorChecked = classNameStatus?.checked || classCustom.checked;
  const colorUnchecked =
    classNameStatus?.unchecked || 'border-2 border-gray-400';

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
          'rounded center',
          size ? `w-[${size}] h-[${size}]` : 'w-6 h-6',
          checked ? colorChecked : colorUnchecked,
          classNameBox,
        )}>
        {renderChecked()}
      </Box>
      <TextBox
        className={classNames('text-black font-semibold', classNameLabel)}>
        {label}
      </TextBox>
    </ButtonBox>
  );
}
export default Checkbox;
