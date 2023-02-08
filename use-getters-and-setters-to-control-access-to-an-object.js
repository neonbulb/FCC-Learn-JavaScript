// Only change code below this line
class Thermostat {
  constructor(tempFarenheit) {
    this._celcius = 5/9 * (tempFarenheit - 32);
  }
  set temperature(tempCelcius) {
    this._celcius = tempCelcius;
  }
  get temperature() {
    return this._celcius;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);