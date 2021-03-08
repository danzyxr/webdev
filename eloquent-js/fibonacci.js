// Fibonacci sequence generator

/*
let a, b, sum;

a = 0;
b = 1;

while (a < 255) {
  sum = a + b;
  a = b;
  b = sum;
}
*/

const fib = function (n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// n - 1 is the left branch
// n - 2 is the right branch

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
