// Problem 2: Temperature Conversion Script

// parseFloat converts string to Number data type, can also do celsius = Number(celsius)
let celsius = prompt("Enter tempurature in Celsius:");
celsius = Number(celsius);

let fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C is ${fahrenheit}°F`);