const items = document.querySelector(".items");
let cartDb = [];
let salesDb = [];
const salesDiv = document.getElementById("sales-div");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkOutBtn = document.querySelector(".checkout-btn");

let proDb = [
  {
    pid: 1,
    image: "assets/learncommerce.jpg",
    pname: "addidas",
    price: 30.01,
  },
  {
    pid: 2,
    image: "assets/learnphysics.jpg",
    pname: "item2",
    price: 500000.01,
  },
];

displayProducts();
displayCartItems();
displayAllSales()

function displayProducts() {
  items.innerHTML = "";

  proDb.map((pro) => {
    items.innerHTML += `    <div class="item">
  <img src="${pro.image}" alt="">
  <h3>${pro.pname}</h3>
  <p> N ${pro.price}</p>
  <button  class="add-to-cart" onclick="addToCart(${pro.pid})">Add to Cart</button>
</div>
`;
  });
}

function addToCart(pid) {
  let match = false;
  let cartpro = {
    cid: 0,
    pid: pid,
    pQty: 1,
  };
  cartDb.map((prod) => {
    if (prod.pid == pid) {
      match = true;
      return;
    }
  });
  if (match == false) {
    cartDb.push(cartpro);

    if (cartDb.length == 1) {
      cartDb[0].cid = 1;
    } else if (cartDb.length > 1) {
      cartDb[cartDb.length - 1].cid = cartDb[cartDb.length - 2].cid + 1;
    }
  } else {
    console.log("this product is already in the cart");
  }
  displayCartItems();
  increment()
}

function displayCartItems() {
  cartItems.innerHTML = "";
  cartDb.map((item) => {
    item.pid;
    const row = document.createElement("tr");
    row.innerHTML += `      <td>${item.cid}</td>
      <td>${item.pid}</td>
      <td class="pQuantity">${item.pQty}</td>
      <td>${proDb[item.pid - 1].pname}</td>
      <td id="eachItemPrice"> N ${(proDb[item.pid - 1].price).toFixed(2)}</td>
      <td id="eachItemTotal">${(proDb[item.pid - 1].price * item.pQty).toFixed(2)}</td>
      <td><button id="decrementbtn">-</button><button id="incrementbtn">+</button></td>


  `;
    cartItems.appendChild(row);
  });
  getCartTotal()
}

function getCartTotal(){
  const eachItemTotal = document.querySelectorAll("#eachItemTotal");
  let accumulator = 0;
  eachItemTotal.forEach((accum) => {
    let accumSplit = 0
    console.log(typeof parseFloat(accum.innerText))

    if(isNaN(parseFloat(accum.innerText))){
      accumSplit =  parseFloat(accum.innerText.split(" ")[1])
      console.log('false')
    }
    else{
      accumSplit = parseFloat(accum.innerText)
      console.log('true')

    }
    console.log(accumulator)
    console.log( accumSplit)


    accumulator += (accumSplit);
    console.log(accumulator)
  });
  cartTotal.innerText = 'N ' + accumulator.toLocaleString();

}

checkOutBtn.addEventListener("click", makeSales);
function makeSales() {
  let ans = confirm("Are you sure you want to Check-Out");
  if (ans) {
    console.log(cartTotal.innerText.split(" "))
    const sale = {
      salesId: Math.random().toString(12).slice(2),
      totalAmount: 'N ' + cartTotal.innerText.split(" ")[1],
      date: new Date(),
      details: [],
    };
    console.log(sale.totalAmount)
    sale.details.push(cartDb);
    salesDb.push(sale)
  }
  
  displayAllSales()
}


function displayAllSales() {
 salesDiv.innerHTML = "";
  salesDb.map((item) => {
    const row = document.createElement("tr");
    row.innerHTML += `      <td>${item.salesId}</td>
      <td>${item.totalAmount}</td>
      <td>${item.date}</td>
      <td><a href="#">View Details</a></td>
    

  `;
    salesDiv.appendChild(row);
  });
}

increment()
//handle increment and decrement in the cart
function  increment(){
 const incBtns = document.querySelectorAll('#incrementbtn');
let btnArray = Array.from(incBtns)
console.log(btnArray)
  btnArray.map((btn) =>{
    btn.addEventListener('click',()=>{
      let itemlAmount = btn.parentElement.parentElement.querySelector('#eachItemTotal');
      let itemlPrice = btn.parentElement.parentElement.querySelector('#eachItemPrice').innerText;
     let actualPrice =  itemlPrice.split(" ")[1]
console.log(actualPrice)
      
      let pQuantity = btn.parentElement.parentElement.querySelector('.pQuantity');
   let btnQty =  parseInt(pQuantity.innerText)
   btnQty++ 
   btn.parentElement.parentElement.querySelector('.pQuantity').innerText = btnQty

   itemlAmount.innerText = "N " + (actualPrice * btnQty).toFixed(2)
    getCartTotal()
    })
  })

}

