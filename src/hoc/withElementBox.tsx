import React from 'react';
import {useClassName} from '../hook';

const withElementBox = <T extends any>(
  WrappedComponent: React.JSXElementConstructor<any>,
) => {
  const WithElementBox: React.FC<
    T & {
      style?: any;
      className?: string;
    }
  > = props => {
    const {style, className, ...rest} = props;
    const stylesCustom = useClassName(className);
    return <WrappedComponent style={[stylesCustom, style]} {...rest} />;
  };

  return WithElementBox;
};

export default withElementBox;
