// Problem 1: Shopping Cart Total

let itemPrice = 100;
let quantity = 5;
let discount = 0.2;

// Calculate Subtotal

let subTotal = itemPrice * quantity;
console.log("Sub Total:", subTotal);

// Calculate Discount Amount

let discountedAmount = subTotal * discount;
console.log("Discount:", discountedAmount);

// Final Price

let finalPrice = subTotal - discountedAmount;
console.log("Final Price:", finalPrice);