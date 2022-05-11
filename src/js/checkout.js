import { loadHeaderFooter, getLocalStorage, getTotal } from "./utils.js";
import CheckoutProcess from "./checkoutProcess";

loadHeaderFooter();

//Testing
// const currentLocal = getLocalStorage("so-cart");
// const currentTotal = getTotal();
// console.log(currentLocal);
// console.log(currentLocal.length);
// console.log(currentTotal);
const date = new Date();
console.log(date);

//Testing

const checkingOut = new CheckoutProcess("so-cart");

checkingOut.init();

// localStorage.setItem("so-cart", "[]");
