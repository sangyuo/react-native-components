import {useMemo} from 'react';
import {getClassNameStyles} from '../styles';
import {VirtualListClassProps} from '../model';

export default function useClassName(props?: VirtualListClassProps) {
  const getClassStyles = (classString?: string) =>
    classString ? getClassNameStyles(classString) : undefined;

  return useMemo(() => {
    const {
      className,
      classContent,
      classColWrapper,
      classIndicator,
      classHeader,
      classFooter,
    } = props || {};
    return {
      style: getClassStyles(className),
      contentContainerStyle: getClassStyles(classContent),
      columnWrapperStyle: getClassStyles(classColWrapper),
      indicatorStyle: getClassStyles(classIndicator),
      ListHeaderComponentStyle: getClassStyles(classHeader),
      ListFooterComponentStyle: getClassStyles(classFooter),
    };
  }, [props]);
}
