import { setLocalStorage, getLocalStorage } from "../../src/js/utils";
class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    this.product = await this.dataSource.findProductByID(this.productId);

    this.renderProductDetails();

    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    const item = getLocalStorage("so-cart");
    if (Array.isArray(item)) {
      const list = [...item, this.product];

      setLocalStorage("so-cart", list);
    } else {
      setLocalStorage("so-cart", [this.product]);
    }
  }

  renderProductDetails() {
    const template = document.getElementById("product-card-template");

    const clone = template.content.cloneNode(true);

    clone.querySelector(
      ".product-brand-name"
    ).innerHTML = this.product.Brand.Name;
    clone.querySelector(
      ".product-brand-name-no-brand"
    ).innerHTML = this.product.NameWithoutBrand;

    clone.querySelector(
      ".product-brand-image"
    ).src = this.product.Images.PrimaryLarge;
    clone.querySelector(".product-brand-image").alt += this.product.Name;
    clone.querySelector(
      ".product-card__price"
    ).innerHTML += this.product.ListPrice;

    clone.querySelector(
      ".product__color"
    ).innerHTML = this.product.Colors[0].ColorName;

    clone.querySelector("#addToCart").setAttribute("data-id", this.product.Id);

    document.querySelector(".product-container").appendChild(clone);
  }
}

export default ProductDetails;
