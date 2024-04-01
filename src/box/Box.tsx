import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useStylesVarianTheme} from '../hook';
import {ClassStyleType} from '../model';

export type PropsBox = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  scaleScreen?: boolean;
  classStyles?: ClassStyleType | ClassStyleType[];
  onPress?: () => void;
  onTouchStart?: () => void;
};

const Box = (props: PropsBox) => {
  const {style, children, scaleScreen, classStyles, onTouchStart, onPress} =
    props;

  const stylesCustom = useStylesVarianTheme({
    classStyles,
    scaleScreen,
  });

  console.log('stylesCustom', stylesCustom);

  const styleCard = StyleSheet.compose(stylesCustom, style);

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={styleCard}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View onTouchStart={onTouchStart} style={styleCard}>
      {children}
    </View>
  );
};

export default Box;
