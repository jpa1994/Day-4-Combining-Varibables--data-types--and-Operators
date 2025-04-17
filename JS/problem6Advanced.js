// Problem 6: Password Length Checker

let password = prompt ("Enter a new password:");
let minLength = 8;

// Checks password length
if (password.length >= minLength) {
    console.log("Password is valid.")
} else {
    console.log("Invalid password. Password must be at least " + minLength + " characters long.");
}