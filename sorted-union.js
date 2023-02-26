function uniteUnique(...arr) {

  const uniqueOriginalOrder = [];

  arr.forEach(nestedArray => {
    nestedArray.forEach(element => {
      if (!uniqueOriginalOrder.includes(element)) {
        uniqueOriginalOrder.push(element);
      }
    });
  });
  
  return uniqueOriginalOrder;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));