export default class Calendar {
  firstYear: number = 1970;
  finalYear: number = 2022;
  months: string[] = [];
  days: string[] = [];

  constructor(firstYear: number, finalYear: number, months?: string[], days?: string[]) {
    this.firstYear = firstYear;
    this.finalYear = finalYear;
    this.months = months || ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.days = days || ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }

  public getYears = () => {
    const years = [];

    for (let i = this.firstYear; this.finalYear >= i; i++) {
      years.push({
        year: i,
        months: this.getMonths(i),
      });
    }

    return years;
  };

  public getMonths = (year: number) => {
    const monthCount = 12;
    const months = [];

    for (let i = 1; monthCount >= i; i++) {
      months.push({
        month: this.getMonthString(i - 1),
        days: this.getDays(year, i),
      })
    }

    return months;
  };

  public getDays = (year: number, month: number) => {
    const dayCount = new Date(year, month, 0).getDate();
    const days = [];

    for (let i = 1; dayCount >= i; i++) {
      days.push({
        day: this.getDayString(i % 7),
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
