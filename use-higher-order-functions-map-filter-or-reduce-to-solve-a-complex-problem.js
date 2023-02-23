const squareList = arr => {
  // Only change code below this line

  const filtered = arr.filter(num => num > 0 && Number.isInteger(num));
  const squared = filtered.map(num => Math.pow(num, 2));

  return squared;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);