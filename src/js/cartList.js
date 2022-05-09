import { renderListWithTemplate, getLocalStorage } from "./utils.js";

export default class CartList {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
  }

  async init() {
    const list = getLocalStorage(this.key);
    this.renderList(list);

    // const deleteButtons = document.querySelectorAll(".cart-card__delete");
    // const list = JSON.parse(localStorage.getItem("so-cart"));
    // console.log(deleteButtons);

    // if (deleteButtons.length != 0) {
    //     deleteButtons.forEach(
    //         element => {
    //             console.log(element);
    //             element.addEventListener("click",
    //                 () => {
    //                     for (let i in list) {

    //                       delete list[i];
    //                       let newStorage = JSON.stringify(list);
    //                       localStorage.setItem("so-cart", newStorage);

    //                     }
    //                 }
    //             )
    //         }
    //     );
    // }
  }

  prepareTemplate(template, product) {
    template.querySelector(".cart-card__image img").src =
      product.Images.PrimaryMedium;
    template.querySelector(".cart-card__image img").alt += product.Name;
    template.querySelector(".card__name").textContent = product.Name;
    template.querySelector(".cart-card__color").textContent =
      product.Colors[0].ColorName;
    template.querySelector(".cart-card__price").textContent +=
      product.FinalPrice;

    // Adding id selector and event listener to button, so we can remove them from the list
    template.querySelector(".cart-card__delete").id = product.Id;
    template
      .querySelector(".cart-card__delete")
      .addEventListener("click", (e) => {
        const currentStorage = JSON.parse(localStorage.getItem("so-cart"));

        for (let item in currentStorage) {
          if (currentStorage[item].Id == e.target.id) {
            currentStorage.splice(item, 1);
            break; // This break prevents removing several repeated items. Only the first item repeated is removed.
          }
        }

        const newList = JSON.stringify(currentStorage);
        localStorage.setItem("so-cart", newList);
        document.location.reload(true);
      });

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
