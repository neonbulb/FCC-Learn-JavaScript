function rot13(str) {
  
  str = str.replace(/[A-Z]/g, letter => {
    const rotCode = letter.charCodeAt(0);
    let regularCode = rotCode - 13;
    if (regularCode < 65) { // A is 65
      regularCode = 91 - (65 - regularCode); // Z is 90
    }
    return String.fromCharCode(String(regularCode));
  });
  
  return str;
}

console.log(rot13("SERR PBQR PNZC"));