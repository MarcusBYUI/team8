let items_session = sessionStorage.getItem("itemArray");

// displaying the length of the Array When the page loads (Converting to an array)
if(items_session){
    document.getElementById("lbl_count_items").innerText = items_session.split(",").length
}
 

document.getElementById("addToCart").addEventListener("click", (btn_click) =>{
// The array saving the number of item in cart
    let cart = [];
//Checking if there is somthing that exist (at least one item)
    if(items_session)
    cart = items_session.split(",");

// pushing the item into the cart array
    cart.push(btn_click.target.dataset.id);

// Saving the value in the session Storage as text (WE CAN NOT SAVE ARRAYS IN THE MEMORY THAT IS WHY WE CONVERT IT TO TEXT)
    sessionStorage.setItem("itemArray",cart.join());

    items_session = sessionStorage.getItem("itemArray");
// displaying the length of the Array
    document.getElementById("lbl_count_items").innerText = items_session.split(",").length;

})