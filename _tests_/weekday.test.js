import WeekdayChecker from '../src/js/weekday.js';

describe('WeekdayChecker', () => {
  const weekdayChecker = new WeekdayChecker();
  
  test('should check if the inputted year is a leap year', () => {
    weekdayChecker.leapYear(2000);
    expect(weekdayChecker.leapYears).toBe(true);
  });

  test('should check if the inputted year is not a leap year', () => {
    weekdayChecker.leapYear(2001);
    expect(weekdayChecker.leapYears).toBe(false);
  });

  test('should check if the inputted day of month if greater than June, will add the days of the months greater than the set day of month', () => {
    weekdayChecker.monthCheck(12);
    expect(weekdayChecker.months).toEqual(183);
  });

  test('should check if the inputted day of month if smaller than June, will subtract the days of the months smaller than the set day of month', () => {
    weekdayChecker.monthCheck(2);
    expect(weekdayChecker.months).toEqual(-120);
  });

  test ('Should take inputted day and subtract 9 from it', () => {
    weekdayChecker.dayCheck(28);
    expect(weekdayChecker.days).toEqual(19);
  });

  test ('Should take inputted year and if greater than, subtract 1969 from it', () => {
    weekdayChecker.yearCheck(1973);
    expect(weekdayChecker.years).toEqual(7);
  });
  
  test('should add one day to the weekday equation after 995 days', () => {
    weekdayChecker.checkLeapYear();
    expect(weekdayChecker.addLeapYear).toEqual(1);
  })
  
  test('Should multiply this.years by 365, then add this.months, this.years, and this.days, to equal this.weekday', () =>{
    weekdayChecker.weekdayEquation();
    expect(weekdayChecker.weekday).toEqual(7);
  });

});