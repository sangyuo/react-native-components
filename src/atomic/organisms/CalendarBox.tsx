import React, {useCallback} from 'react';
import {ArrowLeft, ArrowRight, Box, ButtonBox, TextBox} from '../atoms';
import {ScrollView} from 'react-native';
import {CalendarBoxProps, MonthOfYearType} from '../../model';
import {CalendarItemBox} from '../molecules';
import {classNames} from '../../utils';
import {CALENDAR} from '../../config/Calendar';
import useCalendarBox from '../../hook/useCalendarBox';

export const CalendarBox = ({
  width = 0,
  height,
  initDate,
  selectedDates = {},
  hideExtraDays,
  disablePressExtraDays = true,
  enableSpecialStyleExtraDays,
  horizontal = true,
  scrollEnabled = true,
  monthType = 'default',
  months,
  classBox,
  gap = 3,
  colorArrowLeft = '#000',
  colorArrowRight = '#000',
  enableControl = false,
  firstDay = 0,
  onChangeDate,
  renderMonth,
  renderHeader,
  ...rest
}: CalendarBoxProps) => {
  const {
    monthsData,
    weekData,
    widthDay,
    currentMonth,
    offsetWidth,
    refScroll,
    currentIndex,
    firstRender,
    isLoading,
    blockUpdateIndex,
    controlMonth,
    setState,
  } = useCalendarBox({
    initDate,
    width,
    firstDay,
    horizontal,
    weeks: rest?.weeks,
    weekType: rest?.weekType,
    format: rest?.format,
    minYear: rest?.minYear,
    maxYear: rest?.maxYear,
  });

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
          setState(pre => ({
            ...pre,
            offsetWidth: Number(nativeEvent.layout.width.toFixed(1)),
          }));
        }
      }}
      className={classNames(`w-full gap-${gap}`, classBox)}
      style={{width: offsetWidth || undefined, height}}>
      {monthsData.length > 0 && (
        <>
          {renderMonthItem()}
          <Box className="row flex-wrap">{renderWeek()}</Box>
          <ScrollView
            ref={refScroll}
            scrollEnabled={scrollEnabled && !isLoading}
            scrollEventThrottle={15}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onScroll={({nativeEvent}) => {
              if (!firstRender.current && !isLoading) {
                const index = Math.round(
                  nativeEvent.contentOffset.x / offsetWidth,
                );

                if (index !== currentIndex && !blockUpdateIndex) {
                  setState(pre => ({
                    ...pre,
                    currentIndex: index,
                  }));
                } else {
                  setState(pre => ({
                    ...pre,
                    blockUpdateIndex: false,
                  }));
                }
              }
            }}
            horizontal={horizontal}
            pagingEnabled>
            {monthsData.map((item, index) => {
              if (index > currentIndex + 2 || index < currentIndex - 1) {
                return (
                  <Box
                    key={item.month + '-' + item.year}
                    style={{width: offsetWidth, height: offsetWidth}}></Box>
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
