import ExternalServices from "./externalServices";
import {alertMessage} from "./utils.js"

// Creating the class Admin() with the first two function: Login and show login:
export default class Admin {
    constructor(outputSelector) {
      this.main_element = document.querySelector(outputSelector);
      this.token = null;
      this.services = new ExternalServices();
    }
    // Encapsulation
    async login(creds, next){
        try{
        this.token = await this.services.loginRequest(creds);
        next()
        }
        catch(err){
            alertMessage(err.message.message);
        }
    }
    showing_login(){
        // Adding the form in the html file
        this.main_element.innerHTML = loginHtml();
        //
        document.querySelector("#loginBtn").addEventListener("click", (e) => {
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            this.login({email, password}, this.showOrders.bind(this));
          });
    }  
    async displayOrder(){
        try {
            const orders = await this.services.getOrders(this.token);
            this.mainElement.innerHTML = displayOrder();
            const parent = document.querySelector("#orders tbody");
            parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString("en-US")}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join("");
          } catch(err) {
            console.log(err);
          } 
    }
}
// Templates This will ask the user to enter his or her Credentials
function loginHtml(){
    return `<fieldset class="login-form">
    <legend>Login</legend>
    <p>
      <label for="email">Email</label>
      <input type="text" placeholder="email" id="email" value="user1@email.com"/>
    </p>
    <p>
      <label for="password">Password</label>
      <input type="password" placeholder="password" id="password" />
    </p>
    <button type="submit" id="loginBtn">Login</button>
  </fieldset>`;
  } 
  
//   Template to display
  function displayOrder() {
    return `<h2>Current Orders</h2>
    <table id="orders">
    <thead>
    <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
    </thead>
    <tbody class="order-body"></tbody>
    </table>
    `;
  }