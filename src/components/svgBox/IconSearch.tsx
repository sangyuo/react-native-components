import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const IconSearch = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={23} originalWidth={23}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M9.6405 0.5C4.59625 0.5 0.5 4.55659 0.5 9.56934C0.5 14.5821 4.59625 18.6387 9.6405 18.6387C11.5211 18.6387 13.2705 18.0746 14.7244 17.1075L20.6875 23.0214C21.3309 23.6595 22.3724 23.6595 23.0157 23.0214C23.6614 22.3811 23.6614 21.3411 23.0157 20.7007L17.0908 14.8247C18.1547 13.3423 18.781 11.528 18.781 9.56934C18.781 4.55659 14.6848 0.5 9.6405 0.5ZM3.79675 9.56934C3.79675 6.37467 6.40918 3.77783 9.6405 3.77783C12.8718 3.77783 15.4843 6.37467 15.4843 9.56934C15.4843 12.764 12.8718 15.3608 9.6405 15.3608C6.40918 15.3608 3.79675 12.764 3.79675 9.56934Z"
      />
    </SvgProvider>
  );
};
