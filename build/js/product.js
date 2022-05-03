import t from "./productData.js";
import o from "./productDetails.js";
import { getParams as r } from "./utils.js";
const c = new t("tents"),
  s = r("product"),
  d = new o(s, c);
d.init();
