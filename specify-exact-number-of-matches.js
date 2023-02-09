let timStr = "Timmmmmmmmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(timStr.match(timRegex));