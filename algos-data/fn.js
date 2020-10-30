// prettier-ignore
let i = 1, j = 1, k = 1;

function fn(a, b, c) {
  return a + b + c;
}

console.log(`Original fn: ${fn(i, j, k)}`);

fn = function (x, y, z) {
  return x - y - z;
};

console.log(`Overwritten: ${fn(i, j, k)}`);

let reAdder = function (n) {
  while (n < 10) {
    n = n + 1;
    reAdder(n);
  }
  return n;
};

console.log(reAdder(0));

const qwerty = function asdf(kek) {
  return kek;
};

console.log(qwerty("blahhh"));

const clog = (anything) => console.log(anything);

let xxx = () => "ur mum";

clog(xxx);
clog(xxx());
