import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {useClassName} from '../../hook';

interface FlatListBoxProps<ItemT = any> extends FlatListProps<ItemT> {
  classBox?: string;
  classContent?: string;
}
export default function FlatListBox({
  classBox,
  classContent,
  style,
  contentContainerStyle,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  ...rest
}: FlatListBoxProps) {
  const styleBox = useClassName(classBox);
  const styleContent = useClassName(classContent);

  return (
    <FlatList
      style={[styleBox, style]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={[styleContent, contentContainerStyle]}
      {...rest}
    />
  );
}
