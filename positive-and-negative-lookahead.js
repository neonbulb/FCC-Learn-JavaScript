let sampleWord = "aa44aaa";
// let pwRegex = /\w{4,}\d{2,}/
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log(sampleWord.match(pwRegex));
