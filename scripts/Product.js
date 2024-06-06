import {cart, saveToStorage, loadFromStorage, loadAmount, renderCart} from './utility/cart.js'



loadFromStorage();
loadAmount();
renderCart();
// Header Icon

const cartElement = document.getElementById('cart');

cartElement.addEventListener('mouseover', () => {
  const cartPreview = document.getElementById('cart-preview');
  cartPreview.style.transform = "translateY(0px)"
  cartPreview.style.opacity = "1";

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'block'
})

cartElement.addEventListener('mouseout', () => {
  const cartPreview = document.getElementById('cart-preview');
  cartPreview.style.transform = "translateY(-400px)"
  cartPreview.style.opacity = "0.4"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none'
})

const notificationElement = document.getElementById('notification');

notificationElement.addEventListener('mouseover', () => {
  const notificationPreview = document.getElementById('notification-preview');
  notificationPreview.style.transform = "translateY(0px)"
  notificationPreview.style.opacity = "1"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'block'
})

notificationElement.addEventListener('mouseout', () => {
  const notificationPreview = document.getElementById('notification-preview');
  notificationPreview.style.transform = "translateY(-400px)";
  notificationPreview.style.opacity = "0.4"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none'
})

const chatElement = document.getElementById('chat');

chatElement.addEventListener('mouseover', () => {
  const chatPreview = document.getElementById('chat-preview');
  chatPreview.style.transform = "translateY(0px)"
  chatPreview.style.opacity = "1"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'block'
})

chatElement.addEventListener('mouseout', () => {
  const chatPreview = document.getElementById('chat-preview');
  chatPreview.style.transform = "translateY(-400px)";
  chatPreview.style.opacity = "0.4"

  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none'
})

//  Show Menu
function menuToggle() {
  const menuElement = document.getElementById('menu');
  menuElement.style.display = "block"
}
window.menuToggle = menuToggle ;

// Close Menu 
function closeToggle() {
 const menuElement = document.getElementById('menu');
 menuElement.style.display = "none"
}
window.closeToggle = closeToggle ;

// FETCH PRODUCT & RETRIEVE PRODUCT ID

const productId = JSON.parse(sessionStorage.getItem('productId'))

fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())
  .then(json=> {
    json.forEach((product) => {
      if (product.id === productId) {
        document.getElementById('product-display').innerHTML = `
        <div class="flex flex-col md:flex-row shadow-all-side rounded-2xl p-5">
          <div class="flex-1 flex justify-center p-10">
            <img class="sm:h-96 h-52" src="${product.image}" alt="product-image">
          </div>
          <div class="flex-1 flex flex-col ">
            <div class="flex-1 flex flex-col border-b-[1px] border-black mr-3">
              <div class="flex-1 py-3 pt-5">
                <span class="font-bold text-2xl">${product.title}</span>
              </div>
              <div class="flex-1 flex flex-col">
                <span class="font-semibold text-xl mb-1">Description</span>
                <span class="h-[72px] overflow-hidden text-ellipsis mb-1">${product.description}</span>
              </div>
              <div class="flex-1 flex items-center gap-x-8 pr-4 mb-3">
                <div class="flex items-center">
                  <img class="h-4 inline me-2" src="./icons/star.png" alt="star-image">
                  <span class="text-sm">${product.rating.rate}</span>
                </div>
                <div>
                  <span class="text-sm text-gray-600 ">${product.rating.count} Sold </span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col">
              <div class="py-5">
                <span class="text-red-700 font-medium">$ ${product.price}</span>
              </div>
              <div class="flex items-center gap-x-4">
                <div>
                  <div class="flex items-center rounded border border-green-500">
                    <a><img class=" m-1 hover:cursor-pointer" src="./icons/cart/minus.png" alt="minus-button" id="minus-button"></a>
                    <input class="w-10 h-full focus:outline-none text-end pl-1 pr-2" type="text" max="999" min="1" value="1" id="amount-input">
                    <a><img  class=" m-1 hover:cursor-pointer" src="./icons/cart/plus.png" alt="plus-button" id="plus-button"></a>
                  </div>
                </div>
                <div>
                  <button class="p-2 px-5 border bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full font-bold text-white" id="add-to-cart">Add to Cart</button>
                </div>
              </div>
                <div class="flex gap-x-4 mt-5">
                  <div class="flex items-center gap-x-2">
                    <img class="h-6 hover:cursor-pointer" src="./icons/chat.png" alt="chat-image"> 
                    <span>Chat</span>
                  </div>
                  <div class="flex items-center gap-x-2 px-4 border-x-2 ">
                    <img class="h-6 hover:cursor-pointer"  src="./icons/love.png" alt="love-image">
                    <span>Like</span>
                  </div>
                  <div class="flex items-center gap-x-2">
                    <img class="h-6 hover:cursor-pointer" src="./icons/share.png" alt="share-image">
                    <span>Share</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        `;

        document.getElementById('amount-input').addEventListener('input', 
        function (e) {
            const value = e.target.value;
            e.target.value = value.replace(/[^0-9]/g, '');
          });
      
      
        document.getElementById('plus-button').addEventListener('click', 
        function() {
         
          const input = document.getElementById('amount-input');
       
          const currentValue = parseInt(input.value, 10);
          if (currentValue < 999) {
            input.value = currentValue + 1;
          }
        
        });
        
        document.getElementById('minus-button').addEventListener('click', 
        function() {
          // Get the input element
          const input = document.getElementById('amount-input');
          // Convert the input value to a number and increase it by 1
          const currentValue = parseInt(input.value, 10);
          if (currentValue > 1) {
            input.value = currentValue - 1;
          } 
          
        });

        document.getElementById('add-to-cart').addEventListener('click', function(){
          const inputValue = document.getElementById('amount-input').value
          const valueNumber = Number(inputValue);
          
          let matchingItem ;
          
          cart.forEach((cartItem) => {
            if (cartItem.productId === product.id) {
              matchingItem = cartItem
            }
          })

          if (matchingItem) {
            matchingItem.amount += valueNumber
          } else {
            cart.push({
              productId: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              amount: valueNumber,
            });
          }

          loadAmount()
          saveToStorage();
          renderCart();
        })
      
        }
       
    })
  })

 