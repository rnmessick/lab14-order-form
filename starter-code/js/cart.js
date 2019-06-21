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
  // var cartItems = document.getElementById('items');
  // var cartQuantity = document.getElementById('items');
  // TODO: Iterate over the items in the cart
  console.log(cart, cart.cartItems);
  
  for(var i = 0; i < cart.items.length; i++ ){
    // TODO: Create a TR

    // TODO: Create a TD for the delete link, quantity,  and the item
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    //TODO: template literal 
    tdEl.innerHTML = `<button id="${i}">X</button>`;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = cart.items[i].quantity;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = cart.items[i].product;
    trEl.appendChild(tdEl);
    
    tableBodyEL.appendChild(trEl);
  }


 
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}