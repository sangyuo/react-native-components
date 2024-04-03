import React, {useCallback, useRef} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useClassName} from '../../hook';

export interface ButtonComponentProps extends TouchableOpacityProps {
  scaleScreen?: boolean;
  className?: string;
  isDebounce?: boolean;
  delayDebounce?: number;
}
const Button = (props: ButtonComponentProps) => {
  const {
    style,
    scaleScreen,
    isDebounce,
    delayDebounce,
    onPress,
    className,
    ...rest
  } = props;

  const stylesCustom = useClassName({
    className,
    scaleScreen,
  });
  const timerDebounceRef = useRef<any>();

  //handle multiple click
  const handler = useCallback(
    (e: GestureResponderEvent) => {
      if (timerDebounceRef.current) {
        clearTimeout(timerDebounceRef.current);
      }
      timerDebounceRef.current = setTimeout(() => {
        onPress && onPress(e);
      }, delayDebounce || 500);
    },
    [onPress],
  );

  const handlePress = (e: GestureResponderEvent) => {
    if (isDebounce) {
      handler(e);
    } else {
      onPress && onPress(e);
    }
  };

  const styleCard = StyleSheet.compose(stylesCustom, style);

  return <TouchableOpacity onPress={handlePress} style={styleCard} {...rest} />;
};

export default Button;
