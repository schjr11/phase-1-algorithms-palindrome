function isPalindrome(word) {
  if (word.length <= 1) {
    return true
  } else {
    if (word[0] === word[word.length - 1]) {
      return isPalindrome(word.slice(1, -1))
    } else {
      return false
    }
  }
}

/* 
  Add your pseudocode here
*/

/*
  If the length of a word is less than or equal to 1 letter, it is automatically a palindrome like "a",
  otherwise if a word with no array is equal to the array of a word that is the length
  of the word from the end (-1) then a palindrome is returned by slicing both ends of the word
  to be read backward; anything else is automatically false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("alien"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
