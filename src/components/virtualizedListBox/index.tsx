import React from 'react';
import {VirtualizedList, VirtualizedListProps} from 'react-native';
import {useClassName} from '../../hook';

interface VirtualizedListBoxProps<ItemT = any>
  extends VirtualizedListProps<ItemT> {
  classBox?: string;
  classContent?: string;
}
export default function VirtualizedListBox({
  classBox,
  classContent,
  style,
  contentContainerStyle,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  ...rest
}: VirtualizedListBoxProps) {
  const styleBox = useClassName(classBox);
  const styleContent = useClassName(classContent);

  return (
    <VirtualizedList
      style={[styleBox, style]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={[styleContent, contentContainerStyle]}
      {...rest}
    />
  );
}
