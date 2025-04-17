// Problem 4: Tip and Split Calculator

let billAmount = 90;
let tipRate = 0.18;
let people = 3;

// Compute Totals

let tipAmount = billAmount * tipRate;
console.log("Tip:$", tipAmount);

let totalBill = billAmount + tipAmount;
console.log("Total with Tip:$", totalBill);

let perPerson = totalBill / people;
console.log("Each Person Pays:$", perPerson);