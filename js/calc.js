export class Years {
  constructor(age) {
    this.age = age;
  }

  ageCalculator(age) {
    const today = moment();
    let todayInSeconds = today.getTime()/1000;
    let birthdayInSeconds = birthday.getTime()/1000;
    let ageInSeconds = todayInSeconds - birthdayInSeconds;
    let ageInYears = ageInSeconds * 31536000;
    return ageInYears;
  }

  yearsToSeconds(age) {
    let secondsAge = (age * 31536000);
    return secondsAge;
  }

  mercuryAge(age) {
    return age * .24;
  }

  venusAge(age) {
    return age * .62;
  }

  marsAge(age) {
    return age * 1.88;
  }

  jupiterAge(age) {
    return age * 11.86;
  }
}
