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
  } else {
    console.log(`Error: Product with ID ${product} is not a valid product`) //Product added to cart is not found in the products array
  }
}

function increaseQuantity(productId){
  let product = products.find((product) => product.productId === productId);
  if(product){
    product.quantity++;
  } else {
    console.log(`Error: Product with ID ${product} is not a valid product`) //Product added to cart is not found in the products array
  }
}

function decreaseQuantity(productId){
  let product = products.find((product) => product.productId === productId);
  if(product){
    if(product.quantity === 1){
      cart = cart.filter((product) => product.productId !== productId)
    } else {
      product.quantity--;
    }
  } else {
    console.log(`Error: Product with ID ${product} is not a valid product`) //Product added to cart is not found in the products array
  }

}

function removeProductFromCart(productId){
  let product = products.find((product) => product.productId === productId);
  if(product){
    product.quantity = 0;
    cart = cart.filter((product) => product.productId !== productId);
  } else {
    console.log(`Error: Product with ID ${product} is not a valid product`) //Product added to cart is not found in the products array
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

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
