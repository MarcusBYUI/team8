import {
  getLocalStorage,
  getTotal,
  setLocalStorage,
  renderWithTemplate,
} from "./utils";
import ExternalServices from "./externalServices";

const services = new ExternalServices();
function formDataToJSON(formElement) {    
  var formData = new FormData(formElement),
      convertedJSON = {};

  formData.forEach(function(value, key) { 
      convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const newArray = items.map((product) => {
    const newProduct = {};

    newProduct.id = product.Id;
    newProduct.name = product.Name;
    newProduct.price = product.FinalPrice;
    newProduct.quantity = product.count;

    return newProduct;
  });

  return newArray;
}

export default class CheckoutProcess {
  constructor(key) {
    this.key = key;
    this.list = [];
    this.numbOfItems = 0;
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.subtotal();

    document.querySelector("#checkout-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.checkout(e.target);
    });
  }

  subtotal() {
    const [totalAmount, totalInCart] = getTotal();

    this.numbOfItems = totalInCart;
    this.itemTotal = totalAmount;

    document.querySelector("#items-number").innerHTML = this.numbOfItems;
    document.querySelector(".cart-subtotal").innerHTML = `$${parseFloat(
      this.itemTotal
    ).toFixed(2)}`;

    this.finalTotal();
  }

  finalTotal() {
    document.querySelector("#zip-code").addEventListener("change", () => {
      this.shipping = 10 + (this.numbOfItems - 1) * 2;
      this.tax = this.itemTotal * 0.06;
      this.orderTotal = this.itemTotal + this.shipping + this.tax;

      this.displayTotal();
    });
  }

  displayTotal() {
    document.querySelector("#shipping").innerHTML = `$${parseFloat(
      this.shipping
    ).toFixed(2)}`;
    document.querySelector("#tax").innerHTML = `$${parseFloat(this.tax).toFixed(
      2
    )}`;
    document.querySelector("#final-total").innerHTML = `$${parseFloat(
      this.orderTotal
    ).toFixed(2)}`;
  }

//  
async checkout() {
  var formElement = document.querySelector("form");

  const json = formDataToJSON(formElement);
  // add totals, and item details
  json.orderDate = new Date();
  json.orderTotal = this.orderTotal;
  json.tax = this.tax;
  json.shipping = this.shipping;
  json.items = packageItems(this.list);
 console.log(json);
 try {
  const res = await services.checkout(json);
  console.log(res);
  setLocalStorage("so-cart", []);
  location.assign("/checkout/checkedout.html");
 }
 catch(err) {
   // get rid of any preexisting alerts.
  //  removeAllAlerts();
  //  for(let message in err.message) {
  //     alertMessage(err.message[message]);
  //  }
   
  //  console.log(err);
 }
}
}
