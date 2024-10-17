import {useMemo} from 'react';
import {Varian} from '../model';

export default function useClassNameButton(varian?: Varian) {
  const classCustom = useMemo(() => {
    switch (varian) {
      case 'dark':
        return {
          container: 'bg-dark px-4 py-2 center',
          text: 'text-light font-bold',
        };
      case 'light':
        return {
          container: 'bg-light px-4 py-2 center',
          text: 'text-dark font-bold',
        };
      case 'outline':
        return {
          container: 'rounded border border-primary px-4 py-2 center',
          text: 'text-primary font-bold',
        };
      case 'primary':
        return {
          container: 'rounded bg-primary px-4 py-2 center',
          text: 'text-black font-bold',
        };
      case 'secondary':
        return {
          container: 'rounded bg-secondary px-4 py-2 center',
          text: 'text-light font-bold',
        };
      default:
        return {
          container: '',
          text: 'text-black font-bold',
        };
    }
  }, [varian]);
  return classCustom;
}
