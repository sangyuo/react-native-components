import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {useClassName} from '../../hook';

export interface TextComponentProps extends TextProps {
  className?: string;
  scaleScreen?: boolean;
}

const TextComponent = ({
  className,
  scaleScreen,
  style,
  ...rest
}: TextComponentProps) => {
  const stylesCustom = useClassName({
    className,
    scaleScreen,
  });

  const styleText = StyleSheet.compose(stylesCustom, style);

  return <Text style={styleText} {...rest} />;
};

export default TextComponent;
