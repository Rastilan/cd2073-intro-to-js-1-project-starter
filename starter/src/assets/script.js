let products = [
  {
    name: "Cherry",
    price: 3,
    quantity: 0,
    productId: 1,
    image: "/images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 2,
    quantity: 0,
    productId: 2,
    image: "/images/orange.jpg"
  },  
  {
    name: "Strawberry",
    price: 5,
    quantity: 0,
    productId: 3,
    image: "/images/strawberry.jpg"
  }
];

let cart = [];

function addProductToCart(productId) {

  let product = products.find((product) => product.productId === productId); // find product info in products array. 
  if(product){
    if (product.quantity === 0) {
      cart.push(product); // adds product if it doesn't currently exist in the cart
    }
      product.quantity++; //included here to increase quanitity of product found or not
  }  
}

function increaseQuantity(productId){
  let product = products.find((product) => product.productId === productId);
  if(product){
    product.quantity++;
  }  
}

function decreaseQuantity(productId) {
  let cartItem = cart.find((item) => item.productId === productId);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      removeProductFromCart(productId);
    }
  }
}

function removeProductFromCart(productId){
  cart = cart.filter(item => item.productId !== productId);
  let product = products.find((product) => product.productId === productId);
  if(product) {
    product.quantity = 0;
  }
   
}


function cartTotal() {
  let total = 0;
  if(cart.length !== 0){
    cart.forEach(product => {
      total += (product.price * product.quantity);
    });
    return total;
  }
  else {
    return 0;
  }
}

function emptyCart() {
  cart.forEach(product => {
    product.quantity = 0;
  });
  cart = [];
}

function pay(amount){
  if (isNaN(amount) || amount < 0) {
    return "Please correct cash recieved, amount is either less than 0 or not a number ";
  }
 return amount - cartTotal();
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
