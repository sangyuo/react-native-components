import React from 'react';
import Button from '../button';
import Box from '../box';
import {classNames, SwitchBoxProps, Text, useVarianColor} from '../..';

const SwitchBox = ({
  value = false,
  label,
  varian = 'primary',
  classThumb,
  className,
  classLabel,
  disabled,
  renderThumb,
  renderLabel,
  onChange,
}: SwitchBoxProps) => {
  const classVarian = useVarianColor({varian});

  const toggleActive = () => {
    onChange && onChange(!value);
  };

  const renderCustomLabel = () => {
    if (label) {
      return (
        <Text
          className={classNames(
            value ? 'text-white' : 'text-black',
            'text-center flex-1 text-sm',
            classLabel,
          )}>
          {value ? label?.on : label?.off}
        </Text>
      );
    }
    if (renderLabel) {
      return renderLabel(value);
    }
    return null;
  };

  const renderCustomThumb = () => {
    if (renderThumb) {
      return renderThumb(value);
    }
    return (
      <Box
        className={classNames(
          'bg-white w-5 h-5 rounded-full border border-gray-400',
          classThumb,
        )}
      />
    );
  };

  return (
    <>
      <Button
        disabled={disabled}
        onPress={toggleActive}
        className={classNames(
          value ? classVarian.bg : 'row-center bg-gray-400',
          value ? 'row-reverse' : '',
          'h-7 w-12 items-center px-1 rounded-full',
          className,
        )}>
        {renderCustomThumb()}
        {renderCustomLabel()}
      </Button>
    </>
  );
};

export default SwitchBox;
