import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const ArrowUp = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={14}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M23.5416 13.5484C22.9303 14.1505 21.9393 14.1505 21.328 13.5484L12 4.36059L2.67199 13.5484C2.06074 14.1505 1.0697 14.1505 0.458442 13.5484C-0.152814 12.9464 -0.152814 11.9702 0.458442 11.3682L12 0L23.5416 11.3682C24.1528 11.9702 24.1528 12.9464 23.5416 13.5484Z"
      />
    </SvgProvider>
  );
};
