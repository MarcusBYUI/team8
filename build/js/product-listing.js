import o from "./ExternalServices.js";
import r from "./productList.js";
import { loadHeaderFooter as e, getParams as c } from "./utils.js";
const s = new o(),
  t = c("category"),
  i = document.querySelector(".product-list"),
  n = new r(`products/search/${t}`, s, i);
n.init();
const u = t[0],
  a = u.toUpperCase();
(document.querySelector(".product-listing-cat").innerHTML = `${a}${t.slice(
  1,
  -1
)}s`),
  e();
