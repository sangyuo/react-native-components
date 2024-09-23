import React, {useCallback, useRef} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useClassName, useClassNameButton} from '../../hook';
import {Text} from '..';
import {classNames} from '../../utils';
import {ButtonComponentProps} from '../../model';

const Button = (props: ButtonComponentProps) => {
  const {
    style,
    enableDebounce,
    delayDebounce,
    className,
    classNameText,
    varian,
    title,
    children,
    numberOfLines,
    onPress,
    ...rest
  } = props;
  const timerDebounceRef = useRef<any>();
  const classButton = useClassNameButton(varian);
  const stylesCustom = useClassName(
    classNames(classButton.container, className),
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
    if (enableDebounce) {
      handler(e);
    } else {
      onPress && onPress(e);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styleCard} {...rest}>
      {title ? (
        <Text
          className={classNames(classButton.text, classNameText)}
          numberOfLines={numberOfLines}>
          {title}
        </Text>
      ) : null}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
