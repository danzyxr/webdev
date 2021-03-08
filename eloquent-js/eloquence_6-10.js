// Encapsulation
// Breakup complex behavior
// Components are bound by interfaces

const rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says "${line}"`);
};

rabbit.speak("I'm alive!!");

function speak(line) {
  console.log(`The ${this.type} rabbit says "${line}"`);
}

const whiteRabbit = { type: 'white', speak };
const hungryRabbit = { type: 'hungry', speak };

whiteRabbit.speak("I'll be late!");
hungryRabbit.speak('Got any...carrots?');

speak.call(whiteRabbit, 'I can jump this high!');

// Each function has its own "this" binding

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

normalize.call({ coords: [0, 3, 4], length: 5 });

// Here's a better normalize vector fn:

function norm(v) {
  if (Array.isArray(v)) {
    const sqr = v.map((n) => n * n);
    const sum = sqr.reduce((acc, cur) => acc + cur);
    const len = Math.sqrt(sum);
    return v.map((n) => n / len);
  } else {
    console.log('Array.isArray(v) failed');
  }
}

const arr = [4, 3, 0];

console.log(norm(arr));

// Watch closely

const empty = {};

console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) === Object.prototype);

console.log(Object.getPrototypeOf(function () {}) === Function.prototype);

console.log(Object.getPrototypeOf([]) === Array.prototype);

// Overriding Derived Props

console.log(Array.prototype.toString === Object.prototype.toString);

console.log([1, 2]);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));

// Using objects as map data structure

const nameAge = {
  Oliver: 42,
  Gothraidh: 77,
  Ezekiel: 36
};

console.log(nameAge.Ezekiel);
console.log('Gothraidh' in nameAge);
console.log('toString' in nameAge);

Object.entries(nameAge).forEach((each) => console.log(`${each[0]} -- ${each[1]}`));

console.log('toString' in Object.create(null));

const nameAgeMap = new Map();
nameAgeMap.set('Oliver', 42);
nameAgeMap.set('Gothraidh', 42);
nameAgeMap.set('Ezekiel', 42);

console.log(nameAgeMap.get('Oliver'));
console.log(nameAgeMap.has('Ezekiel'));
console.log(nameAgeMap.has('toString'));

// get, set, & has are from the Map object interface

console.log({ x: 1 }.hasOwnProperty('x'));
console.log({ x: 1 }.hasOwnProperty(toString));

const sizeMayVary = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(`Random size: ${sizeMayVary.size}`);
console.log(`Random size: ${sizeMayVary.size}`);
console.log(`Random size: ${sizeMayVary.size}`);

const m = {
  one: true,
  two: true,
  hasOwnProperty: null
};

// console.log(map.hasOwnProperty("one")); ???
console.log(Object.prototype.hasOwnProperty.call(m, 'one'));
