import { Lookup } from './../js/lookup.js';

//Call back is not singling our flowers and is making me angry

let displayProductData = function(response) {
  if (response.products.length > 0) {
    for (let i = 0; i < response.products.length; i++) {
      let index = response.products[i];
      let name = index.name;
      console.log(name);
    }
  }
};

let error = function(error) {
  alert("U FAIL");
};


$(document).ready(function() {
  let flowerLookup = new Lookup();
  let flowerID = "87e148b0-c86f-4e8a-8089-0c5cd34dd3c1";
  $("#check-flower").click(function() {
    flowerLookup.getProductData(flowerID, displayProductData, error);
  });
});
