import { authorizationToken } from './../.env';

export class Lookup {
  constructor() {
  }

  getFlowerData(response, displayFlowerData, error) {
    $.ajax({
      url: `https://api.greenbits.com/api/v1/products?by_active=true&by_product_type=${response}`,
      headers: {
        'Authorization': authorizationToken,
      },
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

      displayFlowerData(response);

      },
      error: function() {
        alert('FAIL WHALE');
      }
    });
  }


//Limiting concentrate menu to only display 25 cartridges and 25 concentrates per notes from client on downsizing menu
  getCartridgeData(response, displayCartridgeData, error) {
    $.ajax({
      //organized by vendor since that's what people want to scan when looking for a cartridge
      url: `https://api.greenbits.com/api/v1/products?limit=25&by_active=true&by_product_type=${response}&sort_by[vendor]`,
      headers: {
        'Authorization': authorizationToken,
      },
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

      displayCartridgeData(response);

      },
      error: function() {
        alert('FAIL WHALE');
      }
    });
  }

  getConcentrateData(response, displayConcentrateData, error) {
    $.ajax({
      url: `https://api.greenbits.com/api/v1/products?limit=25&by_active=true&by_product_type=${response}`,
      headers: {
        'Authorization': authorizationToken,
      },
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

      displayConcentrateData(response);

      },
      error: function() {
        alert('FAIL WHALE');
      }
    });
  }
//This was an effort to make the prerolls menu better formatted... still in the works...
//   getStrainNames(response, displayStrainNames, error) {
//     $.ajax({
//       url: `https://api.greenbits.com/api/v1/${response}/`,
//       headers: {
//         'Authorization': authorizationToken,
//       },
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//           displayStrainNames(response);
//       },
//       error: function() {
//         alert('fail whale');
//       }
//   });
// }
//
// getBrandNames(response, displayBrandNames, error) {
//   $.ajax({
//     url: `https://api.greenbits.com/api/v1/${response}/`,
//     headers: {
//       'Authorization': authorizationToken,
//     },
//     type: 'GET',
//     data: {
//       format: 'json'
//     },
//     success: function(response) {
//         displayBrandNames(response);
//     },
//     error: function() {
//       alert('fail whale');
//     }
//   });
// }


//Limiting concentrate menu to only display 60 prerolls per notes from client on downsizing menu, menu does not include 1 dollar joint deal, showing prerolls between 5 and 50 dollars
getPrerollData(response, displayPrerollData, error) {
  $.ajax({
    url: `https://api.greenbits.com/api/v1/products?limit=60&by_active=true&by_product_type=${response}&sort_by[field]=sell_price&sort_by[direction]=asc&by_sell_price[sell_price]=500,5000&by_sell_price[comparator]=between`,
    headers: {
      'Authorization': authorizationToken,
    },
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {

    displayPrerollData(response);

    },
    error: function() {
      alert('FAIL WHALE');
    }
  });
}

}
