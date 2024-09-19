import React from 'react';
import Box from '../box';
import {CheckBoxGroupProps} from '../../model';
import Checkbox from '../checkbox';
import {classNames} from '../../utils';

export default function CheckboxGroup({
  data,
  classBox,
  checkBoxItem,
  pickKey = 'id',
  pickLabel = 'name',
  value,
  onPress,
}: CheckBoxGroupProps) {
  const renderItem = () => {
    return data.map(item => (
      <Checkbox
        {...checkBoxItem}
        key={item?.[pickKey]}
        value={item}
        checked={value?.includes(item?.[pickKey])}
        onPress={onPress}
        label={item?.[pickLabel] ?? ''}
      />
    ));
  };
  return <Box className={classNames('gap-2', classBox)}>{renderItem()}</Box>;
}
