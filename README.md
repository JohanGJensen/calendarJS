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

  const calendar = new Calendar(2020, 2022);
  calendar.getYears();

  // getMonths(year)
  calendar.getMonths(2022);

  // getDays(year, month)
  calendar.getDays(2022, 7);

  // set a different language for months & days
  calendar.setMonths
  calendar.setDays

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
  number: string;
  currentDay: boolean;
}

```