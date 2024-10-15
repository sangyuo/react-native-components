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
import React from 'react';

export function FlatListBox<ItemT = any>(props: FlatListProps<ItemT>) {
  const FlatListRender = withVirtualizeList<
    FlatListProps<ItemT> & React.RefAttributes<FlatList<ItemT>>
  >(FlatList);
  return <FlatListRender {...props} />;
}

export function VirtualizedListBox<ItemT = any>(
  props: VirtualizedListProps<ItemT> &
    React.RefAttributes<VirtualizedList<ItemT>>,
) {
  const VirtualizedListRender =
    withVirtualizeList<VirtualizedListProps<ItemT>>(VirtualizedList);
  return <VirtualizedListRender {...props} />;
}

export const ScrollBox = withVirtualizeList<ScrollViewProps>(ScrollView);

export function SectionListBox<ItemT = any>(props: SectionListProps<ItemT>) {
  const SectionListRender =
    withVirtualizeList<SectionListProps<ItemT>>(SectionList);
  return <SectionListRender {...props} />;
}
