import React, {memo, ReactNode, useMemo} from 'react';
import {Box, ButtonBox} from '..';
import {
  DayItemType,
  MonthOfYearType,
  SelectedDateItemType,
  SelectedDateType,
} from '../../model';
import {classNames} from '../../utils';

interface ListDateItemBoxProps {
  item: MonthOfYearType;
  widthDay: number;
  classToday?: string;
  classTextToday?: string;
  classSelected?: string;
  classTextSelected?: string;
  classDay?: string;
  classTextDay?: string;
  classExtraDay?: string;
  classTextExtraDay?: string;
  selectedDates?: SelectedDateType;
  enableSpecialStyleExtraDays?: boolean;
  disablePressExtraDays?: boolean;
  hideExtraDays?: boolean;
  onChangeDate?: (date: {
    year: number;
    month: number;
    day: number;
    dateString: string;
  }) => void;
  renderDate?: (params: {
    date: DayItemType;
    dot?: boolean;
    classDot?: string;
    classBox: string;
    classText: string;
  }) => ReactNode;
}

const ListDateItemBox = memo((props: ListDateItemBoxProps) => {
  const {widthDay, item, selectedDates, hideExtraDays, onChangeDate, ...rest} =
    props;
  const {days, year, month} = item;
  return (
    <Box className="row flex-wrap row-gap-1 w-full">
      {days.map(item => (
        <DateItem
          month={month}
          year={year}
          key={item.dateString}
          item={item}
          height={widthDay}
          width={widthDay}
          selected={selectedDates?.[item.dateString]}
          onPressDay={onChangeDate}
          {...rest}
        />
      ))}
    </Box>
  );
});

export default ListDateItemBox;

interface DateItemProps {
  width: number;
  height: number;
  year: number;
  month: number;
  item: DayItemType;
  classToday?: string;
  classTextToday?: string;
  classSelected?: string;
  classTextSelected?: string;
  classDay?: string;
  classTextDay?: string;
  classExtraDay?: string;
  classTextExtraDay?: string;
  selected?: SelectedDateItemType;
  enableSpecialStyleExtraDays?: boolean;
  disablePressExtraDays?: boolean;
  hideExtraDays?: boolean;
  onPressDay?: (date: {
    year: number;
    month: number;
    day: number;
    dateString: string;
  }) => void;
  renderDate?: (params: {
    date: DayItemType;
    dot?: boolean;
    classDot?: string;
    classBox: string;
    classText: string;
  }) => ReactNode;
}

const DateItem = React.memo((props: DateItemProps) => {
  const {
    width,
    height,
    month,
    year,
    item,
    classDay,
    classTextDay,
    classSelected,
    classTextSelected,
    classToday,
    classTextToday,
    classExtraDay,
    classTextExtraDay,
    selected,
    enableSpecialStyleExtraDays,
    disablePressExtraDays,
    hideExtraDays,
    renderDate,
    onPressDay,
  } = props;

  const classBox = useMemo(() => {
    if (item.isExtraDay && !enableSpecialStyleExtraDays) {
      return classNames('items-center justify-center', classExtraDay);
    }
    return classNames(
      'items-center justify-center',
      classDay,
      item.isToday ? classToday : '',
      selected
        ? selected.classBox || classSelected || 'border border-primary'
        : '',
    );
  }, [item, selected, classDay, classToday, enableSpecialStyleExtraDays]);

  const classText = useMemo(() => {
    if (item.isExtraDay && !enableSpecialStyleExtraDays) {
      return classNames(
        'text-md text-center w-full text-gray-400',
        classTextExtraDay,
      );
    }
    return classNames(
      'text-md text-center w-full',
      classTextDay,
      item.isToday && selected
        ? 'text-black'
        : item.isToday
        ? 'text-primary'
        : '',
      item.isToday ? classTextToday : '',
      selected ? selected.classText || classTextSelected : '',
    );
  }, [
    selected,
    item,
    classTextSelected,
    classTextDay,
    classTextToday,
    enableSpecialStyleExtraDays,
  ]);

  if (renderDate) {
    return renderDate({
      date: item,
      classBox,
      classText,
      dot: selected?.dot,
      classDot: selected?.classDot,
    });
  }

  return (
    <ButtonBox
      key={item.dateString}
      style={{width, height}}
      disabled={disablePressExtraDays && item.isExtraDay}
      className={classBox}
      title={hideExtraDays && item.isExtraDay ? '' : item.day.toString()}
      classText={classText}
      onPress={() => onPressDay && onPressDay({year, month, ...item})}>
      {selected && selected?.dot && (
        <Box
          className={classNames(
            'w-1 h-1 bg-primary rounded-full absolute top-2',
            selected.classDot,
          )}
        />
      )}
    </ButtonBox>
  );
});
