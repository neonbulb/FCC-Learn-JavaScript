function checkObj(obj, checkProp) {
  // Only change code below this line

  let result = "Not Found";
  if (obj.hasOwnProperty(checkProp)) {
    result = obj[checkProp];
  }

  return result;
  // Only change code above this line
}