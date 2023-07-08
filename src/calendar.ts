import {
  CalendarRange,
  Config,
  Days,
  IDay,
  IMonth,
  IYear,
  Months,
} from "./interfaces";

export default class Calendar {
  public range: CalendarRange;
  public months: Months;
  public days: Days;

  // today's year & month
  private currentYear: number = new Date().getFullYear();
  private currentMonth: number = new Date().getMonth();

  constructor(config: Config) {
    this.range = config.range;
    this.months = config.months || [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.days = config.days || [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  public getYears = (): IYear[] => {
    const years: IYear[] = [];

    for (let year = this.range.start; this.range.end >= year; year++) {
      let isCurrentYear = false;

      if (this.currentYear === year) {
        isCurrentYear = true;
        this.currentYear = year;
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

    for (let month = 1; monthCount >= month; month++) {
      let isCurrentMonth = false;

      if (this.currentMonth === month - 1 && this.currentYear === year) {
        isCurrentMonth = true;
        this.currentMonth = month;
      }

      months.push({
        month: this.getMonthString(month - 1),
        days: this.getDays(year, month),
        currentMonth: isCurrentMonth,
      });
    }

    return months;
  };

  public getDays = (year: number, month: number): IDay[] => {
    const currentDay = new Date().getDate();
    const dayCount = new Date(year, month, 0).getDate();
    const days: IDay[] = [];

    for (let day = 1; dayCount >= day; day++) {
      let isCurrentDay = false;

      if (
        currentDay === day &&
        month === this.currentMonth &&
        year === this.currentYear
      ) {
        isCurrentDay = true;
      }

      days.push({
        day: this.getDayString(day % 7),
        number: day.toString(),
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

  private yearToTimestamp = (year: number) => {
    return Date.parse(`${year}-01-01`);
  };
}

export type CalendarType = typeof Calendar;
