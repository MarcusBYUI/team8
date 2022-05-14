import { loadHeaderFooter, gettingTotal, } from "./utils.js";
import CartList from "./cartList.js";

loadHeaderFooter();
const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();

// To get the total of the Card
document.getElementById("total_cart").innerHTML = "Total: " + gettingTotal();
