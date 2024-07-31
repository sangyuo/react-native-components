import {useMemo} from 'react';
import {getClassNameStyles} from '../styles';

export default function useClassName(className?: string) {
  const styleDirection = useMemo(() => {
    if (className) {
      return getClassNameStyles(className);
    }
    return {};
  }, [className]);
  return styleDirection;
}
