function spinalCase(str) {
  let words = str.match(/[A-Z0-9]{2,}|[a-z0-9]+|[A-Z][a-z0-9]*/g);
  return words.join("-").toLowerCase();
}

console.log(spinalCase('This is spinal tap'));
console.log(spinalCase("th1sISsp1nalTap"));