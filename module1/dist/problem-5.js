"use strict";
function getProperty(obj, propName) {
    return obj[propName];
}
// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // Output: Alice
