// Business Logic
export default class WeekdayChecker {
  constructor(days, months, years, leapYears) {
    // this.days = days;
    // this.months = months;
    // this.years = years;
    this.leapYears = leapYears;
  }

    leapYear(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        this.leapYears = true;
      } else {
        this.leapYears = false;
      }
    }
  } 

//   month () {
//     // const month30Day = ["april", "june", "september", "november"];
//     const monthsArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

//   }

//   day () {
//     const daysArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

//  }
// //anchor date - June 9, 1969 6/9/69
// //monday = 1 - sunday =7
