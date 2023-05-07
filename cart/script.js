let cartElement = document.getElementById("cart-product");
let checkPrice = document.getElementById("checkout");
let heading = document.getElementById("heading");
let products;

function guard() {
    if (!localStorage.getItem("currentUser")) {
        window.location.href = "/login/index.html";
    }
}
guard();

function getTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach((element) => {
        totalPrice += element.price;
    });
    return totalPrice;
}


function fetchCartProduct() {
    let cart = localStorage.getItem("cart");
    if (!cart) {
        cartElement.innerHTML = `
        <div class="cart-element">
            <h3 style=" color:black; width: 80%; text-align:center; font-size:40px">No items in cart.</h3>
        </div>;`
        checkPrice.remove();
        heading.remove();
    }
    else {
        cart = JSON.parse(cart);
        products = cart;
        let res = "";
        let check = "";
        check += `
            <h4 class="check-list">Checkout List</h4>
        `;
        let totalPrice = getTotalPrice(cart);
        cart.forEach((element, index) => {
            check += `
            <div class="checked">
                <h5>${index + 1}. ${element.title}</h5>
                <h6>${element.price}$</h6>
            </div>
            `;
            res += `
            <div class="one">
        <div class="container" style="border: 1px solid grey; overflow:hidden;">
          <div class="image">
            <img src="${element.image}" alt="Item" height="200px" />
          </div>
          <div class="info">
            <div class="title">
              <h3> ${element.title}</h3>
            </div>
            <div class="price-size">
              <div class="price">
                <h5>${element.price}$</h5>
              </div>
              <div class="sizes">
                <h5>S|M|L</h5>
              </div>
            </div>
            <div class="colors">
              <h5>Colors:</h5>
              <div class="circles">
                <div class="circle" style="background-color: black"></div>
                <div class="circle" style="background-color: blue"></div>
                <div class="circle" style="background-color: green"></div>
              </div>
            </div>
            <div class="rating">
           
            <h5 class="px-3 pb-3">Rating: ${Math.floor(element.rating.rate)} out of 5</h5> 
         </div>
                    <button onclick="removeFromCart(this, ${element.id})" class="cart">Remove from Cart</button>
                </div>
                </div>
                </div>`;
        });
        check += `
            <hr/>
            <div class="price-total">
                <h6 class="total"> Total</h6>
                <h6>${Math.round(totalPrice)}$</h6>
            </div>
            <hr/>
            <button  onClick="checkoutCart()" class="check-button">Click to Checkout</button>
        `;
        document.getElementById("checkout").innerHTML = check;
        cartElement.innerHTML = res;
    }

}

fetchCartProduct();

function removeFromCart(event, id) {
    event.innerHTML = "Removed";
    products.forEach((element, index, object) => {
        if (element.id == id) object.splice(index, 1);
    });
    localStorage.setItem("cart", JSON.stringify(products));
    fetchCartProduct();
}

function checkoutCart(event) {
    window.location.href = "/razorpay";
}
