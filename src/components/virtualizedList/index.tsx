import {
  FlatList,
  FlatListProps,
  ScrollView,
  ScrollViewProps,
  SectionList,
  SectionListProps,
  VirtualizedList,
  VirtualizedListProps,
} from 'react-native';
import {withVirtualizeList} from '../../hoc';
import React, {forwardRef, ReactNode} from 'react';

export function FlatListBox<ItemT = any>(props: FlatListProps<ItemT>) {
  const FlatListRender = withVirtualizeList<
    FlatListProps<ItemT>,
    FlatList<ItemT>
  >(FlatList);
  return <FlatListRender {...props} />;
}

export const VirtualizedListBox = forwardRef(
  <ItemT,>(
    props: VirtualizedListProps<ItemT> &
      React.RefAttributes<VirtualizedList<ItemT>>,
    ref: React.Ref<VirtualizedList<ItemT>>,
  ) => {
    const VirtualizedListRender = withVirtualizeList<
      VirtualizedListProps<ItemT>,
      VirtualizedList<ItemT>
    >(VirtualizedList);
    return <VirtualizedListRender {...props} ref={ref} />;
  },
);

export const ScrollBox = withVirtualizeList<
  ScrollViewProps & {children: ReactNode},
  ScrollView
>(ScrollView);

export function SectionListBox<ItemT = any>(props: SectionListProps<ItemT>) {
  const SectionListRender = withVirtualizeList<
    SectionListProps<ItemT>,
    SectionList
  >(SectionList);
  return <SectionListRender {...props} />;
}
