function fearNotLetter(str) {
  
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  let missingLetter = undefined;
  const alphaStartIndex = alpha.indexOf(str[0]);
  
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    const alphaChar = alpha[alphaStartIndex + i];

    if (element !== alphaChar) {
      missingLetter = alphaChar;
      break;
    }
  }

  return missingLetter;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));