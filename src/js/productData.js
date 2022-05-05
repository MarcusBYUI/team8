const baseURL = "http://157.201.228.93:2992/"

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

class ProductData {
  constructor() {

  }

  async getData(category) {
    return fetch(baseURL + category)
        .then(convertToJson).then((data) => data.Result);
  }

  async findProductByID(id) {
    const products = await this.getData(`product/${id}`);
    console.log(products)
    return products
  }
}

export default ProductData;
