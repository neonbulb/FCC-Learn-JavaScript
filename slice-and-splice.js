function frankenSplice(arr1, arr2, n) {
  
  const mergeArr = [...arr2];
  mergeArr.splice(n, 0, ...arr1);
  return mergeArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));