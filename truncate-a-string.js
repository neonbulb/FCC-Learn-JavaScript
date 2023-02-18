function truncateString(str, num) {
  if (num > 0 && num < str.length) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));