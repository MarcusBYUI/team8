import { setLocalStorage } from "../../src/js/utils";
class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductByID(this.productId);

    // once we have the product details we can render out the HTML
    this.renderProductDetails();

    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    setLocalStorage("so-cart", this.product);
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

    clone.querySelector(".product-brand-image").src = this.product.Image;
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
