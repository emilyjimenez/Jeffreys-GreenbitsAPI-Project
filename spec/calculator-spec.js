import { Years } from './../js/calc.js';

describe('Years', function() {
  const testAge = new Years();
  const testDate = new Date(2014, 11, 24);
  const surpassDate = new Date(1917, 11, 24);
  let testAgeYears = testAge.ageCalculator(testDate);

  it('should return a persons age', function() {
    expect(Math.floor(testAge.ageCalculator(testDate))).toEqual(2);
  });

  it('should return a persons age in seconds', function() {
    expect(Math.round(testAge.yearsToSeconds(testDate))).toEqual(Math.round(testAgeYears * 31536000));
  });

  it('should return a persons age in mars years', function() {
    expect(Math.round(testAge.mercuryAge(testDate))).toEqual(Math.round(testAgeYears * .24));
  });

  it('should return a persons age in venus years', function() {
    expect(Math.round(testAge.venusAge(testDate))).toEqual(Math.round(testAgeYears * .62));
  });

  it('should return a persons age in mars years', function() {
    expect(Math.round(testAge.marsAge(testDate))).toEqual(Math.round(testAgeYears * 1.88));
  });

  it('should return a persons age in jupiter years', function() {
    expect(Math.round(testAge.jupiterAge(testDate))).toEqual(Math.round(testAgeYears * 11.86));
  });

  it('should return how many years a person has left on mercury', function() {
    expect(testAge.mercuryLifeExpectancy(testDate)).toEqual(`You have ${(79 * .24) - testAge.mercuryAge(testDate)} years left on Mercury`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on mercury', function() {
    expect(testAge.mercuryLifeExpectancy(surpassDate)).toEqual("You have surpassed the average life expectancy on Mercury");
  });

  it('should return how many years a person has left on venus', function() {
    expect(testAge.venusLifeExpectancy(testDate)).toEqual(`You have ${(79 * .62) - testAge.venusAge(testDate)} years left on Venus`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on venus', function() {
    expect(testAge.venusLifeExpectancy(surpassDate)).toEqual("You have surpassed the average life expectancy on Venus");
  });

  it('should return how many years a person has left on mars', function() {
    expect(testAge.marsLifeExpectancy(testDate)).toEqual(`You have ${(79 * 1.88) - testAge.marsAge(testDate)} years left on Mars`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on mars', function() {
    expect(testAge.marsLifeExpectancy(surpassDate)).toEqual("You have surpassed the average life expectancy on Mars");
  });

  it('should return how many years a person has left on jupiter', function() {
    expect(testAge.jupiterLifeExpectancy(testDate)).toEqual(`You have ${(79 * 11.86) - testAge.jupiterAge(testDate)} years left on Jupiter`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on jupiter', function() {
    expect(testAge.jupiterLifeExpectancy(surpassDate)).toEqual("You have surpassed the average life expectancy on Jupiter");
  });
});
