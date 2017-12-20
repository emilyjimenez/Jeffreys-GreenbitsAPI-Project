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
//Limiting concentrate menu to only display 60 prerolls per notes from client on downsizing menu
  getPrerollData(response, displayPrerollData, error) {
    $.ajax({
      url: `https://api.greenbits.com/api/v1/products?limit=60&by_active=true&by_product_type=${response}&sort_by[sell_price]`,
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

}
