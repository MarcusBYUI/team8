import { renderListWithTemplate, getLocalStorage } from "./utils.js";

export default class CartList {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
  }

  async init() {
    const list = getLocalStorage(this.key);
    this.renderList(list);
  }

  prepareTemplate(template, product) {
    template.querySelector(".cart-card__image img").src = product.Images.PrimaryMedium;
    template.querySelector(".cart-card__image img").alt += product.Name;
    template.querySelector(".card__name").textContent = product.Name;
    template.querySelector(".cart-card__color").textContent =
      product.Colors[0].ColorName;
    template.querySelector(".cart-card__price").textContent +=
      product.FinalPrice;
    return template;
  }

  renderList(list) {
    const template = document.querySelector("#cart-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
  }
}
