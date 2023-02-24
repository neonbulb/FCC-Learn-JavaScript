function sumAll(arr) {

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let sum = max;
  let i = min;
  do {
    sum += i;
    i++;
  } while (i < max);

  return sum;
}

console.log(sumAll([1, 3]));
console.log(sumAll([5, 5]));