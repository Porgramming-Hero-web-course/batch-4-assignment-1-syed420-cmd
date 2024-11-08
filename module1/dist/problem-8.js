"use strict";
// Function to validate if keys exist in the object
function validateKeys(obj, keys) {
    return keys.every(key => key in obj);
}
// Sample Input
const person = { name: "Alice", age: 25, email: "alice@example.com" };
// Call the function with the object and keys to check
console.log(validateKeys(person, ["name", "age"])); // Sample Output: true
console.log(validateKeys(person, ["name", "address"])); // Sample Output: false
