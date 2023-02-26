function pairElement(str) {
  
  const allPairs = [];
  str.split("").forEach(element => {
    switch (element) {
      case "A":
      allPairs.push(["A", "T"]);
      break;
      case "T":
      allPairs.push(["T", "A"]);
      break;
      case "C":
      allPairs.push(["C", "G"]);
      break;
      case "G":
      allPairs.push(["G", "C"]);
    }
  });

  return allPairs;
}

console.log(pairElement("GCG"));