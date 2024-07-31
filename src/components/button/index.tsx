import React, {useCallback, useRef} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useClassName, useClassNameButton} from '../../hook';
import {Text} from '..';
import {Varian} from '../../model';
import {classNames} from '../../utils';

export interface ButtonComponentProps extends TouchableOpacityProps {
  className?: string;
  classNameText?: string;
  isDebounce?: boolean;
  delayDebounce?: number;
  varian?: Varian;
  title?: string;
}
const Button = (props: ButtonComponentProps) => {
  const {
    style,
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
  const timerDebounceRef = useRef<any>();
  const classButton = useClassNameButton(varian);
  const stylesCustom = useClassName(
    classNames(classButton.container, className || ''),
  );
  const styleCard = StyleSheet.compose(stylesCustom, style);

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

  return (
    <TouchableOpacity onPress={handlePress} style={styleCard} {...rest}>
      {title ? (
        <Text className={classNames(classButton.text, classNameText || '')}>
          {title}
        </Text>
      ) : null}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
