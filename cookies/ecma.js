// how you can reassign value using the const
const s = [5, 7, 2];
function editInPlace() {
  [s[0], s[1], s[2]] = [2, 5, 7];
}
editInPlace();

// DESTRUCTURING IN ES6
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { yesterday, today, tomorrow } = HIGH_TEMPERATURES;

// defining function within the Object

const person = {
  name: "Talyor",
  sayMyName() {
    return `your name is ${this.name}`;
  },
};

person.sayMyName("yvan");
console.log(person.name);

// code to work like an API

class Thermostat {
  constructor(F) {
    this._F = F;
  }
  get temperature() {
    return (this._F - 32) * (5 / 9);
  }

  set temperature(C) {
    this._F = (C * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
4;
temp = thermos.temperature; // 26 in Celsius
