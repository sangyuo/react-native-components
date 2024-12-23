import {DateFormats, DateFormatType, DayItemType} from '../model';

export const MONTHS = Array.from({length: 12});

interface Result {
  year: number;
  month: number;
  days: DayItemType[];
}

export const getDaysOfYear = (
  year: number,
  format: DateFormatType = 'YYYY-MM-DD',
  firstDay: number = 0,
): Result[] => {
  const months = Array.from({length: 12});
  return months.map((_, index) => {
    return getDaysOfMonth(index + 1, year, format, firstDay);
  });
};

// Adjust day indices based on the chosen `firstDay`
const adjustDay = (day: number, firstDay: number) => (day - firstDay + 7) % 7;

export const getDaysOfMonth = (
  month: number,
  year: number,
  format: DateFormatType = 'YYYY-MM-DD',
  firstDay: number = 0,
): Result => {
  const startDayOfWeek = new Date(`${year}-${month}-01`).getDay();
  const monthDay = new Date(year, month, 0);
  const dayEndStartWeek = monthDay.getDay() === 6 ? 0 : monthDay.getDay() + 1;
  const dayNo = adjustDay(startDayOfWeek, firstDay);
  const dayEndNo = adjustDay(dayEndStartWeek, firstDay);

  let monthBefore = month - 1;
  let yearBefore = year;
  let daysBefore: DayItemType[] = [];
  let daysAfter: DayItemType[] = [];
  const monthAfter = month + 1 > 12 ? 1 : month + 1;
  const todayString = formatDate(new Date(), format);
  const days = Array.from({length: monthDay.getDate()}).map((_, index) => {
    const dateString = formatDate(`${year}-${month}-${index + 1}`, format);
    return {
      dateString: dateString,
      isToday: todayString === dateString,
      day: index + 1,
    };
  });
  if (dayNo > 0) {
    if (monthBefore < 0) {
      monthBefore = 12;
      yearBefore -= 1;
    }
    const monthDayBefore = new Date(yearBefore, monthBefore, 0);
    daysBefore = generalDaysOther(
      dayNo,
      {
        dayMax: monthDayBefore.getDate(),
      },
      {year: yearBefore, month: monthBefore},
      format,
    ).reverse();
  }
  if (dayEndNo > 0) {
    daysAfter = Array.from({
      length: 6 - dayEndNo === 0 ? 1 : 6 - dayEndNo + 1,
    }).map((_, index) => ({
      dateString: formatDate(`${year}-${monthAfter}-${index + 1}`, format),
      isExtraDay: true,
      day: index + 1,
    }));
  }

  return {
    year,
    month,
    days: [...daysBefore, ...days, ...daysAfter],
  };
};

const generalDaysOther = (
  length: number,
  {dayMax = 0, dayMin = 0},
  {year = 0, month = 0},
  format: DateFormatType = 'YYYY-MM-DD',
) => {
  return Array.from({length}).map((_, index) => {
    const dayNum = dayMax ? dayMax - index : dayMin + index;
    const dateString = formatDate(`${year}-${month}-${dayNum}`, format);
    return {
      dateString: dateString,
      isExtraDay: true,
      day: dayNum,
    };
  });
};

export const formatDate = (
  date: string | Date,
  type: DateFormatType = 'YYYY-MM-DD',
): string => {
  try {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const formats: DateFormats = {
      'YYYY-MM': `${year}-${month}`,
      'YYYY/MM': `${year}/${month}`,
      'YYYY-MM-DD': `${year}-${month}-${day}`,
      'YYYY/MM/DD': `${year}/${month}/${day}`,
      'MM/DD/YYYY': `${month}/${day}/${year}`,
      'DD/MM/YYYY': `${day}/${month}/${year}`,
      'DD-MM-YYYY': `${day}-${month}-${year}`,
      'MM-DD-YYYY': `${month}-${day}-${year}`,
    };
    return formats[type]; // Default format
  } catch (error) {
    return '';
  }
};
