function sumPrimes(num) {
  
  let primeSums = 0;

  for (let checkPrime = 2; checkPrime <= num; checkPrime++) {

    let isPrime = true;
    for (let i = checkPrime - 1; i > 1; i--) {
      if (checkPrime % i == 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      primeSums += checkPrime;
    }

  }

  return primeSums;
}

console.log(sumPrimes(10));