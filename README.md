### CalendarJS install

```
  npm install @johang/calendarjs
```

* Please NOTE: a {`DEPRECATED`} version of the package exists called:
```
  @johang/calendar-date-time-js
```
This package is no longer supported.

## Description
a class that can generate objects of years/months/days for further developing a calendar related component

### Example

```js
  import Calendar from '@johang/calendarjs';

  const config: Config = {
    range: { start: 1980, end: 2050 },
  };
  const calendar = new Calendar(config);
  calendar.getYears();

  // getMonths(year)
  calendar.getMonths(2022);

  // getDays(year, month)
  calendar.getDays(2022, 7);

  // set a different language for months & days
  calendar.setMonths
  calendar.setDays

  // set selected day, month & year
  calendar.setSelectedYear({ year: 1990, months: calendar.getMonths(1990), currentYear: false });
  calendar.setSelectedMonth({ month: 'January', days: calendar.getDays(1990, 1), currentMonth: false };)
  calendar.setSelectedDay({ day: 'Tuesday', number: 1, currentDay: false });

```

### TS interfaces

```js
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
  number: number;
  currentDay: boolean;
}

export type CalendarRange = {
  start: number;
  end: number;
};

export type Config = {
  range: CalendarRange;
  months?: Months;
  days?: Days;
};

```