import React, {useCallback, useRef} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  useClassName,
  useClassNameButton,
  useClassNameTextButton,
} from '../../hook';
import Text from '../text';

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
  const timerDebounceRef = useRef<any>();
  const classButton = useClassNameButton({className: className, varian});
  const classText = useClassNameTextButton({className: classNameText, varian});
  const stylesCustom = useClassName({className: classButton, scaleScreen});
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
      {title ? <Text className={classText}>{title}</Text> : null}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
