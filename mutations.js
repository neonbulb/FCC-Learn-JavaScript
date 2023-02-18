function mutation(arr) {

  const lowerArr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
  for (let i in lowerArr[1]) {
    if (lowerArr[0].indexOf(lowerArr[1][i]) === -1)
      return false;
  }
  
  return true;
}

console.log(mutation(["hello", "hey"]));