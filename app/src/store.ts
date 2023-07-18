import { writable, get } from "svelte/store";
import Calendar, { type IDay } from "@johang/calendarjs";
import type { IMonth, IYear, Config } from "@johang/calendarjs";

export type SelectedDate = {
  year: IYear | null;
  month: IMonth | null;
  day: IDay | null;
}

const config: Config = {
  range: { start: 1980, end: 2050 },
};
export const calendar = new Calendar(config);

export const years = writable<IYear[]>(calendar.getYears());
export const year = writable<IYear>(get(years)[0]);

export const months = writable<IMonth[]>(get(year).months);
export const month = writable<IMonth>(get(months)[0]);

export const days = writable<IDay[]>(get(month).days);
export const day = writable<IDay>(get(days)[0]);

export const updateCalendar = () => {
  years.update(() => [...calendar.getYears()]);
  year.update(() => get(years)[0]);
  months.update(() => [...get(year).months]);
  month.update(() => get(months)[0]);
};

export const getSelectedDate = (): SelectedDate => {
  return {
    year: calendar.selectedYear,
    month: calendar.selectedMonth,
    day: calendar.selectedDay,
  }
}

export const updateYear = (y: IYear) => {
  calendar.setSelectedYear(y);
  year.set(y);
};

export const updateMonth = (m: IMonth) => {
  calendar.setSelectedMonth(m);
  month.set(m);
};

export const updateDay = (d: IDay) => {
  calendar.setSelectedDay(d);
  day.set(d);
};
