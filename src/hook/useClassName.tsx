import {useMemo} from 'react';
import {getClassNameStyles} from '../styles';

type PropsClass = {
  className?: string;
  scaleScreen?: boolean;
};

export default function useClassNameStyles({
  className,
  scaleScreen,
}: PropsClass) {
  const styleDirection = useMemo(() => {
    if (className) {
      return getClassNameStyles(className);
    }
    return {};
  }, [className, scaleScreen]);
  return styleDirection;
}
