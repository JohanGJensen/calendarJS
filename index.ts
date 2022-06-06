export interface IYear {
  year: string;
  months: IMonth[];
}

export interface IMonth {
  month: string;
  days: IDay[];
}

export interface IDay {
  day: string;
  number: string;
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
    const years: IYear[] = [];

    for (let i = this.firstYear; this.finalYear >= i; i++) {
      years.push({
        year: i.toString(),
        months: this.getMonths(i),
      });
    }

    return years;
  };

  public getMonths = (year: number): IMonth[] => {
    const monthCount = 12;
    const months: IMonth[] = [];

    for (let i = 1; monthCount >= i; i++) {
      months.push({
        month: this.getMonthString(i - 1),
        days: this.getDays(year, i),
      })
    }

    return months;
  };

  public getDays = (year: number, month: number): IDay[] => {
    const dayCount = new Date(year, month, 0).getDate();
    const days: IDay[] = [];

    for (let i = 1; dayCount >= i; i++) {
      days.push({
        day: this.getDayString(i % 7),
        number: i.toString(),
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
