import React, {forwardRef} from 'react';
import {useClassName} from '../hook';

const withElementBox = <T extends any, R>(
  WrappedComponent: React.JSXElementConstructor<any>,
) => {
  return forwardRef<
    R,
    T & {
      style?: any;
      className?: string;
    }
  >((props, ref) => {
    const {style, className, ...rest} = props;
    const stylesCustom = useClassName(className);
    return (
      <WrappedComponent ref={ref} style={[stylesCustom, style]} {...rest} />
    );
  });
};

export default withElementBox;
