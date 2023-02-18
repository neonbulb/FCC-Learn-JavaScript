function chunkArrayInGroups(arr, size) {
  let addCount = 0;
  const fullArr = [];
  let segmentArr = [];

  for (let i in arr) {
    segmentArr.push(arr[i]);
    addCount++;

    if (addCount == size) {
      fullArr.push(segmentArr);
      segmentArr = [];
      addCount = 0;
    }
  }
  if (segmentArr.length > 0) 
    fullArr.push(segmentArr);
  
  return fullArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));