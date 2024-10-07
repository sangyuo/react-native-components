import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from './SvgProvider';

export const IconClose = ({
  ...props
}: SvgProps & {
  width?: number;
}) => {
  return (
    <SvgProvider {...props} originalHeight={21} originalWidth={21}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M18.9432 0.939584C19.529 0.353798 20.4788 0.353798 21.0646 0.939584C21.6504 1.52537 21.6504 2.47512 21.0646 3.0609L13.1252 11.0002L21.0646 18.9396C21.6504 19.5254 21.6504 20.4751 21.0646 21.0609C20.4788 21.6467 19.529 21.6467 18.9432 21.0609L11.0039 13.1216L3.06457 21.0609C2.47878 21.6467 1.52903 21.6467 0.943247 21.0609C0.35746 20.4751 0.35746 19.5254 0.943247 18.9396L8.88259 11.0002L0.943246 3.0609C0.35746 2.47512 0.35746 1.52537 0.943246 0.939585C1.52903 0.353798 2.47878 0.353798 3.06457 0.939585L11.0039 8.87892L18.9432 0.939584Z"
      />
    </SvgProvider>
  );
};
