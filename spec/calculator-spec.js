import { Years } from './../js/calc.js';

describe('Years', function() {
  const testAge = new Years();
  const testDate = new Date(2014, 11, 24);

  it('should return a persons age', function() {
    expect(Math.floor(testAge.ageCalculator(testDate))).toEqual(2);
  });

  it('should return a persons age in seconds', function() {
    expect(testAge.yearsToSeconds(testDate)).toEqual(94608000);
  });

  // it('should return a persons age in mars years', function() {
  //   expect(testAge.mercuryAge(1)).toEqual(.24);
  // });
  //
  // it('should return a persons age in venus years', function() {
  //   expect(testAge.venusAge(1)).toEqual(.62);
  // });
  //
  // it('should return a persons age in mars years', function() {
  //   expect(testAge.marsAge(1)).toEqual(1.88);
  // });
  //
  // it('should return a persons age in jupiter years', function() {
  //   expect(testAge.jupiterAge(1)).toEqual(11.86);
  // });
});
