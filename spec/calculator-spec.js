import { Years } from './../js/calc.js';

describe('Years', function() {
  var testAge = new Years(1)
  it('should return a persons age in seconds', function() {
    expect(testAge.yearsToSeconds(1)).toEqual(31536000);
  });
});
