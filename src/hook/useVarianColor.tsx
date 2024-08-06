import {useMemo} from 'react';
import {VarianColor} from '../model';

type Props = {
  varian?: VarianColor;
};

export default function useVarianColor({varian}: Props) {
  const styleDirection = useMemo(() => {
    if (varian === 'secondary') {
      return {
        border: 'border-secondary',
        bg: 'bg-secondary',
        text: 'text-secondary',
      };
    }
    return {
      border: 'border-primary',
      bg: 'bg-primary',
      text: 'text-primary',
    };
  }, [varian]);
  return styleDirection;
}
