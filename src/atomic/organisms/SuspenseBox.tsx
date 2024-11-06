import React, {ReactNode, Suspense, SuspenseProps, useMemo} from 'react';
import {PlaceholderBoxProps} from '../../model';
import {PlaceholderBox} from './PlaceholderBox';

interface SuspenseBoxProps extends SuspenseProps {
  fallback?: ReactNode;
  fallbackProps?: PlaceholderBoxProps;
}
export const SuspenseBox = ({
  fallback,
  fallbackProps,
  ...rest
}: SuspenseBoxProps) => {
  const Fallback = useMemo(() => {
    return fallback || <PlaceholderBox {...fallbackProps} />;
  }, [fallbackProps, fallback]);

  return <Suspense fallback={Fallback} {...rest} />;
};
