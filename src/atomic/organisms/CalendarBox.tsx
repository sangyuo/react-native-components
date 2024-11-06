import React, {useEffect, useRef, useState} from 'react';
import {Box, ButtonBox, TextBox} from '../atoms';
import {FlatList} from 'react-native';
import {getDaysOfMonth, getDaysOfMonths, MONTHS} from '../../utils/date.util';

interface Props {
  width?: number;
  height?: number;
}
interface Result {
  year: number;
  month: number;
  days: number[];
  daysBefore: number[];
  daysAfter: [];
}

export const CalendarBox = ({width = 0, height}: Props) => {
  const refMonth = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState({
    width,
    height,
  });
  const [currentYear, setCurrentYear] = useState(2024);
  const [months, setMonths] = useState<Result[]>([]);
  const timerUpdate = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const initMonths = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      const currentMonth = getDaysOfMonth(month, year);
      const nextDayMonth =
        month + 1 > 12
          ? getDaysOfMonth(1, year + 1)
          : getDaysOfMonth(month + 1, year);
      const preMonth =
        month - 1 < 0
          ? getDaysOfMonth(12, year - 1)
          : getDaysOfMonth(month - 1, year);
      setMonths([preMonth, currentMonth, nextDayMonth]);
    };
    initMonths();
    setTimeout(() => {
      scrollToIndex(1);
    });
  }, []);
  console.log(months.map(item => item.month));

  const onNextMonth = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex > 11) {
      setCurrentYear(currentYear + 1);
      nextIndex = 1;
    }
    scrollToIndex(nextIndex);
  };

  const scrollToIndex = (index: number) => {
    if (refMonth.current) {
      refMonth.current.scrollToIndex({
        index,
      });
    }
  };

  const renderWeek = () => {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(item => (
      <TextBox className="w-1/7 text-center" key={`week-${item}`}>
        {item}
      </TextBox>
    ));
  };

  const renderDayOther = (data: number[]) => {
    return data.map((_, index) => (
      <ButtonBox
        disabled
        onPress={onNextMonth}
        className="w-1/7 border border-gray-400 items-center justify-center"
        key={`before-${index + 1}`}
        title={`${31 - index}`}
        classNameText="text-gray-400"
      />
    ));
  };

  const renderDay = (days: number[]) => {
    return days.map((_, index) => (
      <ButtonBox
        className="w-1/7 border border-gray-400 items-center justify-center"
        key={`day-${index + 1}`}
        title={(index + 1).toString()}
      />
    ));
  };

  return (
    <Box
      className="w-full"
      onLayout={({nativeEvent}) => {
        if (!offset.width) {
          setOffset({
            width: Math.round(nativeEvent.layout.width + 0.5),
            height: nativeEvent.layout.height,
          });
        }
      }}>
      {months.length > 0 && (
        <>
          <Box className="row self-center w-24">
            <TextBox className="w-24 text-center">
              {`Month ${months[currentIndex].month} ${months[currentIndex].year}`}
            </TextBox>
          </Box>
          <Box className="row-center">{renderWeek()}</Box>
          <FlatList
            ref={refMonth}
            horizontal
            pagingEnabled
            data={months}
            scrollEventThrottle={12}
            onEndReachedThreshold={50}
            onScroll={({nativeEvent}) => {
              timerUpdate.current && clearTimeout(timerUpdate.current);
              const pageIndex = Math.round(
                nativeEvent.contentOffset.x / offset.width,
              );
              if (pageIndex !== currentIndex) {
                timerUpdate.current = setTimeout(() => {
                  setCurrentIndex(pageIndex);
                  const newMonth = getDaysOfMonths(months, pageIndex);
                  if (newMonth.length > 0) {
                    setMonths(newMonth);
                  }
                }, 125);
              }
            }}
            renderItem={({item}) => (
              <Box className={`w-[${offset.width}]`}>
                <Box className="row flex-wrap">
                  {renderDayOther(item.daysBefore)}
                  {renderDay(item.days)}
                  {renderDayOther(item.daysAfter)}
                </Box>
              </Box>
            )}
            getItemLayout={(_, index) => ({
              length: MONTHS.length,
              offset: offset.width * index,
              index,
            })}
            keyExtractor={(item, index) => `${item.month}-${item.year}`}
          />
        </>
      )}
    </Box>
  );
};
