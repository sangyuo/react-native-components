import {useMemo} from 'react';
import {Varian} from '../model';
import {getClassNameTextVarian} from '../utils';

type PropsClass = {
  varian?: Varian;
  className?: string;
};

export default function useClassNameTextButton({
  className,
  varian,
}: PropsClass) {
  const classCustom = useMemo(() => {
    return `${getClassNameTextVarian(varian)} text-center ${className || ''}`;
  }, [className, varian]);
  return classCustom;
}
