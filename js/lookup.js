import { authorizationToken } from './../.env';

export class Lookup {
  constructor() {
  }

  getProductData(response, displayProductData, error) {
    $.ajax({
      url: `https://api.greenbits.com/api/v1/products?by_active=true&product_type_id=${response}`,
      headers: {
        'Authorization': authorizationToken,
      },
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

      displayProductData(response);

      },
      error: function() {
        alert('FAIL WHALE');
      }
    });
  }
}
