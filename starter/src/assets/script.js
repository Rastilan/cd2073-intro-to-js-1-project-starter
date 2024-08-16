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

function findProductById(productId) {
  return products.find((product) => product.productId === productId);
}

function addProductToCart(productId) {
  let product = findProductById(productId);
  ++product.quantity;
  if(!cart.includes(product)){
    cart.push(product);
  } 
      
}

function increaseQuantity(productId){
  let product = findProductById(productId);
  ++product.quantity;
}

function decreaseQuantity(productId) {
  let product = findProductById(productId);
  --product.quantity;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  } 
  
}

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId)
  if(productIndex !== -1) {
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1);
  }

  return cart;
  
}

function cartTotal() {
  let total = 0;
 
    cart.forEach(product => {
      total += (product.price * product.quantity);
    });
    return total;
  
}

function emptyCart() {
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
