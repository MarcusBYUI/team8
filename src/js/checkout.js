import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./checkoutProcess.js"
loadHeaderFooter();

const checkOut = new CheckoutProcess("so-cart")

checkOut.init();