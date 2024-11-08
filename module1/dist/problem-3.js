"use strict";
function countWordOccurrences(sentence, word) {
    // Convert both sentence and word to lowercase for case-insensitive comparison
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    // Use a regular expression to match whole words, case insensitive
    const regex = new RegExp(`\\b${lowerCaseWord}\\b`, 'g');
    // Find all occurrences of the word in the sentence and return the count
    const matches = lowerCaseSentence.match(regex);
    // If no matches are found, return 0, otherwise return the number of matches
    return matches ? matches.length : 0;
}
// Sample Input
console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
