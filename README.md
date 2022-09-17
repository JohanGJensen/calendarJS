### Calendar-dates-time-js install

```
  npm install @johang/calendar-date-time.js
```

## Description
a class that can generate objects of years/months/days for further developing a calendar related component

### Example

```js
  import Calendar from '@johang/calendar-time-date-js';

  const calendar = new Calendar(2020, 2022);
  calendar.getYears();

  // getMonths(year)
  calendar.getMonths(2022);

  // getDays(year, month)
  calendar.getDays(2022, 7);

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