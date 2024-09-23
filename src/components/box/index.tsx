import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useClassName} from '../../hook';
import {BoxProps} from '../../model';

const Box = (props: BoxProps) => {
  const {style, className, ...rest} = props;
  const stylesCustom = useClassName(className);
  const styleCard = StyleSheet.compose(stylesCustom, style);

  return <View style={styleCard} {...rest} />;
};

export default Box;
