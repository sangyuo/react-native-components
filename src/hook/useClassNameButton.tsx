import {useMemo} from 'react';
import {Varian} from '../model';
const classCustom = {
  dark: {
    container: 'bg-dark px-4 py-2 center',
    text: 'text-light font-bold',
  },
  light: {
    container: 'bg-light px-4 py-2 center',
    text: 'text-dark font-bold',
  },
  outline: {
    container: 'rounded border border-primary px-4 py-2 center',
    text: 'text-primary font-bold',
  },
  primary: {
    container: 'rounded bg-primary px-4 py-2 center',
    text: 'text-black font-bold',
  },
  secondary: {
    container: 'rounded bg-secondary px-4 py-2 center',
    text: 'text-light font-bold',
  },
  default: {
    container: '',
    text: 'text-black font-bold',
  },
};
export default function useClassNameButton(varian?: Varian) {
  return useMemo(
    () => (varian ? classCustom[varian] : classCustom.default),
    [varian],
  );
}
