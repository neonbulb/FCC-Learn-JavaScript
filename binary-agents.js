function binaryAgent(str) {
  
  const byteArr = str.match(/\d{8}/g, str);
  const stringArr = [];
 
  byteArr.forEach(byte => {
    const num = parseInt(byte, 2).toString();
    stringArr.push(String.fromCharCode(num));
  });
  
  return stringArr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));





