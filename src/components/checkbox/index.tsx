import React from 'react';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import {classNames, ImageBox} from '../..';
import Checked from '../../assets/image/checked.png';
import {CheckBoxProps} from '../../model';
import {useVarianCheckbox} from '../../hook';

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
    classNameStatus,
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

  const colorChecked = classNameStatus?.checked || classCustom.checked;
  const colorUnchecked =
    classNameStatus?.unchecked || 'border-2 border-gray-400';

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
          checked ? colorChecked : colorUnchecked,
          classNameParent || '',
        )}>
        {renderChecked()}
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
export default CheckboxComponent;
