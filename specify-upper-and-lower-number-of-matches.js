let ohStr = "Ohhhhhhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
//let ohRegex = /Oh{3,6}[^h]/;
let result = ohRegex.test(ohStr);
let match = ohStr.match(ohRegex);
console.log(result);
console.log(match);