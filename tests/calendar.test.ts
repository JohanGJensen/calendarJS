import { beforeEach, describe, expect, test } from 'vitest';
import Calendar from '../src/calendar';
import { Config } from '../src/interfaces';

const config: Config = {
  range: { start: 1970, end: 2299 },
};

let calendar: Calendar;

describe('calendar.ts', () => {
  beforeEach(() => {
    calendar = new Calendar(config);
  });

  describe('getYears', () => {
    test('should return correct length', () => {
      expect(calendar.getYears()).toHaveLength(330);
    });

    test('should return correct year and month count', () => {
      const years = calendar.getYears();

      expect(years[10].year).toBe('1980');
      expect(years[0].months).toHaveLength(12);
    });

    const currentYear = new Date().getFullYear().toString();

    test('should be current year', () => {
      const years = calendar.getYears();

      years.forEach((year) => {
        if (year.currentYear && currentYear === year.year) {
          expect(year.currentYear).toBe(true);
        }
      });
    });
  });

  describe('getMonths', () => {
    test('should return correct month', () => {
      const months = calendar.getMonths(2020);

      expect(months[3].month).toBe('April');
      expect(months[3].month).not.toBe('March');
    });

    test('should be current month', () => {
      const months = calendar.getMonths(2020);

      months.forEach((month) => {
        if (month.currentMonth && month.month === 'April') {
          expect(month.currentMonth).toBe(true);
        }
      });
    });
  });

  describe('getDays', () => {
    test('should have correct number of days', () => {
      const days = calendar.getDays(2020, 3);

      expect(days).toHaveLength(31);
    });

    test('should be current day', () => {
      const days = calendar.getDays(2020, 3);
      const date = new Date().getDate();

      days.forEach((day) => {
        if (day.currentDay && day.number === date) {
          expect(day.currentDay).toBe(true);
        }
      });
    });
  });

  describe.todo('setSelectedYear');

  describe.todo('setSelectedMonth');

  describe.todo('setSelectedDay');

  describe.todo('setMonths');

  describe.todo('setDays');
});
