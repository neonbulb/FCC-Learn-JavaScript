let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+\d*$/i; // Change this line
//let userCheck = /^[a-z]([a-z]+|\d{2,})\d*$/i;
let result = userCheck.test(username);