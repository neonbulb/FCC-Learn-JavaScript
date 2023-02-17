function confirmEnding(str, target) {
  const matchStr = str.slice(str.length - target.length, str.length);
  return matchStr == target;
}

console.log(confirmEnding("Bastian", "n"));