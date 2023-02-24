function diffArray(array1, array2) {
  let arr1 = [...array1];
  let arr2 = [...array2];
  
  arr1.forEach((element, indexArr1) => {
    const indexArr2 = arr2.indexOf(element);
    if (indexArr2 != -1) {
      arr2[indexArr2] = null;
      arr1[indexArr1] = null;
    }
  });

  arr1 = arr1.filter(Boolean);
  arr2 = arr2.filter(Boolean);

  return [...arr1, ...arr2];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));