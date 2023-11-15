let cartItemsElements = document.getElementById('cart-items');
let addToCartButtons = document.getElementsByClassName('add-to-cart');
let cartTotalElement = document.getElementById('cart-total');
// let cartDb = [];
// let productDb = []


for(let i = 0; i < addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener('click',addToCart);
}

function addToCart(event){
//  let item = event.target.parentNode;
//  let itemName = item.getElementsByTagName('h3')[0].innerText;
//  let itemPrice = parseFloat(item.getElementsByTagName('p')[0].innerText.slice(1))





let cartItem = {
 cid: 0,
  pid: 1,
  name: itemName,
  price: itemPrice
}
// userDb[loggedInUserId-1].cart.push(cartItem)
cartDb.push(cartItem)
updateCart()

}


function updateCart(){
  cartItemsElements.innerHTML = '';

  let cartTotal = 0;
  for(let i = 0; i < cartItems.length; i++){
    let cartItemElement = document.createElement('li');
    let subTotal = cartItems[i].price.toFixed(2);

    cartItemElement.innerText +=  cartItems[i].name + ' - $' +  cartTotal;

    cartItemsElements.appendChild(cartItemElement);

   cartTotal += parseFloat(subTotal);
  }

  cartTotalElement.innerText = cartTotal.toFixed(2)
}