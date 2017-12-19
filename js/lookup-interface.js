import { Lookup } from './../lookup.js';

let displayProductData = function(response) {
  console.log(JSON.stringify(response));
}

let error = function(error) {
  alert("U FAIL");
}


$(document).ready(function() {
  let flowerLookup = new Lookup();
  let flowerID = "87e148b0-c86f-4e8a-8089-0c5cd34dd3c1";
  $("#check-flower").click(function() {
    flowerLookup.getProductData(flowerID, displayProductData, error);
  });
});
