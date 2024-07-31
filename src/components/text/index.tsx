import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {useClassName} from '../../hook';

export interface TextComponentProps extends TextProps {
  className?: string;
}

const TextComponent = ({className, style, ...rest}: TextComponentProps) => {
  const stylesCustom = useClassName(className);
  const styleText = StyleSheet.compose(stylesCustom, style);

  return <Text style={styleText} {...rest} />;
};

export default TextComponent;
