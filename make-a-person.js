const Person = function(firstAndLast) {
  let firstName = firstAndLast.slice(0, firstAndLast.indexOf(" "));
  let lastName = firstAndLast.slice(firstAndLast.indexOf(" ") + 1);
  
  this.getFirstName = () => {
    return firstName;
  };
  this.getLastName = () => {
    return lastName;
  };
  this.getFullName = () => {
    return firstName + " " + lastName;
  };
  this.setFirstName = (name) => {
    firstName = name;
  };
  this.setLastName = (name) => {
    lastName = name;
  };
  this.setFullName = (name) => {
    firstName = name.slice(0, name.indexOf(" "));
    lastName = name.slice(name.indexOf(" ") + 1);
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());