function destroyer(array, ...destroyArr) {
  
  let arr = [...array];

  destroyArr.forEach(destroyElement => {
    arr.forEach((arrElement, arrElementIndex) => {

      if (arrElement === destroyElement) {
        arr[arrElementIndex] = null;
      }

    });
  });

  arr = arr.filter(Boolean);
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));