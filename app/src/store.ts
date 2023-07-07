import type { IMonth, IYear } from "@johang/calendarjs";
import { writable, get } from "svelte/store";
import Calendar from "@johang/calendarjs";

const calendar = new Calendar(1980, 2020);

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
