export class Years {
  constructor(age) {
    this.age = age;
  }

  yearsToSeconds(age) {
    return age * 31536000;
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
}
