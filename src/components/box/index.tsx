import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useClassName} from '../../hook';

export interface PropsBox extends ViewProps {
  className?: string;
}

const Box = (props: PropsBox) => {
  const {style, className, ...rest} = props;
  const stylesCustom = useClassName(className);
  const styleCard = StyleSheet.compose(stylesCustom, style);

  return <View style={styleCard} {...rest} />;
};

export default Box;
