function titleCase(str) {
  
  let words = str.trim().toLowerCase().split(" ");
  for (let i in words) {
    words[i] = words[i].split("");
    words[i] = [words[i][0].toUpperCase(), ...words[i].slice(1)];
    words[i] = words[i].join("");
  }
  words = words.join(" ");
  return words;
  
}

console.log(titleCase("I'm a little tea pot"));