export class Years {
  constructor(age) {
    this.age = age;
  }
  yearsToSeconds(age) {
    return age * 31536000;
  }
}
