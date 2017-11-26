export class Years {
  constructor(date) {
    this.date = date;

    // this.averageLife = 79;
  }


  ageCalculator(date) {
    const today = new Date();
    let birthday = new Date(date);
    let todayInSeconds = today.getTime()/1000;
    let birthdayInSeconds = birthday.getTime()/1000;
    let ageInSeconds = todayInSeconds - birthdayInSeconds;
    let ageInYears = Math.floor(ageInSeconds / 31536000);
    return ageInYears;
  }

  yearsToSeconds(date) {
    return this.ageCalculator(date) * 31536000;
  }

  mercuryAge(date) {
    return this.ageCalculator(date) * .24;
  }

  venusAge(date) {
    return this.ageCalculator(date) * .62;
  }

  marsAge(date) {
    return this.ageCalculator(date) * 1.88;
  }

  jupiterAge(date) {
    return this.ageCalculator(date) * 11.86;
  }

  mercuryLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = Math.floor(averageLife * .24) - mercuryAge(date);
    return yearsLeft;
  }

  venusLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = Math.floor(averageLife * .62) - venusAge(date);
    return yearsLeft;
  }

  marsLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = Math.floor(averageLife * .24) - marsAge(date);
    return yearsLeft;
  }

  jupiterLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = Math.floor(averageLife * .24) - jupiterAge(date);
    return yearsLeft;
  }
}
