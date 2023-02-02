function testSize(num) {
  // Only change code below this line

  let alphaSize = ""
  if (num < 5){
    alphaSize = "Tiny";
  } else if (num < 10) {
    alphaSize = "Small";
  } else if (num < 15) {
    alphaSize = "Medium";
  } else if (num < 20) {
    alphaSize = "Large";
  } else {
    alphaSize = "Huge";
  }

  return alphaSize;
  // Only change code above this line
}

console.log(testSize(7));