import {useEffect, useMemo, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {CalendarBoxProps, MonthOfYearType} from '../model';
import {CALENDAR} from '../config/Calendar';
import {getDaysOfYear} from '../utils/date.util';

type Props = Pick<
  CalendarBoxProps,
  | 'initDate'
  | 'width'
  | 'weeks'
  | 'weekType'
  | 'format'
  | 'firstDay'
  | 'horizontal'
  | 'maxYear'
  | 'minYear'
>;
interface State {
  currentIndex: number;
  isLoading: boolean;
  monthsData: MonthOfYearType[];
  offsetWidth: number;
  blockUpdateIndex: boolean;
}

export default function useCalendarBox({
  initDate,
  width = 0,
  weeks,
  weekType = 'short',
  format = 'YYYY-MM-DD',
  firstDay,
  horizontal,
  minYear = 1900,
  maxYear = 2100,
}: Props) {
  const [state, setState] = useState<State>({
    currentIndex: 0,
    isLoading: true,
    monthsData: [],
    offsetWidth: width,
    blockUpdateIndex: false,
  });
  const refScroll = useRef<ScrollView>(null);
  const firstRender = useRef(true);

  const weekData = useMemo(() => {
    const days = weeks ? weeks : CALENDAR.week[weekType];
    return [...days.slice(firstDay), ...days.slice(0, firstDay)];
  }, [weeks, weekType, firstDay]);

  const currentMonth = useMemo(
    () => state.monthsData?.[state.currentIndex],
    [state.monthsData, state.currentIndex],
  );

  const widthDay: number = useMemo(() => {
    if (state.offsetWidth > 0) {
      return Math.floor(((state.offsetWidth - 1) / 7) * 10) / 10;
    }
    return 0;
  }, [state.offsetWidth]);

  useEffect(() => {
    const initMonths = () => {
      const targetDate = initDate ? new Date(initDate) : new Date();
      const year = targetDate.getFullYear();
      const currentMonth = getDaysOfYear(year, format, firstDay);
      const preMonth = getDaysOfYear(year - 1, format, firstDay);
      const nextMonth = getDaysOfYear(year + 1, format, firstDay);
      const monthIndex = targetDate.getMonth();
      setState(pre => ({
        ...pre,
        monthsData: [...preMonth, ...currentMonth, ...nextMonth],
        currentIndex: 12 + monthIndex,
        isLoading: false,
      }));
    };
    initMonths();
  }, [format, initDate, firstDay]);

  useEffect(() => {
    if (
      firstRender.current &&
      state.monthsData.length > 0 &&
      state.offsetWidth > 0 &&
      state.currentIndex >= 0
    ) {
      setTimeout(() => {
        scrollToIndex(state.currentIndex);
      }, 250);
      firstRender.current = false;
    }
  }, [state.offsetWidth, state.monthsData, state.currentIndex]);

  useEffect(() => {
    if (state.monthsData.length && !state.isLoading) {
      const currentMonth = state.monthsData[state.currentIndex];
      if (state.currentIndex === 0 && currentMonth.year - 1 >= minYear) {
        setState(pre => ({
          ...pre,
          isLoading: true,
          blockUpdateIndex: false,
        }));
        // smooth get more
        setTimeout(() => {
          getMoreMonth('prev');
        }, 125);
      }
      if (
        state.monthsData.length - state.currentIndex < 12 &&
        currentMonth.year + 1 <= maxYear
      ) {
        getMoreMonth('next');
      }
    }
  }, [state.currentIndex, state.isLoading, state.monthsData.length]);

  const scrollToIndex = (index: number, animated = false) => {
    setTimeout(() => {
      if (refScroll.current) {
        const params = horizontal
          ? {x: state.offsetWidth * index + 1, y: 0, animated}
          : {y: state.offsetWidth * index + 1, x: 0, animated};
        refScroll.current.scrollTo(params);
      }
    }, 0);
  };

  const getMoreMonth = (type: 'prev' | 'next' = 'next') => {
    if (type === 'next') {
      const perMonths = getDaysOfYear(currentMonth.year + 1, format, firstDay);
      setState(pre => ({
        ...pre,
        monthsData: [...pre.monthsData, ...perMonths],
        isLoading: false,
      }));
      return;
    }
    const perMonths = getDaysOfYear(currentMonth.year - 1, format, firstDay);
    setState(pre => ({
      ...pre,
      monthsData: [...perMonths, ...pre.monthsData],
      isLoading: false,
      blockUpdateIndex: true,
      currentIndex: 12,
    }));
    scrollToIndex(12);
  };

  const controlMonth = (type: 'next' | 'prev', scrollEnabled = false) => {
    if (refScroll.current) {
      const nextIndex =
        type === 'next'
          ? Math.min(state.currentIndex + 1, state.monthsData.length - 1)
          : Math.max(state.currentIndex - 1, 0);
      scrollToIndex(nextIndex, scrollEnabled);
    }
  };

  return {
    refScroll,
    ...state,
    widthDay,
    currentMonth,
    weekData,
    firstRender,
    controlMonth,
    setState,
  };
}
