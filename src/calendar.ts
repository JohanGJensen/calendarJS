import {
  CalendarRange,
  Config,
  Days,
  IDay,
  IMonth,
  IYear,
  Months,
} from './interfaces';

export default class Calendar<
  M extends string = string,
  D extends string = string,
> {
  public range: CalendarRange;

  public selectedYear: IYear | null = null;
  public selectedMonth: IMonth | null = null;
  public selectedDay: IDay | null = null;

  /**
   * @private
   * @type {Months} - january, february, march, april, may, june, july, august, september, october, november, december
   */
  private months: Months<M>;
  /**
   * @private
   * @type {Days} - sunday, monday, tuesday, wednesday, thursday, friday, saturday
   */
  private days: Days<D>;

  // today's year, month & day
  private currentYear: number = new Date().getFullYear();
  private currentMonth: number = new Date().getMonth();
  private currentDay = new Date().getDate();

  constructor(config: Config<M, D>) {
    this.range = config.range;
    this.months =
      config.months ??
      ([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ] as Months<M>);
    this.days =
      config.days ??
      ([
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ] as Days<D>);
  }

  /**
   * @description - set the string equivalent of the months
   * @param months - array of months x12
   */
  public setMonths = (months: Months<M>) => {
    this.months = months;
  };

  /**
   * @description - set the string equivalent of the days
   * @param days - array of days x7
   */
  public setDays = (days: Days<D>) => {
    this.days = days;
  };

  /**
   * @description - sets the selected year - aswell as update the month to closest accurate month.
   * @param year - year selected
   */
  public setSelectedYear = (year: IYear) => {
    if (this.selectedMonth) {
      const monthIndex = this.months.findIndex(
        (m) => m === this.selectedMonth?.month,
      );
      const month = year.months[monthIndex];

      this.setSelectedMonth(month);
    }

    this.selectedYear = year;
  };

  /**
   * @description - sets the selected month, aswell as update the day to closest accurate day.
   * @param month - month selected
   */
  public setSelectedMonth = (month: IMonth) => {
    if (this.selectedDay) {
      // if selected day is greater than the number of days in the month
      if (this.selectedDay.number >= month.days.length) {
        this.setSelectedDay(month.days[month.days.length - 1]);
      }
      // if selected day is less than the number of days in the month
      else if (this.selectedDay.number < month.days.length) {
        this.setSelectedDay(month.days[this.selectedDay.number - 1]);
      }
    }

    this.selectedMonth = month;
  };

  /**
   * @description - sets the selected day.
   * @param day - day selected
   */
  public setSelectedDay = (day: IDay) => {
    this.selectedDay = day;
  };

  /**
   * @description - get years from range.
   * @returns {IYear[]} - array of years
   */
  public getYears = (): IYear[] => {
    const years: IYear[] = [];

    for (let year = this.range.start; this.range.end >= year; year++) {
      let isCurrentYear = false;

      if (this.currentYear === year) {
        isCurrentYear = true;
      }

      years.push({
        year: year.toString(),
        months: this.getMonths(year),
        currentYear: isCurrentYear,
      });
    }

    return years;
  };

  public getMonths = (year: number): IMonth[] => {
    const monthCount = 12;
    const months: IMonth[] = [];

    for (let month = 0; monthCount > month; month++) {
      let isCurrentMonth = false;

      if (this.currentMonth === month && this.currentYear === year) {
        isCurrentMonth = true;
      }

      months.push({
        month: this.getMonthString(month),
        days: this.getDays(year, month),
        currentMonth: isCurrentMonth,
      });
    }

    return months;
  };

  public getDays = (year: number, month: number): IDay[] => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const days: IDay[] = [];

    for (let day = 1; daysInMonth >= day; day++) {
      let isCurrentDay = false;

      if (
        this.currentDay === day &&
        month === this.currentMonth &&
        year === this.currentYear
      ) {
        isCurrentDay = true;
      }

      days.push({
        day: this.getDayString(day % 7),
        number: day,
        currentDay: isCurrentDay,
      });
    }

    return days;
  };

  private getDayString = (day: number) => {
    return this.days[day];
  };

  private getMonthString = (month: number) => {
    return this.months[month];
  };
}
