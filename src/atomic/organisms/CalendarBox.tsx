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
import {getDaysOfYear} from '../../utils/date.util';
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
  const refMonth = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [offsetWidth, setOffsetWidth] = useState(width);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [months, setMonths] = useState<MonthOfYearType[]>([]);
  const firstRender = useRef(true);
  const refMonthUpdate = useRef<NodeJS.Timeout>();

  const widthDay: number = useMemo(() => {
    if (offsetWidth > 0) {
      return Math.floor(((offsetWidth - 1) / 7) * 10) / 10;
    }
    return 0;
  }, [offsetWidth]);

  useEffect(() => {
    const initMonths = () => {
      const targetDate = initDate ? new Date(initDate) : new Date();
      const year = targetDate.getFullYear();
      const currentMonth = getDaysOfYear(year, format);
      const preMonth = getDaysOfYear(year - 1, format);
      const nextMonth = getDaysOfYear(year + 1, format);
      const monthIndex = targetDate.getMonth();
      setMonths([...preMonth, ...currentMonth, ...nextMonth]);
      setCurrentIndex(12 + monthIndex);
    };
    initMonths();
  }, [format, initDate]);

  useEffect(() => {
    if (
      firstRender.current &&
      months.length > 0 &&
      offsetWidth > 0 &&
      currentIndex >= 0
    ) {
      setTimeout(() => {
        scrollToIndex(currentIndex);
      }, 250);
      firstRender.current = false;
    }
  }, [offsetWidth, months, currentIndex]);

  const getMoreMonth = (type: 'prev' | 'next' = 'next', index = 0) => {
    const currentMonth = months[index];
    if (type === 'next') {
      const perMonths = getDaysOfYear(currentMonth.year + 1);
      setMonths([...months, ...perMonths]);
      return;
    }
    const perMonths = getDaysOfYear(currentMonth.year - 1);
    setMonths([...perMonths, ...months]);
  };

  const scrollToIndex = (index: number) => {
    setTimeout(() => {
      if (refMonth.current) {
        const params = horizontal
          ? {x: offsetWidth * index + 1, y: 0, animated: false}
          : {y: offsetWidth * index + 1, x: 0, animated: false};
        refMonth.current.scrollTo(params);
      }
    }, 0);
  };

  const currentMonth = useMemo(() => months?.[currentIndex], [currentIndex]);

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
        }
      }}
      className="w-full gap-4"
      style={{width: offsetWidth || undefined, height}}>
      {months.length > 0 && (
        <>
          {renderMonth()}
          <Box className="row flex-wrap">{renderWeek()}</Box>
          <ScrollView
            ref={refMonth}
            scrollEnabled={scrollEnabled}
            scrollEventThrottle={15}
            onScroll={({nativeEvent}) => {
              if (!firstRender.current) {
                const index = Math.round(
                  nativeEvent.contentOffset.x / offsetWidth,
                );
                if (refMonthUpdate.current) {
                  clearTimeout(refMonthUpdate.current);
                }
                refMonthUpdate.current = setTimeout(() => {
                  if (index !== currentIndex) {
                    if (index < 12 && months.length > 0) {
                      setScrollEnabled(false);
                      setTimeout(() => {
                        getMoreMonth('prev', index);
                        scrollToIndex(index + 12);
                        setCurrentIndex(index + 12);
                        setScrollEnabled(true);
                      }, 120);
                    } else if (months.length - index < 12) {
                      getMoreMonth('next', index);
                      setCurrentIndex(index);
                    } else {
                      setCurrentIndex(index);
                    }
                  }
                }, 25);
              }
            }}
            horizontal={horizontal}
            pagingEnabled>
            {months.map((item, index) => {
              if (index > currentIndex + 2 || index < currentIndex - 1) {
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
