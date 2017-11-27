import { Years } from "./../js/calc.js";

$(document).ready(function() {
  $("#output").hide();
  $('#form').submit(function(event) {
    event.preventDefault();
    let input = $('#birthday').val();
    let years = new Years();

    let age = years.ageCalculator(input);
    let ageInSeconds = years.yearsToSeconds(input);
    let ageOnMercury = years.mercuryAge(input);
    let ageOnVenus = years.venusAge(input);
    let ageOnMars = years.marsAge(input);
    let ageOnJupiter = years.jupiterAge(input);

    let expectancyOnMercury = years.mercuryLifeExpectancy(input);
    let expectancyOnVenus = years.venusLifeExpectancy(input);
    let expectancyOnMars = years.marsLifeExpectancy(input);
    let expectancyOnJupiter = years.jupiterLifeExpectancy(input);

    $("#output").show();
    $("#age-output").text(`You are ${age} years old`);
    $("#seconds-output").text(`You are ${ageInSeconds} seconds old`);
    $("#mercury-age-output").text(`You are ${ageOnMercury} years old on Mercury`);
    $("#venus-age-output").text(`You are ${ageOnVenus} years old on Venus`);
    $("#mars-age-output").text(`You are ${ageOnMars} years old on Mars`);
    $("#jupiter-age-output").text(`You are ${ageOnJupiter} years old on Jupiter`);
    $("#mercury-expectancy-output").text(expectancyOnMercury);
    $("#venus-expectancy-output").text(expectancyOnVenus);
    $("#mars-expectancy-output").text(expectancyOnMars);
    $("#jupiter-expectancy-output").text(expectancyOnJupiter);
  });

});
