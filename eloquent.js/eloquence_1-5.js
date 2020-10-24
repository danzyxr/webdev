// FUNCTIONS!!

const makeNoise = function () {
  console.log("Pling!");
};

makeNoise();

// Base to power of

const power = function (base, exponent) {
  return base ** exponent;
};

console.log(power(3, 2));

// Functions within functions?

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(3);

// Call before delcaration?

console.log("The future is now!", future());

function future() {
  return "But you'll never have flying cars.";
}

const quadratic = (a, b, c, x) => {
  let y = a * x ** 2 + b * x + c;
  return y;
};

const add = (a, b) => a + b;

// Optional arguments!!

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(6));
console.log(minus(9, 3));

// Closure

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(36);
let wrap2 = wrapValue(69);
console.log(wrap1());
console.log(wrap2());

// This is really cool

function multiplier(factor) {
  return (number) => number * factor;
}

let thrice = multiplier(3);
console.log(thrice(9));

// Recursion

function recur_power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(recur_power(3, 9));

// Finding solutions w/ recursion

function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(36));

// Cows & Chickens

function printFarmInventory_v1(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmInventory_v1(7, 11);

// A better way?!

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory_v2(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory_v2(2, 4, 6);

// An even better way?

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory_v3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory_v3(3, 6, 9);

// Delcare f to be a function
// This is (almost) phi

function f(a, b) {
  if (a > b && a > 0) {
    return (a + b) / a;
  } else {
    return null;
  }
}

// Define g to hold a function value

const g = function (x) {
  return Math.E ** x;
};

// Let h to be an arrow function

let h = (a) => a % 2;

// Returns minimum number
// With some spread syntax?!

function minOf(a, b) {
  const nums = [a, b];
  return Math.min(...nums);
}

console.log(minOf(-9, -81));

// Same thing, but with unlimited args

function maxOf() {
  let nums = [];
  for (let i = 0; i < arguments.length; i++) {
    nums.push(arguments[i]);
  }
  return Math.max(...nums);
}

console.log(maxOf(4, 9, 16, 25, 36, 42));

// Eveness of n w/ recursion

function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  if (n < 0) {
    return isEven(n + 2);
  }
  return isEven(n - 2);
}

console.log(isEven(-2));
console.log(isEven(13));

// Count number of chars in str

function countChar(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) counter++;
  }
  return counter;
}

console.log(countChar("Cogito ergo sum!", "o"));

// Data structures, objects, and etc.

let doh = "Doh";
console.log(doh.toUpperCase());
console.log(typeof doh.toUpperCase()); // string
console.log(typeof doh.toUpperCase); // function

// A for loop for arrays

let myArray = [1, 2, 3, 4, 5, 6];

for (let num of myArray) {
  console.log(num);
}

// A little bit of maths

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}

console.log(randomPointOnCircle(6));

// D E S T R U C T U R I N G

const me = {
  myName: "Daniel",
  myAge: 26
};

let { myName } = me;
let { myAge } = me;

console.log(myName);
console.log(myAge);

let jsonString = JSON.stringify({
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
});

console.log(jsonString);
console.log(JSON.parse(jsonString).events);

// Data Structures: Objects and Arrays -- Excerises

function myRange(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(myRange(0, 10));

function mySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(mySum(myRange(0, 10)));

function extraRange(start, end, inc) {
  let arr = [];
  if (inc === undefined) inc = 1;
  if (inc < 0 && start < end) return null;
  if (inc === 0) return null;

  if (inc < 0) {
    for (let i = start; i >= end; i = i + inc) {
      arr.push(i);
    }
    return arr;
  }

  if (inc > 0) {
    for (let i = start; i <= end; i = i + inc) {
      arr.push(i);
    }
    return arr;
  }
}

console.log(extraRange(0, 10, 2));
console.log(extraRange(10, 0, -1));
console.log(extraRange(1, 10, 2));

function reverseArray(arr) {
  let a = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    a.push(arr[i]);
  }
  return a;
}

console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(arr) {
  let temp = null;
  let iter = Math.floor(arr.length / 2);
  for (let i = 0; i < iter; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace([3, 6]));
console.log(reverseArrayInPlace([3, 6, 9]));
console.log(reverseArrayInPlace([3, 6, 9, 12]));

/*
function arrayToLList(arr) {
  let d = "data";
  let n = "next";

  let LList = nextNode();

  for (let i = 0; i < arr.length; i++) {
    LList[d] = arr[i];
    d = "next." + d;
    LList[n] = nextNode();
    n = "next." + n;
  }

  function nextNode() {
    return {
      data: null,
      next: null
    };
  }

  return LList;
}

console.log(arrayToLList(["1st", "2nd", "3rd", "4th"]));
*/

function arrToLList(arr) {
  let LList = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    LList = { data: arr[i], next: LList };
  }
  return LList;
}

myLL = arrToLList(["asdf", "qwerty", "lol", "xD"]);

console.log(JSON.stringify(myLL));

/*
function printValuesNested(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      printValues(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

printValuesNested(myLL);
*/

function LListToArr(LList) {
  let arr = [];
  for (let node = LList; node; node = node.next) {
    console.log(`node: ${node}`);
    console.log(`node.data: ${node.data}`);
    console.log(`node.next: ${node.next}`);
    arr.push(node.data);
  }
  return arr;
}

console.log(LListToArr(myLL));

function prepend(data, LList) {
  return { data: data, next: LList };
}

myLL = prepend("Grape-Flavored Candy", myLL);

console.log(myLL);

function nth(LList, n) {
  if (!LList) return undefined;
  else if (n === 0) return LList.data;
  else return nth(LList.next, n - 1);
}

console.log(nth(myLL, 3));

function deepCompare(a, b) {
  if (a === b) return true;

  if (a === null || typeof a !== "object") return false;
  if (b === null || typeof b !== "object") return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let k of keysA) {
    if (!keysB.includes(k) || !deepCompare(a[k], b[k])) return false;
  }

  return true;
}

console.log(deepCompare({ a: { b: { c: "123" } } }, { a: { b: { c: "123" } } }));

// Consider:

let count = 1;
let total = 0;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

function loop(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Higher-order functions

let labels = [];
loop(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// Functions that create new functions?!

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Functions can alter other functions

function noisy(f) {
  return (...args) => {
    console.log("Calling with", args);
    let result = f(...args);
    console.log(`Called with ${args} returned ${result}`);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);

// Functions can alter control flow

function unless(test, then) {
  if (!test) then();
}
