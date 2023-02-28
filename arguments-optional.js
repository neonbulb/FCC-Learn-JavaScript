function addTogether(...args) {
  
  if (args.length == 2 && typeof args[0] == "number" && typeof args[1] == "number") {
    return args[0] + args[1];
  } else if (args.length == 1 && typeof args[0] == "number") {
    return (arg1) => {
      if (typeof arg1 == "number") {
        return arg1 + args[0];
      } else {
        return undefined;
      }
    };
  }
  return undefined;
}

console.log(addTogether(2, 3));
const curry = addTogether(5);
console.log(curry(6));