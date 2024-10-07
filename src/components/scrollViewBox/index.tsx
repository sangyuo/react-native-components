import React from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import {useClassName} from '../../hook';

interface ScrollViewBoxProps extends ScrollViewProps {
  classBox?: string;
  classContent?: string;
}
export default function ScrollViewBox({
  classBox,
  classContent,
  style,
  contentContainerStyle,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  ...rest
}: ScrollViewBoxProps) {
  const styleBox = useClassName(classBox);
  const styleContent = useClassName(classContent);

  return (
    <ScrollView
      style={[styleBox, style]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={[styleContent, contentContainerStyle]}
      {...rest}
    />
  );
}
