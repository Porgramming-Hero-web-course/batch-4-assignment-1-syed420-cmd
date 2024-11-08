"use strict";
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Sample Input:
console.log(sumArray([1, 2, 3, 4, 5])); // Sample Output: 15
