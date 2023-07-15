import { beforeEach, describe, expect, test } from 'vitest';
import Calendar from '../src/calendar';
import { Config } from '../src/interfaces';

const config: Config = {
  range: { start: 1970, end: 2023 },
};

let calendar: Calendar;

describe('calendar.ts', () => {
  beforeEach(() => {
    calendar = new Calendar(config);
  });

  describe('getYears', () => {
    test('should return correct length', () => {
      expect(calendar.getYears().length).toBe(54);
    });

    test.todo('should return correct year and month count');

    test.todo('should be current year');

    test.todo('should not be current year');
  });
});
