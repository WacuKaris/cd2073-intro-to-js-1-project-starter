/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const brideearings = {
  name: "Bride Earring",
  price: 3000,
  quantity: 0,
  productId: 1001,
  image:"images/brideearings.jpg"
};
const cowrieshells = {
  name: "Cowrie Shells",
  price: 1000,
  quantity: 0,
  productId: 1002,
  image:"images/cowrieshells.jpg"
};
const earbeads = {
  name: "Ear beads",
  price: 5000,
  quantity: 0,
  productId: 1003,
  image:"images/earbeads.jpg"
};
const shuka = {
  name: "Shuka",
  price: 5000,
  quantity: 0,
  productId: 1004,
  image:"images/Shuka.jpg"
};

products.push(brideearings,cowrieshells,earbeads,shuka)

/* Declare an empty array named cart to hold the items in the cart */

const cart = []

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId){
  const product = products.find((prod) =>prod.productId === productId);
  if(!product){
    return;
  }

  const cartProduct = cart.find((item) => item.productId === productId);
  if(cartProduct){
    cartProduct.quantity++
    cart.push(product);
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  // find product with matching productId
  let ind;
  const product = cart.find((item, index) => {
    if (item.productId === productId){
      ind = index
      return true
    }
    return false
  })
  // check if the product with a given productId exists
  if (product){
    product.quantity++;
    console.log(`Quantity for product ${product.productId} increased to ${product.quantity}`);
  } else {
        console.log(`Product not found with productId: ${productId}`);
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  //Find the product with matching productId
  let ind;
  const product = cart.find((item, index) =>{
    if(item.product === productId){
      ind = index
      return true
    }
    return false
  })

  // check if product with a given id exists
  if (product){
    product.quantity--;

    //check if the quantity has reached o and remove from the cart
    if(product.quantity ===0){
      cart.splice(ind,1);
      console.log(`Product with productId ${productId} removed from the cart.`);
      } else {
          console.log(`Quantity for product ${productId} decreased to ${cart[ind].quantity}`);
      }
  } else {
      console.log(`Product not found in the cart with productId: ${productId}`);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  //Find the product with the matching productId
  const productIndex = cart.findIndex((item) => item.productId === productId);

  // check if product given exists in the cart
  if(productIndex !== -1){
    //set the product quantity to 0
    cart[productIndex].quantity = 0;

    //remove products from cart
    cart.splice(productindex, 1);
    console.log(`Product with productId ${productId} removed from the cart.`);
  } else {
      console.log(`Product not found in the cart with productId: ${productId}`);
  }
}

//* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total of all products
- cartTotal should return the sum of the products in the cart
*/
let remainingBalance = 0;

function cartTotal() {
// Initialize a variable to keep track of the total
let total = 0;

// Iterate through the cart to calculate the total
cart.forEach(function(item) {
    total += item.quantity * item.price;
});

// Return the calculated total
return total;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
// Set the cart to an empty array to remove all products
cart.length = 0;
}


/* Create a function named pay that takes in an amount as an argument
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
*/

// Variable to track the total amount paid
let totalPaid = 0;

// Function to handle payments and calculate the change
function pay(amount) {
const totalAmount = cartTotal(); // Get the total cost from the cart

// Add the current payment amount to the totalPaid variable
totalPaid += amount;

// Calculate the difference between the totalPaid and the cartTotal
let remaining = totalPaid - totalAmount;

// Check if the remaining amount is greater than or equal to zero
if (remaining >= 0) {
  // If so, reset the `totalPaid` to zero to prepare it for the next
  // payment, as the current payment is enough to cover the `cartTotal`.
  totalPaid = 0;
  emptyCart();
}

// Return the remaining (negative if payment is less than the cartTotal)
return remaining;
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
