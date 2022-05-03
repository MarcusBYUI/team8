import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

const product = new ProductData("tents");

const listProduct = new ProductList(
  "tents",
  product,
  document.querySelector(".product-list")
);
listProduct.init();

loadHeaderFooter();
