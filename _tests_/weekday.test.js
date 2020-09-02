import WeekdayChecker from '../src/js/weekday.js';

describe('WeekdayChecker', () => {

  test('should check if the inputted year is a leap year', () => {
    const weekdayChecker = new WeekdayChecker(2000);
    expect(weekdayChecker).toBe(true);
  });
  
});


  // test("should check if the value of a single row is 45 and return true", () => {
  //   const checker = new Checker();
  //   const total = checker.rowCheck();
  //   expect(total).toEqual(45);
  // });


//user should be able to enter a valid date



//should not be able to enter 31 days in months with 30 days
