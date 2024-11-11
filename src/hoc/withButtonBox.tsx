import React, {forwardRef, useCallback, useRef} from 'react';
import {useClassName, useClassNameButton} from '../hook';
import {ButtonComponentProps} from '../model';
import {classNames, TextBox} from '..';
import {GestureResponderEvent} from 'react-native';

const withButtonBox = <T extends any, R>(
  WrappedComponent: React.JSXElementConstructor<any>,
) => {
  return forwardRef<R, T & ButtonComponentProps>((props, ref) => {
    const {
      style,
      enableDebounce,
      delayDebounce,
      className,
      classText,
      varian,
      title,
      children,
      numberOfLines,
      leftContent,
      rightContent,
      onPress,
      ...rest
    } = props;
    const timerDebounceRef = useRef<any>();
    const classButton = useClassNameButton(varian);
    const stylesCustom = useClassName(
      classNames(classButton.container, className),
    );

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

    if (!leftContent && !title && !rightContent) {
      return (
        <WrappedComponent
          ref={ref}
          style={[stylesCustom, style]}
          onPress={handlePress}
          {...rest}>
          {children}
        </WrappedComponent>
      );
    }

    return (
      <WrappedComponent
        ref={ref}
        style={[stylesCustom, style]}
        onPress={handlePress}
        {...rest}>
        {leftContent}
        {title ? (
          <TextBox
            className={classNames(classButton.text, classText)}
            numberOfLines={numberOfLines}>
            {title}
          </TextBox>
        ) : null}
        {children}
        {rightContent}
      </WrappedComponent>
    );
  });
};

export default withButtonBox;
