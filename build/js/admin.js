var c=(l,t,e)=>new Promise((n,s)=>{var i=r=>{try{o(e.next(r))}catch(d){s(d)}},a=r=>{try{o(e.throw(r))}catch(d){s(d)}},o=r=>r.done?n(r.value):Promise.resolve(r.value).then(i,a);o((e=e.apply(l,t)).next())});import h from"./externalServices.js";class m{constructor(t){this.parentElement=t,this.token=null,this.services=new h}login(t){return c(this,null,function*(){try{this.token=yield this.services.loginRequest(t),this.next()}catch(e){alert(e.message.message)}})}next(){return c(this,null,function*(){const t=yield this.services.fetchOrders(this.token.accessToken);this.showOrders(t)})}showLogin(){const t=document.querySelector("#login-template"),e=t.content.cloneNode(!0);this.parentElement.appendChild(e);const n=document.querySelector("#login-form");n.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(s.target),a={};for(let o of i.keys())a[o]=i.get(o);this.login(a)})}showOrders(t){this.parentElement.innerHTML=this.orderHtml();const e=document.querySelector("#orders tbody");e.innerHTML=t.map(n=>`<tr><td>${n.id}</td><td>${new Date(n.orderDate).toLocaleDateString("en-US")}</td>${this.orderItems(n.items)}<td>${n.orderTotal}</td></tr>`).join(""),this.parentElement.innerHTML+=e}orderItems(t){const e=[];if(Array.isArray(t)){for(let n=0;n<t.length;n++)e.push(`<li>${t[n].name} <span> Quantity: ${t[n].quantity}</span></li>`);return`<td>${e.join("")}</td>`}else return`<td>${e.join("")}</td>`}orderHtml(){return`<h2>Current Orders</h2>
  <table id="orders">
  <thead>
  <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
  </thead>
  <tbody class="order-body"></tbody>
  </table>
  `}}const u=document.querySelector(".admin-container"),y=new m(u);y.showLogin();
