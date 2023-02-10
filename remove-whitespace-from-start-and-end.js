let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g;
// let result = hello.replace(wsRegex, "");
let wsRegex = /^\s*(.*)(\S)\s*$/; // Change this line
let result = hello.replace(wsRegex, "$1$2"); // Change this line

console.log(result);
console.log(hello.match(wsRegex));