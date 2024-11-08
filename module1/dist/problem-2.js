"use strict";
function removeDuplicates(arr) {
    const result = [];
    const seen = new Set();
    for (const num of arr) {
        if (!seen.has(num)) {
            result.push(num);
            seen.add(num);
        }
    }
    return result;
}
// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Sample Output:
// [1, 2, 3, 4, 5]
