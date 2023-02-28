function steamrollArray(array) {
  
  let arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      arr.splice(i, 1, ...arr[i]);
      i--;
    }
  }

  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));