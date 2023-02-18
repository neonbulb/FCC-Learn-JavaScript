function repeatStringNumTimes(str, num) {
  
  let repeatString = "";
  while (num > 0) {
    repeatString += str;
    num--;
  }
  
  return repeatString;
}

console.log(repeatStringNumTimes("abc", 3));