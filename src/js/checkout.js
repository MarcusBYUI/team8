import { loadHeaderFooter } from "./utils";
import CheckoutProcess from "./checkoutProcess";

loadHeaderFooter();

const checkingOut = new CheckoutProcess("so-cart");

checkingOut.init();
