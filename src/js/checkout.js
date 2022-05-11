import { loadHeaderFooter, getLocalStorage, getTotal } from "./utils.js";
import CheckoutProcess from "./checkoutProcess";

loadHeaderFooter();

const currentLocal = getLocalStorage("so-cart");
const currentTotal = getTotal();
console.log(currentLocal.length);
console.log(currentTotal);

const checkingOut = new CheckoutProcess();

window.onload = checkingOut.subtotal;
checkingOut.finalTotal();

// localStorage.setItem("so-cart", "[]");
