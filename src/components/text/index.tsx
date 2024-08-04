import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useClassName} from '../../hook';
import {TextComponentProps} from '../../model';

const TextComponent = ({className, style, ...rest}: TextComponentProps) => {
  const stylesCustom = useClassName(className);
  const styleText = StyleSheet.compose(stylesCustom, style);

  return <Text style={styleText} {...rest} />;
};

export default TextComponent;
