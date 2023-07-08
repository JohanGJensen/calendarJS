export type IYear = {
  year: string;
  months: IMonth[];
  currentYear: boolean;
}

export type IMonth = {
  month: string;
  days: IDay[];
  currentMonth: boolean;
}

export type IDay = {
  day: string;
  number: string;
  currentDay: boolean;
}

export type Days = [string, string, string, string, string, string, string]; // x7
export type Months = [string, string, string, string, string, string, string, string, string, string, string, string]; // x12
