import React from 'react';
import Box from '../box';
import RadioButton from '../radioButton';
import {RadioGroupProps} from '../../model';
import {classNames} from '../../utils';

export default function RadioGroup({
  data,
  classBox,
  radioItem,
  pickKey = 'id',
  pickLabel = 'name',
  value,
  onPress,
}: RadioGroupProps) {
  const renderItem = () => {
    return data.map(item => (
      <RadioButton
        {...radioItem}
        value={item}
        checked={item[pickKey] === value}
        onPress={onPress}
        label={item[pickLabel]}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
}
