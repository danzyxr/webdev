// prettier-ignore

const i = 1;
const j = 1;
const k = 1;

// Non binding fn

function fn(a, b, c) {
  return a + b + c;
}

console.log(`Original fn: ${fn(i, j, k)}`);

// Implicit binding to "fn"

fn = function (x, y, z) {
  return x - y - z;
};

console.log(`Overwritten: ${fn(i, j, k)}`);

// Function binding with let

const reAdder = function (n) {
  while (n < 10) {
    n = n + 1;
    reAdder(n);
  }
  return n;
};

console.log(reAdder(0));

// Function binding with const

const qwerty = function asdf(kek) {
  return kek;
};

console.log(qwerty('blahhh'));

// Arrow function (ES6)

const clog = (anything) => console.log(anything);

const xxx = () => 'ur mum';

clog(xxx);
clog(xxx());
