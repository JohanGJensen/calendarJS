export type CalendarRange = {
  start: number;
  end: number;
};

/**
 * @typedef {Object} Config
 * @property {Object} range - The range of years in calendar: { start: 1970, end: 2050 }
 * @property {Months} [months] - The names of months in calendar: ["January", "February", ...]
 * @property {Days} [days] - The names of days in calendar: ["Sunday", "Monday", ...]
 */
export type Config = {
  range: CalendarRange;
  months?: Months;
  days?: Days;
};

export type IYear = {
  year: string;
  months: IMonth[];
  currentYear: boolean;
};

export type IMonth = {
  month: string;
  days: IDay[];
  currentMonth: boolean;
};

export type IDay = {
  day: string;
  number: string;
  currentDay: boolean;
};

export type Days = [string, string, string, string, string, string, string]; // x7
export type Months = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]; // x12
