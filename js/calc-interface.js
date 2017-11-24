import { Years } from "./../js/calc.js";

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    let input = $('#birthday').val();
    let years = new Years();

    let age = Years.ageCalculator(input);
    let ageInSeconds = Years.yearsToSeconds(input);
    let ageOnMercury = Years.mercuryAge(input);
    let ageOnVenus = Years.venusAge(input);
    let ageOnMars = Years.marsAge(input);
    let ageOnJupiter = Years.jupiterAge(input);


    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

});
