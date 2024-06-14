import {cart, saveToStorage, loadAmount, loadFromStorage, totalPrice} from "./utility/cart.js"


// Header Icon

// totalPrice += (cartItem.price * cartItem.amount);
// document.getElementById('total-price').innerHTML = totalPrice;


const cartElement = document.getElementById('cart');

cartElement.addEventListener('mouseover', () => {
  const cartPreview = document.getElementById('cart-preview');
  cartPreview.style.visibility = "visible"
  cartPreview.style.opacity = "1";

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'block'
})

cartElement.addEventListener('mouseout', () => {
  const cartPreview = document.getElementById('cart-preview');
  cartPreview.style.visibility = "hidden"
  cartPreview.style.opacity = "0"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none'
})

const notificationElement = document.getElementById('notification');

notificationElement.addEventListener('mouseover', () => {
  const notificationPreview = document.getElementById('notification-preview');
  notificationPreview.style.visibility = "visible"
  notificationPreview.style.opacity = "1"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'block'
})

notificationElement.addEventListener('mouseout', () => {
  const notificationPreview = document.getElementById('notification-preview');
  notificationPreview.style.visibility = "hidden";
  notificationPreview.style.opacity = "0"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none'
})

const chatElement = document.getElementById('chat');

chatElement.addEventListener('mouseover', () => {
  const chatPreview = document.getElementById('chat-preview');
  chatPreview.style.visibility = "visible"
  chatPreview.style.opacity = "1"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'block'
})

chatElement.addEventListener('mouseout', () => {
  const chatPreview = document.getElementById('chat-preview');
  chatPreview.style.visibility = "hidden";
  chatPreview.style.opacity = "0"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none'
})

//  Show Menu
function menuToggle() {
  const menuElement = document.getElementById('menu');
  menuElement.style.display = "block"
}
window.menuToggle = menuToggle;

// Close Menu 
function closeToggle() {
 const menuElement = document.getElementById('menu');
 menuElement.style.display = "none"
}
window.closeToggle = closeToggle ;

// load localStorage
loadFromStorage()

// load cart amount
loadAmount()


// Render cart item on cart preview and page
let productsHTML = '' ;
let cartPreview = '' ; 
let cartSummary = '' ;

cart.forEach((cartItem) => {
  productsHTML += `
  <div class="flex flex-col sm:flex-row rounded-lg mt-4 shadow-all-side bg-white">
    <div class="p-3 w-[125px] m-auto flex justify-center">
      <img  class="h-28" src="${cartItem.image}" alt="product-image">
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex-1 flex flex-col p-3">
        <div class="flex-1 font-medium">${cartItem.title}</div>
        <div class="font-bold">$${cartItem.price}</div>
      </div>
      <div class="p-3 flex justify-between items-center">
        <div>
          <div class="font-medium hidden md:block" id="item-amount-${cartItem.productId}">Amount : ${cartItem.amount}</div>
        </div>
        <div class="flex flex-1 justify-end gap-x-3">
          <div>
            <img class="h-8 hover:cursor-pointer hover:bg-slate-200 rounded pr-[2px]" src="./icons/cart/trash.png" onclick="removeItem(${cartItem.productId})">
          </div>
          <div class="flex items-center rounded border border-green-400 ">
            <img class="h-4/5 m-1 hover:cursor-pointer" src="./icons/cart/minus.png" alt="minus-button" onclick="minusButton(${cartItem.productId})">
            <input class="w-10 h-full focus:outline-none pl-1 pr-2 text-end js-amount-input" type="text" max="999" min="1" value="1" id="amount-input-${cartItem.productId}">
            <img  class="h-4/5 m-1 hover:cursor-pointer" src="./icons/cart/plus.png" alt="plus-button" onclick="plusButton(${cartItem.productId})">
          </div>
          <div>
            <button class="p-[6px] px-3 border bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full font-bold text-white text-sm" id="add-to-cart-${cartItem.productId}" onclick="addToCart(${cartItem.productId})">Add to Cart</button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  `;

  document.getElementById('cart-products').innerHTML = productsHTML;

  cartPreview += `
  <div class="flex mx-3 my-4 gap-x-2">
    <div class="w-[70px]  shrink-0 shadow-as-thiner rounded flex justify-center">
      <img class="h-16" src="${cartItem.image}" alt="product-image">
    </div>
    <div class="w-full flex flex-col gap-y-1">
        <div class="text-sm font-bold h-10">
          <a href="#">${cartItem.title}</a>
        </div>
        <div class="text-sm flex justify-between">
          <div id="AiC-${cartItem.productId}">Amount :  ${cartItem.amount}</div>
          <div>$${cartItem.price}</div>
        </div>
    </div>
  </div>
  `;

  document.getElementById('cart-item-preview').innerHTML = cartPreview;

  cartSummary += `
    <div class="flex justify-between">
      <div class="flex">
        <div class="w-[100px] md:w-[220px] h-7 mr-10 overflow-hidden text-ellipsis whitespace-nowrap">
          <span>${cartItem.title}</span>
        </div>
        <div>
          <span class="font-bold" id="summary-amount-${cartItem.productId}">X ${cartItem.amount}</span>
        </div>
      </div>
      
      <div> 
        <span class="font-bold" id="price-item-${cartItem.productId}">$${cartItem.price * cartItem.amount}</span>
      </div>
    </div>
  `;

  document.getElementById('cart-summary').innerHTML = cartSummary ;

  // CALCULATE TOTAL PRICE 
  document.getElementById('total-price').innerHTML = `$${totalPrice().toFixed(2)}`;

  // PREVENT WORD ON INPUT
  document.querySelectorAll('.js-amount-input').forEach((input) => {
    input.addEventListener('input', function (e) {
      const value = e.target.value;
        e.target.value = value.replace(/[^0-9]/g, '');
    })
  });

      
});

//scroll to fixed
const summaryElement= document.getElementById('cart-summary-cont');

function handleScroll() {
  if (window.scrollY > 90) {
    summaryElement.style.position = 'fixed';
    summaryElement.style.top = '120px';
    summaryElement.style.width = '450px';
  } else {
    summaryElement.style.position = 'static';
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    
    window.addEventListener('scroll', handleScroll);
  } else {
    
    window.removeEventListener('scroll', handleScroll);
    summaryElement.style.position = 'static';
  }
});

if (window.innerWidth > 1024) {
  window.addEventListener('scroll', handleScroll);
} else {
  window.removeEventListener('scroll', handleScroll);
}



function plusButton(id) {
  const input = document.getElementById(`amount-input-${id}`);
  
  const currentValue = parseInt(input.value, 10);
  if (currentValue < 999) {
    input.value = currentValue + 1;
  }
} 
window.plusButton = plusButton;

function minusButton(id) {
  const input = document.getElementById(`amount-input-${id}`);
  
  const currentValue = parseInt(input.value, 10);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
}
window.minusButton = minusButton;

function addToCart(id) {
  const inputValue = document.getElementById(`amount-input-${id}`).value;
  const valueNumber = Number(inputValue);

  cart.forEach((cartItem) => {
    if (cartItem.productId === id) {
      cartItem.amount += valueNumber

      document.getElementById(`item-amount-${id}`).innerHTML = `Amount : ${cartItem.amount}` ;

      document.getElementById(`AiC-${id}`).innerHTML = `Amount : ${cartItem.amount}`;

      document.getElementById('total-price').innerHTML = `$${totalPrice().toFixed(2)}`;

      document.getElementById(`summary-amount-${cartItem.productId}`).innerHTML = `X ${cartItem.amount}`;

      document.getElementById(`price-item-${cartItem.productId}`).innerHTML = `$${(cartItem.price * cartItem.amount).toFixed(2)}`
    }
  })
  
  
  loadAmount()
  saveToStorage();
  
  
}
window.addToCart = addToCart;



// REMOVE ITEM FROM CART

function removeItem(id) {
  const itemToRemove = cart.findIndex(cartItem => cartItem.productId === id);

  if (itemToRemove > -1) {
    cart.splice(itemToRemove, 1)
  }
  saveToStorage();
  loadAmount();
  location.reload();
}
window.removeItem = removeItem;




