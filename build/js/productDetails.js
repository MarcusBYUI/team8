var i = (c, r, t) =>
  new Promise((u, a) => {
    var n = (e) => {
        try {
          o(t.next(e));
        } catch (d) {
          a(d);
        }
      },
      l = (e) => {
        try {
          o(t.throw(e));
        } catch (d) {
          a(d);
        }
      },
      o = (e) => (e.done ? u(e.value) : Promise.resolve(e.value).then(n, l));
    o((t = t.apply(c, r)).next());
  });
import { setLocalStorage as s, getLocalStorage as p } from "./utils.js";
class h {
  constructor(r, t) {
    (this.productId = r), (this.dataSource = t), (this.product = {});
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
    const r = p("so-cart");
    if (Array.isArray(r)) {
      const t = [...r, this.product];
      s("so-cart", t);
    } else s("so-cart", [this.product]);
  }
  renderProductDetails() {
    const r = document.getElementById("product-card-template"),
      t = r.content.cloneNode(!0);
    (t.querySelector(
      ".product-brand-name"
    ).innerHTML = this.product.Brand.Name),
      (t.querySelector(
        ".product-brand-name-no-brand"
      ).innerHTML = this.product.NameWithoutBrand),
      (t.querySelector(
        ".product-brand-image"
      ).src = this.product.Images.PrimaryLarge),
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
export default h;
