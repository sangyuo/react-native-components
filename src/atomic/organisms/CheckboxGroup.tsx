import React from 'react';
import {CheckBoxGroupProps} from '../../model';
import {classNames} from '../../utils';
import {Box, Checkbox} from '../..';

export const CheckboxGroup = <ItemT,>({
  data,
  classBox,
  checkBoxItem,
  pickKey = 'id' as keyof ItemT,
  pickLabel = 'name' as keyof ItemT,
  value = [],
  onChange,
}: CheckBoxGroupProps<ItemT>) => {
  const renderItem = () => {
    return data.map(item => (
      <Checkbox
        key={item?.[pickKey]?.toString()}
        value={item}
        checked={value?.includes(item?.[pickKey] as string | number)}
        onChange={() => onChange && onChange(item)}
        label={(item?.[pickLabel] as string) ?? ''}
        {...checkBoxItem}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
};
