function translatePigLatin(str) {

  const vowels = ["a", "e", "i", "o", "u"];
  if (str != "") {
    if (vowels.includes(str[0])) {
      str = str + "way";
    } else {
      const consonantCluster = str.match(/^[^aeiou]+/)[0];
      str = str.slice(consonantCluster.length) + consonantCluster + "ay";
    }
  }
  return str;
}

console.log(translatePigLatin(""));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));