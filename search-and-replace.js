function myReplace(str, before, after) {
  // Replaces a word in the string while preserving the case of the first character in the original string.

  let beforeRegex = new RegExp(before, "g");

  str = str.replace(beforeRegex, () => {
    if (/[A-Z]/.test(before[0])) {
      return after[0].toUpperCase() + after.slice(1).toLowerCase();
    } else {
      return after.toLowerCase();
    }
  });

  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));