import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useClassName} from '../../hook';

export interface PropsBox extends ViewProps {
  scaleScreen?: boolean;
  className?: string;
}

const Box = (props: PropsBox) => {
  const {style, scaleScreen, className, ...rest} = props;
  const stylesCustom = useClassName({
    className,
    scaleScreen,
  });

  const styleCard = StyleSheet.compose(stylesCustom, style);

  return <View style={styleCard} {...rest} />;
};

export default Box;
