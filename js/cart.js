/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');


table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableBodyEL = document.querySelector('#cart > tbody');
  tableBodyEL.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body 
  var tableBodyEL = document.querySelector('#cart > tbody');
  // DONE: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++ ){
    // DONE: Create a TR
    var trEl = document.createElement('tr');
    // DONE: Create a TD for the delete link, quantity,  and the item
    var tdEl1 = document.createElement('td');
    tdEl1.innerHTML = `<button id = "${i}">X</button>`;

    var tdEl2 = document.createElement('td');
    tdEl2.textContent = cart.items[i].quantity;

    var tdEl3 = document.createElement('td');
    tdEl3.textContent = cart.items[i].product;

    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tableBodyEL.appendChild(trEl);
  }

}


function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  for (var i = 0; i < cart.items.length; i++){
    if (Number(event.target.id)=== i){
      cart.removeItem(i);
      // DONE: Save the cart back to local storage
      cart.saveToLocalStorage();
      // DONE: Re-draw the cart table
      renderCart();

    }
  }


}

// This will initialize the page and draw the cart on screen
renderCart();
