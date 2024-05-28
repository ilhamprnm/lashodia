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

// Close Menu 
function closeToggle() {
 const menuElement = document.getElementById('menu');
 menuElement.style.display = "none"
}

// FETCH PRODUCT & RETRIEVE PRODUCT ID

const productId = JSON.parse(sessionStorage.getItem('productId'))

fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())
  .then(json=> {
    json.forEach((product) => {
      if (product.id === productId) {
        document.getElementById('product-display').innerHTML = `
        <div class="flex shadow-all-side rounded-2xl">
          <div class="flex-1 flex justify-center p-10">
            <img class="h-96 " src="${product.image}" alt="product-image">
          </div>
          <div class="flex-1 flex flex-col ">
            <div class="flex-1 flex flex-col border-b-[1px] border-black mr-3">
              <div class="flex-1 py-3">
                <span class="font-bold text-2xl">${product.title}</span>
              </div>
              <div class="flex-1 flex flex-col">
                <span class="font-semibold text-xl mb-1">Description</span>
                <span class="h-[72px] overflow-hidden text-ellipsis mb-1">${product.description}</span>
              </div>
              <div class="flex-1 flex items-center gap-x-8 pr-4 mb-3">
                <div class="flex items-center ">
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
                    <a href=""><img class=" m-1" src="./icons/cart/minus.png" alt=""></a>
                    <input class="w-10 h-full focus:outline-none" type="text">
                    <a href=""><img  class=" m-1" src="./icons/cart/plus.png" alt=""></a>
                  </div>
                </div>
                <div>
                  <button class="p-2 px-5 border bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full font-bold text-white">Add to Cart</button>
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
        `
      }
    })
  })

