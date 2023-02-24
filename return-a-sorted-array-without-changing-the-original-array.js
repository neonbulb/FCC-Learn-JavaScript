const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  const newArr = [].concat(arr);
  //const newArr2 = arr.slice(0);
  //const newArr3 = [...arr];
  
  newArr.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  return newArr;
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);