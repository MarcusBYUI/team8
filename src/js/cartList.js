import {
  renderListWithTemplate,
  getLocalStorage,
  setLocalStorage,
} from "./utils.js";

export default class CartList {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
    this.list;
  }

  async init() {
    const list = getLocalStorage(this.key);
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      let count = 0;
      let index = [];
      for (let j = 0; j < list.length; j++) {
        if (element.Id == list[j].Id) {
          count++;
          if (count > 1) {
            index.push(j);
          }
        }
      }
      if ("count" in list[i]) {
        continue;
      } else {
        if (count > 1) {
          element["count"] = count;
          index.forEach((index) => {
            list.splice(index, 1);
          });
        } else {
          element["count"] = 1;
        }
      }
    }

    this.list = list;
    this.reRender();
  }

  reRender() {
    this.renderList(this.list);
    const decrease = document.querySelectorAll("#decrease");

    const increase = document.querySelectorAll("#increase");
    let Dthis = this;

    decrease.forEach((button) => {
      button.addEventListener("click", function (e) {
        const id = e.target.getAttribute("data-id");
        Dthis.editQuantity("remove", id);
      });
    });

    increase.forEach((button) => {
      button.addEventListener("click", function (e) {
        const id = e.target.getAttribute("data-id");
        Dthis.editQuantity("add", id);
      });
    });
  }

  editQuantity(type, id) {
    switch (type) {
      //increase count

      case "add":
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].Id == id) {
            this.list[i].count++;
          }
        }
        setLocalStorage("so-cart", this.list);
        this.reRender();

        break;
      case "remove":
        //reduce count

        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].Id == id) {
            this.list[i].count--;
            //remove item from list if count <= 0
            if (this.list[i].count <= 0) {
              this.list.splice(this.list.indexOf(this.list[i]), 1);
            }
          }
        }
        setLocalStorage("so-cart", this.list);
        this.reRender();

        break;
    }
  }

  prepareTemplate(template, product) {
    template.querySelector(".cart-card__image img").src =
      product.Images.PrimaryMedium;
    template.querySelector(".cart-card__image img").alt += product.Name;
    template.querySelector(".card__name").textContent = product.Name;
    template.querySelector(".cart-card__color").textContent =
      product.Colors[0].ColorName;
    template.querySelector("#decrease").setAttribute("data-id", product.Id);
    template.querySelector("#increase").setAttribute("data-id", product.Id);
    template.querySelector(".cart-card__quantity").textContent = product.count;
    template.querySelector(".cart-card__price").textContent +=
      product.FinalPrice * product.count;
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
