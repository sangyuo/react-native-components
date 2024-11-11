import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Box, ButtonBox, PanResponderBox, TextBox} from '../atoms';
import {FlatList} from 'react-native';
import {formatDate, getDaysOfYear, MONTHS} from '../../utils/date.util';
import {
  DateFormatType,
  DayItemType,
  MonthOfYearType,
  SelectedDateType,
} from '../../model';
import {CalendarItemBox} from '../molecules';

interface Props {
  format?: DateFormatType;
  initDate?: string;
  selectedDates?: SelectedDateType;
  width?: number;
  height?: number;
  hideExtraDays?: boolean;
  disablePressExtraDays?: boolean;
  enableSpecialStyleExtraDays?: boolean;
  classToday?: string;
  classTextToday?: string;
  classSelected?: string;
  classTextSelected?: string;
  classDay?: string;
  classTextDay?: string;
  classExtraDay?: string;
  classTextExtraDay?: string;
  onChangeDate?: (date: {
    year: number;
    month: number;
    day: number;
    dateString: string;
  }) => void;
  renderDateItem?: (params: {
    date: DayItemType;
    dot?: boolean;
    classDot?: string;
    classBox: string;
    classText: string;
  }) => ReactNode;
}

export const CalendarSwipeBox = ({
  width = 0,
  height,
  initDate,
  selectedDates = {},
  format = 'YYYY-MM-DD',
  hideExtraDays,
  disablePressExtraDays = true,
  enableSpecialStyleExtraDays,
  onChangeDate,
  ...rest
}: Props) => {
  const today = new Date();
  const todayString = formatDate(today, format);
  const focusDate = initDate ? formatDate(initDate, format) : todayString;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(width);
  const [months, setMonths] = useState<MonthOfYearType[]>([]);
  const realWidth = useRef<number>(width);
  console.log('currentIndex', months.length, currentIndex);

  const monthItem = months?.length ? months?.[currentIndex] : null;

  const widthDay: number = useMemo(() => {
    if (offsetWidth > 0) {
      return Math.floor((offsetWidth / 7) * 10) / 10;
    }
    return 0;
  }, [offsetWidth]);

  useEffect(() => {
    const initMonths = () => {
      const targetDate = initDate ? new Date(initDate) : today;
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth();
      setCurrentIndex(Math.max(0, month));
      const currentMonth = getDaysOfYear(year);
      setMonths(currentMonth);
    };
    initMonths();
  }, []);

  const onNextMonth = () => {
    setCurrentIndex((prevIndex: number) =>
      Math.min(months.length - 1, prevIndex + 1),
    );
  };
  const onPrevMonth = () => {
    setCurrentIndex((prevIndex: number) => Math.min(0, prevIndex - 1));
  };

  const renderWeek = useCallback(() => {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(item => (
      <Box
        key={`week-${item}`}
        style={{
          width: widthDay,
        }}>
        <TextBox className="text-center font-bold" key={`week-${item}`}>
          {item}
        </TextBox>
      </Box>
    ));
  }, [widthDay]);

  const renderMonth = useCallback(
    () => (
      <ButtonBox className="row self-center mt-4">
        <TextBox className="text-center text-black font-bold">
          {`Month ${monthItem?.month} ${monthItem?.year}`}
        </TextBox>
      </ButtonBox>
    ),
    [offsetWidth, monthItem, currentIndex],
  );

  const renderDate = useCallback(
    (params: {item: MonthOfYearType}) => (
      <Box style={{width: offsetWidth}}>
        <CalendarItemBox
          item={params.item}
          widthDay={widthDay}
          selectedDates={selectedDates}
          hideExtraDays={hideExtraDays}
          disablePressExtraDays={disablePressExtraDays}
          enableSpecialStyleExtraDays={enableSpecialStyleExtraDays}
          onChangeDate={onChangeDate}
          {...rest}
        />
      </Box>
    ),
    [
      offsetWidth,
      monthItem,
      widthDay,
      currentIndex,
      onNextMonth,
      rest.classDay,
      rest.classTextDay,
      rest.classExtraDay,
      rest.classTextExtraDay,
      rest.classSelected,
      rest.classTextSelected,
      rest.classToday,
      rest.classTextToday,
      selectedDates,
      enableSpecialStyleExtraDays,
    ],
  );

  return (
    <Box
      className="w-full gap-4"
      onLayout={({nativeEvent}) => {
        if (!realWidth.current) {
          setOffsetWidth(Number(nativeEvent.layout.width.toFixed(1)));
          realWidth.current = nativeEvent.layout.width;
        }
      }}
      style={{width: offsetWidth || undefined, height}}>
      {monthItem && (
        <>
          {renderMonth()}
          <Box className="row flex-wrap">{renderWeek()}</Box>
          <PanResponderBox onSwipeLeft={onNextMonth} onSwipeRight={onPrevMonth}>
            {renderDate({item: monthItem})}
          </PanResponderBox>
        </>
      )}
    </Box>
  );
};
