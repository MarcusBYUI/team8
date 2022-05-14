import { getLocalStorage, gettingTotal } from "./utils";
import ExternalServices from "./externalServices";

export default class CheckoutProcess{
    constructor(key){
        this.key = key;
        this.list = [];
        this.itemTotal = 0;
        this.shipping = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }
    init(){
        this.list = getLocalStorage(this.key);
        this.iSubtotal();
        this.estShipping_and_total();
    }
    iSubtotal(){
        let numItems = this.list.length
        this.itemTotal = gettingTotal()
        document.getElementById("n_items").innerHTML = numItems;
        document.getElementById("total_items").innerHTML = "$" + this.itemTotal;
    }
    estShipping_and_total(){
        document.getElementById("zip").addEventListener("change", ()=>{
            this.shipping = 10 + (this.list.length - 1) * 2
            this.tax = this.itemTotal * .06;
            this.orderTotal = this.shipping + this.tax + this.itemTotal
            this.display_total()
            
        })}
    display_total(){
        document.getElementById("shipping").innerHTML = "$" + this.shipping;
        document.getElementById("tax").innerHTML = "$" + this.tax.toFixed(2);
        document.getElementById("car_total").innerHTML = "$" + this.orderTotal;
    }

    }
