import React, {useCallback, useRef} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useClassName} from '../../hook';
import Text from '../text';
import {getClassNameVarian} from '../../utils/helper.util';

export interface ButtonComponentProps extends TouchableOpacityProps {
  scaleScreen?: boolean;
  className?: string;
  classNameText?: string;
  isDebounce?: boolean;
  delayDebounce?: number;
  varian?: 'primary' | 'outline';
  title?: string;
}
const Button = (props: ButtonComponentProps) => {
  const {
    style,
    scaleScreen,
    isDebounce,
    delayDebounce,
    className,
    classNameText,
    varian,
    title,
    children,
    onPress,
    ...rest
  } = props;

  const stylesCustom = useClassName({
    className: varian
      ? getClassNameVarian(varian) + ' ' + className
      : className,
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

  return (
    <TouchableOpacity onPress={handlePress} style={styleCard} {...rest}>
      {title ? (
        <Text
          className={`${
            varian === 'outline' && 'text-blue-500'
          } text-white flex-1 text-center ${classNameText}`}>
          {title}
        </Text>
      ) : null}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
