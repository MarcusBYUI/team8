function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {
  const cartItems = [getLocalStorage("so-cart")];

  if (cartItems[0] !== null) {
    const htmlItems = cartItems.map((item) => renderCartItem(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    // document.querySelector(".product-list").innerHTML = renderCartItem(cartItems);
  }
}

function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  return newItem;
}

function getTotal() {
  if (getLocalStorage("so-cart") == null) {
    document.querySelector(".cart-footer").classList.add("hide");
  } else {
    document.querySelector(".cart-footer").classList.remove("hide");

    const cartProducts = [getLocalStorage("so-cart")];
    let total = 0;

    cartProducts.forEach((product) => {
      total += product.FinalPrice;
    });

    document.querySelector(".cart-total").innerHTML = `Total: $${parseFloat(
      total
    ).toFixed(2)}`;
  }
}

window.onload = getTotal;

getCartContents();
