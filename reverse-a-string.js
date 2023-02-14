function reverseString(str) {

  let reversed = "";
  for (let i in str) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

console.log(reverseString("hello"));