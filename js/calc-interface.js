import { Years } from "./../js/calc.js";

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    let input = $('#birthday').val();
    let years = new Years();

    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

});
