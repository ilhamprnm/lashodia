
// Cart 

export let cart = [];

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'))

  if (!cart) {
    cart = [{
      productId: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      amount: 1,
    }]
  }
}

export function loadAmount () {
  let totalAmount = 0 ;
  cart.forEach((cartItem) => {
    totalAmount += cartItem.amount
  })
  document.getElementById('amount-display').innerHTML = totalAmount
  document.getElementById('cart-amount').innerHTML = `Cart (${totalAmount})`;
}

export function renderCart() {
  let cartPreview = '' ; 

  cart.forEach((cartItem) => {
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

    document.getElementById('cart-item-preview').innerHTML = cartPreview
  })
}

