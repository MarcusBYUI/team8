import { loadHeaderFooter } from "./utils.js";
import CartList from "./cartList.js";
import { getLocalStorage } from "./utils.js";

loadHeaderFooter();

const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();

function getTotal() {
  if (getLocalStorage("so-cart").length == 0) {
    document.querySelector(".cart-footer").classList.add("hide");
  } else {
    document.querySelector(".cart-footer").classList.remove("hide");

    const cartProducts = getLocalStorage("so-cart");
    let total = 0;

    cartProducts.forEach((product) => {
      total += product.FinalPrice;
    });

    document.querySelector(".cart-total").innerHTML = `Total: $${parseFloat(
      total
    ).toFixed(2)}`;
  }
}

window.onload = getTotal;
