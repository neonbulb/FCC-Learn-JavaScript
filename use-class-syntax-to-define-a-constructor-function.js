// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name
  }
  isYummy() {
    return `${this.name} is yummy!`
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
console.log(carrot.isYummy());