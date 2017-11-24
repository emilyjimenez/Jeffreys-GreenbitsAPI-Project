export class Years {
  constructor(date) {
    this.date = date;
  }


  ageCalculator(date) {
    const today = new Date();
    let todayInSeconds = today.getTime()/1000;
    let birthdayInSeconds = date.getTime()/1000;
    let ageInSeconds = todayInSeconds - birthdayInSeconds;
    let ageInYears = ageInSeconds / 31536000;
    return ageInYears;
  }

  // yearsToSeconds(date) {
  //   let secondsAge = this.ageCalculator(date);
  //   return secondsAge;
  // }
  //
  // mercuryAge(date) {
  //   return age * .24;
  // }
  //
  // venusAge(age) {
  //   return age * .62;
  // }
  //
  // marsAge(age) {
  //   return age * 1.88;
  // }
  //
  // jupiterAge(age) {
  //   return age * 11.86;
  // }
}
