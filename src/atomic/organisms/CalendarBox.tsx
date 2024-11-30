import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Box, ButtonBox, TextBox} from '../atoms';
import {ScrollView} from 'react-native';
import {formatDate, getDaysOfYear} from '../../utils/date.util';
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
  horizontal?: boolean;
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

export const CalendarBox = ({
  width = 0,
  height,
  initDate,
  selectedDates = {},
  format = 'YYYY-MM-DD',
  hideExtraDays,
  disablePressExtraDays = true,
  enableSpecialStyleExtraDays,
  horizontal = true,
  onChangeDate,
  ...rest
}: Props) => {
  const today = new Date();
  const todayString = formatDate(today, format);
  const focusDate = initDate ? formatDate(initDate, format) : todayString;
  const refMonth = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [offsetWidth, setOffsetWidth] = useState(width);
  const [months, setMonths] = useState<MonthOfYearType[]>([]);
  const realWidth = useRef<number>(width);
  const firstRender = useRef(true);
  const scrollWidth = useRef<number>(0);
  const refCurrentMonth = useRef<MonthOfYearType>();
  const widthDay: number = useMemo(() => {
    if (offsetWidth > 0) {
      return Math.floor(((offsetWidth - 1) / 7) * 10) / 10;
    }
    return 0;
  }, [offsetWidth]);

  useEffect(() => {
    const initMonths = () => {
      const targetDate = initDate ? new Date(initDate) : today;
      const year = targetDate.getFullYear();
      const currentMonth = getDaysOfYear(year);
      const preMonth = getDaysOfYear(year - 1);
      const nextMonth = getDaysOfYear(year + 1);
      const monthIndex = targetDate.getMonth();
      setMonths([...preMonth, ...currentMonth, ...nextMonth]);
      setCurrentIndex(11 + monthIndex);
    };
    initMonths();
  }, []);

  console.log('c', currentIndex);

  useEffect(() => {
    if (firstRender.current && months.length > 0 && offsetWidth > 0) {
      setTimeout(() => {
        scrollToIndex(currentIndex);
      }, 250);
      firstRender.current = false;
    }
  }, [offsetWidth, months, currentIndex]);

  useEffect(() => {
    if (currentIndex < 11 && months.length > 0 && !firstRender.current) {
      const currentMonth = months[currentIndex];
      const perMonths = getDaysOfYear(currentMonth.year - 1);
      setMonths([...perMonths, ...months]);
      setCurrentIndex(11 + currentIndex);
    }
  }, [currentIndex, months]);

  const scrollToIndex = (index: number) => {
    if (refMonth.current) {
      const params = horizontal
        ? {x: offsetWidth * index + 1, y: 0, animated: false}
        : {y: offsetWidth * index + 1, x: 0, animated: false};
      refMonth.current.scrollTo(params);
    }
  };

  const currentMonth = useMemo(() => months?.[currentIndex], [currentIndex]);
  console.log('currentIndex', currentMonth.month);

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
          {`Month ${currentMonth?.month} ${currentMonth?.year}`}
        </TextBox>
      </ButtonBox>
    ),
    [offsetWidth, currentMonth],
  );

  const renderDate = useCallback(
    (params: MonthOfYearType) => (
      <Box style={{width: offsetWidth}} key={params.month + '-' + params.year}>
        <CalendarItemBox
          item={params}
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
      widthDay,
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
      onLayout={({nativeEvent}) => {
        if (!offsetWidth) {
          setOffsetWidth(Number(nativeEvent.layout.width.toFixed(1)));
          realWidth.current = nativeEvent.layout.width;
        }
      }}
      className="w-full gap-4"
      style={{width: offsetWidth || undefined, height}}>
      {months.length > 0 && (
        <>
          {renderMonth()}
          <Box className="row flex-wrap">{renderWeek()}</Box>
          <ScrollView
            onScroll={({nativeEvent}) => {
              if (!firstRender.current) {
                scrollWidth.current = nativeEvent.contentSize.width;
                const index = Math.round(
                  nativeEvent.contentOffset.x / offsetWidth,
                );
                setCurrentIndex(index);
              }
            }}
            ref={refMonth}
            horizontal={horizontal}
            pagingEnabled>
            {months.map((item, index) => {
              if (index > currentIndex + 1 || index < currentIndex - 1) {
                return (
                  <Box
                    key={item.month + '-' + item.year}
                    style={{width: offsetWidth}}></Box>
                );
              }
              return renderDate(item);
            })}
          </ScrollView>
        </>
      )}
    </Box>
  );
};
