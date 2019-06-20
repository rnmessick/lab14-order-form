/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var tableBodyEL = document.querySelector('#cart > tbody');
var trEl = document.createElement('tr');
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

  for (var i = trEl.length - 1; i > -1; i--) {
    tableBodyEL.deleteRow(i);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body   
  var cartItems = document.getElementById('items');
  var cartQuantity = document.getElementById('items');
  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cartItems.length; i++ ){
    // TODO: Create a TR

    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdEl = document.createElement('td');
    tdEl.textContent = 'delete link';
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = cartQuantity;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = cartItems;
    trEl.appendChild(tdEl);
    
  }

  tableBodyEL.appendChild(trEl);

 
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  


}

// This will initialize the page and draw the cart on screen
renderCart();
