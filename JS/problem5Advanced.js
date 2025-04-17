// Problem 5: Price with Sales Tax and Rounding

let price = 75;
console.log("Price:$", price)
let taxRate = 0.075;
console.log("Tax Rate:", taxRate);

let rawTotal = price + (price * taxRate);
console.log("Raw Total:$", rawTotal);

// Rounds to 2 decimals
let roundedTotal = rawTotal.toFixed(2);
console.log("Rounded Total:$", roundedTotal);