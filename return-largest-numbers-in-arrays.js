function largestOfFour(arr) {

  let greatestArray = [];
  for (let nest1 in arr) {
    let greatest = Math.max(...arr[nest1]);
    greatestArray.push(greatest);
  }

  return greatestArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


