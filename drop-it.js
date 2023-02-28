function dropElements(arr, func) {

  // Return everything in the array after the element satisfies the function

  const satisfiesFunc = arr.map(func);
  const start = satisfiesFunc.indexOf(true);
  
  if (start != -1) {
    return arr.slice(start);
  } else {
    return [];
  }
  
}

console.log(dropElements([1, 2, 3, 4], (n) => n < 3));