import React, {forwardRef} from 'react';
import {useClassName} from '../hook';
import {StyleProp, ViewStyle} from 'react-native';

interface Props {
  style?: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
  classContent?: string;
  className?: string;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
}

function withVirtualizeList<T extends any, R>(
  WrappedComponent: React.JSXElementConstructor<any>,
) {
  return forwardRef<R, T & Props>((props, ref) => {
    const {
      style,
      className,
      classContent,
      contentContainerStyle,
      showsHorizontalScrollIndicator = false,
      showsVerticalScrollIndicator = false,
      ...rest
    } = props;

    // Using the custom hook to handle className and classContent
    const styleBox = useClassName(className);
    const styleContent = useClassName(classContent);

    return (
      <WrappedComponent
        ref={ref} // Forward the ref here
        style={[styleBox, style]}
        contentContainerStyle={[styleContent, contentContainerStyle]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        {...rest}
      />
    );
  });
}

export default withVirtualizeList;
