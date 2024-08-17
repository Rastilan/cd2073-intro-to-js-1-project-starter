// Complete list of products in an array. 
const products = [
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

const cart = [];
let balance = 0;

// Finds the product by the product ID. C
function findProductById(productId) {
  return products.find((product) => product.productId === productId);
}

// increases the quantity of the product by one and adds it to the cart if it doesn't already exist in the cart.
function addProductToCart(productId) {
  let product = findProductById(productId);
  ++product.quantity;
  if(!cart.includes(product)){
    cart.push(product);
  } 
      
}

// Increases the quantity of the product by one.
function increaseQuantity(productId){
  let product = findProductById(productId);
  ++product.quantity;
}

// Decreases the quantity of the product by one. If the product quantity hits 0, it removes it from the cart.
function decreaseQuantity(productId) {
  let product = findProductById(productId);
  --product.quantity;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  } 
  
}

// Remove a product from cart and sets its quantity to 0.
function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId)
  if(productIndex !== -1) {
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1);
  }

  return cart;
  
}

// finds the total of all products price times quantity. Then sets that value as a negative into the balance.
function cartTotal() {
  let total = 0;
  cart.forEach(product => {
    total += (product.price * product.quantity);
  });
  balance = -total; // Set balance to the negative of the total
  return total;
}

// Empties the cart
function emptyCart() {
  cart = [];
}

// Pays a positive amount to a negative balance and sets a new balance.
function pay(amount){
  if (isNaN(amount) || amount <= 0) { // Checks for negative or zero. 
    return "Please correct cash recieved, amount is either less than 0 or not a number ";
  }
  else {
    balance += amount;
    let newBalance = balance - cartTotal();
    return newBalance;
  }
return balance;
 
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
