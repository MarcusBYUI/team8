var i = (c, e, t) =>
  new Promise((u, a) => {
    var n = (r) => {
        try {
          o(t.next(r));
        } catch (d) {
          a(d);
        }
      },
      s = (r) => {
        try {
          o(t.throw(r));
        } catch (d) {
          a(d);
        }
      },
      o = (r) => (r.done ? u(r.value) : Promise.resolve(r.value).then(n, s));
    o((t = t.apply(c, e)).next());
  });
import { setLocalStorage as l } from "./utils.js";
class p {
  constructor(e, t) {
    (this.productId = e), (this.dataSource = t), (this.product = {});
  }
  init() {
    return i(this, null, function* () {
      (this.product = yield this.dataSource.findProductByID(this.productId)),
        this.renderProductDetails(),
        document
          .getElementById("addToCart")
          .addEventListener("click", this.addToCart.bind(this));
    });
  }
  addToCart() {
    l("so-cart", this.product);
  }
  renderProductDetails() {
    const e = document.getElementById("product-card-template"),
      t = e.content.cloneNode(!0);
    (t.querySelector(
      ".product-brand-name"
    ).innerHTML = this.product.Brand.Name),
      (t.querySelector(
        ".product-brand-name-no-brand"
      ).innerHTML = this.product.NameWithoutBrand),
      (t.querySelector(".product-brand-image").src = this.product.Image),
      (t.querySelector(".product-brand-image").alt += this.product.Name),
      (t.querySelector(
        ".product-card__price"
      ).innerHTML += this.product.ListPrice),
      (t.querySelector(
        ".product__color"
      ).innerHTML = this.product.Colors[0].ColorName),
      t.querySelector("#addToCart").setAttribute("data-id", this.product.Id),
      document.querySelector(".product-container").appendChild(t);
  }
}
export default p;
