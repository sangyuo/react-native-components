import React from 'react';
import Box from '../box';
import {CheckBoxGroupProps} from '../../model';
import Checkbox from '../checkbox';
import {classNames} from '../../utils';

export default function CheckboxGroup<ItemT = any>({
  data,
  classBox,
  checkBoxItem,
  pickKey = 'id' as keyof ItemT,
  pickLabel = 'name' as keyof ItemT,
  value,
  onChange,
}: CheckBoxGroupProps<ItemT>) {
  const renderItem = () => {
    return data.map(item => (
      <Checkbox
        {...checkBoxItem}
        key={item?.[pickKey] as string}
        value={item}
        checked={value?.includes(item?.[pickKey] as string | number)}
        onChange={onChange}
        label={(item?.[pickLabel] as string) ?? ''}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
}
