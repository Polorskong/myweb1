

const products = [
  {
    id: 43,
    imageURL: '../Images/Snack/02.jpg',
    price: 5,
    title: "Bran Muffin Bites",
    description: "Favorite of student.",
    instock: 20
  },
  {
    id: 44,
    imageURL: "../Images/Snack/01.jpg",
    price: 6,
    title: "Lemon Juice",
    description: "Thai's product.It's popular.",
    instock: 20
  },
  {
    id: 45,
    imageURL: "../Images/Snack/03.jpg",
    price: 5.5,
    title: "Red Cherry",
    description: "Good smile and sweet.",
    instock: 20
  },
  {
    id: 46,
    imageURL: "../Images/Snack/04.jpg",
    price: 3,
    title: "Strawberry Frappe",
    description: "",
    instock: 10
  }, {
    id: 47,
    imageURL: "../Images/Snack/05.jpg",
    price: 3,
    title: "Strawberry and Lemon",
    description: "",
    instock: 10
  },
  {
    id: 48,
    imageURL: "../Images/Snack/06.jpg",
    price: 3,
    title: "Milk Juice",
    description: "",
    instock: 10
  },
  {
    id: 49,
    imageURL: "../Images/Snack/07.jpg",
    price: 3,
    title: "Red Lemon",
    description: "",
    instock: 50
  },
  {
    id: 50,
    imageURL: "../Images/Snack/08.jpg",
    price: 3,
    title: "Red Tea",
    description: "",
    instock: 10
  },
  {
    id: 51,
    imageURL: "../Images/Snack/09.jpg",
    price: 3,
    title: "Green Jelly",
    description: "",
    instock: 10
  },
  {
    id: 52,
    imageURL: "../Images/Snack/10.jpg",
    price: 5,
    title: "Milk ",
    description: "",
    instock: 10
  },
  {
    id: 53,
    imageURL: "../Images/Snack/11.jpg",
    price: 5,
    title: "Milk Strawberry",
    description: "",
    instock: 30
  },
]

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    document.getElementById('row_card').innerHTML += `
      <div class="col-md-4 mt-3">
          <div class="card-drink">
            <div class="row">
              <div class="col">
                <img src=${product.imageURL} />
              </div>
              <div class="col title-card" style="height:100px;">
                <h4>${product.title}</h4>
              
                <h5 style="color: #f2714f; font-weight: 900;">${product.price}$</h5>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h6>Mood</h6>
                <div class="mb-1">
                  <span style="color:#FF5C58;" class="mx-1">
                    <i class="fab fa-hotjar"></i>
                  </span>
                  <span style="color:#90AACB;"class="mx-1">
                    <i class="fas fa-temperature-low"></i>
                  </span>
                </div>
              </div>
              <div class="col">
                <h6>Size</h6>
                <div class="mb-1">
                <span style=" font-size:18px;"class="mx-1">
                <i class="fas">S</i>
                  </span>
                  <span style=" font-size:18px;"class="mx-1">
                    <i class="fas">M</i>
                  </span>
                  <span style=" font-size:18px;"class="mx-1">
                    <i class="fas">L</i>
                  </span>
                </div>
              </div>
            </div>
            
            <div class="d-flex mt-2" style="justify-content: center;">
              <button onclick="addToBill(${product.id})" type="button" class="btn primary yellow-btn">Add Billing</button>
            </div>
          </div>
          
        </div>
      `;
  });
}
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToBill(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  // myFunction();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  document.getElementById('total').innerHTML = `
  <div  class="m-0" style="display: flex; align-items: center;">
  Subtotal (${totalItems} items):<div style="color: #f2714f; font-weight: 900; font-size:22px; margin-left:120px">$${totalPrice.toFixed(2)}</div> 
  </div>
  
  
  `;
  // totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  document.getElementById('show_item').innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    document.getElementById('show_item').innerHTML += `
 
      <div class="m-0" style="display: flex; align-items: center; justify-content: space-between;">
        <div class="img_bill">
          <img style="height: 60px;" src="${item.imageURL}" />
        </div>

        <div style="width: 150px;">
          <h6 id="name_item">${item.title}</h6>
          <h6 id="price_item" style="color: #f2714f; font-weight: 900;">${item.price}$</h6>
        </div>

        <div style="margin-left: 10px;">
          <button onclick="changeNumberOfUnits('minus', ${item.id})" class="btn btn-warning btn_style">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
            </svg>
          </button>
          <span id="amount">${item.numberOfUnits}</span>
          <button onclick="changeNumberOfUnits('plus', ${item.id})" class="btn btn-warning btn_style">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
          </button>

          <svg class="delete_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeItemFromCart(${item.id})">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>

        </div>

      </div>

    `;
  });
}


// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}


// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

function printDiv() {
  var divContents = document.getElementById("bill_sticky").innerHTML;
  var a = window.open('', '', 'height=500, width=500');
  a.document.write('<html>');
  a.document.write('<body >');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();
}


function myFunction() {
  var input, filter, cards, cardContainer, title, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("row_card");
  cards = cardContainer.getElementsByClassName("card-drink");
  document.getElementById('row_card').innerHTML = ""
  const result = products.filter(item => item.title.toUpperCase().includes(filter))
  console.log("nana" + JSON.stringify(result));

  result.map((item, index) =>
    document.getElementById('row_card').innerHTML += `
      <div class="col-md-4 mt-3">
          <div class="card-drink">
            <div class="row">
              <div class="col">
                <img src=${item.imageURL} />
              </div>
              <div class="col title-card" style="height:100px;">
                <h4>${item.title}</h4>
              
                <h5 style="color: #f2714f; font-weight: 900;">${item.price}$</h5>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h6>Mood</h6>
                <div class="mb-1">
                  <span style="color:#FF5C58;" class="mx-1">
                    <i class="fab fa-hotjar"></i>
                  </span>
                  <span style="color:#90AACB;"class="mx-1">
                    <i class="fas fa-temperature-low"></i>
                  </span>
                </div>
              </div>
              <div class="col">
                <h6>Size</h6>
                <div class="mb-1">
                <span style=" font-size:18px;"class="mx-1">
                <i class="fas">S</i>
                  </span>
                  <span style=" font-size:18px;"class="mx-1">
                    <i class="fas">M</i>
                  </span>
                  <span style=" font-size:18px;"class="mx-1">
                    <i class="fas">L</i>
                  </span>
                </div>
              </div>
            </div>
            
            <div class="d-flex mt-2" style="justify-content: center;">
              <button onclick="addToBill(${item.id})" type="button" class="btn primary yellow-btn">Add Billing</button>
            </div>
          </div>
          
        </div>
      ` )
}











