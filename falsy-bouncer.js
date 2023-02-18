function bouncer(arr) {
  
  const bouncedArr = [];
  for (let i in arr) {
    if (arr[i]) {
      bouncedArr.push(arr[i]);
    }
  }

  return bouncedArr;
}

console.log(bouncer([7, "ate", "", false, 9]));