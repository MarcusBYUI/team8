import { loadHeaderFooter, getTotal, getLocalStorage } from "./utils.js";
import CartList from "./cartList.js";

loadHeaderFooter();

const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();

function totalToPage() {
  if (getLocalStorage("so-cart") == 0 || getLocalStorage("so-cart") == null) {
    document.querySelector(".cart-footer").classList.add("hide");
  } else {
    document.querySelector(".cart-footer").classList.remove("hide");

    const total = getTotal();

    document.querySelector(".cart-total").innerHTML = `Total: $${parseFloat(
      total
    ).toFixed(2)}`;
  }
}

window.onload = totalToPage;
