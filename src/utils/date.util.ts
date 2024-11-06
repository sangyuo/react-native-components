export const MONTHS = Array.from({length: 12});
interface Result {
  year: number;
  month: number;
  days: number[];
  daysBefore: number[];
  daysAfter: [];
}

export const getDaysOfMonths = (data: Result[], currentIndex: number) => {
  const currentData = data[currentIndex];
  let currentMonth = currentData.month;
  let currentYear = currentData.year;
  if (currentIndex === data.length - 1) {
    if (currentData.month + 1 > 12) {
      currentMonth = 1;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    return [...data, getDaysOfMonth(currentMonth, currentYear)];
  } else if (currentIndex === 0) {
    if (currentData.month - 1 < 0) {
      currentMonth = 12;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    return [getDaysOfMonth(currentMonth, currentYear), ...data];
  }
  return [];
};

export const getDaysOfMonth = (month: number, year: number): Result => {
  const startDayOfWeek = new Date(`${year}-${month}-01`).getDay();
  const dayNo = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
  const monthDay = new Date(year, month, 0);
  return {
    year,
    month,
    days: Array.from({length: monthDay.getDate()}),
    daysBefore:
      dayNo > 0
        ? Array.from({
            length: dayNo,
          })
        : [],
    daysAfter: [],
  };
};
