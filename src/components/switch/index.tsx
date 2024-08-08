import React, {ReactNode, useState} from 'react';
import Button from '../button';
import Box from '../box';
import {classNames, Text, useVarianColor, VarianColor} from '../..';

interface Props {
  value: boolean;
  varian: VarianColor;
  className: string;
  classThumb: string;
  classLabel: string;
  disabled?: boolean;
  label?: {
    on?: string;
    off?: string;
  };
  renderLabel?: (value: boolean) => ReactNode;
  renderThumb?: (value: boolean) => ReactNode;
  onChange?: (value: boolean) => void;
}
const SwitchBox = ({
  value,
  label,
  varian,
  classThumb,
  className,
  classLabel,
  disabled,
  renderThumb,
  renderLabel,
  onChange,
}: Props) => {
  const [active, setActive] = useState(value);
  const classVarian = useVarianColor({varian});

  const toggleActive = () => {
    onChange && onChange(!active);
    setActive(pre => !pre);
  };

  const renderCustomLabel = () => {
    if (label) {
      return (
        <Text
          className={classNames(
            active ? 'text-white' : 'text-black',
            'text-center flex-1 text-sm',
            classLabel,
          )}>
          {active ? label?.on : label?.off}
        </Text>
      );
    }
    if (renderLabel) {
      return renderLabel(active);
    }
    return null;
  };

  const renderCustomThumb = () => {
    if (renderThumb) {
      return renderThumb(active);
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
          active ? classVarian.bg : 'row-center bg-gray-400',
          active ? 'row-reverse' : '',
          'h-7 w-14 items-center px-1 rounded-full',
          className,
        )}>
        {renderCustomThumb()}
        {renderCustomLabel()}
      </Button>
    </>
  );
};

SwitchBox.defaultProps = {
  value: false,
  className: '',
  varian: 'primary',
  classThumb: '',
  classLabel: '',
};

export default SwitchBox;
