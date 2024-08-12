import {useMemo} from 'react';
import {VarianColor} from '../model';
import {CONFIG_BOX} from '../config';

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
        color: CONFIG_BOX.colors.secondary,
      };
    }
    return {
      border: 'border-primary',
      bg: 'bg-primary',
      text: 'text-primary',
      color: CONFIG_BOX.colors.primary,
    };
  }, [varian]);
  return styleDirection;
}
