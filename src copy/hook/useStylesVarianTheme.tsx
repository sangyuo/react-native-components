import {useMemo} from 'react';
import {ClassStyleType} from '../model';
import {getClassStyles} from '../styles';

type Props = {
  classStyles?: ClassStyleType | ClassStyleType[];
  scaleScreen?: boolean;
};

export default function useStylesVarianTheme({
  classStyles,
  scaleScreen,
}: Props) {
  const styleDirection = useMemo(() => {
    if (classStyles) {
      return getClassStyles(classStyles, scaleScreen);
    }
    return {};
  }, [classStyles, scaleScreen]);
  return styleDirection;
}
