import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const Tick = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={17}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M23.5127 0.602108C24.1761 1.27861 24.1663 2.36564 23.4908 3.03005L9.19871 17.0883L0.516979 8.54862C-0.158495 7.8842 -0.168274 6.79717 0.495138 6.12067C1.15855 5.44417 2.24393 5.43438 2.91941 6.0988L9.19871 12.2753L21.0884 0.580234C21.7639 -0.0841842 22.8493 -0.0743912 23.5127 0.602108Z"
      />
    </SvgProvider>
  );
};
