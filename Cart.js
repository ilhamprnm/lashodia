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


// Cart 

let cart = [];

