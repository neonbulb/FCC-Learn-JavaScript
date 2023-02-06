function randomRange(myMin, myMax) {
  // Only change code below this line
  let inclusiveRange = (myMax - myMin) + 1;
  return Math.floor(Math.random() * inclusiveRange) + myMin;
  // Only change code above this line
}