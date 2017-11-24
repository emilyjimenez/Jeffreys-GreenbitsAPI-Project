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

  yearsToSeconds(date) {
    return this.ageCalculator(date) * 31536000;
  }

  mercuryAge(date) {
    return this.ageCalculator(date) * .24;
  }

  venusAge(age) {
    return this.ageCalculator(date) * .62;
  }

  marsAge(age) {
    return this.ageCalculator(date) * 1.88;
  }

  jupiterAge(age) {
    return this.ageCalculator(date) * 11.86;
  }
}
