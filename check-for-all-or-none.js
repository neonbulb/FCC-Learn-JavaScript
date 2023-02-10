let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
// let favRegex = /favou{0,1}rite/;
let result = favRegex.test(favWord);
console.log(favWord.match(favRegex));