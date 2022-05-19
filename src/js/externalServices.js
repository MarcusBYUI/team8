const baseURL = "http://157.201.228.93:2992/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: "servicesError", message: res.json() };
  }
}

class ExternalServices {
  constructor() {}

  async getData(category) {
    return fetch(baseURL + category)
      .then(convertToJson)
      .then((data) => data.Result);
  }

  async findProductByID(id) {
    const products = await this.getData(`product/${id}`);
    return products;
  }

  async loginRequest(user){
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };
    const response = await fetch(baseURL + "login", options).then(convertToJson);
    return response.accesToken

  }

  async getOrders(token) {
    const options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    const response = await fetch(baseURL + "orders", options).then(convertToJson);
    return response;
  }

  async checkout(orderObj) {
    const serverURL = "http://157.201.228.93:2992/checkout";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderObj),
    };

    const response = await fetch(serverURL, options);
    const data = await convertToJson(response);
    return data;
  }
}

export default ExternalServices;
