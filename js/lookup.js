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

  getPrerollData(response) {
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

      displayPrerollData(response);

      },
      error: function() {
        alert('FAIL WHALE');
      }
    });
  }
}
