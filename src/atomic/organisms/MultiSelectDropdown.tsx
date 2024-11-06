import React from 'react';
import {
  MultiDropDownProps,
  RenderButtonProps,
  RenderOptionItem,
} from '../../model';
import {classNames} from '../../utils';
import {useClassVirtualizedList, useVarianColor} from '../../hook';
import {ArrowDown, Box, ButtonBox, DropdownBox, TextBox, Tick} from '../..';
import {ScrollView} from 'react-native';

export const MultiSelectDropdown = <ItemT,>({
  data,
  value,
  buttonDropdown,
  classOptionItem,
  classOptionLabel,
  numberOfLinesOption,
  classOptionItemSelected,
  classOptionLabelSelected,
  styleSelectType = 'icon',
  iconSelected,
  iconSelectedColor,
  classContentSelected,
  onPressSelectedItem,
  renderButtonAction,
  onChange,
  renderOptionItem,
  ...rest
}: MultiDropDownProps<ItemT>) => {
  const {
    className,
    title,
    placeholder,
    classNameText,
    classPlaceholderColor,
    classValueColor,
    ...restButton
  } = buttonDropdown || {};
  const {
    iconColor,
    varian,
    pickKey = 'id' as keyof ItemT,
    pickLabel = 'name' as keyof ItemT,
  } = rest;

  const theme = useVarianColor({varian, enableNull: true, isDropdown: true});
  const styleScroll = useClassVirtualizedList({
    ...classContentSelected,
    classContent: classNames('gap-2', classContentSelected?.classContent),
  });

  const renderButtonActionMulti = ({onPress}: RenderButtonProps) => {
    if (buttonDropdown?.hidden) {
      return null;
    }
    let titleBtn = placeholder ?? 'Select data';
    let classTitle = classPlaceholderColor ?? 'text-gray-400';
    let itemSelect: ItemT[] | null = null;
    if (value?.length) {
      itemSelect = data?.filter(x =>
        value.includes(x[pickKey] as string | number),
      );
      if (itemSelect?.length) {
        classTitle = classValueColor ?? 'text-white';
        titleBtn = '';
      }
    }
    if (renderButtonAction) {
      return renderButtonAction({dataSelected: itemSelect, onPress});
    }

    return (
      <ButtonBox
        {...restButton}
        className={classNames(
          'w-full px-2 h-10 row-center space-between border gap-1',
          theme.border,
          className,
        )}
        classNameText={classNames('font-medium', classTitle, classNameText)}
        numberOfLines={1}
        title={titleBtn ?? title}
        rightContent={<ArrowDown width={16} fill={iconColor ?? theme.color} />}
        onPress={onPress}>
        <Box className="row-center flex-1">
          {itemSelect?.length && (
            <ScrollView horizontal {...styleScroll}>
              {itemSelect.map(item => (
                <ButtonBox
                  key={'selected' + item?.[pickKey]}
                  className="px-2 py-1 bg-primary rounded -z-1"
                  onPress={() =>
                    onPressSelectedItem && onPressSelectedItem(item)
                  }>
                  <TextBox className={classNames(classTitle)}>
                    {item?.[pickLabel] as string}
                  </TextBox>
                </ButtonBox>
              ))}
            </ScrollView>
          )}
        </Box>
      </ButtonBox>
    );
  };

  const renderOptionItemMulti = ({item, index}: RenderOptionItem) => {
    const selected = value?.includes(item?.[pickKey]);
    if (renderOptionItem) {
      return renderOptionItem({index, item, selected});
    }
    return (
      <ButtonBox
        key={(item?.[pickKey] ?? index) as string | number}
        className={classNames(
          'w-full px-4 py-2 row-center space-between',
          classOptionItem,
          selected
            ? classNames(
                styleSelectType === 'color' ? theme.bg : '',
                classOptionItemSelected,
              )
            : '',
        )}
        classNameText={classNames(
          'font-medium',
          classOptionLabel,
          selected ? classOptionLabelSelected : '',
        )}
        title={item?.[pickLabel] as string}
        onPress={() => {
          onChange && onChange(item);
        }}
        numberOfLines={numberOfLinesOption}
        rightContent={
          selected && styleSelectType === 'icon'
            ? iconSelected ?? (
                <Tick width={16} fill={iconSelectedColor || theme.color} />
              )
            : null
        }
      />
    );
  };

  return (
    <DropdownBox
      data={data}
      renderButtonAction={renderButtonActionMulti}
      renderOptionItem={renderOptionItemMulti}
      {...rest}
    />
  );
};
