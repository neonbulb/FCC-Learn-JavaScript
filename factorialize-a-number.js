function factorialize(num) {
  let factorial = 1;
  while (num > 1) {
    factorial *= num;
    num--;
  }
  return factorial;
}

console.log(factorialize(5));