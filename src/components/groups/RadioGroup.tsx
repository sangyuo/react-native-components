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
  onChange,
}: RadioGroupProps) {
  const renderItem = () => {
    return data.map(item => (
      <RadioButton
        {...radioItem}
        value={item}
        checked={item[pickKey] === value}
        onChange={onChange}
        label={item[pickLabel]}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
}
