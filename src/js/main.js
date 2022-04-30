import ProductData from "./productData";
import ProductList from "./productList";

const productDat = new ProductData("tents");

const templateElement = document.getElementById("product-card-template");

const prodcutLi = new ProductList("tents", templateElement, productDat);
prodcutLi.init();
