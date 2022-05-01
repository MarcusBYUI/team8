import ProductData from "./productData";
import ProductList from "./productList";

const productDat = new ProductData("tents");

const containerElement = document.querySelector(".product-list");

const prodcutLi = new ProductList("tents", containerElement, productDat);
prodcutLi.init();
