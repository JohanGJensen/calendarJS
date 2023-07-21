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
export type Config<M extends string = string, D extends string = string> = {
  range: CalendarRange;
  months?: Months<M>;
  days?: Days<D>;
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
  number: number;
  currentDay: boolean;
};

export type Days<T extends string = string> = [T, T, T, T, T, T, T]; // x7
export type Months<T extends string = string> = [
  T,
  T,
  T,
  T,
  T,
  T,
  T,
  T,
  T,
  T,
  T,
  T,
]; // x12
