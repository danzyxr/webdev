function callback() {
  return "foo";
}

function higherOrder(fn) {
  console.log(fn() + "bar");
}

higherOrder(callback);

function sqr(n) {
  return n * n;
}

function power(n, exp) {
  return n ** exp;
}

console.log([2, 4, 6].map((i) => sqr(i)));
console.log([2, 4, 6].map((i) => i * i * i));
console.log([2, 4, 6].map((i) => power(i, 0.5)));
