import {useMemo} from 'react';
import {VarianColor} from '../model';
import {CONFIG_BOX} from '../config';
import {COLORS} from '../config/Colors';

type Props = {
  varian?: VarianColor;
  enableNull?: boolean;
  isDropdown?: boolean;
};

const classCustom = {
  default: {
    border: 'border-black',
    bg: 'bg-black',
    text: 'text-black',
    color: COLORS.black,
  },
  primary: {
    border: 'border-primary',
    bg: 'bg-primary',
    text: 'text-primary',
    color: CONFIG_BOX.colors.primary,
  },
  secondary: {
    border: 'border-secondary',
    bg: 'bg-secondary',
    text: 'text-secondary',
    color: CONFIG_BOX.colors.secondary,
  },
};

export default function useVarianColor({
  varian,
  enableNull,
  isDropdown,
}: Props) {
  return useMemo(() => {
    if (varian) {
      return classCustom[varian];
    }
    if (enableNull) {
      return {
        ...classCustom.default,
        bg: isDropdown ? 'bg-gray-400' : 'bg-black',
      };
    }
    return classCustom.primary;
  }, [varian, enableNull]);
}
