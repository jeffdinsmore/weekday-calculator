import WeekdayChecker from '../src/js/weekday.js';

describe('WeekdayChecker', () => {

  test('should check if the inputted year is a leap year', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.leapYear(2000);
    expect(weekdayChecker.leapYears).toBe(true);
  });

  test('should check if the inputted day of month if greater than June, will add the days of the months greater than the set day of month', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.monthCheck(12);
    expect(weekdayChecker.months).toEqual(183);
  });

  test('should check if the inputted day of month if smaller than June, will subtract the days of the months smaller than the set day of month', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.monthCheck(4);
    expect(weekdayChecker.months).toEqual(-61);
  });
  test ('Should take inputted day and subtract 9 from it', () => {
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.dayCheck(12);
    expect(weekdayChecker.days).toEqual(3);
  });
});