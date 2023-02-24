
function isPalindrome(word) {
  // Make variables in global scope
  let len = word.length
  let firstHalf ="";
  let secondHalf ="";
  let newStr ="";
  //function to iterate over second half of word to reverse the order of characters (newStr)
  function reverse(second) {
    for (let i=second.length-1; i >=0; i--) {
      newStr = newStr + second[i];
    }
    if (newStr === firstHalf) {
      return true;
    } else {
      return false;
    }
  }
  
  if (len %2 ===0 && word !== ""){
    firstHalf = word.substring(0, len/2);
    secondHalf = word.substring(len/2);
    
    return reverse(secondHalf);

  } else if (len%2 === 1) {
    firstHalf = word.substring(0, len/2);
    secondHalf = word.substring(len/2 +1);
    
    return reverse(secondHalf);
  } else if (len%2 ===0 && word === "") {
    return true;
  }

}

/* 
  Add your pseudocode here

  write a function that takes a string as an argument
  make a string length variable
  make a variable for the first half of the string and set it to an empty string
  make a variable for the second half of the string and set it to an empty string
  make a variable for an empty string (newStr)
  make a function that reverses the order of characters of the second half variable
    for i--: newStr = newStr + reverse order of characters
    if newStr is the same as the first half string return true; else return false;
  if (string length is even and the string is not empty):
    first half variable equals the first half of the string
    second half variable equals the second half of the string
    return reversing function
  if (string length is odd):
    first half variable equals the first half of the string excluding the middle letter
    second half variable equals the second half of the string excluding the middle letter
    return reversing function
    
  if (string length is zero):
    return true;
*/

/*
  Add written explanation of your solution here
  If the argument(string) is the same backwards as it is forwards, return true. If not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("strings"));

}

module.exports = isPalindrome;
