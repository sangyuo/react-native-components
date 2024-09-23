import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const ArrowRight = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={24} originalWidth={14}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M0.451553 0.458442C-0.150518 1.0697 -0.150518 2.06074 0.451553 2.67199L9.63941 12L0.451553 21.328C-0.150518 21.9393 -0.150518 22.9303 0.451553 23.5416C1.05363 24.1528 2.02978 24.1528 2.63185 23.5416L14 12L2.63185 0.458442C2.02978 -0.152814 1.05363 -0.152814 0.451553 0.458442Z"
      />
    </SvgProvider>
  );
};
