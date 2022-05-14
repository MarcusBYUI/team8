const baseURL = "http://157.201.228.93:2992/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
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

  async checkout(orderObj) {
    const serverURL = "http://157.201.228.93:2992/checkout";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderObj),
    };

    fetch(serverURL, options)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("There was an error: " + err));
  }
}

export default ExternalServices;
