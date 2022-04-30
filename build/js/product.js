let products = [];
<<<<<<< HEAD
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get tents data
function getProductsData() {
  fetch("../json/tents.json")
    .then(convertToJson)
    .then((data) => {
      products = data;
    });
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  setLocalStorage("so-cart", product);
}

getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
=======
function convertToJson(t) {
  if (t.ok) return t.json();
  throw new Error("Bad Response");
}
function setLocalStorage(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
function getProductsData() {
  fetch("../json/tents.json")
    .then(convertToJson)
    .then((t) => {
      products = t;
    });
}
function addToCart(t) {
  const e = products.find((n) => n.Id === t.target.dataset.id);
  setLocalStorage("so-cart", e);
}
getProductsData(),
  document.getElementById("addToCart").addEventListener("click", addToCart);
>>>>>>> 8eff53ea87258f45cdd3a22536c44ba70c3a7c91
