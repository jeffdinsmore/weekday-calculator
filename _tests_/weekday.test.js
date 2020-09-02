import WeekdayChecker from '../src/js/weekday.js';

describe('WeekdayChecker', () => {

  test('should check if the inputted year is a leap year', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.leapYear(2000);
    expect(weekdayChecker.leapYears).toBe(true);
  });
});