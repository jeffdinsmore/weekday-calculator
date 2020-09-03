import WeekdayChecker from '../src/js/weekday.js';

describe('WeekdayChecker', () => {

  test('should check if the inputted year is a leap year', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.leapYear(2000);
    expect(weekdayChecker.leapYears).toBe(true);
  });

  test('should check if the inputted day of month will add to the days of the set day of month', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.monthCheck(8);
    expect(weekdayChecker.months).toEqual(0);
  });
});