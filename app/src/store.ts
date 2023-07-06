import type { IYear } from "@johang/calendarjs";
import { writable, get } from "svelte/store";
import Calendar from "@johang/calendarjs";

const calendar = new Calendar(1980, 2020);

export const years = writable<IYear[]>(calendar.getYears());
export const year = writable<IYear>(get(years)[0]);

export const updateYear = (y: IYear) => {
  year.set(y);
};
