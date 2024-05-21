function isPalindrome(string) {
  // Start coding here
  const reversedString = string.split("").reverse().join("");
  if (string == reversedString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
