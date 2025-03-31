class Book {
  constructor(author) {
    this._author = author;
  }
  get writer() {
    return this._author;
  }
  set writer(updateAuthor) {
    this._author = updateAuthor;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5 / 9 * (temp - 32); // Convert Fahrenheit to Celsius
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updateTemp) {
      this._temp = updateTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // 76°F
let temp = thermos.temperature; // Get temperature in Celsius
thermos.temperature = 26; // Set temperature in Celsius
temp = thermos.temperature;
console.log(temp); // Output: 26