import {useMemo} from 'react';
import {VarianCheckbox} from '../model';
import {CONFIG_BOX} from '../config';

type Props = {
  varian?: VarianCheckbox;
};

export default function useVarianCheckbox({varian}: Props) {
  const styleDirection = useMemo(() => {
    switch (varian) {
      case 'outline-primary':
        return {
          checked: 'border-2 border-primary',
          iconColor: CONFIG_BOX.colors.primary,
        };
      case 'outline-secondary':
        return {
          checked: 'border-2 border-secondary',
          iconColor: CONFIG_BOX.colors.secondary,
        };
      case 'secondary':
        return {
          checked: 'bg-secondary',
          iconColor: '#ffffff',
        };

      default:
        return {checked: 'bg-primary', iconColor: '#ffffff'};
    }
  }, [varian]);
  return styleDirection;
}
