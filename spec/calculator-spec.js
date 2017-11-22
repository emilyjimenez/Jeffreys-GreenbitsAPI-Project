var Calculator = require('./../js/calc.js').calculatorModule;

describe('Calculator', function() {
  it('should return the word ping if a 3', function() {
    var testCalculator = new Calculator(1)
    expect(testCalculator.pingPong(1)).toEqual("ping")
  });
});
