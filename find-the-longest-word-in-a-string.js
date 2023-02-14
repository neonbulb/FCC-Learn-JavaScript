function findLongestWordLength(str) {

  str = str.split(" ");
  let maxLength = 0;
  for (let i in str) {
    if (str[i].length > maxLength) {
      maxLength = str[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));