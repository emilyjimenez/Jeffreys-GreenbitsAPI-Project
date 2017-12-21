import { Lookup } from './../js/lookup.js';

let displayFlowerData = function(response) {
  if (response.products.length > 0) {
    for (let i = 0; i < response.products.length; i++) {
      let index = response.products[i];
      let name = index.name;
      let flowerType = index.flower_type;
      let thc = index.test_results_thc;
      let cbd = index.test_results_cbd;
      let price = index.sell_price;
      if (flowerType === 0) {
        $(".content").append(`<div class="list-item">
                                <div class="types">
                                  <p class="icon-indica">I</p>
                                  <p class="brand">${name}</p>
                                </div>
                                <div class="numbers">
                                  <p class="thc">${thc}</p>
                                  <p class="cbd">${cbd}</p>
                                  <p class="price">${price}</p>
                                </div>
                              </div>

        `);
      } else if (flowerType === 1) {
        $(".content").append(`<div class="list-item">
                                <div class="types">
                                  <p class="icon-sativa">S</p>
                                  <p class="brand">${name}</p>
                                </div>
                                <div class="numbers">
                                  <p class="thc">${thc}</p>
                                  <p class="cbd">${cbd}</p>
                                  <p class="price">${price}</p>
                                </div>
                              </div>

        `);
      } else if (flowerType === 2) {
        $(".content").append(`<div class="list-item">
                                <div class="types">
                                  <p class="icon-hybrid">H</p>
                                  <p class="brand">${name}</p>
                                </div>
                                <div class="numbers">
                                  <p class="thc">${thc}</p>
                                  <p class="cbd">${cbd}</p>
                                  <p class="price">${price}</p>
                                </div>
                              </div>

        `);
      } else if (flowerType === 3) {
        $(".content").append(`<div class="list-item">
                                <div class="types">
                                  <p class="icon-indica-hybrid">H</p>
                                  <p class="brand">${name}</p>
                                </div>
                                <div class="numbers">
                                  <p class="thc">${thc}</p>
                                  <p class="cbd">${cbd}</p>
                                  <p class="price">${price}</p>
                                </div>
                              </div>

        `);
      } else {
        $(".content").append(`<div class="list-item">
                                <div class="types">
                                  <p class="icon-sativa-hybrid">H</p>
                                  <p class="brand">${name}</p>
                                </div>
                                <div class="numbers">
                                  <p class="thc">${thc}</p>
                                  <p class="cbd">${cbd}</p>
                                  <p class="price">${price}</p>
                                </div>
                              </div>

        `);
      }
    }
  }
};

let displayCartridgeData = function(response) {
  if (response.products.length > 0) {
    $(".con-content").append(`<div class="con-cartridges">
                                <div class="con-title">
                                  <p>Cartridges</p>
                                </div>
                              </div>
      `);
    for (let i = 0; i < response.products.length; i++) {
      let index = response.products[i];
      let name = index.name;
      let flowerType = index.flower_type;
      let concentrateType = index.concentrate_type;
      let thc = index.test_results_thc;
      let cbd = index.test_results_cbd;
      let price = index.sell_price;
      $(".con-cartridges").append(`<div class="con-list-item">
                                        <div class="types">
                                        <p class="brand">${name}</p>
                                        </div>
                                        <div class="numbers">
                                          <p class="thc">${thc}</p>
                                          <p class="cbd">${cbd}</p>
                                          <p class="price">${price}</p>
                                        </div>
                                      </div>

      `);
    }
  }
};

let displayConcentrateData = function(response) {
  if (response.products.length > 0) {
    $(".con-content").append(`<div class="con-wax">
                                <div class="con-title">
                                  <p>Wax</p>
                                </div>
                              </div>`);
    $(".con-content").append(`<div class="con-shatter">
                                <div class="con-title">
                                  <p>Shatter</p>
                                </div>
                              </div>`);
    $(".con-content").append(`<div class="con-live-resins">
                                <div class="con-title">
                                  <p>Live Resin</p>
                                </div>
                              </div>`);
    $(".con-content").append(`<div class="con-rso">
                                <div class="con-title">
                                  <p>RSO</p>
                                </div>
                              </div>`);
    $(".con-content").append(`<div class="con-oil">
                                <div class="con-title">
                                  <p>Oil</p>
                                </div>
                              </div>`);
    for (let i = 0; i < response.products.length; i++) {
      let index = response.products[i];
      let name = index.name;
      let flowerType = index.flower_type;
      let concentrateType = index.concentrate_type;
      let thc = index.test_results_thc;
      let cbd = index.test_results_cbd;
      let price = index.sell_price;
      //Only including concentrate types 0,1,2,8,and 9. When building out full version need to include all concentrate types
      if (concentrateType === 0) {
        $(".con-wax").append(`<div class="con-list-item">
                                          <div class="types">
                                          <p class="brand">${name}</p>
                                          </div>
                                          <div class="numbers">
                                            <p class="thc">${thc}</p>
                                            <p class="cbd">${cbd}</p>
                                            <p class="price">${price}</p>
                                          </div>
                                        </div>

        `);
      } else if (concentrateType === 1) {
        $(".con-shatter").append(`<div class="con-list-item">
                                          <div class="types">
                                          <p class="brand">${name}</p>
                                          </div>
                                          <div class="numbers">
                                            <p class="thc">${thc}</p>
                                            <p class="cbd">${cbd}</p>
                                            <p class="price">${price}</p>
                                          </div>
                                        </div>

        `);
      } else if (concentrateType === 2) {
        $(".con-live-resins").append(`<div class="con-list-item">
                                          <div class="types">
                                          <p class="brand">${name}</p>
                                          </div>
                                          <div class="numbers">
                                            <p class="thc">${thc}</p>
                                            <p class="cbd">${cbd}</p>
                                            <p class="price">${price}</p>
                                          </div>
                                        </div>

        `);
      } else if (concentrateType === 8) {
        $(".con-rso").append(`<div class="con-list-item">
                                          <div class="types">
                                          <p class="brand">${name}</p>
                                          </div>
                                          <div class="numbers">
                                            <p class="thc">${thc}</p>
                                            <p class="cbd">${cbd}</p>
                                            <p class="price">${price}</p>
                                          </div>
                                        </div>

        `);
      } else {
        $(".con-oil").append(`<div class="con-list-item">
                                          <div class="types">
                                          <p class="brand">${name}</p>
                                          </div>
                                          <div class="numbers">
                                            <p class="thc">${thc}</p>
                                            <p class="cbd">${cbd}</p>
                                            <p class="price">${price}</p>
                                          </div>
                                        </div>

        `);
      }
    }
  }
};
//intended for preroll data menu optimization but holding off
// let displayStrainNames = function(response) {
//   let strainNames = [];
//   for (let i = 0; i < response.strains.length; i++) {
//     let index = response.strains[i];
//     let strainID = index.id;
//     let strainName = index.name;
//     strainNames.push([strainID, strainName]);
//   }
// }
//
// let displayBrandNames = function(response) {
//   let brandNames = [];
//   for (let i = 0; i < response.brands.length; i++) {
//     let index = response.brands[i];
//     let brandID = index.id;
//     let brandName = index.name;
//     brandNames.push([brandID, brandName]);
//   }
// }


let displayPrerollData = function(response, error) {
  if (response.products.length > 0) {
    for (let i = 0; i < response.products.length; i++) {
      let index = response.products[i];
      let name = index.name;
      let flowerType = index.flower_type;
      let thc = index.test_results_thc;
      let cbd = index.test_results_cbd;
      let price = index.sell_price;
      let grams = index.value;
      console.log(name + " thc: " + thc + " cbd: " + cbd + " grams: " + grams + " price: " + price)
    }
  }
};

let error = function(error) {
  alert("U FAIL");
};


$(document).ready(function() {
  let flowerLookup = new Lookup();
  let flowerID = "87e148b0-c86f-4e8a-8089-0c5cd34dd3c1";
  let prerollLookup = new Lookup();
  let prerollID = "01ccfc60-ab96-4614-bfb8-8dea907e96f0";
  // let strainLookup = new Lookup();
  // let strains = "strains";
  // let brandLookup = new Lookup();
  // let brands = "brands";
  let cartridgeLookup = new Lookup();
  let cartridgeID = "81135415-1a22-4c85-b332-d9eea906633d";
  let concentrateLookup = new Lookup();
  let concentrateID = "0ff11ccf-3221-46ae-ae81-9f81228b88cf";

  $("#check-flower").click(function() {
    $("#buttons").hide();
    $("#flower-menu").show();
    flowerLookup.getFlowerData(flowerID, displayFlowerData, error);
  });

  $("#check-preroll").click(function() {
    $("#buttons").hide();
    $("#preroll-menu").show();
    prerollLookup.getPrerollData(prerollID, displayPrerollData, error);
  });

  $("#check-cartridge-concentrate").click(function() {
    $("#buttons").hide();
    $("#concentrate-menu").show();
    cartridgeLookup.getCartridgeData(cartridgeID, displayCartridgeData, error);
    concentrateLookup.getConcentrateData(concentrateID, displayConcentrateData, error);
  });

  $(".logo").click(function() {
    $("#flower-menu").hide();
    $(".content").empty();
    $("#concentrate-menu").hide();
    $(".con-content").empty();
    $("#buttons").show();
    $(".pre-content").empty();
    $("#preroll-menu").hide();
  });
});
