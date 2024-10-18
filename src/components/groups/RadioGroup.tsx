import React from 'react';
import RadioButton from '../radioButton';
import {RadioGroupProps} from '../../model';
import {classNames} from '../../utils';
import {Box} from '../box';

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
        onChange={() => onChange && onChange(item)}
        label={item?.[pickLabel] as string}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
}
