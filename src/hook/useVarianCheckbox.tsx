import {useMemo} from 'react';
import {VarianCheckbox} from '../model';
import {CONFIG_BOX} from '../config';

type Props = {
  varian?: VarianCheckbox;
};

export default function useVarianCheckbox({varian}: Props) {
  const styleDirection = useMemo(() => {
    if (varian === 'outline') {
      return {
        checked: 'border-2 border-primary',
        iconColor: CONFIG_BOX.colors.primary,
      };
    }
    return {checked: 'bg-primary', iconColor: '#ffffff'};
  }, [varian]);
  return styleDirection;
}
