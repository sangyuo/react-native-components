import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const ArrowDown = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={14}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M23.0631 0.451798C22.4773 -0.150273 21.5276 -0.150273 20.9418 0.451798L12.0024 9.63966L3.0631 0.451797C2.47732 -0.150274 1.52757 -0.150274 0.941782 0.451797C0.355995 1.05387 0.355995 2.03002 0.941782 2.63209L12.0024 14.0002L23.0631 2.63209C23.6489 2.03002 23.6489 1.05387 23.0631 0.451798Z"
      />
    </SvgProvider>
  );
};
