import t from "./productData.js";
import o from "./productList.js";
const r = new t("tents"),
  c = new o("tents", r, document.querySelector(".product-list"));
c.init();
