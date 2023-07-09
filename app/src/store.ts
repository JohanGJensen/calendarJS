import { writable, get } from "svelte/store";
import Calendar from "@johang/calendarjs";
import type { IMonth, IYear, Config } from "@johang/calendarjs";

const config: Config = {
  range: { start: 1980, end: 2050 },
};
const calendar = new Calendar(config);

export const years = writable<IYear[]>(calendar.getYears());
export const year = writable<IYear>(get(years)[0]);

export const months = writable<IMonth[]>(get(year).months);
export const month = writable<IMonth>(get(months)[0]);

export const updateYear = (y: IYear) => {
  year.set(y);
};

export const updateMonth = (m: IMonth) => {
  month.set(m);
};
