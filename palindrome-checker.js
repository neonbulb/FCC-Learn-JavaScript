function palindrome(str) {
  
  str = str.toLowerCase().match(/[a-z0-9]+/g);
 
  if (str != null) {
    str = str.join("");
    const halfLength = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, halfLength + 1);
    const secondHalfReversed = str.slice(str.length - (halfLength + 1)).split("").reverse().join("");
    return firstHalf == secondHalfReversed;
  }
  
  return false;
}

console.log(palindrome("race car"));