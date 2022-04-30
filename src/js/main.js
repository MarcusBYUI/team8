import ProductList from "./productList";
import ProductData from "./productData";

const product = new ProductData("tents");

const product_list = new ProductList("tents",document.querySelector(".product-list"),product);

product_list.init();


