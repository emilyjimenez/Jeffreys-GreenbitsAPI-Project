import { authorizationToken } from './../.env';

export class Lookup {
  constructor() {

  }

  let getProductData = function(response, error) {
    $.ajax({
      url: `https://api.greenbits.com/api/v1/products?by_active=true&flower_type=0&product_type_id=${response}`,
      headers: {
        `Authorization`: `Token token=${authorizationToken},`
      },
      type: `GET`,
      data: {
        format: `json`
      },
      success: function(response) {

      diplayProductData(response);

      },
      error: function() {
        alert("FAIL WHALE");
      }
    });
  }
}
