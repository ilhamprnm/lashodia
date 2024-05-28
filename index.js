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



//Fetch products
let products = [];
let productsHTML = '';
let productsBelow = '';

fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> {
    products = json;
    console.log(products);
    products.forEach((product) => {
      productsHTML += `
      <div class="w-52 h-full rounded-2xl overflow-hidden shrink-0 shadow-all-side cursor-pointer product-cont" onclick="productClick(${product.id})">
        <div class="w-full h-3/5 p-4">
          <img class="h-full mx-auto" src="${product.image}" alt="product-image">
        </div>
        <div class="w-full h-full px-4 py-2 flex flex-col gap-y-2">
          <div>
           <p class="text-sm text-black h-10 w-full text-ellipsis overflow-hidden">${product.title}</p>
          </div>
          <div class="text-base text-black">
            <p>$${product.price}</p>
          </div>
          <div class="text-xs text-black">
             <p>${product.rating.rate} | ${product.rating.count} Sold</p>
          </div>
        </div>        
      </div>
      ` ;

      productsBelow += `
      <div class="w-full h-[250px] p-4 shadow-all-side rounded-xl cursor-pointer" onclick="productClick(${product.id})">
        <div class="w-full h-3/5 px-2">
          <img class="h-full mx-auto" src="${product.image}" alt="product-image">
        </div>
        <div class="w-full h-2/5 p-2 flex flex-col gap-y-1">
          <div class="">
            <p class="text-xs h-8 text-black w-full overflow-hidden text-ellipsis">${product.title}</p>
           </div>
           <div class="text-base text-black">
             <p class="text-xs">$${product.price}</p>
           </div>
           <div class="text-xs text-black">
              <p>${product.rating.rate} | ${product.rating.count} Sold</p>
           </div>
        </div>
      </div>
      `;
    
    }) ;
    
    document.getElementById("js-product").innerHTML = productsHTML ;
    document.getElementById("js-products-below").innerHTML = productsBelow ;
    
    
  })
  .catch(err => console.error("Error fetching products", err));

//Slideshow button
let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
showSlides(slideIndex);

setInterval(function() {
  plusSlides(1)
}
, 2000)


// Products slider
let  productIndex = 0;

function nextProduct() {

  const productCont = document.querySelectorAll('.product-cont');

  if (productIndex <= 448) {
    productIndex -= 448;
  }

  if (productIndex < -4256 && window.innerWidth < 495 )  {
    productIndex = -4256;
  } else if (productIndex <= -4032 && window.innerWidth >= 495 && window.innerWidth <= 720) {
    productIndex = -4032;
  } else if (productIndex < -3808 && window.innerWidth > 720 && window.innerWidth <= 1028 ) {
    productIndex = -3808;
  } else if (productIndex < -3584 && window.innerWidth > 1028) {
    productIndex = -3584
  }
  
  
  productCont.forEach((product) => {
    product.style.transform = `translate(${productIndex}px)`;
    product.style.transitionDuration = "0.5s";
  });
  
  
  console.log(productIndex);
}

function prevProduct() {
  const productCont = document.querySelectorAll('.product-cont');
  if (productIndex  < 0) {
    productIndex += 448;
  } 

  if (productIndex > 0) {
    productIndex = 0;
  }
  

  productCont.forEach((product) => {
    product.style.transform = `translate(${productIndex}px)`;
  });

  console.log(productIndex);
}


// Product to its page

function productClick(id) {
  const productId = id 
  sessionStorage.setItem('productId', JSON.stringify(productId));

  window.location.href = "Product.html";
}

