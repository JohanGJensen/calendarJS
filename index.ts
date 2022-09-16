export interface IYear {
  year: string;
  months: IMonth[];
  currentYear: boolean;
}

export interface IMonth {
  month: string;
  days: IDay[];
  currentMonth: boolean;
}

export interface IDay {
  day: string;
  number: string;
  currentDay: boolean;
}

export default class Calendar {
  public firstYear: number;
  public finalYear: number;
  public months: string[];
  public days: string[];

  constructor(firstYear: number, finalYear: number, months?: string[], days?: string[]) {
    this.firstYear = firstYear;
    this.finalYear = finalYear;
    this.months = months || ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.days = days || ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }

  public getYears = (): IYear[] => {
    const currentYear = new Date().getFullYear();
    const years: IYear[] = [];

    for (let year = this.firstYear; this.finalYear >= year; year++) {
      let isCurrentYear = false;

      if (currentYear === year) {
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
    const currentMonth = new Date().getMonth();
    const monthCount = 12;
    const months: IMonth[] = [];

    for (let month = 1; monthCount >= month; month++) {
      let isCurrentMonth = false;

      if (currentMonth === month) {
        isCurrentMonth = true;
      }

      months.push({
        month: this.getMonthString(month - 1),
        days: this.getDays(year, month),
        currentMonth: isCurrentMonth,
      })
    }

    return months;
  };

  public getDays = (year: number, month: number): IDay[] => {
    const currentDay = new Date().getDay();
    const dayCount = new Date(year, month, 0).getDate();
    const days: IDay[] = [];

    for (let day = 1; dayCount >= day; day++) {
      let isCurrentDay = false;

      if (currentDay === day) {
        isCurrentDay = true;
      }

      days.push({
        day: this.getDayString(day % 7),
        number: day.toString(),
        currentDay: isCurrentDay,
      })
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
};
