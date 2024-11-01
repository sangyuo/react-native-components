import React from 'react';
import {Path, SvgProps} from 'react-native-svg';
import {SvgProvider} from '../../provider';

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
