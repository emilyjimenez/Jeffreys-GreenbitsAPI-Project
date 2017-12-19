import { Lookup } from './../js/lookup.js';

//Call back is not singling our flowers and is making me angry

let displayFlowerData = function(response) {
  if (response.products.length > 0) {
    console.log(response);
    for (let i = 0; i < response.products.length; i++) {
      let index = response.products[i];
      let name = index.name;
      let flowerType = index.flower_type;
      if (flowerType === 0) {
        console.log("these are indica: " + name);
      } else if (flowerType === 1) {
        console.log("these are sativa: " + name);
      } else if (flowerType === 2) {
        console.log("these are hybrid: " + name);
      } else if (flowerType === 3) {
        console.log("these are indica hybrid: " + name);
      } else {
        console.log("these are sativa hybrid: " + name);
      }
    }
  }
};

let displayPrerollData = function(response) {
  if (response.products.length > 0) {
    console.log(response);
  }
}

let error = function(error) {
  alert("U FAIL");
};


$(document).ready(function() {
  let flowerLookup = new Lookup();
  let flowerID = "87e148b0-c86f-4e8a-8089-0c5cd34dd3c1";
  $("#check-flower").click(function() {
    flowerLookup.getFlowerData(flowerID, displayFlowerData, error);
  });
  let prerollLookup = new Lookup();
  let prerollID = "01ccfc60-ab96-4614-bfb8-8dea907e96f0"
  $("#check-preroll").click(function() {
    prerollLookup.getPrerollData(prerollID, displayPrerollData, error);
  })
});
