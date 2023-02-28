function smallestCommons(arr) {
  
  const smallest = Math.min(...arr);
  const largest = Math.max(...arr);

  if (smallest >= 1) {

    const rangeArr = [];
    for (let i = smallest; i <= largest; i++) {
      rangeArr.push(i);
    }

    let tryNum = smallest;
    while (!rangeArr.every(element => tryNum % element == 0)) {
      tryNum++;
    }

    return tryNum;
  }
  
}

console.log(smallestCommons([1, 5]));