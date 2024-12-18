import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {ArrowLeft, ArrowRight, Box, ButtonBox, TextBox} from '../atoms';
import {ScrollView} from 'react-native';
import {getDaysOfYear} from '../../utils/date.util';
import {
  DateFormatType,
  DayItemType,
  MonthOfYearType,
  SelectedDateType,
} from '../../model';
import {CalendarItemBox} from '../molecules';
import {classNames} from '../../utils';
import {CALENDAR} from '../../config/Calendar';

interface Props {
  format?: DateFormatType;
  initDate?: string;
  selectedDates?: SelectedDateType;
  width?: number;
  height?: number;
  hideExtraDays?: boolean;
  disablePressExtraDays?: boolean;
  enableSpecialStyleExtraDays?: boolean;
  classBox?: string;
  classBoxArrowLeft?: string;
  classBoxArrowRight?: string;
  colorArrowLeft?: string;
  colorArrowRight?: string;
  classBoxHeader?: string;
  classToday?: string;
  classTextToday?: string;
  classSelected?: string;
  classTextSelected?: string;
  classDay?: string;
  classTextDay?: string;
  classExtraDay?: string;
  classTextExtraDay?: string;
  classTextWeek?: string;
  classWeek?: string;
  classTextMonth?: string;
  classTextYear?: string;
  horizontal?: boolean;
  enableScroll?: boolean;
  widthArrow?: number;
  months?: Array<string | number>;
  weeks?: Array<string | number>;
  weekType?: 'short' | 'long';
  monthType?: 'default' | 'short' | 'long';
  rowGap?: number;
  minYear?: number;
  maxYear?: number;
  enableControl?: boolean;
  firstDay?: number;
  renderMonth?: (params: {year: number; month: number}) => ReactNode;
  onChangeDate?: (date: {
    year: number;
    month: number;
    day: number;
    dateString: string;
  }) => void;
  renderHeader?: (params: MonthOfYearType) => ReactNode;
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
  enableScroll = true,
  weekType = 'short',
  monthType = 'default',
  weeks,
  months,
  classBox,
  rowGap = 3,
  colorArrowLeft = '#000',
  colorArrowRight = '#000',
  minYear = 2000,
  maxYear = 2100,
  enableControl = false,
  firstDay = 0,
  onChangeDate,
  renderMonth,
  renderHeader,
  ...rest
}: Props) => {
  const refMonth = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [offsetWidth, setOffsetWidth] = useState(width);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [monthsData, setMonths] = useState<MonthOfYearType[]>([]);
  const firstRender = useRef(true);
  const refMonthUpdate = useRef<NodeJS.Timeout>();
  const weekData = useMemo(() => {
    const days = weeks ? weeks : CALENDAR.week[weekType];
    return [...days.slice(firstDay), ...days.slice(0, firstDay)];
  }, [weeks, weekType, firstDay]);

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
      const currentMonth = getDaysOfYear(year, format, firstDay);
      const preMonth = getDaysOfYear(year - 1, format, firstDay);
      const nextMonth = getDaysOfYear(year + 1, format, firstDay);
      const monthIndex = targetDate.getMonth();
      setMonths([...preMonth, ...currentMonth, ...nextMonth]);
      setCurrentIndex(12 + monthIndex);
    };
    initMonths();
  }, [format, initDate, firstDay]);

  useEffect(() => {
    if (
      firstRender.current &&
      monthsData.length > 0 &&
      offsetWidth > 0 &&
      currentIndex >= 0
    ) {
      setTimeout(() => {
        scrollToIndex(currentIndex);
      }, 250);
      firstRender.current = false;
    }
  }, [offsetWidth, monthsData, currentIndex]);

  const getMoreMonth = (type: 'prev' | 'next' = 'next', index = 0) => {
    const currentMonth = monthsData[index];
    if (type === 'next') {
      const perMonths = getDaysOfYear(currentMonth.year + 1, format, firstDay);
      setMonths([...monthsData, ...perMonths]);
      return;
    }
    const perMonths = getDaysOfYear(currentMonth.year - 1, format, firstDay);
    setMonths([...perMonths, ...monthsData]);
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

  const controlMonth = (type: 'next' | 'prev') => {
    if (refMonth.current) {
      const nextIndex =
        type === 'next'
          ? Math.min(currentIndex + 1, monthsData.length - 1)
          : Math.max(currentIndex - 1, 0);
      scrollToIndex(nextIndex);
    }
  };

  const currentMonth = useMemo(
    () => monthsData?.[currentIndex],
    [currentIndex],
  );

  const renderWeek = useCallback(() => {
    return weekData.map(item => (
      <Box
        key={`week-${item}`}
        className={rest?.classWeek}
        style={{
          width: widthDay,
        }}>
        <TextBox
          className={classNames('text-center font-bold', rest?.classTextWeek)}
          key={`week-${item}`}>
          {item}
        </TextBox>
      </Box>
    ));
  }, [widthDay, rest?.classTextWeek, rest?.classWeek, weekData]);

  const renderMonthItem = useCallback(
    () =>
      renderHeader ? (
        renderHeader(currentMonth)
      ) : (
        <Box
          className={classNames(
            'row-center w-full justify-center py-1',
            rest?.classBoxHeader,
          )}>
          {enableControl && (
            <ButtonBox
              onPress={() => controlMonth('prev')}
              className={classNames('absolute left-4', rest.classBoxArrowLeft)}>
              <ArrowLeft width={16} fill={colorArrowLeft} />
            </ButtonBox>
          )}
          <ButtonBox>
            {renderMonth ? (
              renderMonth({
                year: currentMonth?.year,
                month: currentMonth?.month,
              })
            ) : (
              <TextBox
                className={classNames(
                  'text-center text-black font-bold text-lg',
                  rest.classTextMonth,
                )}>
                {months
                  ? months[currentMonth?.month - 1]
                  : monthType === 'default'
                  ? currentMonth?.month
                  : CALENDAR.month[monthType][currentMonth?.month - 1]}{' '}
                /{' '}
                <TextBox className={rest.classTextYear}>
                  {currentMonth?.year}
                </TextBox>
              </TextBox>
            )}
          </ButtonBox>
          {enableControl && (
            <ButtonBox
              onPress={() => controlMonth('next')}
              className={classNames(
                'absolute right-4',
                rest.classBoxArrowRight,
              )}>
              <ArrowRight width={16} fill={colorArrowRight} />
            </ButtonBox>
          )}
        </Box>
      ),
    [
      months,
      offsetWidth,
      currentMonth,
      rest?.classTextYear,
      rest?.classTextMonth,
      rest?.classBoxHeader,
      rest?.classBoxArrowRight,
      rest?.classBoxArrowLeft,
      colorArrowRight,
      colorArrowLeft,
      monthType,
    ],
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
      className={classNames(`w-full gap-${rowGap}`, classBox)}
      style={{width: offsetWidth || undefined, height}}>
      {monthsData.length > 0 && (
        <>
          {renderMonthItem()}
          <Box className="row flex-wrap">{renderWeek()}</Box>
          <ScrollView
            ref={refMonth}
            scrollEnabled={scrollEnabled && enableScroll}
            scrollEventThrottle={15}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
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
                    if (index < 12 && monthsData.length > 0) {
                      setScrollEnabled(false);
                      setTimeout(() => {
                        getMoreMonth('prev', index);
                        scrollToIndex(index + 12);
                        setCurrentIndex(index + 12);
                        setScrollEnabled(true);
                      }, 120);
                    } else if (monthsData.length - index < 12) {
                      getMoreMonth('next', index);
                      setCurrentIndex(index);
                    } else {
                      setCurrentIndex(index);
                    }
                  }
                }, 0);
              }
            }}
            horizontal={horizontal}
            pagingEnabled>
            {monthsData.map((item, index) => {
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
