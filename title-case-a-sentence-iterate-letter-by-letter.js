function titleCase(str) {
  
  let letters = str.trim().toLowerCase().split("");

  letters[0] = letters[0].toUpperCase();
  for (let i = 2; i < letters.length; i++) {
    if (/\s/.test(letters[i - 1])) {
      letters[i] = letters[i].toUpperCase();
    }
  }
  
  return letters.join("");
}

console.log(titleCase("I'm a little tea pot"));