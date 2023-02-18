function getIndexToIns(arr, num) {
  
  let lowerCount = 0;
  for (let i in arr) {
    if (arr[i] < num) lowerCount++;
  }
  
  return lowerCount;
}

console.log(getIndexToIns([40, 60], 50));