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
    let ageInYears = ageInSeconds / 31536000;
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
    let yearsLeft = (averageLife * .24) - this.mercuryAge(date);
    if(yearsLeft < 0) {
      return("You have surpassed the average life expectancy on Mercury");
    } else {
    return (`You have ${yearsLeft} years left on Mercury`);
    }
  }

  venusLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = (averageLife * .62) - this.venusAge(date);
    if(yearsLeft < 0) {
      return("You have surpassed the average life expectancy on Venus");
    } else {
    return (`You have ${yearsLeft} years left on Venus`);
    }
  }

  marsLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = (averageLife * 1.88) - this.marsAge(date);
    if(yearsLeft < 0) {
      return("You have surpassed the average life expectancy on Mars");
    } else {
    return (`You have ${yearsLeft} years left on Mars`);
    }
  }

  jupiterLifeExpectancy(date) {
    const averageLife = 79;
    let yearsLeft = (averageLife * 11.86) - this.jupiterAge(date);
    if(yearsLeft < 0) {
      return("You have surpassed the average life expectancy on Jupiter");
    } else {
    return (`You have ${yearsLeft} years left on Jupiter`);
    }
  }
}
