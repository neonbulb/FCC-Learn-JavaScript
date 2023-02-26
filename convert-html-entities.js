function convertHTML(str) {
  
  const charAndReplacement = ["&", "&amp;", "<", "&lt;", ">", "&gt;", '"', "&quot;", "'", "&apos;"];
 
  for (let i = 0; i < charAndReplacement.length; i += 2) {
    let charRegex = new RegExp(charAndReplacement[i], "g");
    str = str.replace(charRegex, charAndReplacement[i + 1]);
  }

  return str;
}

console.log(convertHTML("Dolce & Gabbana"));