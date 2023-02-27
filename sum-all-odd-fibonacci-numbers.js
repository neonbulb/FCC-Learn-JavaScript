function sumFibs(targetNum) {
  
  const sequence = [0];
  let sequenceNum = 1;
  let sum = 0;

  while (sequenceNum <= targetNum) {
    sequence.push(sequenceNum);
    if (sequenceNum % 2 == 1) {
      sum += sequenceNum;
    }
    sequenceNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.shift(); // Don't fill memory
  }

  return sum;
}

console.log(sumFibs(8));