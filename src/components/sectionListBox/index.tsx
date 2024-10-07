import React from 'react';
import {SectionList, SectionListProps} from 'react-native';
import {useClassName} from '../../hook';

interface SectionListBoxProps<ItemT = any> extends SectionListProps<ItemT> {
  classBox?: string;
  classContent?: string;
}
export default function SectionListBox({
  classBox,
  classContent,
  style,
  contentContainerStyle,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  ...rest
}: SectionListBoxProps) {
  const styleBox = useClassName(classBox);
  const styleContent = useClassName(classContent);

  return (
    <SectionList
      style={[styleBox, style]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={[styleContent, contentContainerStyle]}
      {...rest}
    />
  );
}
