import { getLocalStorage, getTotal } from "./utils";

export default class CheckoutProcess {
  subtotal() {
    const itemsNumber = getLocalStorage("so-cart").length;
    const total = getTotal();

    document.querySelector("#items-number").innerHTML = itemsNumber;
    document.querySelector(".cart-subtotal").innerHTML = `$${total}`;
  }

  finalTotal() {
    document.querySelector("#zip-code").addEventListener("change", () => {
      const total = getTotal();
      const itemsNumber = getLocalStorage("so-cart").length;

      const shipping = 10 + (itemsNumber - 1) * 2;
      const tax = total * 0.06;
      const final = total + shipping + tax;

      document.querySelector("#shipping").innerHTML = `$${parseFloat(
        shipping
      ).toFixed(2)}`;
      document.querySelector("#tax").innerHTML = `$${parseFloat(tax).toFixed(
        2
      )}`;
      document.querySelector("#final-total").innerHTML = `$${parseFloat(
        final
      ).toFixed(2)}`;
    });
  }
}
