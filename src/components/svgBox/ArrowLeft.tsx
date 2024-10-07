import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const ArrowLeft = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={24} originalWidth={14}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M13.5484 0.458442C14.1505 1.0697 14.1505 2.06074 13.5484 2.67199L4.36059 12L13.5484 21.328C14.1505 21.9393 14.1505 22.9303 13.5484 23.5416C12.9464 24.1528 11.9702 24.1528 11.3682 23.5416L0 12L11.3682 0.458442C11.9702 -0.152814 12.9464 -0.152814 13.5484 0.458442Z"
      />
    </SvgProvider>
  );
};
