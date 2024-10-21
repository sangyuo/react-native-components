import {useMemo} from 'react';
import {VarianColor} from '../model';
import {CONFIG_BOX} from '../config';
import {COLORS} from '../config/Colors';

type Props = {
  varian?: VarianColor;
  enableNull?: boolean;
  isDropdown?: boolean;
};

export default function useVarianColor({
  varian,
  enableNull,
  isDropdown,
}: Props) {
  const styleDirection = useMemo(() => {
    if (varian === 'secondary') {
      return {
        border: 'border-secondary',
        bg: 'bg-secondary',
        text: 'text-secondary',
        color: CONFIG_BOX.colors.secondary,
      };
    }

    if (varian === 'primary' || !enableNull) {
      return {
        border: 'border-primary',
        bg: 'bg-primary',
        text: 'text-primary',
        color: CONFIG_BOX.colors.primary,
      };
    }

    return {
      border: 'border-black',
      bg: isDropdown ? 'bg-gray-400' : 'bg-black',
      text: 'text-black',
      color: COLORS.black,
    };
  }, [varian, enableNull]);
  return styleDirection;
}
