import {useMemo} from 'react';
import {Varian} from '../model';
import {getClassNameVarian} from '../utils';

type PropsClass = {
  varian?: Varian;
  className?: string;
};

export default function useClassNameButton({className, varian}: PropsClass) {
  const classCustom = useMemo(() => {
    return `${getClassNameVarian(varian)} ${className || ''}`;
  }, [className, varian]);
  return classCustom;
}
