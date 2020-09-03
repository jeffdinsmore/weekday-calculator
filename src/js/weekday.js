// Business Logic
export default class WeekdayChecker {
  constructor(days, months, years, leapYears, weekday, addLeapYear) {
    this.days = days;
    this.months = months;
    this.years = years;
    this.leapYears = leapYears;
    this.weekday = weekday;
    this.addLeapYear = addLeapYear;
  }

    leapYear(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        this.leapYears = true;
      } else {
        this.leapYears = false;
      }
    }
  
    monthCheck(month) {
      this.months = 0;
      if (month >= 6) {
        month = month - 6;
        const daysOfMonth = [30,31,31,30,31,30,31];
        for (let i=0; i < month; i++){
          this.months += daysOfMonth[i];
        }
      } else {
        month = 6 - month;
        const daysOfMonthReverse = [31,30,31,28,31];
        for (let i=0; i < month; i++){
          this.months -= daysOfMonthReverse[i];
        }
      }
    }

    dayCheck(day) {
      this.days = day - 9;
    }

    yearCheck(year) {
      
      this.years = year - 1969;
    }

    checkLeapYear() {
      this.addLeapYear = 0;
      let firstPlusYear = 994;
      let firstMinusYear = 466;
      let daysBeyond = (this.months + (this.years * 365) + this.days);
      if ((this.months + (this.years * 365) + this.days) > firstPlusYear) {
        this.addLeapYear += 1;
      } 
    }

      weekdayEquation() {
        if (this.years <= 0 && this.months <= 0 && this.days < 0 || this.years <= 0 && this.months < 0) {
          this.weekday = (this.months + (this.years * 365) + this.days + this.addLeapYear) % 7 * (-1);
        }
        else {
          this.weekday = (this.months + (this.years * 365) + this.days + this.addLeapYear) % 7;
      }
    }

    

    // 2/29/68-6/9/69 - 466 days 995 days - 1461


      
    // if 
  //  Next leap year added on Feb 29th, 1972, in 995 days
  //  Next leap year subtracted on Feb 28th, 1968, minus 466 days
  //  Every leap year added or subtracted every 1461 days

   
  //   dayOfMonth (day) {
      
  // }


    // month() {
    // const month30Day = ["april", "june", "september", "november"];
    
    // let monthsArray = { june: "30", july: "31", august: "31", september: "30", october: "31", november: "30", december: "31", january: 31, february: 28, march: "31", april: "30", may: "31" };
    
    // let mArray = [30,31,31,30,31,30,31,31,28,31,30,31];
      // Input = may, then our answer is going to be -1
      // if answer is negative then for loop --
      //   else (for loop ++)
         
    // for (let i = 0; i < mArray; i++)
    //   if i=month30Day
    //     this.day += 30
    //   else if

    //     this.day += 31

    

    
    }
  // }
// three fields - month, day, year
// target year is June 9, 1969
// input month if greater than June, input month minus June
// input day minus 9
// input year if greater than 1969, input year - 1969
// final equation is (first equation plus second equation plus third equation) mod 7 equals day of week
// w = Weekday
// w = mod(((inputMonth - 5)*30 + (inputDate - 9) + (inputYear - 1969)*365),7)

// inputMonth = 7
// loop grab july and junes days and add them = 61


// [june, july, august, september, october, november, december, january, february march, april, may]
// 4+1+22=27m7 = 6




//   day () {
//     const daysArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

//  }
// //anchor date - June 9, 1969 6/9/69
// //monday = 1 - sunday =7
// Year = 
// Moy = [m, ]
// dOW[m, t, w, r, f, sa, su]
// Jan 1 2000 = m
// if inputted year

