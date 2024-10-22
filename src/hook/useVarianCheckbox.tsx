import {useMemo} from 'react';
import {VarianCheckbox} from '../model';
import {CONFIG_BOX} from '../config';

type Props = {
  varian?: VarianCheckbox;
};

const classCustom = {
  'outline-primary': {
    checked: 'bg-primary',
    iconColor: CONFIG_BOX.colors.primary,
  },
  'outline-secondary': {
    checked: 'bg-secondary',
    iconColor: CONFIG_BOX.colors.secondary,
  },
  secondary: {
    checked: 'bg-secondary',
    iconColor: '#ffffff',
  },
  primary: {
    checked: 'bg-primary',
    iconColor: '#ffffff',
  },
};

export default function useVarianCheckbox({varian = 'primary'}: Props) {
  return useMemo(() => classCustom[varian], [varian]);
}
