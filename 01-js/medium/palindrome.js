/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    // Your code here
   // Step 1: convert to lowercase
  str = str.toLowerCase();

  // Step 2: remove spaces and punctuation
  var cleaned = "";

  for (var i = 0; i < str.length; i++) {

    var char = str[i];

    // keep only letters and numbers
    if (
      (char >= 'a' && char <= 'z') ||
      (char >= '0' && char <= '9')
    ) {
      cleaned += char;
    }
  }

  // Step 3: check palindrome
  var left = 0;
  var right = cleaned.length - 1;

  while (left < right) {

    if (cleaned[left] !== cleaned[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;