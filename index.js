/*If the argument(string) is the same backwards as it is forwards, return true. If not, return false.

*/




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
  if (string length is even and the string is not empty):
    make a variable for the first half of the string
    make a variable for the second half of the string
    iterate over characters in first half of string to find their value
    iterate over characters in second half of string to find their value
    compare the values and see if they are equal
    
    return true if they're equal and false if not
  if (string length is odd):
    make a variable for the first half of the string excluding middle letter
    make a variable for the second half of the string excluding middle letter
    iterate over characters in first half of string to find their value
    iterate over characters in second half of string to find their value
    compare the values and see if they are equal
    
    return true if they're equal and false if not
    
  if (string length is zero):
    return true;
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
