import React from 'react';
import {RadioGroupProps} from '../../model';
import {classNames} from '../../utils';
import {Box, RadioButton} from '../..';

export const RadioGroup = <ItemT,>({
  data,
  classBox,
  radioItem,
  pickKey = 'id' as keyof ItemT,
  pickLabel = 'name' as keyof ItemT,
  value,
  onChange,
}: RadioGroupProps<ItemT>) => {
  const renderItem = () => {
    return data.map(item => (
      <RadioButton
        key={item?.[pickKey]?.toString()}
        value={item}
        checked={item?.[pickKey] === value}
        onChange={() => onChange && onChange(item)}
        label={item?.[pickLabel] as string}
        {...radioItem}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
};
