function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async findProductByID(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}

export default ProductData;
