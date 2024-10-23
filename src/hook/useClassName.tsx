import {useMemo} from 'react';
import {getClassNameStyles} from '../styles';

export default function useClassName(className?: string) {
  return useMemo(
    () => (className ? getClassNameStyles(className) : {}),
    [className],
  );
}
