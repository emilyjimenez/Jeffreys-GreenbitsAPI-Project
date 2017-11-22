import { Years } from './../js/calc.js';

describe('Years', function() {
  var testAge = new Years(1)

  it('should return a persons age in seconds', function() {
    expect(testAge.yearsToSeconds(1)).toEqual(31536000);
  });

  it('should return a persons age in mars years', function() {
    expect(testAge.mercuryAge(1)).toEqual(.24);
  });

  it('should return a persons age in venus years', function() {
    expect(testAge.venusAge(1)).toEqual(.62);
  });

  it('should return a persons age in mars years', function() {
    expect(testAge.marsAge(1)).toEqual(1.88);
  });
});
