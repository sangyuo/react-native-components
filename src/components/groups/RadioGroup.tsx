import React from 'react';
import Box from '../box';
import RadioButton from '../radioButton';
import {RadioGroupProps} from '../../model';
import {classNames} from '../../utils';

export default function RadioGroup<ItemT = any>({
  data,
  classBox,
  radioItem,
  pickKey = 'id' as keyof ItemT,
  pickLabel = 'name' as keyof ItemT,
  value,
  onChange,
}: RadioGroupProps<ItemT>) {
  const renderItem = () => {
    return data.map(item => (
      <RadioButton
        {...radioItem}
        value={item}
        checked={item?.[pickKey] === value}
        onChange={onChange}
        label={item?.[pickLabel] as string}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
}
