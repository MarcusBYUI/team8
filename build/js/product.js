import t from "./ExternalServices.js";
import o from "./productDetails.js";
import { getParams as r } from "./utils.js";
import { loadHeaderFooter as s } from "./utils.js";
s();
const c = new t("tents"),
  d = r("product"),
  a = new o(d, c);
a.init();
