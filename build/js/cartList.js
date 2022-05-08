var o = (c, e, t) =>
  new Promise((l, s) => {
    var n = (r) => {
        try {
          a(t.next(r));
        } catch (i) {
          s(i);
        }
      },
      m = (r) => {
        try {
          a(t.throw(r));
        } catch (i) {
          s(i);
        }
      },
      a = (r) => (r.done ? l(r.value) : Promise.resolve(r.value).then(n, m));
    a((t = t.apply(c, e)).next());
  });
import { renderListWithTemplate as y, getLocalStorage as _ } from "./utils.js";
export default class d {
  constructor(e, t) {
    (this.key = e), (this.listElement = t);
  }
  init() {
    return o(this, null, function* () {
      const e = _(this.key);
      this.renderList(e);
    });
  }
  prepareTemplate(e, t) {
    return (
      (e.querySelector(".cart-card__image img").src = t.Images.PrimaryMedium),
      (e.querySelector(".cart-card__image img").alt += t.Name),
      (e.querySelector(".card__name").textContent = t.Name),
      (e.querySelector(".cart-card__color").textContent =
        t.Colors[0].ColorName),
      (e.querySelector(".cart-card__price").textContent += t.FinalPrice),
      e
    );
  }
  renderList(e) {
    const t = document.querySelector("#cart-card-template");
    y(t, this.listElement, e, this.prepareTemplate);
  }
}
