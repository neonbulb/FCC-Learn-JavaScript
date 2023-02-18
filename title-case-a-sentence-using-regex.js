function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, capitalize => capitalize.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));