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

// Functions that create new functions

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

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, (n) => {
  unless(n % 2 === 1, () => {
    console.log(n, "is even");
  });
});

["a", "b"].forEach((l) => console.log(l));

// Implement .filter()

function filter(arr, test) {
  let passed = [];
  for (let ele of arr) {
    if (test(ele)) {
      passed.push(ele);
    }
  }
  return passed;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (n) => n % 2 === 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8].filter((n) => n % 2 === 0));

// Implement .map()

function map(arr, transform) {
  let mapped = [];
  for (let ele of arr) {
    mapped.push(transform(ele));
  }
  return mapped;
}

console.log(map([3, 6, 9], (n) => n ** 2));
console.log([3, 6, 9].map((n) => n ** 2));

// Implement .reduce(), sometimes called "fold"

function reduce(arr, combine, start) {
  let current = start;
  for (let ele of arr) {
    current = combine(current, ele);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4, 5, 6], (a, b) => a + b, 0));
console.log([1, 2, 3, 4, 5, 6].reduce((a, b) => a + b, 0));

multiArr = [
  ["a", "b"],
  ["c", "d"]
];

function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b));
}

console.log(flatten(multiArr));

function myOwnLoop(value, testFn, updateFn, bodyFn) {
  while (testFn(value)) {
    bodyFn(value);
    value = updateFn(value);
  }
}

myOwnLoop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

// Implement .every()

function every(arr, test) {
  for (ele of arr) {
    if (test(ele)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));

// Implement .every() using .some()

function everySome(arr, test) {
  return !arr.some((ele) => !test(ele));
}

console.log(everySome([1, 3, 5], (n) => n < 10));
console.log(everySome([2, 4, 16], (n) => n < 10));
console.log(everySome([], (n) => n < 10));
